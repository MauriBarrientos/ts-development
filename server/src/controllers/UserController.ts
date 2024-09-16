import { Request, Response } from "express";
import UserServices from "../services/UserServices"; // Importar servicios

class UserController {
    constructor() {}

    // Obtener todos los usuarios
    async findAll(_req: Request, res: Response): Promise<Response> {
        try {
            const users = await UserServices.findAll();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ message: "Error al obtener usuarios", error });
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.body;
            const newUser = await UserServices.create(user);
            return res.status(201).json(newUser);
        } catch (error) {
            console.error("Error al crear usuario:", error); // Añadir log para depuración
            return res.status(500).json({ message: "Error al crear usuario", error: (error as Error).message });
        }
    }
    

    // Actualizar un usuario por ID
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id, 10);
            const user = req.body;
            await UserServices.update(id, user);
            return res.status(200).json({ message: "Usuario actualizado con éxito" });
        } catch (error) {
            return res.status(500).json({ message: "Error al actualizar usuario", error });
        }
    }

    // Eliminar un usuario por ID
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id, 10);
            await UserServices.delete(id);
            return res.status(200).json({ message: "Usuario eliminado con éxito" });
        } catch (error) {
            return res.status(500).json({ message: "Error al eliminar usuario", error });
        }
    }

    // Buscar un usuario por ID
    async findById(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id, 10);
            const user = await UserServices.findById(id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: "Error al buscar usuario", error });
        }
    }
    
}

export default new UserController();
