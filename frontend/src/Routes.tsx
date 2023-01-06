import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { Clients } from "./pages/Clients/Clients";
import { HttpCat } from "./pages/HttpCat/HttpCat";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { RandomDog } from "./pages/RandomDog/RandomDog";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Auth/AuthContext";
import { AuthProvider } from "./Auth/AuthProvider";


export function AppRoutes() {

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={ <Private><Home /></Private> } />

                    <Route path="/login" element={<Login />} />

                    <Route path="/home" element={ <Private><Home /></Private> } />

                    <Route path="/httpcat" element={<Private><HttpCat /></Private>} />

                    <Route path="/random-dog" element={<Private><RandomDog /></Private>} />

                    <Route path="/clients" element={<Private><Clients /></Private>} />
                    
                </Routes>
            </AuthProvider>
        </Router>
    )
}


function Private({ children }: { children: JSX.Element }) {
    const context = useContext(AuthContext);

    if (!context.user) {
        return <Navigate to="/login" />
    }

    return (
        children
    )
}