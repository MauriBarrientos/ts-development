import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/DBconfig";

export class EquipInfo extends Model {
    declare equip_info_id: number;
    declare brand: string;
    declare model: string;
    declare description: string;
}

EquipInfo.init({
    equip_info_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'equip_info',
    timestamps: false,
});
