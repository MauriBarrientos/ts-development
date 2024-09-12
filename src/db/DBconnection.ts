import { sequelize } from "./DBconfig";
import { Sequelize } from "sequelize";
import { ModelRelationships } from "../models/Relations";

class DBConnection {
    private sequelize: Sequelize;

    constructor() {
        this.sequelize = sequelize;
    }

    async connect() {
        try {
            // Definir las relaciones antes de sincronizar
            ModelRelationships.defineRelationships();

            // Sincronizar los modelos con la base de datos
            await this.sequelize.sync({ force: false });
            console.log('Felicidades, conectaste con PostgreSQL y las tablas se han sincronizado');
        } catch (err) {
            console.error('Error al conectar con PostgreSQL :(', err);
        }
    }
}

export default DBConnection;
