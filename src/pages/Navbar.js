import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <ul>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Formación
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
