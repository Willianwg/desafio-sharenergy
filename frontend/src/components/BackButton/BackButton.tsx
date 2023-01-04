import "./BackButton.css";

export function BackButton() {
    return (
        <div className="back-container">
            <button className="back-btn">
                <a href="/"><span className="arrow">{"<"}</span> BACK</a>
            </button>
        </div>
    )
}