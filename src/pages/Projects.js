import React from 'react';
import { Card } from './Card';
import oraculoCover from '../assets/oraculo-linkedin-cover.png';
import oraculoCommand from '../assets/oraculo-command-center.jpg';
import apiBackend from '../assets/api_backend.png';
import mapaOrigenes from '../assets/mapa_origenes.png';

const projectsData = [
  {
    name: 'Oráculo — Visión Industrial',
    description:
      'Las clasificadoras miden tablas; Oráculo ve defectos. Sistema de visión con 7 cámaras Raspberry Pi, YOLO y medición milimétrica en menos de un segundo — nudos, resina, podredumbre y descabezados en producción real. Human-in-the-loop, registro por tabla y edge offline para que la línea no pare. Mejor aprovechamiento de la madera y menos reclamaciones.',
    image: oraculoCover,
    link: 'https://www.linkedin.com/in/mart%C3%ADn-pose-38a7911a8/',
    tags: ['Python', 'YOLO', 'OpenCV', 'ZMQ', 'Raspberry Pi', 'Edge'],
  },
  {
    name: 'Command Center — Monitorización',
    description:
      'Panel de control para Oráculo: estado de cámaras y servicios, métricas en tiempo real y acceso desde móvil. Pensado para operar la línea sin depender de estar en planta.',
    image: oraculoCommand,
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
