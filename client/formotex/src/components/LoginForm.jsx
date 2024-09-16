import { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await login(username, password);
            setToken(token);
            onLogin();
            // Redirigir al dashboard después de un login exitoso
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000); // Esperar 2 segundos antes de redirigir
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
            {token && (
                <div>
                    <p>Token generado: {token}</p>
                    <p>Redirigiendo en 2 segundos...</p>
                </div>
            )}
        </div>
    );
}
