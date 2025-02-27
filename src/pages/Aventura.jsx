import Hero from '../componentes/Hero/Hero';
import HeroAventura from '../componentes/TurismoAventura/HeroAventura/HeroAventura';
import TextoPresentacion from '../componentes/TurismoAventura/TextoPresentacion/TextoPresentacion';
import CardsLugaresContainer from '../componentes/TurismoAventura/CardsLugares/CardsLugaresContainer';
import StaffAventura from '../componentes/TurismoAventura/StaffAventura/StaffAventura';

function Aventura() {
  return (
    <>
      <HeroAventura/>
      <TextoPresentacion/>
      <CardsLugaresContainer/>
      <StaffAventura/>
    </>
  )
}

export default Aventura