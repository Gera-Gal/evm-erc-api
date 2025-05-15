import { Request, Response } from 'express';
import { erc20ABI } from '../models/erc20';
import { erc721ABI } from '../models/erc721';
import { erc1155ABI } from '../models/erc1155';
const { Web3 } = require('web3');

export class TransactionController {
    rpcURL: any
    web3: any
    contract: any

    constructor( rpcURL: any ) {
        this.rpcURL = rpcURL;
        this.web3 = new Web3(rpcURL);
    }

    loadFromContract = async (req: Request, res: Response) => {
        const { userAddress, contractAddress, transactionModel } =  req.params;
        let transactionABI: any = '';
        switch(transactionModel) {
            case 'erc20':
                transactionABI = erc20ABI.abi
                break;
            case 'erc721':
                transactionABI = erc721ABI.abi
                break;
            case 'erc1155':
                transactionABI = erc1155ABI.abi
                break;
            default:
                console.log("Valor no reconocido");
        }
        this.contract = new this.web3.eth.Contract(transactionABI, contractAddress);
        const current_block: number = Number(await this.web3.eth.getBlockNumber());
        const indices: number[][] = [];
        let transaction_chunks = Math.ceil(current_block/1000);
        let transactions_per_chunk = Math.ceil(current_block/transaction_chunks);
        let transactions: any = [];
        for(let i=transaction_chunks; i>=0; i--) {
            indices.push([(i*transactions_per_chunk) + 1, ((i+1)*transactions_per_chunk)])
        }
        indices[0][1] = indices[0][1] - 1;
        (indices);
        for (const index of indices) {
            const options: any = {
                fromBlock: index[0],
                toBlock: index[1],
                address: userAddress
            }
            let events = await this.contract.getPastEvents('allEvents', options);
            events.forEach((event: any) => {
                transactions.push({
                    'details': event.returnValues,
                    'transactionType': event.event,
                    'blockId': event.blockNumber,
                    'txHash': event.blockHash
                })
                /*
                if(event.returnValues.amount != undefined &&
                    event.returnValues.amount > 0) {
                    transactions.push({
                        'amount': event.returnValues.amount,
                        'transactionType': event.event,
                        'blockId': event.blockNumber,
                        'txHash': event.blockHash
                    })
                }
                */
            })
        }
        res.json(this.serializeBigInt(transactions));
    }

    loadFromBlockNumber = async (req: Request, res: Response) => {
        const { userAddress, contractAddress, transactionModel, blockNumber } =  req.params;
        let transactionABI: any = '';
        switch(transactionModel) {
            case 'erc20':
                transactionABI = erc20ABI.abi
                break;
            case 'erc721':
                transactionABI = erc721ABI.abi
                break;
            case 'erc1155':
                transactionABI = erc1155ABI.abi
                break;
            default:
                console.log("Valor no reconocido");
        }
        this.contract = new this.web3.eth.Contract(transactionABI, contractAddress);
        
        const options: any = {
            fromBlock: Number(blockNumber) - 1,
            toBlock: Number(blockNumber) + 1,
            address: userAddress
        }
        let events = await this.contract.getPastEvents('allEvents', options);
        let transactions: any;
        events.forEach((event: any) => {
            if(event.returnValues.amount != undefined &&
                event.returnValues.amount > 0) {
                transactions.push({
                    'amount': event.returnValues.amount,
                    'transactionType': event.event,
                    'blockId': event.blockNumber,
                    'txHash': event.blockHash
                })
            }
        })
        res.json(this.serializeBigInt(events));
    }

    serializeBigInt = (obj: any): any => {
        if (typeof obj === 'bigint') {
          return Number(obj); // Convierte BigInt a Number
        } else if (obj instanceof Object) {
          if (Array.isArray(obj)) {
            return obj.map(this.serializeBigInt); // Procesa arrays
          } else {
            const result: Record<string, any> = {};
            for (const key in obj) {
              result[key] = this.serializeBigInt(obj[key]); // Procesa objetos recursivamente
            }
            return result;
          }
        }
        return obj; // Devuelve otros valores sin cambios
    }
}