import { User } from './User';
import { Equipment } from './Equipment';
import { Supplier } from './Supplier';
import { EquipInfo } from './EquipInfo';
import { BuyDetails } from './BuyDetails';
import { Client } from './Client';

export class ModelRelationships {
    static defineRelationships(): void {
        // Relacionar User con Equipment (1 a N)
        User.hasMany(Equipment, { foreignKey: 'user_Id' });
        Equipment.belongsTo(User, { foreignKey: 'user_Id' });

        // Relacionar Equipment con Supplier (1 a N)
        Supplier.hasMany(Equipment, { foreignKey: 'supplier_Id' });
        Equipment.belongsTo(Supplier, { foreignKey: 'supplier_Id' });

        // Relacionar Equipment con EquipInfo (1 a 1)
        Equipment.hasOne(EquipInfo, { foreignKey: 'equipInfo_Id' });
        EquipInfo.belongsTo(Equipment, { foreignKey: 'equipInfo_Id' });

        // Relacionar BuyDetails con Equipment (1 a N)
        Equipment.hasMany(BuyDetails, { foreignKey: 'buyDetails_Id' });
        BuyDetails.belongsTo(Equipment, { foreignKey: 'buyDetails_Id' });

        // Relacionar BuyDetails con Client (1 a 1)
        Client.hasOne(BuyDetails, { foreignKey: 'client_Id' });
        BuyDetails.belongsTo(Client, { foreignKey: 'client_Id' });
    }
}
