import { Router } from 'express';
import { GreenMultiController } from '../controllers/green-multi.controller'; 

export const createGreenMultiRouter = ( greenMultiModel: any, rpcURL: any, contractAddress: any ) => {
    const greenMultiRouter = Router();
    const greenMultiController = new GreenMultiController(greenMultiModel, rpcURL, contractAddress);

    greenMultiRouter.get('/uri/:tokenId', greenMultiController.uri);
    greenMultiRouter.get('/getMetadata/:tokenId', greenMultiController.getMetadata);
    greenMultiRouter.get('/balanceOf/:userAddress/:tokenId', greenMultiController.balanceOf);
    greenMultiRouter.get('/balanceOfBatch', greenMultiController.balanceOfBatch);
    greenMultiRouter.get('/getTotalMintedTitles', greenMultiController.getTotalMintedTitles);
    greenMultiRouter.get('/hasRole/:role/:account', greenMultiController.hasRole);
    greenMultiRouter.post('/grantRole', greenMultiController.grantRole);
    greenMultiRouter.post('/mintTitle', greenMultiController.mintTitle);
    greenMultiRouter.post('/mintUserReturns', greenMultiController.mintUserReturns);
    greenMultiRouter.post('/mintBatch', greenMultiController.mintBatch);

    return greenMultiRouter;
}