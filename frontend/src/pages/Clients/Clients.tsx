import { useEffect, useState } from "react";
import { BackButton } from "../../components/BackButton/BackButton";
import { ClientDetails } from "../../components/Client/ClientDetails";
import { TextArea } from "../../components/Client/Textarea";
import { useApi } from "../../services/api";
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
    const api = useApi();
    const [clients, setClients] = useState<ClientProps[]>([]);
    const [selectedClient, setSelectedClient] = useState<ClientProps | null>(null);

    async function loadClients() {
        const { clients } = await api.getClients();

        setClients(clients);
    }

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
                <TextArea label="email" value={clientProps.email} />
                <button onClick={() => setSelectedClient(clientProps)}>details</button>
            </div>
        )
    }

    useEffect(() => {
        loadClients();
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