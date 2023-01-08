import { useState } from "react";
import { BackButton } from "../../components/BackButton/BackButton";
import { Footer } from "../../components/Footer/Footer";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import "./HttpCat.css";

export function HttpCat() {
    const [code, setCode] = useState(102);

    function handleSubmit(text: number) {
        if(!text) return;
        setCode(text);
    }

    return (
        <div className="cat-page">
           <BackButton />
            <div className="cat-card">
                <h1>HttpCat</h1>
                <img src={`https://http.cat/${code}`} />
                <SearchBar placeholder="Type a http code here" callback={handleSubmit} />
            </div>
            <Footer />
        </div>
    )
}