import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
     <div className="nav-container">
      <ul>
        <li>
          <NavLink to="/about" activeClassName="active">
            Sobre mí
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" activeClassName="active">
            Formación
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
