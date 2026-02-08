import React from 'react';
import { CardCertificado } from './Card';
import logoGit from '../assets/git.jpg';
import logoSolid from '../assets/solid.png';
import logoAzure from '../assets/azure.png';

const educationData = [
  {
    institution: 'IES Fernando Wirtz Suárez',
    degree: 'Especialización en IA y Big Data',
    description:
      '• Big Data: Hadoop, Spark, Kafka\n• IA/ML: Python, TensorFlow, Keras, OpenCV\n• Web Scraping: Selenium, BeautifulSoup\n• Data Analysis: Pandas, Matplotlib',
    startDate: '2022',
    endDate: '2023',
  },
  {
    institution: 'CPR Plurilingüe Karbo',
    degree: 'Técnico Superior en Desarrollo de Aplicaciones',
    description:
      '• Full Stack: Java, MySQL, PHP, JavaScript\n• Móvil: Android, Flutter\n• Game Dev: Unity + C#',
    startDate: '2018',
    endDate: '2020',
  },
];

const certificadosData = [
  {
    name: 'Azure Fundamentals AZ-900',
    empresaEmisora: 'Microsoft',
    description: 'Fundamentos de Microsoft Azure Cloud',
    logo: logoAzure,
    fecha_espedicion: 'Abr 2023',
    link: 'https://indra.udemy.com/certificate/UC-08cff7de-06bf-4b85-876c-f74a0f3fd54d/',
  },
  {
    name: 'SOLID Principles',
    empresaEmisora: 'Udemy',
    description: 'Principios de arquitectura de software',
    logo: logoSolid,
    fecha_espedicion: 'Sep 2022',
    link: 'https://www.udemy.com/certificate/UC-18d21047-46ba-4329-ae37-b23bdce830e9/',
  },
  {
    name: 'GIT + GitHub',
    empresaEmisora: 'Udemy',
    description: 'Control de versiones avanzado',
    logo: logoGit,
    fecha_espedicion: 'Sep 2022',
    link: 'https://www.udemy.com/certificate/UC-8c6c6cd5-151f-4195-bc76-338131150397/',
  },
];

const Education = () => {
  return (
    <div className="content-container">
      <div className="education">
        <h2 className="section-title">Formación Académica</h2>
        <ul>
          {educationData.map((edu, index) => (
            <li key={index}>
              <h3>{edu.degree}</h3>
              <p style={{ fontWeight: '600', marginTop: '0.5rem', color: 'var(--text-primary)' }}>
                {edu.institution}
              </p>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  marginBottom: '1rem',
                }}
              >
                {edu.startDate} — {edu.endDate}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: '1.8' }}>
                {edu.description.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </li>
          ))}
        </ul>

        <h2 className="section-title">Certificaciones</h2>
        <div className="projects-grid">
          {certificadosData.map((cert, index) => (
            <CardCertificado
              key={index}
              logo={cert.logo}
              link={cert.link}
              empresaEmisora={cert.empresaEmisora}
              fecha_espedicion={cert.fecha_espedicion}
              title={cert.name}
              description={cert.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
