import React from "react";
import CardStaffAventura from "./CardStaffAventura.jsx";
import infoStaffAventura from '../infoStaffAventura.js';
const StaffAventura = () => {
  return (
    <section className="container">
      <hr />
      <h2 className="fs-1 text-center">Staff de Aventura</h2>
      <div className="row">
        {infoStaffAventura.map((infoStaff, id) =>(
          <CardStaffAventura 
          key={id}
          name = {infoStaff.name}
          description = {infoStaff.description}
          image = {infoStaff.staffImage}
          href = {infoStaff.href}
          />
        ))}
      </div>
    </section>
  );
};

export default StaffAventura;
