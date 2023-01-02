import React, { useState } from 'react'
import './Login.css'

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remeber, setRemember] = useState(false);

    async function login(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const response = await (await fetch("http://localhost:3000/user/login", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })).json();

        console.log(response);
    }

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
                        <input type="checkbox" value={1} className="checkbox" />
                        <label>remember me</label>
                    </div>
                    <button className="btn-login" onClick={login}>Login</button>
                </div>
            </div>
        </div>
    )
}
