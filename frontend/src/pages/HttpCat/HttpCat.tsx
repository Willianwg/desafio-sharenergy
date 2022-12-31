import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import "./HttpCat.css";

export function HttpCat() {
    const [code, setCode] = useState(102);

    function handleSubmit(text: number) {
        setCode(text);
    }

    return (
        <div className="cat-page">
            <div className="back-container">
                <button className="back-btn"><span className="arrow">{"<"}</span> BACK</button>
            </div>
            <div className="cat-card">
                <h1>HttpCat</h1>
                <img src={`https://http.cat/${code}`} />
                <SearchBar placeholder="Type a http code here" callback={handleSubmit} />
            </div>
            <Footer />
        </div>
    )
}