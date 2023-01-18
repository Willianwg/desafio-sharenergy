import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>Sharenergy</h1>
            </div>
            <div className="links">
                <Link to="/httpcat" >HttpCat</Link>
                <Link to="/random-dog" >RandomDog</Link>
                <Link to="/clients" >Clients</Link>
            </div>
        </div>
    )
}