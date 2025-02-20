import React, { useState } from "react";
import { useApi } from "../services/api";
import "./Create.css";
import { InputArea } from "./Inputarea";

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

        const documentValue = Number(document[document.length - 1]);
        const phoneValue = Number(phone[phone.length - 1]);
        if (isNaN(documentValue) || isNaN(phoneValue)) {
            return alert("Enter all fields correctly.");
        }

        const newClient = { name, email, phone, document, address };

        const response = await api.editClient(newClient, props.id);
 
         if (response.status !== 200) {
             alert("Error");
         }

         props.closeModal(true);

    }

    return (
            <div className="create-container">
                <div className="create-grid">
                    <InputArea label="name" setValue={setName} value={name} />
                    <InputArea label="email" setValue={setEmail} value={email} />
                    <InputArea label="phone" setValue={setPhone} value={phone} type="phone" />
                    <InputArea label="cpf" setValue={setDocument} value={document} type="cpf" />
                    <InputArea label="address" setValue={setAddress} value={address} />
                </div>
                <div className="modal-buttons buttons-separate">
                    <button className="modal-btn delete-btn" onClick={props.cancel}>Cancel</button>
                    <button className="modal-btn" onClick={handleSave} >Save</button>
                </div>
            </div>
    )
}

