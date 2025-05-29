import { Request, Response } from 'express';
import axios from 'axios';

const { Web3 } = require('web3');
const CID = require('cids');

export class GreenMultiController {
    greenMultiModel: any
    rpcURL: any
    contractAddress: any
    web3: any
    contract: any
    account: any

    constructor(greenMultiModel: any, rpcURL: any, contractAddress: any) {
        this.greenMultiModel = greenMultiModel;
        this.rpcURL = rpcURL;
        this.contractAddress = contractAddress;
        this.web3 = new Web3(rpcURL);
        this.contract = new this.web3.eth.Contract(greenMultiModel.abi, contractAddress);
        console.log('✔️  ERC1155', contractAddress);
    }

    uri = async (req: Request, res: Response) => {
        const { tokenId } =  req.params;
        let result = await this.contract.methods.uri(tokenId).call();
        result = result.replace('{id}', tokenId)
        res.json(result);
    }

    getMetadata = async (req: Request, res: Response) => {
        const { tokenId } =  req.params;
        let result = await this.contract.methods.uri(tokenId).call();
        result = result.replace('{id}', tokenId)
        const headers = {
            'Content-Type': 'application/json'
        };
        const metadataResponse = await axios.get(result, { headers });
        res.json(metadataResponse.data);
    }

    balanceOf = async (req: Request, res: Response) => {
        const { userAddress, tokenId } =  req.params;
        let result = await this.contract.methods.balanceOf(userAddress, tokenId).call();
        res.json(Number(result));
    }

    balanceOfBatch = async (req: Request, res: Response) => {
        console.log(req.body.accounts, req.body.ids)
        let balances = await this.contract.methods.balanceOfBatch(req.body.accounts, req.body.ids).call();
        console.log(balances)
        res.json(balances.map((b: any) => Number(b)));
    }
    
    mintTitle = async (req: Request, res: Response) => {
        try {
            const { to, ipfsHash } = req.body;
            const dataHex = this.toBytesFromIpfsHash(ipfsHash); 
            const tx = this.contract.methods.mintTitle(to, dataHex);
            await this.sendTx(req, res, tx);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    };

    mintUserReturns = async (req: Request, res: Response) => {
        try {
            const { to, amount, ipfsHash } = req.body;
            console.log(to, amount, ipfsHash)
            const dataHex = this.toBytesFromIpfsHash(ipfsHash); 
            const tx = this.contract.methods.mintUserReturns(to, amount, dataHex);
            await this.sendTx(req, res, tx);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    };

    mintBatch = async (req: Request, res: Response) => {
        try {
            const { to, ids, amounts, ipfsHash } = req.body;
            const dataHex = this.toBytesFromIpfsHash(ipfsHash); 
            const tx = this.contract.methods.mintBatch(to, ids, amounts, dataHex);
            await this.sendTx(req, res, tx);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    };

    grantRole = async (req: Request, res: Response) => {
        try {
            const { role, to } = req.body;
            const roleHash = this.web3.utils.keccak256(role);
            await this.sendTx(req, res, this.contract.methods.grantRole(roleHash, to));
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    };

    hasRole = async (req: Request, res: Response) => {
        try {
            const { role, account } = req.params;
            let roleHash = ''
            console.log(typeof role)
            if(role !== 'DEFAULT_ADMIN_ROLE') {
                roleHash = this.web3.utils.keccak256(role);
            } else {
                roleHash = '0x0000000000000000000000000000000000000000000000000000000000000000'
            }
            const result = await this.contract.methods.hasRole(roleHash, account).call();
            res.json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    };

    getTotalMintedTitles = async (_req: Request, res: Response) => {
        try {
            const count = await this.contract.methods.totalPropertyTitlesMinted().call();
            res.json({ totalPropertyTitlesMinted: this.serializeBigInt(count) });
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    };

    private async sendTx(req: Request, res: Response, tx: any) {
        const { privateKey } = req.body;
        if (!privateKey) return res.status(400).json({ error: 'Falta privateKey en la petición' });

        this.account = this.web3.eth.accounts.privateKeyToAccount(privateKey);
        this.web3.eth.accounts.wallet.add(this.account);

        const gasPrice = await this.web3.eth.getGasPrice();
        const gas = 500000;
        const data = tx.encodeABI();

        const txData = {
            from: this.account.address,
            to: this.contractAddress,
            data,
            gas,
            gasPrice
        };

        const signedTx = await this.web3.eth.accounts.signTransaction(txData, privateKey);
        const receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction!);
        res.json(this.serializeBigInt(receipt));
    }

    private toBytesFromIpfsHash(ipfsHash: string) {
        const cid = new CID(ipfsHash); // acepta CIDv0 (empieza con Qm) y CIDv1 (empieza con baf)
        const multihashBytes = cid.multihash;
        return '0x' + Buffer.from(multihashBytes).toString('hex'); // convierte a bytes
    };

    private serializeBigInt = (obj: any): any => {
        if (typeof obj === 'bigint') return Number(obj);
        if (obj instanceof Object) {
            return Array.isArray(obj)
                ? obj.map(this.serializeBigInt)
                : Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, this.serializeBigInt(v)]));
        }
        return obj;
    };
}
