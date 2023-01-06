import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthContext';
import { useApi } from '../../services/api';
import './Login.css'

export function Login() {
    const navigate = useNavigate();
    const api = useApi();
    const context = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    function handleCheckboxChange() {
        if (!remember) {
            return setRemember(true);
        }

        setRemember(false);
    }

    useEffect(() => {
        if (context.user) {
            console.log(context.user)
            navigate("/home");
        }
    }, [context])


    function handleLogin(e: React.MouseEvent<HTMLButtonElement>){
        if(!username || !password){
            return alert("Enter an username and password");
        }

        if(username.length < 5){
            return alert("Username must have more than 4 characters");
        }

        if(password.length < 5){
            return alert("Password must have more than 4 characters");
        }

        context.login(username, password, remember)
    }

    return (
        <div className="main-login">
            <div className="left-login">
                <h1>Economize com a Energia Solar! {context.user?.username}</h1>
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
                    <button className="btn-login" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}
