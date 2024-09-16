import { getToken } from './authService';

const API_URL = "http://127.0.0.1:3000"; // Ajusta la URL de tu API

const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`
};

export const getAllEquipments = async () => {
    const token = localStorage.getItem('token'); // O de donde obtengas el token
    const response = await fetch('http://127.0.0.1:3000/equipment', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Asegúrate de enviar el token correctamente
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch equipment');
    }
  
    return await response.json();
  };
  

export const getEquipmentById = async (id) => {
    const response = await fetch(`${API_URL}/equipment/${id}`, { headers });
    return await response.json();
};

export const addEquipment = async (equipment) => {
    const response = await fetch(`${API_URL}/equipment`, {
        method: 'POST',
        headers,
        body: JSON.stringify(equipment)
    });
    return await response.json();
};

export const updateEquipment = async (id, equipment) => {
    const response = await fetch(`${API_URL}/equipment/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(equipment)
    });
    return await response.json();
};

export const deleteEquipment = async (id) => {
    const response = await fetch(`${API_URL}/equipment/${id}`, {
        method: 'DELETE',
        headers
    });
    return await response.json();
};