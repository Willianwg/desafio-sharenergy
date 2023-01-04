import "./Create.css";

export function CreateClient() {
    return (
        <div className="transparent">
            <div className="client-container">
                <div className="create-container">
                    <div className="create-grid">
                        <InputArea label="name" />
                        <InputArea label="email" />
                        <InputArea label="phone" />
                        <InputArea label="document" />
                        <InputArea label="address" />
                    </div>
                    <div className="modal-buttons delete">
                        <button className="modal-btn" >Save</button>
                        <button className="modal-btn delete-btn">Cancel</button>
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
            <input className="create-input" type={label} />
        </div>
    )
}