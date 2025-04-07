import React from "react";
import "./Tools.css";
import Icono1 from "../assets/Unity.png";
import Icono2 from "../assets/Adobe_Illustrator_CC_icon.svg.png";
import Icono3 from "../assets/Adobe_Photoshop_CC_icon.png";
import Icono4 from "../assets/Adobe_After_Effects_CC_icon.png";
import Icono5 from "../assets/Figma.png";
import Icono6 from "../assets/Logo_C_sharp.png";
import Icono7 from "../assets/Git_icon.png";
import Icono8 from "../assets/GitHub.png";

const icons = [Icono1, Icono2, Icono3, Icono4, Icono5, Icono6, Icono7, Icono8];
const Herramientas = () => {
    return (
        <section className="herramientas" id="herramientas">
            <h2 className="tools-title">Herramientas que manejo</h2>
            <div className="slider">
                <div className="slide-track">
                    {icons.map((icon, i) => (
                        <div className="slide" key={`first-${i}`}>
                            <img src={icon} alt={`icon-${i}`} />
                        </div>
                    ))}
                    {/* Duplicado automático para el loop perfecto */}
                    {icons.map((icon, i) => (
                        <div className="slide" key={`second-${i}`}>
                            <img src={icon} alt={`icon-duplicate-${i}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Herramientas;