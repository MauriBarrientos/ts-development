const API_URL = "http://127.0.0.1:3000/auth";

export const login = async (username, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
        // Guardar el token en localStorage
        localStorage.setItem('token', data.token);
        return data.token;
    } else {
        throw new Error(data.message || 'Error al iniciar sesión');
    }
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const logout = () => {
    localStorage.removeItem('token');
};
