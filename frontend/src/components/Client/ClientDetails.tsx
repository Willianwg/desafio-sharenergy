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
    return (
        <div className="transparent">
            <div className="client-container">
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
                        <button className="modal-btn delete-btn">Delete</button>
                    </div>
            </div>
        </div>
    )
}