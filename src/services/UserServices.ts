import { User } from "../models/User"; // Importar el modelo User

class UserServices {
    constructor() {}

    // Obtener todos los usuarios
    async findAll(): Promise<User[]> { //Se usa el tipo user para aceptar obj con propiedades del modelo user
        return await User.findAll();
    }

    async create(user: Partial<User>): Promise<User> {
        try {
            return await User.create(user);
        } catch (error) {
            console.error('Error en UserServices.create:', error); 
            throw error;
        }
    }
    

    // Actualizar un usuario por ID
    async update(id: number, user: Partial<User>): Promise<[number]> {
        return await User.update(user, {
            where: { id },
        });
    }

    // Eliminar un usuario por ID
    async delete(id: number): Promise<number> {
        return await User.destroy({
            where: { id },
        });
    }

    // Buscar un usuario por ID
    async findById(id: number): Promise<User | null> {
        return await User.findByPk(id);
    }
}

export default new UserServices();
