import React from "react";
import "./Projects.css";
import CatastropheZ from "../assets/BANNER-CATASTROPHE-Z.jpg";
import AirborneChaos from "../assets/AirborneChaos.jpg";
import MichiHunter from "../assets/MichiHunter.jpg";
import JumpingGnome from "../assets/CoverItchio.png";
import GummyCat from "../assets/GummyCat.png";


const projects = [
    {
        title: "Catastrophe Z",
        description: "Un juego de supervivencia en un mundo post-apocalíptico lleno de zombis.",
        image: CatastropheZ,
        link: "https://danieldajj.itch.io/cat-astrophe-z"
    },
    {
        title: "Airborne Chaos",
        description: "Eres el piloto de un globo aerostático con una única misión: no chocar contra nada.",
        image: AirborneChaos,
        link: "https://danieldajj.itch.io/airbon"
    },
    {
        title: "Michi Hunter",
        description: "Una plaga ha infestado la ciudad. Un parásito desconocido ha convertido a las ratas en criaturas agresivas que atacan sin piedad, infectando a los humanos y condenándolos a una muerte inevitable.",
        image: MichiHunter,
        link: "https://danieldajj.itch.io/michi-hunter"
    },
    {
        title: "Jumping Gnome",
        description: "Es un vibrante juego de plataformas 3D en el que controlas a un pequeño y ágil gnomo que debe saltar y desplazarse a través de un desafiante escenario flotante.",
        image: JumpingGnome,
        link: "https://danieldajj.itch.io/jumping-gnome"
    },
    {
        title: "Gummy Cat",
        description: "¡Un gatito de chicle debe sobrevivir al ambiente más hostil, la boca de un niño!",
        image: GummyCat,
        link: "https://gissg.itch.io/gummy-cat"
    }
]
const Proyectos = () => {
    return(
        <section className="proyectos" id="proyectos">
            <h2>Mis proyectos</h2>
            <h4>Estos son algunos de mis mejores proyectos</h4>
            <div className="projects-grid">
                {projects.map((project, index)=>(
                    <a key={index} href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Proyectos;