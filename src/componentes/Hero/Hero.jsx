import React from 'react';
import imagen from '../../assets/img/carusel3.jpg'
import './Hero.css'; // Importa los estilos personalizados

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image">
        <img  src={imagen} alt="cerro aconcaga" /> 
      </div>
      <div className="hero-content">
        <h1 className="hero-title">MENDOZA</h1>
        <p className="hero-title">Tierra del sol y del buen vino</p>
      </div>
    </div>
  );
};

export default Hero;