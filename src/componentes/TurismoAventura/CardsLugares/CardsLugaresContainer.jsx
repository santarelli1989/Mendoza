import React from "react";
import CardsLugares from "./CardsLugares";
import infoLugaresF1 from "../infoLugaresF1.js";
import infoLugaresF2 from "../infoLugaresF2.js";

const CardsLugaresContainer = () => {
  return (
    <section className="container">
      <div className="row">
        {infoLugaresF1.map((infoLugarF1, id) => (
          <CardsLugares
            key={id}
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
            description={infoLugar2.description}
            href={infoLugar2.href}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsLugaresContainer;
