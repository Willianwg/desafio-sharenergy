import React from "react";
import { useApi } from "../../../services/api";

type DeleteClientProps = {
    clientId: string;
    deleteOption(bool: boolean): void;
    closeModal(refresh?: boolean): void;
}

export function DeleteClient({ deleteOption, clientId, closeModal }: DeleteClientProps) {
    const api = useApi();

    async function deleteClient(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        await api.deleteClient(clientId);

        closeModal(true);
    }

    return (
        <div className="delete-client">
            <p>Are you sure about this?</p>
            <div className="modal-buttons delete">
                <button className="modal-btn" onClick={ deleteClient }>Yes</button>
                <button className="modal-btn delete-btn" onClick={() => deleteOption(false)}>Cancel</button>
            </div>
        </div>
    )
}