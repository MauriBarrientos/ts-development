import express from 'express';
import morgan from 'morgan';
import "dotenv/config";
import cors from 'cors';
import { config } from './config/config';
import DBConnection from './db/DBconnection';
import userRoutes from "./routes/UserRoutes";
import clientRoutes from "./routes/ClientRoutes";
import supplierRoutes from "./routes/SupplierRoutes";
import equipmentRoutes from "./routes/EquipmentRoutes"
import authRoutes from "./routes/AuthRoutes";

class Server {
    app: express.Application;
    port: number | string;

    constructor(){
        this.app = express();
        this.port = config.PORT || 3000;
        this.middlewares();
        this.DBConnection();
        this.routes();
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

    routes(): void {
        this.app.use('/', userRoutes);
        this.app.use('/', clientRoutes);
        this.app.use('/', supplierRoutes);
        this.app.use('/', equipmentRoutes);
        this.app.use('/', authRoutes);
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server on http://127.0.0.1:${this.port}`);
        });
    }
}

export default Server;
