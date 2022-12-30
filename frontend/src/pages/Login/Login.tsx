import './Login.css'

export function Login(){
    return(
        <div className="main-login">
            <div className="left-login">
                <h1>Economize com a Energia Solar!</h1>
            </div>
            <div className="right-login">
                <div className="card-login">
                    <h1>LOGIN</h1>
                    <div className="textfield">
                        <label htmlFor="username">Username</label>
                        <input name="username" type="text" placeholder='username'/>
                    </div>
                    <div className="textfield">
                        <label htmlFor="password">password</label>
                        <input name="password" type="password" placeholder='password'/>
                    </div>
                    <div className='remember-me'>
                        <input type="checkbox" value={1} className="checkbox"/>
                        <label>remember me</label>
                    </div>
                    <button className="btn-login">Login</button>
                </div>
            </div>
        </div>
    )
}
