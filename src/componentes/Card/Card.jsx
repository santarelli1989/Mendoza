import './Card.css'
import imagen from '../../assets/imgCard/Bodegas.jpg'
import imagen2 from '../../assets/imgCard/Aventura.jpg'
import imagen3 from '../../assets/imgCard/Alojamientos.jpg'
import imagen4 from '../../assets/imgCard/Instructores.jpg'
import { Link } from 'react-router-dom'

const arrCard = [
  {
    imagen: ({imagen}), 
    nombre: 'Bodegas', // Título de la tarjeta
    link: '/bodegas', // Ruta del enlace
    textoLink: 'Visitar Bodegas' // Texto del enlace
  },
  {
    imagen: ({imagen2}),
    nombre: 'Aventura',
    link: '/aventura',
    textoLink: 'Explorar Aventura'
  },
  {
    imagen: ({imagen3}),
    nombre: 'Alojamientos',
    link: '/alojamientos',
    textoLink: 'Ver Alojamientos'
  },
  {
    imagen: ({imagen4}),
    nombre: 'Instructores',
    link: '/instructores',
    textoLink: 'Conocer Instructores'
  },
]

function Card({arrCard} ) {
  {
  arrCard.map(card =>{
    
    <div className="card" style="width: 18rem;">
        <img src={card.imagen} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{card.nombre}</h5>
        <Link to="#" className="btn btn-primary">{card.link}</Link>
      </div>
    </div>
  })
  }
}

export default Card;