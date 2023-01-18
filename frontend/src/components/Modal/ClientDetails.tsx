import { useState } from "react";
import { EditClient } from "../EditClient";
import { ClientData } from "./ClientData/ClientData";
import { DeleteClient } from "./Delete/DeleteClient";
import { Modal } from "./Modal";

type ClientDetailsProps = {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
    id: string;
    closeModal(refresh?: boolean): void;
}

export function ClientDetails(props: ClientDetailsProps) {
    const [deleteOption, setDelete] = useState(false);
    const [editOption, setEdit] = useState(false);

    return (
        <>
            {!deleteOption && !editOption &&
                <Modal >
                    <ClientData props={props} deleteOption={setDelete} editOption={setEdit} />
                </Modal>
            }

            {deleteOption &&
                <Modal >
                    <DeleteClient deleteOption={setDelete} clientId={props.id} closeModal={props.closeModal} />
                </Modal>
            }

            { editOption &&
                <Modal>
                    <EditClient name={props.name} email={props.email} phone={props.phone} address={props.address} id={props.id} document={props.document} closeModal={ props.closeModal } cancel={ ()=> setEdit(false) }/>
                </Modal>
            }
        </>
    )
}
