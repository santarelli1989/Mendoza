import "./cardsLugares.css";
const CardsLugares = (props) => {
  return (
    <>
      <div className="col">
        <div className="card mt-3">
          <img src="..." className="card-img-top" alt="..." />
          
          <div className="card-body">            
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.href} className="btn btn-primary">
              Visitar
            </a>
            <div className="card-content">
              <h1 className="card-title">Lorem ipsum dolor sit amet.</h1>
              <p className="card-title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, saepe?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsLugares;
