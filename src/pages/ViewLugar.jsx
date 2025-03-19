import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Lugar from '../componentes/TurismoAventura/CardsLugares/Lugar';
import infoLugar from '../componentes/TurismoAventura/InfoLugares.js';

const ViewLugar = () => {
    const { id } = useParams();
    const [lugares, setLugares] = useState([]);
    
    useEffect( () => {
        setLugares(infoLugar[id-1])
    })
    

  return (
    <>
    <Lugar lugar={lugares}/>
    <div>michoacan</div>
    </>
  )
}

export default ViewLugar;