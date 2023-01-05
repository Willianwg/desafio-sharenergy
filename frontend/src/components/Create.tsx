import React, { useState } from "react";
import { useApi } from "../services/api";
import "./Create.css";
import { Modal } from "./Modal/Modal";


function InputArea({ label, setValue }: { label: string, setValue(value: string): void }) {
    return (
        <div className="create-inputs">
            <label className="client-item-label">{label}:</label>
            <input className="create-input" onChange={e => setValue(e.target.value)} />
        </div>
    )
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

        const newClient = {
            name,
            email,
            phone,
            document,
            address
        }
        const response = await api.createClient(newClient);

        if (response.status !== 201) {
            alert("Error");
        }

        props.closeModal(true);
    }

    return (
        <Modal >
            <div className="create-container">
                <div className="create-grid">
                    <InputArea label="name" setValue={setName} />
                    <InputArea label="email" setValue={setEmail} />
                    <InputArea label="phone" setValue={setPhone} />
                    <InputArea label="cpf" setValue={setDocument} />
                    <InputArea label="address" setValue={setAddress} />
                </div>
                <div className="modal-buttons buttons-separate">
                    <button className="modal-btn delete-btn" onClick={() => props.closeModal()}>Cancel</button>
                    <button className="modal-btn" onClick={handleSave} >Save</button>
                </div>
            </div>
        </Modal>
    )
}