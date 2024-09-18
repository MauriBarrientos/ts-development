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
                <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <>
                            <button onClick={handleLogout}>Cerrar sesión</button>
                            <EquipmentList />
                        </>
                    </PrivateRoute>
                } />
                <Route path="/create-equipment" element={
                    <PrivateRoute>
                        <>
                        <button onClick={handleCreate}>Añadir equipo</button>
                            <CreateEquipment />
                        </>
                    </PrivateRoute>
                } />
                <Route path="/edit-equipment/:id" element={
                    <PrivateRoute>
                        <>
                            <button onClick={handleEdit}>Cerrar sesión</button>
                            <EditEquipment />
                        </>
                    </PrivateRoute>
                } />

                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}
