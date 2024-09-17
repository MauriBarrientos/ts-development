import React, { useState } from 'react';
import { addEquipment } from '../services/equipmentService';
import { useNavigate } from 'react-router-dom';

const CreateEquipment = () => {
  const [equipment, setEquipment] = useState({
    name: '',
    type: '',
    stock: 0,
    status: '',
    buy_date: '',
    user_id: 1,  // Asigna el ID del usuario conectado
    supplier_id: '',  // Asigna el ID del proveedor seleccionado
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
    try {
      await addEquipment(equipment);
      navigate('/equipment');
    } catch (error) {
      console.error('Error adding equipment', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add New Equipment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            className="form-control" 
            value={equipment.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label>Type</label>
          <input 
            type="text" 
            name="type" 
            className="form-control" 
            value={equipment.type} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label>Stock</label>
          <input 
            type="number" 
            name="stock" 
            className="form-control" 
            value={equipment.stock} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label>Status</label>
          <input 
            type="text" 
            name="status" 
            className="form-control" 
            value={equipment.status} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label>Buy Date</label>
          <input 
            type="date" 
            name="buy_date" 
            className="form-control" 
            value={equipment.buy_date} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label>Supplier ID</label>
          <input 
            type="number" 
            name="supplier_id" 
            className="form-control" 
            value={equipment.supplier_id} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Equipment</button>
      </form>
    </div>
  );
};

export default CreateEquipment;
