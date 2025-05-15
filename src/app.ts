import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import { createTransactionRouter } from './routes/transaction.router';
import { erc20ABI } from './models/erc20';
import { createERC20Router } from './routes/erc20.router';
import { createERC721Router } from './routes/erc721.router';
import { erc721ABI } from './models/erc721';
import { createERC1155Router } from './routes/erc1155.router';
import { erc1155ABI } from './models/erc1155';

dotenv.config();

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes() {
        let BLOCKCHAIN_RPC_URL = process.env.BLOCKCHAIN_RPC_URL;
        let ERC20_ADDRESS = process.env.ERC20_ADDRESS;
        let ERC721_ADDRESS = process.env.ERC721_ADDRESS;
        let ERC1155_ADDRESS = process.env.ERC1155_ADDRESS;
        console.log('RPC URL: ', BLOCKCHAIN_RPC_URL);

        this.app.use('/erc20', createERC20Router(erc20ABI, BLOCKCHAIN_RPC_URL, ERC20_ADDRESS));
        this.app.use('/erc721', createERC721Router(erc721ABI, BLOCKCHAIN_RPC_URL, ERC721_ADDRESS));
        this.app.use('/erc1155', createERC1155Router(erc1155ABI, BLOCKCHAIN_RPC_URL, ERC1155_ADDRESS));
        this.app.use('/transaction', createTransactionRouter(BLOCKCHAIN_RPC_URL));

        // Manejador de errores
        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            console.error(err.stack);
            res.status(500).json({ error: 'Error inesperado' });
        });
  
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'))
        })
    }
}

const server = new Server();
server.start();