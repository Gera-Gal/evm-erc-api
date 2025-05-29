import { Request, Response } from 'express';
import { Web3 } from 'web3';
import { AbiItem } from 'web3-utils';

export class StorageController {
    storageModel: any;
    rpcURL: any
    contractAddress: any
    web3: any
    contract: any
    account: any

    constructor( storageModel: any, rpcURL: any, contractAddress: any ) {
        this.storageModel = storageModel;
        this.rpcURL = rpcURL;
        this.contractAddress = contractAddress;
        this.web3 = new Web3(rpcURL);
        this.contract = new this.web3.eth.Contract(storageModel.abi, contractAddress);
        console.log('✔️  StorageContract', contractAddress);
    }

    getNumber = async (_req: Request, res: Response) => {
        try {
            const result = await this.contract.methods.getNumber().call();
            res.json(Number(result));
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    };

    setNumber = async (req: Request, res: Response) => {
        await this.sendTx(req, res, this.contract.methods.setNumber(req.body.number));
    };

    getMessage = async (_req: Request, res: Response) => {
        try {
            const result = await this.contract.methods.getMessage().call();
            res.json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    };

    setMessage = async (req: Request, res: Response) => {
        await this.sendTx(req, res, this.contract.methods.setMessage(req.body.message));
    };

    initializeV3 = async (req: Request, res: Response) => {
        await this.sendTx(req, res, this.contract.methods.initializeV3(req.body.admin));
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

    private sendTx = async (req: Request, res: Response, tx: any) => {
        try {
            this.account = this.web3.eth.accounts.privateKeyToAccount(req.body.privateKey);
            this.web3.eth.accounts.wallet.add(this.account);

            const gasPrice = await this.web3.eth.getGasPrice();
            const gas = 500000;
            const data = tx.encodeABI();

            const txData = {
                from: this.account.address,
                to: this.contract.options.address,
                data,
                gas,
                gasPrice
            };

            const signedTx = await this.web3.eth.accounts.signTransaction(txData, req.body.privateKey);
            const receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            res.json(this.serializeBigInt(receipt));
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
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
