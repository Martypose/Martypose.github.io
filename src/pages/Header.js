import React, { useState, useEffect } from 'react';
import profileImage from '../assets/MPP.jpg';
import emailIcon from '../assets/email_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';
import githubIcon from '../assets/github_icon.png';
import { Carousel } from 'react-bootstrap';


const Header = () => {
  const [theme, setTheme] = useState('light');
  const handleSliderClick = (event) => {
    const newValue = event.target.value;
    setTheme(newValue > 50 ? 'dark' : 'light');
  };

  const name = 'Martín Pose Pose';
  const title = 'Desarrollador de software';

  useEffect(() => {
    const root = document.documentElement;
  
/* En el useEffect, añade estas líneas para cambiar los colores de fondo del body y las tarjetas del proyecto */
if (theme === 'dark') {
  // Cambiar a modo oscuro
  root.style.setProperty("--color-bg", "#333333");
  root.style.setProperty("--color-text", "#ffffff");
  root.style.setProperty("--color-header", "#182848");
  root.style.setProperty("--color-card", "#424242"); // Cambiar el color de fondo de las tarjetas del proyecto
  root.style.setProperty("--color-card-shadow", "rgba(255, 255, 255, 0.5)"); // Cambiar el box-shadow a blanco
} else {
  // Cambiar a modo claro
  root.style.setProperty("--color-bg", "#ffffff");
  root.style.setProperty("--color-text", "#333333");
  root.style.setProperty("--color-header", "#4b6cb7");
  root.style.setProperty("--color-card", "#fff"); // Cambiar el color de fondo de las tarjetas del proyecto
  root.style.setProperty("--color-card-shadow", "rgba(0, 0, 0, 0.5)"); // Cambiar el box-shadow a negro
}
  }, [theme]);

  return (
    <header>
      <div className="header-content">
      <input
          type="range"
          min="0"
          max="100"
          value={theme === 'dark' ? 100 : 0}
          onChange={handleSliderClick}
        />
        <div className="header-image">
          <img className="profile-image" src={profileImage} alt="Carnet" />
        </div>
        <div className='header-name'>
        <h1>{name}</h1>
        <p>{title}</p>
        </div>
        <div className="header-contact">
          <a href="mailto:martinpose@hotmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/mart%C3%ADn-pose-38a7911a8/" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Martypose" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
   
    </header>
  );
};

export default Header;
