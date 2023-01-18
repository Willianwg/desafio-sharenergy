import "./Textarea.css";

export function TextArea(props: { label: string, value: string }) {
    return (
        <div className="client-item-textarea">
            <label className="client-item-label">{props.label}:</label>
            <p className="client-item-value">{props.value}</p>
        </div>
    )
}