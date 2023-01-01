import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import "./RandomDog.css";
import RefreshImage from "./RefreshImage.svg";

export function RandomDog() {
    const [dog, setDog] = useState("");

    async function loadDogs() {
        const response = await (await fetch(`https://random.dog/woof?filter=mp4,webm`)).text();

        setDog(response);
    }

    function loadPage() {
        return (
            <>
                <div className="dog-container">
                    <div className="dog-card">
                        <div className="card-top">
                            <h1>RandomDog</h1>
                            <button className="refresh-btn" onClick={loadDogs}><img src={RefreshImage} /></button>
                        </div>
                        <img src={`https://random.dog/${dog}`} />
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    useEffect(() => {
        loadDogs();
    }, []);

    return (
        <div className="dog-page">
            <div className="back-container">
                <button className="back-btn">
                    <a href="/"><span className="arrow">{"<"}</span> BACK</a>
                </button>
            </div>
            {dog && loadPage()}
        </div>
    )
}