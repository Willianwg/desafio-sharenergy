import { Link } from "react-router-dom";
import "./BackButton.css";

export function BackButton() {
    return (
        <div className="back-container">
            <button className="back-btn">
                <Link to="/home"><span className="arrow">{"<"}</span> BACK</Link>
            </button>
        </div>
    )
}