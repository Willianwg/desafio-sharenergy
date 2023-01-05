import { useState } from "react";
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

    return (
        <>
            {!deleteOption &&
                <Modal >
                    <ClientData props={props} callback={setDelete} />
                </Modal>
            }

            { deleteOption &&
                <Modal >
                    <DeleteClient deleteOption={setDelete} clientId={props.id} closeModal={props.closeModal} />
                </Modal>
            }
        </>
    )
}
