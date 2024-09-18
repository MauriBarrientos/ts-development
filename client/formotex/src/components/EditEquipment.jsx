import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEquipmentById, editEquipment } from '../services/equipmentService';
import './EquipmentList.css';

const EditEquipment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState({
    name: '',
    type: '',
    stock: 0,
    status: '',
    buy_date: '',
  });

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const data = await getEquipmentById(id);
        const formattedDate = data.buy_date ? new Date(data.buy_date).toISOString().split('T')[0] : '';
        setEquipment({
          ...data,
          buy_date: formattedDate,
        });
      } catch (error) {
        console.error('Error fetching equipment', error);
      }
    };

    fetchEquipment();
  }, [id]);

  const handleChange = (e) => {
    setEquipment({
      ...equipment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editEquipment(id, equipment);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating equipment', error);
    }
  };

  return (
    <div className="container mt-5 card">
      <h2>Editar equipamiento</h2>
      <button className="btn btn-secondary mb-3" onClick={() => navigate('/dashboard')}>
        Volver al inicio
      </button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={equipment.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Tipo</label>
          <input
            type="text"
            className="form-control"
            id="type"
            name="type"
            value={equipment.type}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            value={equipment.stock}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Estado</label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            value={equipment.status}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="buy_date">Fecha de compra</label>
          <input
            type="date"
            className="form-control"
            id="buy_date"
            name="buy_date"
            value={equipment.buy_date}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-warning mt-3">Actualizar</button>
      </form>
    </div>
  );
};

export default EditEquipment;
