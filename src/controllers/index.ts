/**
 * Controller
 * 
 * @since 1.0.0
 * @version 1.0.0
 */

import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
// import finnhub from 'finnhub';
dotenv.config();
const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.API_KEY;

const finnhubClient = new finnhub.DefaultApi()

class TokenController {
    /**
     * Get token data
     * 
     * @param req Request
     * @param res Response
     */
    public async getTokens(req: Request, res: Response) {
        const name: string = req.params.name;

        finnhubClient.quote(name, (error: any, data: any) => {
            if (error) {
                return res.status(400).json({ msg: error })
            }

            res.status(200).json(data);
        });
    }
}

export default TokenController;