import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import "./RandomDog.css";

export function RandomDog() {
    const [dog, setDog] = useState("");

    async function loadDogs() {
        if (dog) return;
        const response = await (await fetch(`https://random.dog/woof?filter=mp4,webm`)).text();

        setDog(response);
    }

    function loadPage() {
        return (
            <>
                <div className="dog-card">
                    <h1>RandomDog</h1>
                    <img src={`https://random.dog/${dog}`} />
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
                <button className="back-btn"><span className="arrow">{"<"}</span> BACK</button>
            </div>
            {dog && loadPage()}
        </div>
    )
}