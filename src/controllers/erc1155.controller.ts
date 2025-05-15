import { Request, Response } from 'express';
const { Web3 } = require('web3');
const { ethers } = require("ethers");

export class ERC1155Controller {
    erc1155Model: any
    rpcURL: any
    contractAddress: any
    web3: any
    contract: any
    account: any

    constructor( erc1155Model: any, rpcURL: any, contractAddress: any ) {
        this.erc1155Model = erc1155Model;
        this.rpcURL = rpcURL;
        this.contractAddress = contractAddress;
        this.web3 = new Web3(rpcURL);
        this.contract = new this.web3.eth.Contract(erc1155Model.abi, contractAddress);
        console.log('✔️  ERC1155', contractAddress);
    }

    balanceOf = async (req: Request, res: Response) => {
        const { userAddress, tokenId } =  req.params;
        let result = await this.contract.methods.balanceOf(userAddress, tokenId).call();
        res.json(Number(result));
    }

    balanceOfBatch = async (req: Request, res: Response) => {
        let balances = await this.contract.methods.balanceOfBatch(req.body.accounts, req.body.ids).call();
        console.log(balances)
        res.json(balances.map((b: any) => Number(b)));
    }

    uri = async (req: Request, res: Response) => {
        const { tokenId } =  req.params;
        console.log(tokenId)
        let result = await this.contract.methods.uri(tokenId).call();
        console.log(result)
        res.json(result);
    }

    safeTransferFrom = async (req: Request, res: Response) => {
        return await this.contract.methods.safeTransferFrom(
            req.body.from, req.body.to, req.body.tokenId, req.body.value, req.body.data
        ).send();
    }

    safeBatchTransferFrom = async (req: Request, res: Response) => {
        return await this.contract.methods.safeBatchTransferFrom(
            req.body.from, req.body.to, req.body.ids, req.body.values, req.body.data
        ).send();
    }
    
    mint = async (req: Request, res: Response) => {
        try {
            this.account = this.web3.eth.accounts.privateKeyToAccount(req.body.privateKey);
            this.web3.eth.accounts.wallet.add(this.account);
            const gasPrice = await this.web3.eth.getGasPrice();
            const tx = this.contract.methods.mint(
                req.body.to,
                req.body.tokenId,
                req.body.value,
                ethers.toUtf8Bytes(req.body.data)
            );
            const gas = 500000;

            const data = tx.encodeABI();
            const txData = {
              from: this.account.address,
              to: this.contract.options.address,
              data,
              gas,
              gasPrice
            };
            console.log(tx, txData)
            let signedTx = await this.web3.eth.accounts.signTransaction(txData, req.body.privateKey);
            let receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            res.json(this.serializeBigInt(receipt));
        } catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    mintBatch = async (req: Request, res: Response) => {
        return await this.contract.methods.mint(req.body.to, req.body.ids, req.body.values, req.body.data).send({from: req.body.from});
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