import { useEffect, useState } from "react";
import { BackButton } from "../../components/BackButton/BackButton";
import { ClientDetails } from "../../components/Client/ClientDetails";
import { TextArea } from "../../components/Client/Textarea";
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
    const [clients, setClients] = useState<ClientProps[]>([{
        name: "willian guedes",
        email: "guedes@exmple.com",
        phone: "1140028922",
        document: "000.000.000-00",
        address: "Example street - Ex",
        id: "DFASDF123-SDFASDF",
    }]);
    const [selectedClient, setSelectedClient] = useState<ClientProps | null>(null);

    /*  async function loadClients() {
          const response = await (await fetch(`https://random.dog/woof?filter=mp4,webm`)).json();
  
          setClients(response);
      } */

    function openModal() {
        if (!selectedClient) return;
        return (
            <ClientDetails name={selectedClient.name} email={selectedClient.email} phone={selectedClient.phone} address={selectedClient.address} id={selectedClient.id} document={selectedClient.document} closeModal={closeModal} />
        )
    }

    function closeModal() {
        setSelectedClient(null);
    }

    function clientItem(clientProps: ClientProps, key: number) {
        return (
            <div className="item-container" key={key}>
                <TextArea label="name" value={clientProps.name} />
                <TextArea label="id" value={clientProps.id} />
                <button onClick={() => setSelectedClient(clientProps)}>details</button>
            </div>
        )
    }

    useEffect(() => {

    }, []);

    return (
        <div className="client-page">
            <BackButton />
            <h1>Clients</h1>
            <div className="clients-list">
                {clients.map((item, index) => clientItem(item, index))}
            </div>
            {openModal()}
        </div>
    )
}