import "./Footer.css";

export function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <h3>What do you think?</h3>
                <p className='description'> I'd like to know your thoughts about this project. If possible, contact me by my Email, or LinkedIn. Thank you for the opportunity, hope we can work together.</p>
                <p>Here is my <a href="https://github.com/willianwg">Github.</a></p>
            </div>
            <div className="rights">
                <p>Email: <span>willian.wg70@gmail.com</span></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/willian-guedes?">Willian Guedes</a></p>
            </div>
        </footer>
    )
}