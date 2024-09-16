import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/DBconfig";

export class Client extends Model {
    declare client_id: number;
    declare client_name: string;
    declare client_email: string;
    declare client_address: string;
}

Client.init({
    client_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    client_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    client_email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    client_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'client',
    timestamps: false,
});
