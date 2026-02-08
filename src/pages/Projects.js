import React from 'react';
import { Card } from './Card';
import visionIndustrial from '../assets/vision_industrial.png';
import apiBackend from '../assets/api_backend.png';
import dashboard from '../assets/dashboard.png';
import mapaOrigenes from '../assets/mapa_origenes.png';

const projectsData = [
  {
    name: 'Visión Artificial Industrial',
    description:
      'Sistema de visión por computadora en tiempo real para control de calidad en entornos de producción. Detección y medición automática mediante deep learning.',
    image: visionIndustrial,
    link: null,
    tags: ['Python', 'YOLO', 'OpenCV', 'ZMQ', 'Edge Computing'],
  },
  {
    name: 'Dashboard de Monitorización',
    description:
      'Panel de control full-stack para monitorización industrial en tiempo real con gráficos interactivos, alertas y gestión de cámaras IoT.',
    image: dashboard,
    link: null,
    tags: ['React', 'Node.js', 'Chart.js', 'WebSocket', 'MySQL'],
  },
  {
    name: 'API REST Industrial',
    description:
      'Backend escalable con autenticación JWT, endpoints RESTful, comunicación en tiempo real y gestión de datos de producción.',
    image: apiBackend,
    link: null,
    tags: ['Node.js', 'Express', 'MySQL', 'JWT', 'ZMQ'],
  },
  {
    name: 'Mapa Interactivo de Orígenes',
    description:
      'Visor geoespacial de parcelas forestales con integración de catastro, búsqueda inteligente y geolocalización en tiempo real.',
    image: mapaOrigenes,
    link: null,
    tags: ['React', 'Leaflet', 'Catastro API', 'GeoJSON'],
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