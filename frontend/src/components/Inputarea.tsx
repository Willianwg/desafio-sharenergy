import InputMask from "react-input-mask"

export function InputArea({ type, label, setValue, value }: { type?: string, label: string, setValue(value: string): void, value?: string }) {

    if (type === "phone") {
        return (
            <div className="create-inputs">
                <label className="client-item-label">{label}:</label>
                <InputMask mask="(99) 9999-9999" value={value ?? undefined} className="create-input" onChange={e => setValue(e.target.value)} />
            </div>
        )
    }
    else if (type === "cpf") {
        return (
            <div className="create-inputs">
                <label className="client-item-label">{label}:</label>
                <InputMask mask="999.999.999-99" value={value ?? undefined} className="create-input" onChange={e => setValue(e.target.value)} />
            </div>
        )
    }

    return (
        <div className="create-inputs">
            <label className="client-item-label">{label}:</label>
            <input value={value ?? undefined} className="create-input" onChange={e => setValue(e.target.value)} />
        </div>
    )
}