import "./Modal.css";

export function Modal(props: { children: JSX.Element | JSX.Element[] }) {

    return (
        <div className="transparent">
            <div className="client-container">
                {props.children}
            </div>
        </div>
    )
}