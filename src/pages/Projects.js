import React from 'react';
import { Card } from './Card';
import visionIndustrial from '../assets/vision_industrial.png';
import apiBackend from '../assets/api_backend.png';
import dashboard from '../assets/dashboard.png';
import mapaOrigenes from '../assets/mapa_origenes.png';

const projectsData = [
  {
    name: 'Oráculo — Visión Industrial',
    description:
      'Las clasificadoras miden tablas; Oráculo ve defectos. Sistema de visión con 7 cámaras Raspberry Pi, YOLO y medición milimétrica en menos de un segundo — nudos, resina, podredumbre y descabezados en producción real. Human-in-the-loop, registro por tabla y edge offline para que la línea no pare. Mejor aprovechamiento de la madera y menos reclamaciones.',
    image: visionIndustrial,
    link: null,
    tags: ['Python', 'YOLO', 'OpenCV', 'ZMQ', 'Raspberry Pi', 'Edge'],
  },
  {
    name: 'Dashboard de Monitorización',
    description:
      'Panel de control del ecosistema Oráculo: estado de cámaras y servicios, métricas en tiempo real y acceso desde móvil para operar sin estar en planta.',
    image: dashboard,
    link: null,
    tags: ['React', 'Node.js', 'WebSocket', 'MySQL', 'Ops'],
  },
  {
    name: 'API REST Industrial',
    description:
      'Backend del ecosistema Oráculo: autenticación JWT, endpoints REST, ingestión de resultados de visión y sincronización de datos de producción.',
    image: apiBackend,
    link: null,
    tags: ['Node.js', 'Express', 'MySQL', 'JWT', 'ZMQ'],
  },
  {
    name: 'Mapa Interactivo de Orígenes',
    description:
      'Visor geoespacial de parcelas forestales con integración de catastro, búsqueda inteligente y geolocalización — trazabilidad del origen de la madera.',
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
