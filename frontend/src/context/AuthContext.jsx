import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");
        const fullName = localStorage.getItem("fullName");
        const email = localStorage.getItem("email");

        if (token) {
            setUser({
                token,
                role,
                fullName,
                email,
            });
        }

        setLoading(false);
    }, []);

    const login = (data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("fullName", data.fullName);
        localStorage.setItem("email", data.email);

        setUser({
            token: data.token,
            role: data.role,
            fullName: data.fullName,
            email: data.email,
        });
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("fullName");
        localStorage.removeItem("email");

        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}