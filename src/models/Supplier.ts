import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/DBconfig";

export class Supplier extends Model {
    declare id: number;
    declare supplier_name: string;
    declare supplier_address: string;
    declare supplier_email: string;
};

Supplier.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    supplier_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    supplier_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    supplier_email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'supplier',
    timestamps: false,
});
