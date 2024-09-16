// services/ClientServices.ts
import { Client } from '../models/Client';

class ClientServices {
  constructor() {}

  // Obtener todos los clientes
  async findAll(): Promise<Client[]> {
    return await Client.findAll();
  }

  // Crear un nuevo cliente
  async create(clientData: Partial<Client>): Promise<Client> {
    return await Client.create(clientData);
  }

  // Buscar un cliente por ID
  async findById(id: number): Promise<Client | null> {
    return await Client.findByPk(id);
  }

  // Actualizar un cliente
  async update(id: number, clientData: Partial<Client>): Promise<[number, Client[]]> {
    return await Client.update(clientData, { where: { id }, returning: true });
  }

  // Eliminar un cliente
  async delete(id: number): Promise<number> {
    return await Client.destroy({ where: { id } });
  }
}

export default new ClientServices();
