import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/DBconfig";

export class BuyDetails extends Model {
    declare id: number;
    declare equipment_id: number;
    declare client_id: number;
    declare total_amount: number;
}

BuyDetails.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    equipment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'buy_details',
    timestamps: false,
});
