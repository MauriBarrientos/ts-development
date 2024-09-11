import express from 'express';
import morgan from 'morgan';
import "dotenv/config";
import cors from 'cors';
import { config } from './config/config';
import DBConnection from './db/DBconnection';

class Server {
    app: express.Application;
    port: number | string;

    constructor(){
        this.app = express();
        this.port = config.PORT || 3000;
        this.DBConnection();
    }

    middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    }

    async DBConnection(): Promise<void> {
        const db = new DBConnection();
        await db.connect();
    }

    async listen(): Promise<void> {
        try {
            this.app.listen(this.port, () => {
                console.log(`Server on http://127.0.0.1:${this.port}`);
            });
        } catch (err: any) {
            console.error('Failed to start the server', err);
        }
    }
}

export default Server;
