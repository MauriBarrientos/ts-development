import { User } from './User';
import { Equipment } from './Equipment';
import { Supplier } from './Supplier';
import { Client } from './Client';

export class ModelRelationships {
    static defineRelationships(): void {
        // Relacionar User con Equipment (1 a N)
        User.hasMany(Equipment, { foreignKey: 'user_id' });
        Equipment.belongsTo(User, { foreignKey: 'user_id' });

        // Relacionar Equipment con Supplier (1 a N)
        Supplier.hasMany(Equipment, { foreignKey: 'supplier_id' });
        Equipment.belongsTo(Supplier, { foreignKey: 'supplier_id' });

        // Nueva relación: Relacionar Equipment con Client (1 a N)
        Client.hasMany(Equipment, { foreignKey: 'client_id' });
        Equipment.belongsTo(Client, { foreignKey: 'client_id' });
    }
}
