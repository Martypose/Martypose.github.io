import React from 'react';
import { Card } from './Card';
import visionIndustrial from '../assets/vision_industrial.png';
import apiimage from '../assets/api.png';
import reactimage from '../assets/react_app.png';
import flutterimage from '../assets/Flutter.png';
import analislogimage from '../assets/analislog.png';

const projectsData = [
  {
    name: 'Visión Artificial Industrial',
    description:
      'Sistema de visión por computadora en tiempo real para control de calidad en entornos de producción. Detección y medición automática mediante deep learning.',
    image: visionIndustrial,
    link: null,
    tags: ['Python', 'YOLO', 'OpenCV', 'React', 'Node.js'],
  },
  {
    name: 'API REST Node.js',
    description:
      'API backend completa con autenticación JWT, gestión de datos en tiempo real y comunicación bidireccional mediante WebSockets.',
    image: apiimage,
    link: 'https://github.com/Martypose/Express_MadEst',
    tags: ['Node.js', 'Express', 'MySQL', 'JWT', 'SocketIO'],
  },
  {
    name: 'Dashboard React',
    description:
      'Aplicación web de gestión con autenticación, visualización de datos con gráficos interactivos y diseño responsive.',
    image: reactimage,
    link: 'https://github.com/Martypose/React_MadEst',
    tags: ['React', 'Chart.js', 'JWT', 'Responsive'],
  },
  {
    name: 'App Flutter Multiplataforma',
    description:
      'Aplicación móvil multiplataforma que consume API REST propia, compilada para Android e iOS desde un mismo código fuente.',
    image: flutterimage,
    link: 'https://github.com/Martypose/Flutter_MadEst',
    tags: ['Flutter', 'Dart', 'Android', 'iOS'],
  },
  {
    name: 'Sistema de Análisis de Logs',
    description:
      'Herramienta de análisis de logs de aplicaciones con interfaz web, filtrado avanzado y exportación de datos.',
    image: analislogimage,
    link: 'https://github.com/PracticasIndra/AnalisisLog',
    tags: ['Java', 'Maven', 'JSP', 'JavaScript'],
  },
];

const Projects = () => {
  return (
    <div className="content-container">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            link={project.link}
            title={project.name}
            tags={project.tags}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;