import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/DBconfig";


//Tipar los campos del modelo
export class User extends Model {
    declare id: number;
    declare username: string;
    declare email: string;
    declare password: string;
    declare role: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'user',
    timestamps: false,
});
