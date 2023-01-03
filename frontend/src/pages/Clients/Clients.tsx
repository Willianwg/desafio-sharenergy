import { useEffect, useState } from "react";
import { Client } from "../../components/Client/Client";
import { Footer } from "../../components/Footer/Footer";
import "./Clients.css";

export function Clients() {
    const [dog, setDog] = useState("");
    const client = [{
        name: "willian guedes",
        email: "guedes@exmple.com",
        phone: "1140028922",
        document: "000.000.000-00",
        address: "Example street - Ex",
        id: "DFASDF123-SDFASDF",
    }]

    async function loadDogs() {
        const response = await (await fetch(`https://random.dog/woof?filter=mp4,webm`)).text();

        setDog(response);
    }

    function loadPage() {
        return (
            <>
                <div className="dog-container">
                    <div>
                        {
                            client.map((item, index) => (
                                <Client key={index} name={item.name} email={item.email} phone={item.phone} address={item.address} id={item.id} document={item.document} />
                            ))
                        }
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