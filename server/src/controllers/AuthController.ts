import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'; 
import { Request, Response } from "express";
import UserServices from '../services/UserServices'; 

class AuthController {
    static async login(req: Request, res: Response): Promise<Response> {
        try {
            const { username, password } = req.body;

            // Buscar usuario por correo electrónico
            const user = await UserServices.findByUsername(username); // Busca al usuario en la base de datos
            if (!user) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }

            // Verificar la contraseña
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Contraseña incorrecta" });
            }

            // Generar token JWT
            const token = jwt.sign(
                { id: user.id, role: user.role },
                process.env.SECRET_KEY as string,
                { expiresIn: "1h" }
            );

            return res.status(200).json({ message: "Inicio de sesión exitoso", token });
        } catch (error) {
            console.error("Error en el inicio de sesión:", error);
            return res.status(500).json({ message: "Error en el servidor", error: (error as Error).message });
        }
    }
}

export default AuthController;
