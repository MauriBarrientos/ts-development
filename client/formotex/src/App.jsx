import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import EquipmentList from './components/EquipmentList';
import CreateEquipment from './components/CreateEquipment';
import EditEquipment from './components/EditEquipment';
import { getToken, logout } from './services/authService';
import { addEquipment, editEquipment } from './services/equipmentService';

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

    const handleCreate = () => {
        addEquipment
    }

    const handleEdit = () => {
        editEquipment
    }


    return (
        <Router>
            <Routes>
                {/* Ruta pública para el login */}
                <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />

                {/* Ruta privada para listar equipos */}
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <>
                            <button onClick={handleLogout}>Cerrar sesión</button>
                            <EquipmentList />
                        </>
                    </PrivateRoute>
                } />

                {/* Ruta privada para crear un equipo */}
                <Route path="/create-equipment" element={
                    <PrivateRoute>
                        <>
                        <button onClick={handleCreate}>Añadir equipo</button>
                        
                            <CreateEquipment />
                        </>
                    </PrivateRoute>
                } />

                {/* Ruta privada para editar equipos */}
                <Route path="/edit-equipment/:id" element={
                    <PrivateRoute>
                        <>
                            <button onClick={handleEdit}>Cerrar sesión</button>
                            <EditEquipment />
                        </>
                    </PrivateRoute>
                } />

                {/* Redirigir a login si no coincide con ninguna ruta */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}
