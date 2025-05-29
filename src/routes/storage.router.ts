import { Router } from 'express';
import { StorageController } from '../controllers/storage.controller'; 

export const createStorageRouter = ( storageModel: any, rpcURL: any, contractAddress: any ) => {
    const storageRouter = Router();
    const storageController = new StorageController(storageModel, rpcURL, contractAddress);

    storageRouter.get('/getNumber', storageController.getNumber);
    storageRouter.get('/getMessage', storageController.getMessage);
    storageRouter.get('/hasRole/:role/:account', storageController.hasRole);
    storageRouter.post('/setNumber', storageController.setNumber);
    storageRouter.post('/setMessage', storageController.setMessage);
    storageRouter.post('/grantRole', storageController.grantRole);
    storageRouter.post('/initializeV3', storageController.initializeV3);
    
    return storageRouter;
}