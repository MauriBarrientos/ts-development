// services/EquipmentService.ts
import { Equipment } from '../models/Equipment';

class EquipmentService {
    constructor() {}

    // Obtener todos los equipos
    async getAllEquipments() {
        return await Equipment.findAll();
    }

    // Obtener un equipo por ID
    async getEquipmentById(id: number) {
        return await Equipment.findByPk(id);
    }

    // Crear un nuevo equipo
    async createEquipment(equipmentData: {
        name: string;
        type: string;
        stock: number;
        status: string;
        equip_info_id: number;
        buy_date: Date;
        users_id: number;
        supplier_id: number;
    }) {
        return await Equipment.create(equipmentData);
    }

    // Actualizar un equipo existente
    async updateEquipment(id: number, equipmentData: {
        name?: string;
        type?: string;
        stock?: number;
        status?: string;
        equip_info_id?: number;
        buy_date?: Date;
        users_id?: number;
        supplier_id?: number;
    }) {
        const [updatedRows] = await Equipment.update(equipmentData, { where: { id } });
        if (updatedRows === 0) {
            throw new Error("Equipo no encontrado");
        }
        return this.getEquipmentById(id);  // Devolver el equipo actualizado
    }

    // Eliminar un equipo
    async deleteEquipment(id: number) {
        const deletedRows = await Equipment.destroy({ where: { id } });
        if (deletedRows === 0) {
            throw new Error("Equipo no encontrado");
        }
        return deletedRows;
    }
}

export default new EquipmentService();
