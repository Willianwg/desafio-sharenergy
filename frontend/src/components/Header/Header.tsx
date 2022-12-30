import "./Header.css";

export function Header() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>Sharenergy</h1>
            </div>
            <div className="links">
                <a href="#" >HttpCat</a>
                <a href="#" >RandomDog</a>
                <a href="#" >Clients</a>
            </div>
        </div>
    )
}