import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {config} from './config/config';



class Server {
    app: express.Application;
    port: number | string;

    constructor(){
        this.app= express();
        this.port = config.PORT || 3000;
    };
    middlewares(): void{
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    };
    async listen(): Promise<void> {
        try {
            this.app.listen(this.port, () => {
                console.log(`Server on http://127.0.0.1:${this.port}`);
            });
        } catch (err: any) {
            console.error('Failed to connect to the database', err);
        }
    }
};

export default Server;