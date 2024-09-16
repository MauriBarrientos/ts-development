import { useState } from 'react';
import { addEquipment } from '../services/equipmentService';

export default function AddEquipmentForm() {
    const [name, setName] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addEquipment({ name, stock });
        setName('');
        setStock('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre del equipo"
                required
            />
            <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="Stock"
                required
            />
            <button type="submit">Agregar Equipo</button>
        </form>
    );
}
