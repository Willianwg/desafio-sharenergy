import { useEffect, useState } from "react";
import { ClientDetails } from "../../components/Client/ClientDetails";
import "./Clients.css";

type ClientProps = {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
    id: string;
}

export function Clients() {
    const [modalOpen, setModal] = useState(true);
    const [clients, setClients] = useState<ClientProps[]>([]);
    
    const item = {
        name: "willian guedes",
        email: "guedes@exmple.com",
        phone: "1140028922",
        document: "000.000.000-00",
        address: "Example street - Ex",
        id: "DFASDF123-SDFASDF",
    }

    /*  async function loadClients() {
          const response = await (await fetch(`https://random.dog/woof?filter=mp4,webm`)).json();
  
          setClients(response);
      } */

    function openModal() {
        if (!modalOpen) return;
        return (
            <div>
                <ClientDetails name={item.name} email={item.email} phone={item.phone} address={item.address} id={item.id} document={item.document} closeModal={closeModal} />
            </div>
        )
    }

    function closeModal() {
        setModal(false);
    }

    useEffect(() => {

    }, []);

    return (
        <>
            <div className="dog-page">
                <div className="back-container">
                    <button className="back-btn">
                        <a href="/"><span className="arrow">{"<"}</span> BACK</a>
                    </button>
                </div>
                {openModal()}
            </div>
        </>
    )
}