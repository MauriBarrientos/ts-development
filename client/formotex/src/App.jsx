import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import EquipmentList from './components/EquipmentList';
import CreateEquipment from './components/CreateEquipment';  // Nuevo nombre
import EditEquipment from './components/EditEquipment';  // Nuevo nombre
import { getToken, logout } from './services/authService';

// Ruta privada que redirige si no está autenticado
function PrivateRoute({ children }) {
    const token = getToken();
    return token ? children : <Navigate to="/login" />;
}

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <Routes>
                {/* Ruta pública */}
                <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                
                {/* Ruta privada */}
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <>
                            <button onClick={handleLogout}>Cerrar sesión</button>
                            <EquipmentList />
                            <CreateEquipment />  {/* Cambio aquí: AddEquipmentForm -> CreateEquipment */}
                        </>
                    </PrivateRoute>
                } />

                {/* Nueva ruta para editar equipos */}
                <Route path="/edit-equipment/:id" element={
                    <PrivateRoute>
                        <>
                            <button onClick={handleLogout}>Cerrar sesión</button>
                            <EditEquipment />  {/* Nuevo componente para editar equipos */}
                        </>
                    </PrivateRoute>
                } />
                
                {/* Redirecciona a /login si la ruta no es válida */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}
