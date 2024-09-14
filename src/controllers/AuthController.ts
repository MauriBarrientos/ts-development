import { Request, Response } from "express";
import UserServices from "../services/UserServices"; // Importar servicios
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class AuthController {
    constructor() {}

    // Método para iniciar sesión
    async login(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;

            // Buscar usuario por correo electrónico
            const user = await UserServices.findByEmail(email);
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
            return res.status(500).json({ message: "Error en el servidor", error: (error as Error).message });
        }
    }

    // Método para registrar un nuevo usuario
    async register(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password, ...rest } = req.body;

            // Verificar si el correo ya existe
            const existingUser = await UserServices.findByEmail(email);
            if (existingUser) {
                return res.status(400).json({ message: "El correo ya está registrado" });
            }

            // Hash de la contraseña
            const hashedPassword = await bcrypt.hash(password, 10);

            // Crear el nuevo usuario
            const newUser = await UserServices.create({
                email,
                password: hashedPassword,
                ...rest
            });

            return res.status(201).json({ message: "Usuario registrado con éxito", newUser });
        } catch (error) {
            console.error("Error al registrar usuario:", error); // Añadir log para depuración
            return res.status(500).json({ message: "Error al registrar usuario", error: (error as Error).message });
        }
    }
}

export default new AuthController();
