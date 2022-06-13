import React from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "2rem",
        width: "100%"
    }

    return (

        <footer style={footerStyle}>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Features</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Pricing</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">FAQs</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link px-2 text-muted">About</Link></li>
            </ul>
            <p className="text-center text-muted">© MyTodosList.com</p>
        </footer>

        // <div className="bg-dark text-light py-3">
        //     <p className="text-center">
        //         Copyright &copy; MyTodosList.com
        //     </p>
        // </div>
    )
}