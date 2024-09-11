import dotenv from 'dotenv';
dotenv.config();
// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

import { envConfig } from '../interfaces/envConfig';


export const config: envConfig<string | undefined> = {
    PORT: process.env.PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
};
