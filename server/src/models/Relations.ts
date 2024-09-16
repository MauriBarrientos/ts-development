import { User } from './User';
import { Equipment } from './Equipment';
import { Supplier } from './Supplier';
import { EquipInfo } from './EquipInfo';
import { BuyDetails } from './BuyDetails';
import { Client } from './Client';

export class ModelRelationships {
    static defineRelationships(): void {
        // Relacionar User con Equipment (1 a N)
        User.hasMany(Equipment, { foreignKey: 'user_id' }); // Cambiado a 'user_id'
        Equipment.belongsTo(User, { foreignKey: 'user_id' }); // Cambiado a 'user_id'

        // Relacionar Equipment con Supplier (1 a N)
        Supplier.hasMany(Equipment, { foreignKey: 'supplier_id' }); // Cambiado a 'supplier_id'
        Equipment.belongsTo(Supplier, { foreignKey: 'supplier_id' }); // Cambiado a 'supplier_id'

        // Relacionar Equipment con EquipInfo (1 a 1)
        Equipment.hasOne(EquipInfo, { foreignKey: 'equip_info_id' }); // Cambiado a 'equip_info_id'
        EquipInfo.belongsTo(Equipment, { foreignKey: 'equip_info_id' }); // Cambiado a 'equip_info_id'

        // Relacionar BuyDetails con Equipment (1 a N)
        Equipment.hasMany(BuyDetails, { foreignKey: 'equipment_id' }); // Cambiado a 'equipment_id'
        BuyDetails.belongsTo(Equipment, { foreignKey: 'equipment_id' }); // Cambiado a 'equipment_id'

        // Relacionar BuyDetails con Client (1 a 1)
        Client.hasOne(BuyDetails, { foreignKey: 'client_id' }); // Cambiado a 'client_id'
        BuyDetails.belongsTo(Client, { foreignKey: 'client_id' }); // Cambiado a 'client_id'
    }
}
