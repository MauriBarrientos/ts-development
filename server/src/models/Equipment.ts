import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/DBconfig";

export class Equipment extends Model {
    declare id: number;
    declare name: string;
    declare type: string;
    declare stock: number;
    declare status: string;
    declare equip_info_id: number;
    declare buy_date: Date;
    declare user_id: number;
    declare supplier_id: number;
}

Equipment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    equip_info_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    buy_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'equipment',
    timestamps: false,
});
