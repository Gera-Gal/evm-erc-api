import { Router } from 'express';
import { ERC20Controller } from '../controllers/erc20.controller';

export const createERC20Router = ( erc20Model: any, rpcURL: any, contractAddress: any ) => {
    const erc20Router = Router();
    const erc20Controller = new ERC20Controller(erc20Model, rpcURL, contractAddress);

    erc20Router.get('/totalSupply', erc20Controller.totalSupply);
    erc20Router.get('/balanceOf/:userAddress', erc20Controller.balanceOf);
    erc20Router.get('/allowance/:owner/:spender', erc20Controller.allowance);
    erc20Router.post('/transfer', erc20Controller.transfer);
    erc20Router.post('/transferFrom', erc20Controller.transferFrom);
    erc20Router.post('/approve', erc20Controller.approve);
    erc20Router.post('/mint', erc20Controller.mint);

    return erc20Router;
}