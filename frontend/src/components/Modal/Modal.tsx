import React, { useState } from "react";
import { ClientData } from "./ClientData/ClientData";
import { DeleteClient } from "./Delete/DeleteClient";
import "./Modal.css";

type ClientDetailsProps = {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
    id: string;
    closeModal(refresh?: boolean): void;
}

export function Modal(props: ClientDetailsProps) {
    const [deleteOption, setDelete] = useState(false);

    return (
        <div className="transparent">
            <div className="client-container">
                { !deleteOption && <ClientData props={props} callback={ setDelete } />}
                { deleteOption && <DeleteClient deleteOption={setDelete} clientId = { props.id } closeModal = { props.closeModal } /> }
            </div>
        </div>
    )
}
