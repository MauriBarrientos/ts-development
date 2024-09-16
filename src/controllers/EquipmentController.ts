// controllers/EquipmentController.ts
import { Request, Response } from "express";
import EquipmentService from "../services/EquipmentServices";

class EquipmentController {
    // Obtener todos los equipos
    async getAll(req: Request, res: Response) {
        try {
            const equipments = await EquipmentService.getAllEquipments();
            return res.status(200).json(equipments);
        } catch (error) {
            return res.status(500).json({ message: "Error al obtener equipos", error: (error as Error).message });
        }
    }

    // Obtener un equipo por ID
    async getById(req: Request, res: Response) {
        try {
            const equipment = await EquipmentService.getEquipmentById(parseInt(req.params.id));
            if (!equipment) {
                return res.status(404).json({ message: "Equipo no encontrado" });
            }
            return res.status(200).json(equipment);
        } catch (error) {
            return res.status(500).json({ message: "Error al obtener el equipo", error: (error as Error).message });
        }
    }

    // Crear un nuevo equipo
    async create(req: Request, res: Response) {
        try {
            const newEquipment = await EquipmentService.createEquipment(req.body);
            return res.status(201).json({ message: "Equipo creado con éxito", newEquipment });
        } catch (error) {
            return res.status(500).json({ message: "Error al crear el equipo", error: (error as Error).message });
        }
    }

    // Actualizar un equipo
    async update(req: Request, res: Response) {
        try {
            const updatedEquipment = await EquipmentService.updateEquipment(parseInt(req.params.id), req.body);
            return res.status(200).json({ message: "Equipo actualizado con éxito", updatedEquipment });
        } catch (error) {
            return res.status(500).json({ message: "Error al actualizar el equipo", error: (error as Error).message });
        }
    }

    // Eliminar un equipo
    async delete(req: Request, res: Response) {
        try {
            const deletedRows = await EquipmentService.deleteEquipment(parseInt(req.params.id));
            return res.status(200).json({ message: "Equipo eliminado con éxito", deletedRows });
        } catch (error) {
            return res.status(500).json({ message: "Error al eliminar el equipo", error: (error as Error).message });
        }
    }
}

export default new EquipmentController();

