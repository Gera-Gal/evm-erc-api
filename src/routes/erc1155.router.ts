import { Router } from 'express';
import { ERC1155Controller } from '../controllers/erc1155.controller';

export const createERC1155Router = ( erc1155Model: any, rpcURL: any, contractAddress: any ) => {
    const erc1155Router = Router();
    const erc1155Controller = new ERC1155Controller(erc1155Model, rpcURL, contractAddress);

    erc1155Router.get('/balanceOf/:userAddress/:tokenId', erc1155Controller.balanceOf);
    erc1155Router.get('/uri/:tokenId', erc1155Controller.uri);
    erc1155Router.get('/balanceOfBatch', erc1155Controller.balanceOfBatch);
    erc1155Router.post('/safeTransferFrom', erc1155Controller.safeTransferFrom);
    erc1155Router.post('/safeBatchTransferFrom', erc1155Controller.safeBatchTransferFrom);
    erc1155Router.post('/mint', erc1155Controller.mint);
    erc1155Router.post('/mintBatch', erc1155Controller.mintBatch);    

    return erc1155Router;
}