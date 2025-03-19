import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const ViewPlaceAventura = () => {
    const {id} = useParams();
    const [lugar, setLugar] = useState([]);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Aventura/Lugares')
    }
  return (
    <div>ViewPlaceAventura</div>
  )
}

export default ViewPlaceAventura