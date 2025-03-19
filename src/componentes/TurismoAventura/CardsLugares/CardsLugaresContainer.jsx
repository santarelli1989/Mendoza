import React from "react";
import CardsLugares from "./CardsLugares";
import infoLugares from "../InfoLugares";

const CardsLugaresContainer = () => {
  const infoLugaresF1 = infoLugares.slice(0,6);
  const infoLugaresF2 = infoLugares.slice(6,12);
  return (
    <section className="container">
      <div className="row">
        {infoLugaresF1.map((infoLugarF1, id) => (
          <CardsLugares
            key={id}
            id = {infoLugarF1.id}
            image={infoLugarF1.image}
            title={infoLugarF1.title}
            description={infoLugarF1.description}
            href={infoLugarF1.href}
          />
        ))}
      </div>
      <div className="row">
        {infoLugaresF2.map((infoLugar2, id) => (
          <CardsLugares
            key={id}
            title={infoLugar2.title}
            image={infoLugar2.image}
            description={infoLugar2.description}
            href={infoLugar2.href}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsLugaresContainer;
