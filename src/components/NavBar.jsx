import React from "react";
import "./Navbar.css";
const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-logo">Daniel Jaimes</div>
            <ul className="navbar-links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#cv">CV</a></li>
                <li><a href="#herramientas">Herramientas</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;