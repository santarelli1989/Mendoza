import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className='container '>
        <Link className="navbar-brand " to={'/'}>Tu Logo</Link> {/* Reemplaza con tu logo */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* ms-auto para alinear a la derecha */}
            <li className="nav-item">
              <Link className="nav-link" to={'/Bodegas'}>Bodegas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/Alojamiento'}>Alojamiento</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/Instructores'}>Instructores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/Aventura'}>Aventura</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to='#' id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                + Aventura
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="#">Submenu 1</Link></li>
                <li><Link className="dropdown-item" to="#">Submenu 2</Link></li>
                <li><Link className="dropdown-item" to="#">Submenu 3</Link></li>
                <li><Link className="dropdown-item" to="#">Submenu 4</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;