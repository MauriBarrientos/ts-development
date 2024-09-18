import { Request, Response } from "express";
import ClientServices from "../services/ClientServices";

class ClientController {
  constructor() {}

  // Obtener todos los clientes
  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const clients = await ClientServices.findAll();
      return res.status(200).json(clients);
    } catch (error) {
      return res.status(500).json({ message: "Error al obtener los clientes", error: (error as Error).message });
    }
  }

  // Crear un nuevo cliente
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const client = await ClientServices.create(req.body);
      return res.status(201).json({ message: "Cliente creado con éxito", client });
    } catch (error) {
      return res.status(500).json({ message: "Error al crear el cliente", error: (error as Error).message });
    }
  }

  // Obtener un cliente por ID
  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const client = await ClientServices.findById(parseInt(req.params.id));
      if (!client) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      return res.status(200).json(client);
    } catch (error) {
      return res.status(500).json({ message: "Error al obtener el cliente", error: (error as Error).message });
    }
  }

  // Actualizar un cliente
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const [rowsUpdated, [updatedClient]] = await ClientServices.update(parseInt(req.params.id), req.body);
      if (rowsUpdated === 0) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      return res.status(200).json({ message: "Cliente actualizado con éxito", updatedClient });
    } catch (error) {
      return res.status(500).json({ message: "Error al actualizar el cliente", error: (error as Error).message });
    }
  }

  // Eliminar un cliente
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const rowsDeleted = await ClientServices.delete(parseInt(req.params.id));
      if (rowsDeleted === 0) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      return res.status(200).json({ message: "Cliente eliminado con éxito" });
    } catch (error) {
      return res.status(500).json({ message: "Error al eliminar el cliente", error: (error as Error).message });
    }
  }
}

export default new ClientController();

