import React from 'react';

const CardStaffAventura = (props) => {
  
  return (
    <>
      <div className="col">
        <div className="card mt-3">
          <img src={props.image} alt="StaffImage" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.href}> Conocer</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardStaffAventura;