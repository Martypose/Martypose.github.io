import React from 'react';
import fotocarnet from '../assets/fotocarnet.png';
import Navbar from './Navbar';

const projectsData = [
  {
    name: 'API REST con Node/Express',
    description: 'API REST usando MySQL, Socket y otras librerías.',
    repoLink: 'https://github.com/Martypose/Express_MadEst',
  },
  // Agrega más proyectos siguiendo el mismo formato
];

const Projects = () => {
  return (
    <div className="content-container">
    <div className="projects">
      <ul>
        {projectsData.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Repositorio en GitHub</a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Projects;