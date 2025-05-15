import { Request, Response } from 'express';
import axios from 'axios';
const { Web3 } = require('web3');

export class ERC721Controller {
    erc721Model: any
    rpcURL: any
    contractAddress: any
    web3: any
    contract: any
    account: any

    constructor( erc721Model: any, rpcURL: any, contractAddress: any ) {
        this.erc721Model = erc721Model;
        this.rpcURL = rpcURL;
        this.contractAddress = contractAddress;
        this.web3 = new Web3(rpcURL);
        this.contract = new this.web3.eth.Contract(erc721Model.abi, contractAddress);
        console.log('✔️  ERC721', contractAddress);
    }

    balanceOf = async (req: Request, res: Response) => {
        const { userAddress } =  req.params;
        let result = await this.contract.methods.balanceOf(userAddress).call();
        res.json(Number(result));
    }

    tokenURI = async (req: Request, res: Response) => {
        const { tokenId } =  req.params;
        let result = await this.contract.methods.tokenURI(tokenId).call();
        res.json(result);
    }

    getMetadata = async (req: Request, res: Response) => {
        const { tokenId } =  req.params;
        let url = await this.contract.methods.tokenURI(tokenId).call();
        const response = await axios.get(url);        
        res.json(response.data);
    }

    ownerOf = async (req: Request, res: Response) => {
        const { tokenId } =  req.params;
        let result = await this.contract.methods.ownerOf(tokenId).call();
        res.json(result);
    }

    getApproved = async (req: Request, res: Response) => {
        const { tokenId } =  req.params;
        let result = await this.contract.methods.getApproved(tokenId).call();
        res.json(result);
    }

    safeTransferFrom = async (req: Request, res: Response) => {
        try {
            this.account = this.web3.eth.accounts.privateKeyToAccount(req.body.privateKey);
            this.web3.eth.accounts.wallet.add(this.account);
            const gasPrice = await this.web3.eth.getGasPrice();
            const tx = this.contract.methods.safeTransferFrom(req.body.from, req.body.to, req.body.tokenId);
            const gas = 500000;

            const data = tx.encodeABI();
            const txData = {
              from: this.account.address,
              to: this.contract.options.address,
              data,
              gas,
              gasPrice
            };
            let signedTx = await this.web3.eth.accounts.signTransaction(txData, req.body.privateKey);
            let receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            res.json(this.serializeBigInt(receipt));
        } catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    approve = async (req: Request, res: Response) => {
        try {
            this.account = this.web3.eth.accounts.privateKeyToAccount(req.body.privateKey);
            this.web3.eth.accounts.wallet.add(this.account);
            const gasPrice = await this.web3.eth.getGasPrice();
            const tx = this.contract.methods.approve(req.body.to, req.body.tokenId);
            const gas = 500000;

            const data = tx.encodeABI();
            const txData = {
              from: this.account.address,
              to: this.contract.options.address,
              data,
              gas,
              gasPrice
            };
            let signedTx = await this.web3.eth.accounts.signTransaction(txData, req.body.privateKey);
            let receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            res.json(this.serializeBigInt(receipt));
        } catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    safeMint = async (req: Request, res: Response) => {
        try {
            this.account = this.web3.eth.accounts.privateKeyToAccount(req.body.privateKey);
            this.web3.eth.accounts.wallet.add(this.account);
            const gasPrice = await this.web3.eth.getGasPrice();
            const tx = this.contract.methods.safeMint(req.body.to, req.body.tokenId, req.body.uri);
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