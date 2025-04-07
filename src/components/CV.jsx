import React from "react";
import "./CV.css";
import CVPDF from "../assets/Template Daniel Jaimes V3-1.pdf";
import FotoPerfil from "../assets/MyFoto.jpeg";

const CV = () => {
    return(
        <section className="cv" id="cv">
            <div className="cv-container">
                <div className="cv-foto-mask">
                    <img src={FotoPerfil} alt="Foto de Daniel Jaimes Jiménez" className="cv-foto"/>
                </div>
                <div className="cv-info">
                    <h2>Quieres saber más sobre mí?</h2>
                    <p>Descarga mi cv y descubre mis habilidades, experiencia y proyectos</p>
                    <a href={CVPDF} download className="btn-descarga">Descargar CV</a>
                </div>
            </div>
        </section>
    )
}

export default CV;