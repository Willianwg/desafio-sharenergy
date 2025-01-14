import { useEffect, useState } from "react";
import { BackButton } from "../../components/BackButton/BackButton";
import { CreateClient } from "../../components/Create";
import { ClientDetails } from "../../components/Modal/ClientDetails";
import { TextArea } from "../../components/Modal/Textarea";
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
    const [newClient, setNew] = useState(false);

    async function loadClients() {
        const { clients } = await api.getClients();

        const NewestFirst = clients.reverse();

        setClients(NewestFirst);
    }

    function openDetailsModal() {
        if (!selectedClient) return;
        return (
            <ClientDetails name={selectedClient.name} email={selectedClient.email} phone={selectedClient.phone} address={selectedClient.address} id={selectedClient.id} document={selectedClient.document} closeModal={closeDetailsModal} />
        )
    }

    function closeDetailsModal(refresh?: boolean) {
        setSelectedClient(null);

        if (refresh) {
            loadClients();
        }
    }

    function closeCreateModal(refresh?: boolean) {
        setNew(false);

        if (refresh) {
            loadClients();
        }
    }

    function clientItem(clientProps: ClientProps, key: number) {
        return (
            <div className="item-container" key={key}>
                <div className="item-data">
                    <TextArea label="name" value={clientProps.name} />
                    <TextArea label="phone" value={clientProps.phone} />
                </div>
                <button onClick={() => setSelectedClient(clientProps)} className="client-details-btn" >details</button>
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
            <div className="new-client-btn-container" style={ clients.length > 0 ? { } : { justifyContent: "center" } }>
                <button className="btn" onClick={() => setNew(true)}>+ new</button>
            </div>
            {openDetailsModal()}
            {newClient && <CreateClient closeModal={closeCreateModal} />}
        </div>
    )
}