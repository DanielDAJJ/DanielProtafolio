import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <footer className="footer" id="contacto">
            <div className="footer-contenido">
                <div className="footer-info">
                    <h3>Daniel Alejandro Jaimes Jiménez</h3>
                    <p>Contacto:
                        <a href="mailto:danielDAJJ@outlook.com"> danielDAJJ@outlook.com </a>
                    </p>
                    <p>Telefono:
                        <a href="tel:+573219134057">
                         +57 3219134057
                        </a> 
                    </p>
                </div>
                <div className="footer-redes">
                    <a href="https://github.com/DanielDAJJ" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/github.svg" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-alejandro-jaimes-jimenez-desarrolladordevideojuegos/" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/linkedin.svg" alt="LinkedIn" />
                    </a>
                    <a href="https://danieldajj.itch.io/" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/itchio.svg" alt="Itch.io" />
                    </a>
                </div>
            </div>
            <div className="footer-copy">
                <p>&copy; {new Date().getFullYear()} Daniel Alejandro Jaimes Jiménez. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;