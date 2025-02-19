import './Card.css'
import imagen from '../../assets/imgCard/Bodegas.jpg'
import imagen2 from '../../assets/imgCard/Aventura.jpg'
import imagen3 from '../../assets/imgCard/Alojamientos.jpg'
import imagen4 from '../../assets/imgCard/Instructores.jpg'
import { Link } from 'react-router-dom'




function Card() {
  <div>
    <div className="card" style="width: 18rem;">
        <img src={imagen} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Bodegas</h5>
        <Link to="#" className="btn btn-primary">Visitar</Link>
      </div>
    </div>
</div>
  
}

export default Card;