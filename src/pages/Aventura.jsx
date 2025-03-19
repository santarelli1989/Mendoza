import Hero from '../componentes/Hero/Hero';
import HeroAventura from '../componentes/TurismoAventura/HeroAventura/HeroAventura';
import TextoPresentacion from '../componentes/TurismoAventura/TextoPresentacion/TextoPresentacion';
import StaffAventura from '../componentes/TurismoAventura/StaffAventura/StaffAventura';
import ViewLugares from './ViewLugares';

function Aventura() {
  return (
    <>
      <HeroAventura/>
      <TextoPresentacion/>
      <ViewLugares/>
      <StaffAventura/>
    </>
  )
}

export default Aventura;