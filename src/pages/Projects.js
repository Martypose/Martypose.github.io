import React from 'react';
import esquema_raspOCV from '../assets/esquema_raspOCV.png';
import Card from './Card';
import styled from 'styled-components';
import apiimage from '../assets/api.png';
import reactimage from '../assets/react_app.png';
import flutterimage from '../assets/Flutter.png';
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
    name: 'Medidor producción con visión computadora',
    description: 'Usando una raspberry, una camara y conexion a internet he realizado un proyecto de vision de computadora.\n'+
        'Para ello se han elegido las siguientes tecnologías:\n\n • Webserver con Flask. \n• OpenCV para procesamiento de imágenes, detección y medición de objetos.'+
        '\n• Socketio para comunicarse con un servidor externo donde se guardarán'+
         ' y analizarán los datos para mostrarlos a cualquier aplicación que consuma esa API.',
    image: esquema_raspOCV,
  },
  {
    name: 'API Rest Node',
    description: '• Api Rest con Express. \n • MySql Database.\n • JWT Auth. \n• SocketIO event handler.',
    image: apiimage,
  },
  {
    name: 'React App Gestión Inventario y Ventas',
    description: '• JWT Login \n • Responsive.\n • Gráficas con Chart.js.',
    image: reactimage,
  },
  {
    name: 'Flutter APP Gestión Inventario',
    description: '• Consume API \n • Multiplataforma Android/iOS.\n',
    image: flutterimage,

  }

  // Agrega más proyectos siguiendo el mismo formato
];

const Projects = () => {
  return (
    <div className="content-container">
      <GridContainer>
        {projectsData.map((project, index) => (
          <Card key={index} image={project.image} title={project.name} description={project.description.split('\n').map((line, i) => (
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

// const Projects = () => {
//   return (
//     <div className="content-container">
//       <div className="projects">
//         <ul>
//           {projectsData.map((project, index) => (
//             <li key={index}>
//               <h3>{project.name}</h3>
//               <p>  {project.description.split('\n').map((line, i) => (
//     <React.Fragment key={i}>
//       {line}
//       <br />
//     </React.Fragment>
//   ))}</p>
//   {project.repoLink !== null && (
//   <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Repositorio en GitHub</a>
// )}
//             </li>
//           ))}
//         </ul>
//         <img src={esquema_raspOCV} alt="Esquema Raspberry Pi y OpenCV" className="project-image" />
//       </div>
//     </div>
//   );
// };

export default Projects;