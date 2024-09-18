import React, { useEffect, useState } from 'react';
import { getAllEquipments, deleteEquipment } from '../services/equipmentService';
import { useNavigate } from 'react-router-dom';

const EquipmentList = () => {
  const [equipments, setEquipments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllEquipments();
        setEquipments(data);
      } catch (error) {
        console.error('Error fetching equipments', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteEquipment(id);
      setEquipments(equipments.filter((equipment) => equipment.id !== id));
    } catch (error) {
      console.error('Error deleting equipment', error);
    }
  };

  const handleCreate = () => {
    navigate('/create-equipment');
}

  return (
    <div className="container mt-5">
      <h2>Lista de equipos</h2>
      <div className="col-md-3 mb-2">
        <button className="btn btn-primary" onClick={handleCreate}>
          Añadir equipo
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Fecha de compra</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {equipments.map((equipment) => (
            <tr key={equipment.id}>
              <td>{equipment.name}</td>
              <td>{equipment.type}</td>
              <td>{equipment.stock}</td>
              <td>{equipment.status}</td>
              <td>{new Date(equipment.buy_date).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-warning" onClick={() => navigate(`/edit-equipment/${equipment.id}`)}>Editar</button>
                <button className="btn btn-danger" onClick={() => handleDelete(equipment.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentList;
