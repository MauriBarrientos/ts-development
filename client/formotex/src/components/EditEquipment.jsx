import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEquipmentById, updateEquipment } from '../services/equipmentService';
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
        setEquipment(data);
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
        await updateEquipment(id, equipment);
        navigate('/equipment');
    } catch (error) {
        console.error('Error updating equipment', error);
    }
};

  return (
    <div className="container mt-5">
      <h2>Edit Equipment</h2>
      <form onSubmit={handleSubmit}>
        {/* Repeat form fields as in CreateEquipment */}
        <button type="submit" className="btn btn-warning">Update Equipment</button>
      </form>
    </div>
  );
};

export default EditEquipment;
