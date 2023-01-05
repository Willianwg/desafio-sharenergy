import "./Create.css";

export function CreateClient(props: { closeModal(refresh?: boolean): void }) {
    return (
        <div className="transparent">
            <div className="client-container">
                <div className="create-container">
                    <div className="create-grid">
                        <InputArea label="name" />
                        <InputArea label="email" />
                        <InputArea label="phone" />
                        <InputArea label="cpf" />
                        <InputArea label="address" />
                    </div>
                    <div className="modal-buttons buttons-separate">
                        <button className="modal-btn delete-btn" onClick={()=> props.closeModal() }>Cancel</button>
                        <button className="modal-btn" >Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function InputArea({ label }: { label: string }) {
    return (
        <div className="create-inputs">
            <label className="client-item-label">{label}:</label>
            <input className="create-input" />
        </div>
    )
}