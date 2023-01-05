import { TextArea } from "../Textarea";

type ClientDetailsProps = {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
    id: string;
    closeModal(): void;
}

type ClientDataProps = {
    props: ClientDetailsProps;
    callback(bool: boolean): void;
}

export function ClientData({ props, callback }: ClientDataProps) {
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
                <button className="modal-btn delete-btn" onClick={() => callback(true)}>Delete</button>
                <button className="modal-btn">Edit</button>
            </div>
        </>
    )
}