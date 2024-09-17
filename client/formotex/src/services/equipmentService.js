import { getToken } from './authService';

const API_URL = "http://127.0.0.1:3000"; 

// Función para obtener el header con el token incluido
const getHeaders = () => {
    const token = getToken();
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
};

export const getAllEquipments = async () => {
    const response = await fetch(`${API_URL}/equipment`, {
        method: 'GET',
        headers: getHeaders(),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch equipment');
    }

    return await response.json();
};

export const getEquipmentById = async (id) => {
    const response = await fetch(`${API_URL}/equipment/${id}`, {
        method: 'GET',
        headers: getHeaders(),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch equipment with ID: ${id}`);
    }

    return await response.json();
};

export const addEquipment = async (equipment) => {
    const response = await fetch(`${API_URL}/equipment`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(equipment),
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      console.error('Error:', data);
      throw new Error('Failed to add equipment');
    }
  
    return data;
  };
  

export const updateEquipment = async (id, equipment) => {
    const response = await fetch(`${API_URL}/equipment/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(equipment),
    });

    if (!response.ok) {
        throw new Error('Failed to update equipment');
    }

    return await response.json();
};

export const deleteEquipment = async (id) => {
    const response = await fetch(`${API_URL}/equipment/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
    });

    if (!response.ok) {
        throw new Error(`Failed to delete equipment with ID: ${id}`);
    }

    return await response.json();
};