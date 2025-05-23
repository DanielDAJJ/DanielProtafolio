import React from 'react';
import "./Inicio.css";
import VideoFondo from "../assets/VideoBase.mp4";

const Inicio  = () => {
    return(
        <section className="inicio" id="inicio">
            <video autoPlay loop muted className="video-fondo">
                <source src={VideoFondo} type="video/mp4"/>
            </video>
            <div className="contenido">
                <h1>¡Bienvenido a mi portafolio!</h1>
                <p className="contenido_parrafo">🕹Soy desarollador de videojuegos, con enfoque en Ui develoment y animación 2d, explora mis proyectos y habilidades.🕹</p>
            </div>
        </section>
    )
}

export default Inicio;