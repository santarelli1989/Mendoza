import "./cardsLugares.css";
import { useNavigate } from "react-router-dom";
const CardsLugares = (props) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/Lugar/${id}`);
  };
  return (
    <>
      <div className="col">
        <div className="card mt-3">
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body" onClick={() => handleClick(props.id)}>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href=''>
              <div className="card-content">
                <h1 className="card-title">Lorem ipsum dolor sit amet.</h1>
                <p className="card-title">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, saepe?
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsLugares;
