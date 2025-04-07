import React from 'react';
import Navbar from './components/NavBar.jsx';
import Inicio from './components/Banner.jsx';
import Proyectos from './components/Projects.jsx';
import CV from './components/CV.jsx';
import Herramientas from './components/Tools.jsx';
import Footer from './components/Footer.jsx';
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Inicio />
      <Proyectos />
      <CV />
      <Herramientas />
      <Footer />
    </>
  );
}

export default App;