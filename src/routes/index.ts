/**
 * Route mananger
 * 
 * @since 1.0.0
 * @version 1.0.0
 */

import TokenController from '../controllers';

import { Router, Request, Response } from 'express';

const token = new TokenController();
const routes = Router();

routes.get('/tokens/:name', token.getTokens);

export default routes;