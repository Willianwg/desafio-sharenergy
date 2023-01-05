import React, { useState } from "react";
import { useApi } from "../services/api";
import "./Create.css";
import { InputArea } from "./Inputarea";
import { Modal } from "./Modal/Modal";

type GeneratedUserProps = {
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    cell: string;
    id: {
        name: string;
        value: string;
    }
    location: {
        street: {
            name: string;
            number: string;
        }
        state: string;
        city: string;
        postcode: string;
        country: string;
        coordinates: {
            longitude: string;
            latitude: string;
        };
        timezone: {
            description: string;
            offset: string;
        }
    }
}

type ApiUserGeneratorResponse = {
    results: GeneratedUserProps[];
}

export function CreateClient(props: { closeModal(refresh?: boolean): void }) {
    const api = useApi();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [document, setDocument] = useState("");
    const [address, setAddress] = useState("");

    async function handleSave(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (!name || !email || !phone || !document || !address) {
            return alert("You can't let empty fields.");
        }

        const newClient = { name, email, phone, document, address };

        const response = await api.createClient(newClient);

        if (response.status !== 201) {
            alert("Error");
        }

        props.closeModal(true);
    }

    async function handleGenerate(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const { results }: ApiUserGeneratorResponse = await (await fetch(`https://randomuser.me/api/?nat=br&inc=location,name,email,cell,id,?results=1`)).json();

        const [generated] = results;

        const clientName = `${generated.name.first} ${generated.name.last}`
        const clientEmail = generated.email;
        const clientPhone = generated.cell;
        const clientAddress = `${generated.location.street.name} ${generated.location.street.number}, ${generated.location.city} - ${generated.location.state} `;
        const clientDocument = generated.id.value;

        setName(clientName);
        setEmail(clientEmail);
        setPhone(clientPhone);
        setAddress(clientAddress);
        setDocument(clientDocument);
    }

    return (
        <Modal >
            <div className="create-container">
                <div className="create-grid">
                    <InputArea label="name" setValue={setName} value={name} />
                    <InputArea label="email" setValue={setEmail} value={email} />
                    <InputArea label="phone" setValue={setPhone} value={phone} />
                    <InputArea label="cpf" setValue={setDocument} value={document} />
                    <InputArea label="address" setValue={setAddress} value={address} />
                    <button onClick={handleGenerate}>Generate</button>
                </div>
                <div className="modal-buttons buttons-separate">
                    <button className="modal-btn delete-btn" onClick={() => props.closeModal()}>Cancel</button>
                    <button className="modal-btn" onClick={handleSave} >Save</button>
                </div>
            </div>
        </Modal>
    )
}


