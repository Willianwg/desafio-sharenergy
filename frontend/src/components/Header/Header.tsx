import "./Header.css";

export function Header() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>Sharenergy</h1>
            </div>
            <div className="links">
                <a href="/httpcat" >HttpCat</a>
                <a href="/random-dog" >RandomDog</a>
                <a href="#" >Clients</a>
            </div>
        </div>
    )
}