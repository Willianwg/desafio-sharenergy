
export function InputArea({ label, setValue, value }: { label: string, setValue(value: string): void, value?: string }) {
    return (
        <div className="create-inputs">
            <label className="client-item-label">{label}:</label>
            <input value={value ?? undefined} className="create-input" onChange={e => setValue(e.target.value)} />
        </div>
    )
}