import { User } from './User';
import { Equipment } from './Equipment';
import { Supplier } from './Supplier';
import { EquipInfo } from './EquipInfo';
import { BuyDetails } from './BuyDetails';
import { Client } from './Client';

export class ModelRelationships {
    static defineRelationships(): void {
        // Relacionar User con Equipment (1 a N)
        User.hasMany(Equipment, { foreignKey: 'userId' });
        Equipment.belongsTo(User, { foreignKey: 'userId' });

        // Relacionar Equipment con Supplier (1 a N)
        Supplier.hasMany(Equipment, { foreignKey: 'supplierId' });
        Equipment.belongsTo(Supplier, { foreignKey: 'supplierId' });

        // Relacionar Equipment con EquipInfo (1 a 1)
        Equipment.hasOne(EquipInfo, { foreignKey: 'equipInfoId' });
        EquipInfo.belongsTo(Equipment, { foreignKey: 'equipInfoId' });

        // Relacionar BuyDetails con Equipment (1 a N)
        Equipment.hasMany(BuyDetails, { foreignKey: 'buyDetailsId' });
        BuyDetails.belongsTo(Equipment, { foreignKey: 'buyDetailsId' });

        // Relacionar BuyDetails con Client (1 a 1)
        Client.hasOne(BuyDetails, { foreignKey: 'clientId' });
        BuyDetails.belongsTo(Client, { foreignKey: 'clientId' });
    }
}
