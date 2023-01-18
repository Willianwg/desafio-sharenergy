import { useEffect, useState } from "react";
import { BackButton } from "../../components/BackButton/BackButton";
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
                        </div>
                        <img src={`https://random.dog/${dog}`} />
                        <button className="btn" onClick={loadDogs}>Refresh <img src={RefreshImage} /></button>
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
            <BackButton />
            {dog && loadPage()}
        </div>
    )
}