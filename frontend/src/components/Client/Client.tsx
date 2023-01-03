import "./Client.css";
import { TextArea } from "./Textarea";

type ClientProps = {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
    id: string;
}

export function Client(props: ClientProps) {
    return (
        <div className="transparent">
            <div className="client-item-content">
                <div className="client-container">
                    <button className="modal-close">X</button>
                    <TextArea label="name" value={props.name} />
                    <TextArea label="email" value={props.email} />
                    <TextArea label="phone" value={props.phone} />
                    <TextArea label="cpf" value={props.document} />
                    <TextArea label="address" value={props.address} />
                    <TextArea label="id" value={props.id} />
                </div>
            </div>
        </div>
    )
}