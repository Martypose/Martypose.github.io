import React from 'react';
import profileImage from '../assets/fotocarnet.png';
import emailIcon from '../assets/email_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';
import githubIcon from '../assets/github_icon.png';

const Header = () => {
  const name = 'Martín Pose Pose';
  const title = 'Desarrollador de software';

  return (
    <header>
      <div className="header-content">
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
