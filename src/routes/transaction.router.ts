import { Router } from 'express';
import { TransactionController } from '../controllers/transaction.controller';

export const createTransactionRouter = ( rpcURL: any ) => {
    const transactionRouter = Router();
    const transactionController = new TransactionController(rpcURL);

    transactionRouter.get('/:userAddress/:contractAddress/:transactionModel', transactionController.loadFromContract);
    transactionRouter.get('/:userAddress/:contractAddress/:transactionModel/:blockNumber', transactionController.loadFromBlockNumber);

    return transactionRouter;
}