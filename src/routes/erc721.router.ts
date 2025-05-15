import { Router } from 'express';
import { ERC721Controller } from '../controllers/erc721.controller';

export const createERC721Router = ( erc721Model: any, rpcURL: any, contractAddress: any ) => {
    const erc721Router = Router();
    const erc721Controller = new ERC721Controller(erc721Model, rpcURL, contractAddress);

    erc721Router.get('/balanceOf/:userAddress', erc721Controller.balanceOf);
    erc721Router.get('/tokenURI/:tokenId', erc721Controller.tokenURI);
    erc721Router.get('/getMetadata/:tokenId', erc721Controller.getMetadata);
    erc721Router.get('/ownerOf/:tokenId', erc721Controller.ownerOf);
    erc721Router.get('/getApproved/:tokenId', erc721Controller.getApproved);
    erc721Router.post('/safeTransferFrom', erc721Controller.safeTransferFrom);
    erc721Router.post('/approve', erc721Controller.approve);
    erc721Router.post('/safeMint', erc721Controller.safeMint);

    return erc721Router;
}