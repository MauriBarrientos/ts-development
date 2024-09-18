import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../services/authService'; 

const CreateEquipment = () => {
  const [equipment, setEquipment] = useState({
    name: '',
    type: '',
    stock: 0,
    status: '',
    buy_date: '',
    user_id: 1, // Puedes ajustar esto según sea necesario
    client_id: '',
    supplier_id: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEquipment({
      ...equipment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convertir buy_date a formato YYYY-MM-DD
    const formattedDate = new Date(equipment.buy_date).toISOString().split('T')[0];

    try {
        const token = getToken(); // Obtener el token del almacenamiento
        const response = await fetch('http://127.0.0.1:3000/equipment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
              ...equipment,
              buy_date: formattedDate // Incluir la fecha convertida
            }),
        });

        if (!response.ok) {
            throw new Error('Error al añadir el equipo');
        }

        navigate('/equipment');
    } catch (error) {
        console.error('Error adding equipment', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add New Equipment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={equipment.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input type="text" id="type" name="type" value={equipment.type} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input type="number" id="stock" name="stock" value={equipment.stock} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input type="text" id="status" name="status" value={equipment.status} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="buy_date">Buy Date</label>
          <input type="date" id="buy_date" name="buy_date" value={equipment.buy_date} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="client_id">Client ID</label>
          <input type="text" id="client_id" name="client_id" value={equipment.client_id} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="supplier_id">Supplier ID</label>
          <input type="text" id="supplier_id" name="supplier_id" value={equipment.supplier_id} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Add Equipment</button>
      </form>
    </div>
  );
};

export default CreateEquipment;
