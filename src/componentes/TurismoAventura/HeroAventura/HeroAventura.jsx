import React from 'react';
import imagenHeroAventura from '../../../assets/img/ski.jpg';
import './HeroAventura.css';
const HeroAventura = () => {
  return (
        <div className="hero">
          <div className="hero-image">
            <img src={imagenHeroAventura} alt="viajeSki" /> 
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Aventuras Sin Limites</h1>
            <p className="hero-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, saepe?</p>
          </div>
        </div>
  )
}

export default HeroAventura;