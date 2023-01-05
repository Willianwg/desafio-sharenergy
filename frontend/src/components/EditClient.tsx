import React, { useState } from "react";
import { useApi } from "../services/api";
import "./Create.css";
import { Modal } from "./Modal/Modal";


type ClientDetailsProps = {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
    id: string;
    closeModal(bool:boolean): void;
    cancel(): void;
}


export function EditClient(props: ClientDetailsProps) {
    const api = useApi();
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);
    const [document, setDocument] = useState(props.document);
    const [address, setAddress] = useState(props.address);

    async function handleSave(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (!name || !email || !phone || !document || !address) {
            return alert("You can't let empty fields.");
        }

        const newClient = { name, email, phone, document, address };

        const response = await api.editClient(newClient, props.id);
 
         if (response.status !== 200) {
             alert("Error");
         }

         props.closeModal(true);

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
                </div>
                <div className="modal-buttons buttons-separate">
                    <button className="modal-btn delete-btn" onClick={props.cancel}>Cancel</button>
                    <button className="modal-btn" onClick={handleSave} >Save</button>
                </div>
            </div>
        </Modal>
    )
}

function InputArea({ label, setValue, value }: { label: string, setValue(value: string): void, value?: string }) {
    return (
        <div className="create-inputs">
            <label className="client-item-label">{label}:</label>
            <input value={value ?? undefined} className="create-input" onChange={e => setValue(e.target.value)} />
        </div>
    )
}
