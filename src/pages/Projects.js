import React from 'react';
import esquema_raspOCV from '../assets/esquema_raspOCV.png';

const projectsData = [
  {
    name: 'Medidor producción en tiempo real.',
    description: 'Usando una raspberry, una camara y conexion a internet he realizado un proyecto de vision de computadora.\n'+
    'Para ello se han elegido las siguientes tecnologías:\n\n • Webserver con Flask. \n• OpenCV para procesamiento de imágenes, detección y medición de objetos.'+
    '\n• Socketio para comunicarse con un servidor externo donde se guardarán'+
    ' y analizarán los datos para mostrarlos a cualquier aplicación que consuma esa API.'+
    '\n\n Aqui muestro un diagrama de algunos elementos utilizados en el montaje.',
    repoLink: null,
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
              <p>  {project.description.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {line}
      <br />
    </React.Fragment>
  ))}</p>
  {project.repoLink !== null && (
  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Repositorio en GitHub</a>
)}
            </li>
          ))}
        </ul>
        <img src={esquema_raspOCV} alt="Esquema Raspberry Pi y OpenCV" className="project-image" />
      </div>
    </div>
  );
};

export default Projects;