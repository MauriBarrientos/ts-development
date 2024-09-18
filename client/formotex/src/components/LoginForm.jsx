import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {  // Recibe el prop onLogin
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      onLogin(); 
      navigate('/dashboard');  
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Formotex</h1>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Usuario</label>
          <input 
            type="text" 
            className="form-control"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <br></br>
          <br></br>
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input 
            type="password" 
            className="form-control"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <br></br>
        <br></br>
        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  );
};

export default LoginForm;
