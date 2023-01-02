import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../services/api';
import './Login.css'

export function Login() {
    const navigate = useNavigate();
    const api = useApi();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    async function login(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const { access_token } = await api.login(username, password);

        if (!access_token){
            return alert("Email or password invalid.");
        };

        if (remember) {
            setToken(access_token);
        }
        navigate("/");
    }

    async function authenticate() {
        const token = localStorage.getItem("access_token");
        if (!token) return;

        const { user } = await api.authenticate(token);

        if(!user) return;
        
        navigate("/");
    }

    function setToken(token: string) {
        localStorage.setItem("access_token", token);
    }

    function handleCheckboxChange() {
        if (!remember) {
            return setRemember(true);
        }

        setRemember(false);
    }

    useEffect(() => {
        authenticate();
    }, [])

    return (
        <div className="main-login">
            <div className="left-login">
                <h1>Economize com a Energia Solar!</h1>
            </div>
            <div className="right-login">
                <div className="card-login">
                    <h1>LOGIN</h1>
                    <div className="textfield">
                        <label htmlFor="username">Username</label>
                        <input value={username} onChange={e => setUsername(e.target.value)} name="username" type="text" placeholder='username' />
                    </div>
                    <div className="textfield">
                        <label htmlFor="password">password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} name="password" type="password" placeholder='password' />
                    </div>
                    <div className='remember-me'>
                        <input type="checkbox" className="checkbox" onChange={handleCheckboxChange} />
                        <label>remember me</label>
                    </div>
                    <button className="btn-login" onClick={login}>Login</button>
                </div>
            </div>
        </div>
    )
}
