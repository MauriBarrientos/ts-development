// controllers/SupplierController.ts
import { Request, Response } from "express";
import SupplierService from "../services/SupplierServices";

class SupplierController {
    // Obtener todos los proveedores
    async getAll(req: Request, res: Response) {
        try {
            const suppliers = await SupplierService.getAllSuppliers();
            return res.status(200).json(suppliers);
        } catch (error) {
            return res.status(500).json({ message: "Error al obtener proveedores", error: (error as Error).message });
        }
    }

    // Obtener un proveedor por ID
    async getById(req: Request, res: Response) {
        try {
            const supplier = await SupplierService.getSupplierById(parseInt(req.params.id));
            if (!supplier) {
                return res.status(404).json({ message: "Proveedor no encontrado" });
            }
            return res.status(200).json(supplier);
        } catch (error) {
            return res.status(500).json({ message: "Error al obtener el proveedor", error: (error as Error).message });
        }
    }

    // Crear un nuevo proveedor
    async create(req: Request, res: Response) {
        try {
            const newSupplier = await SupplierService.createSupplier(req.body);
            return res.status(201).json({ message: "Proveedor creado con éxito", newSupplier });
        } catch (error) {
            return res.status(500).json({ message: "Error al crear el proveedor", error: (error as Error).message });
        }
    }

    // Actualizar un proveedor
    async update(req: Request, res: Response) {
        try {
            const updatedSupplier = await SupplierService.updateSupplier(parseInt(req.params.id), req.body);
            return res.status(200).json({ message: "Proveedor actualizado con éxito", updatedSupplier });
        } catch (error) {
            return res.status(500).json({ message: "Error al actualizar el proveedor", error: (error as Error).message });
        }
    }

    // Eliminar un proveedor
    async delete(req: Request, res: Response) {
        try {
            const deletedRows = await SupplierService.deleteSupplier(parseInt(req.params.id));
            return res.status(200).json({ message: "Proveedor eliminado con éxito", deletedRows });
        } catch (error) {
            return res.status(500).json({ message: "Error al eliminar el proveedor", error: (error as Error).message });
        }
    }
}

export default new SupplierController();
