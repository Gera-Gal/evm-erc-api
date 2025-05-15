import { Request, Response } from 'express';
const { Web3 } = require('web3');

export class ERC20Controller {
    erc20Model: any
    rpcURL: any
    contractAddress: any
    web3: any
    contract: any
    account: any

    constructor( erc20Model: any, rpcURL: any, contractAddress: any ) {
        this.erc20Model = erc20Model;
        this.rpcURL = rpcURL;
        this.contractAddress = contractAddress;
        this.web3 = new Web3(rpcURL);
        this.contract = new this.web3.eth.Contract(erc20Model.abi, contractAddress);
        console.log('✔️  ERC20: ', contractAddress);
    }

    totalSupply = async (req: Request, res: Response) => {
        const result = await this.contract.methods.totalSupply().call();
        res.json(Number(result));
    }

    balanceOf = async (req: Request, res: Response) => {
        const { userAddress } =  req.params;
        let result = await this.contract.methods.balanceOf(userAddress).call();
        res.json(Number(result));
    }

    allowance = async (req: Request, res: Response) => {
        const { owner, spender } =  req.params;
        console.log(owner, spender)
        let result = await this.contract.methods.allowance(owner, spender).call();
        res.json(Number(result));
    }

    transfer = async (req: Request, res: Response) => {
        try {
            this.account = this.web3.eth.accounts.privateKeyToAccount(req.body.privateKey);
            this.web3.eth.accounts.wallet.add(this.account);
            const gasPrice = await this.web3.eth.getGasPrice();
            const tx = this.contract.methods.transfer(req.body.to, req.body.value);
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

    transferFrom = async (req: Request, res: Response) => {
        try {
            this.account = this.web3.eth.accounts.privateKeyToAccount(req.body.privateKey);
            this.web3.eth.accounts.wallet.add(this.account);
            const gasPrice = await this.web3.eth.getGasPrice();
            const tx = this.contract.methods.transferFrom(req.body.from, req.body.to, req.body.value);
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
            /* Formato para decodificar errores */
            // Este formato sugiere un error personalizado. Si usas OpenZeppelin, podría ser:
            // "InsufficientAllowance(address spender, uint256 allowance, uint256 needed)"
            /*
            const decoded = this.web3.eth.abi.decodeParameters(
                ['address', 'uint256', 'uint256'],
                err
            );
            const allowance = await this.contract.methods.allowance(decoded[0], this.account.address).call();
            console.log({
                spender: decoded[0], // Dirección del spender
                currentAllowance: decoded[1], // Allowance actual
                requiredAllowance: decoded[2] // Allowance necesario
            });
            */
            console.log(err);
            res.status(500).json(err);
        }
    }

    approve = async (req: Request, res: Response) => {
        try {
            this.account = this.web3.eth.accounts.privateKeyToAccount(req.body.privateKey);
            this.web3.eth.accounts.wallet.add(this.account);
            const gasPrice = await this.web3.eth.getGasPrice();
            const tx = this.contract.methods.approve(req.body.spender, req.body.value);
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
    
    mint = async (req: Request, res: Response) => {
        try {
            this.account = this.web3.eth.accounts.privateKeyToAccount(req.body.privateKey);
            this.web3.eth.accounts.wallet.add(this.account);
            const gasPrice = await this.web3.eth.getGasPrice();
            const tx = this.contract.methods.mint(req.body.to, req.body.value);
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