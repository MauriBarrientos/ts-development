// EquipmentList.jsx
import { useEffect, useState } from 'react';
import { getAllEquipments, deleteEquipment } from '../services/equipmentService';

const EquipmentList = () => {
  const [equipments, setEquipments] = useState([]); // Inicializar como arreglo vacío
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga

  useEffect(() => {
    const fetchData = async () => {
      try {
        const equipmentsData = await getAllEquipments();
        setEquipments(equipmentsData || []); // Asegurar que se asigna un arreglo
      } catch (error) {
        console.error('Error fetching equipments:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Muestra un mensaje mientras los datos se cargan
  }

  if (equipments.length === 0) {
    return <div>No equipments found</div>; // Manejar el caso donde no haya datos
  }

  return (
    <div>
      <h2>Equipment List</h2>
      <ul>
        {equipments.map((equipment) => (
          <li key={equipment.id}>
            {equipment.name}
            <button onClick={() => deleteEquipment(equipment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EquipmentList;
