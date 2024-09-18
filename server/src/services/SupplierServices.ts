// services/SupplierService.ts
import { Supplier } from '../models/Supplier';

class SupplierService {
    constructor() {}

    // Obtener todos los proveedores
    async getAllSuppliers() {
        return await Supplier.findAll();
    }

    // Obtener un proveedor por ID
    async getSupplierById(id: number) {
        return await Supplier.findByPk(id);
    }

    // Crear un nuevo proveedor
    async createSupplier(supplierData: { supplier_name: string; supplier_address: string; supplier_email: string }) {
        return await Supplier.create(supplierData);
    }

    // Actualizar un proveedor existente
    async updateSupplier(id: number, supplierData: { supplier_name?: string; supplier_address?: string; supplier_email?: string }) {
        const [updatedRows] = await Supplier.update(supplierData, { where: { id } });
        if (updatedRows === 0) {
            throw new Error("Proveedor no encontrado");
        }
        return this.getSupplierById(id);  
    }

    // Eliminar un proveedor
    async deleteSupplier(id: number) {
        const deletedRows = await Supplier.destroy({ where: { id } });
        if (deletedRows === 0) {
            throw new Error("Proveedor no encontrado");
        }
        return deletedRows;
    }
}

export default new SupplierService();

