import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
    id: number;
    role: string;
}

declare module "express-serve-static-core" {
    interface Request {
        user?: TokenPayload;
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split(" ")[1]; // "Bearer <token>"
    if (!token) {
        return res.status(401).json({ message: "Acceso denegado. Token no proporcionado" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY || "secretKey") as TokenPayload;
        req.user = decoded; // Agrega la información del token al objeto `req`
        next();
    } catch (error) {
        return res.status(400).json({ message: "Token inválido" });
    }
};

export const verifyRole = (role: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole = req.user?.role;
        console.log(`Rol del usuario: ${userRole}, Rol requerido: ${role}`); // <-- Agregar este log
        if (userRole !== role) {
            return res.status(403).json({ message: "Acceso denegado. No tienes el rol adecuado" });
        }
        next();
    };
};