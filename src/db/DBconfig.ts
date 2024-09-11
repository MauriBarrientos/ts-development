import { Dialect, Sequelize } from "sequelize";
import { config } from "../config/config";


export const sequelize = new Sequelize(
    config.DB_NAME as string,
    config.DB_USER as string,
    config.DB_PASSWORD as string,
    {
        host: config.DB_HOST,
        port: config.DB_PORT ? Number(config.DB_PORT) : undefined,
        dialect: 'postgres' as Dialect
    },
);

