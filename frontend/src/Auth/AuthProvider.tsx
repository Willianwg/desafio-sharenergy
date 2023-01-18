import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../services/api";
import { AuthContext } from "./AuthContext";

type User = {
    username: string;
}

export function AuthProvider({ children }: { children: JSX.Element }) {
    const api = useApi();
    const navigate = useNavigate();

    const [user, setUser] = useState<User | null>(null);

    async function authenticate() {
        if(user) return;
        
        const token = localStorage.getItem("access_token");
        if (!token) return;

        const response = await api.authenticate(token);

        if (response.user) {
            setUser({ username: response.user.username });
        }
    }

    async function login(username: string, password: string, remember?: boolean) {
        const { access_token } = await api.login(username, password);

        if (!access_token) {
            return alert("Email or password invalid.");
        };

        if (remember) {
            setToken(access_token);
        }

        setUser({ username });

        navigate("/home");
    }

    function setToken(token: string) {
        localStorage.setItem("access_token", token);
    }


    useEffect(() => {
        authenticate();
    }, [])

    return (
        <AuthContext.Provider value={{ user, login }} >
            {children}
        </AuthContext.Provider>
    )
}