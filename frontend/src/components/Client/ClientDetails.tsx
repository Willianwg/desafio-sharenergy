import React, { useState } from "react";
import "./Client.css";
import { TextArea } from "./Textarea";

type ClientDetailsProps = {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
    id: string;
    closeModal(): void;
}

export function ClientDetails(props: ClientDetailsProps) {
    const [deleteOption, setDelete] = useState(false);

    function openDeleteOption(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        setDele
    }
    function deletee() {
        return (
            <div className="delete-client">
                <p>Are you sure about this?</p>
                <div className="modal-buttons delete">
                    <button className="modal-btn">Yes</button>
                    <button className="modal-btn delete-btn" onClick={()=> setDelete(false)}>Cancel</button>
                </div>
            </div>
        )
    }
    return (
        <div className="transparent">
            <div className="client-container">
                { !deleteOption && clientData(props, setDelete) }
                { deleteOption && deletee() }
            </div>
        </div>
    )
}



function clientData(props: ClientDetailsProps, callback: (state:boolean)=> void) {
    return (
        <>
            <div className="client-data">
                <button onClick={props.closeModal} className="modal-close">X</button>
                <TextArea label="name" value={props.name} />
                <TextArea label="email" value={props.email} />
                <TextArea label="phone" value={props.phone} />
                <TextArea label="cpf" value={props.document} />
                <TextArea label="address" value={props.address} />
                <TextArea label="id" value={props.id} />

            </div>
            <div className="modal-buttons">
                <button className="modal-btn">Edit</button>
                <button className="modal-btn delete-btn" onClick={() => callback(true)}>Delete</button>
            </div>
        </>
    )
}