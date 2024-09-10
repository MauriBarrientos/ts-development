import { sequelize } from "./DBconfig";
import { Sequelize } from "sequelize";

class DBConnection {
    private sequelize: Sequelize;
    constructor(){
        this.sequelize = sequelize;
    };

    async connect(){
        await this.sequelize.sync()
        .then(()=> console.log('Felicidades conectaste con PostgreSQL'))
        .catch((err)=> console.error('Error al conectar con PostgreSQL :(', err));
    };
};

export default DBConnection;

