import React from 'react';
import esquema_raspOCV from '../assets/esquema_raspOCV.png';
import { Card } from './Card';
import styled from 'styled-components';
import apiimage from '../assets/api.png';
import reactimage from '../assets/react_app.png';
import flutterimage from '../assets/Flutter.png';
import analislogimage from '../assets/analislog.png';
const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


// const projectsData = [
//   {
//     name: 'Medidor producción en tiempo real.',
//     description: 'Usando una raspberry, una camara y conexion a internet he realizado un proyecto de vision de computadora.\n'+
//     'Para ello se han elegido las siguientes tecnologías:\n\n • Webserver con Flask. \n• OpenCV para procesamiento de imágenes, detección y medición de objetos.'+
//     '\n• Socketio para comunicarse con un servidor externo donde se guardarán'+
//     ' y analizarán los datos para mostrarlos a cualquier aplicación que consuma esa API.'+
//     '\n\n Aqui muestro un diagrama de algunos elementos utilizados en el montaje.',
//     repoLink: null,
//   },

//   // Agrega más proyectos siguiendo el mismo formato
// ];

const projectsData = [
  {
    name: 'Visión por Computadora IoT',
    description: '• Raspberry Pi + Flask\n• OpenCV\n• SocketIO + API externa',
    image: esquema_raspOCV,
    link: 'https://github.com/Martypose/RaspOpenCv'
  },
  {
    name: 'API REST Node.js',
    description: '• Express + MySQL\n• JWT Auth\n• SocketIO',
    image: apiimage,
    link: 'https://github.com/Martypose/Express_MadEst'
  },
  {
    name: 'App Gestión React',
    description: '• JWT Login\n• Responsive\n• Chart.js',
    image: reactimage,
    link: 'https://github.com/Martypose/React_MadEst'
  },
  {
    name: 'Flutter Multiplataforma',
    description: '• Android/iOS\n• Consume API REST',
    image: flutterimage,
    link: 'https://github.com/Martypose/Flutter_MadEst'

  },
  {
    name: 'Análisis de Logs Java',
    description: '• Maven + DAO\n• JSP + JavaScript',
    image: analislogimage,
    link: 'https://github.com/PracticasIndra/AnalisisLog'

  }

  // Agrega más proyectos siguiendo el mismo formato
];

const Projects = () => {
  return (
    <div className="content-container">
      <h2 className="section-title">Proyectos Destacados</h2>
      <GridContainer>
        {projectsData.map((project, index) => (
          <Card key={index} image={project.image} link ={project.link} title={project.name} description={project.description.split('\n').map((line, i) => (
     <React.Fragment key={i}>
       {line}
       <br />
     </React.Fragment>
   ))} />
        ))}
      </GridContainer>
    </div>
  );
};

export default Projects;