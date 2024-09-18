import 'express';

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
                // Añade otros campos relevantes según sea necesario
            };
        }
    }
}