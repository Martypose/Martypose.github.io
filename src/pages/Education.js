import React from 'react';
import { CardCertificado } from './Card';
import styled from 'styled-components';
import logoGit from '../assets/git.jpg';
import logoSolid from '../assets/solid.png';
import logoAzure from '../assets/azure.png';
const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const educationData = [
    {
      institution: 'CPR Plurilingüe Karbo',
      degree: 'Técnico Superior en Desarrollo de Aplicaciones',
      description: '• Full Stack: Java, MySQL, PHP, JavaScript\n• Móvil: Android, Flutter\n• Unity + C#',
      startDate: '2018',
      endDate: '2020',
    },
  
    {
      institution: 'IES Fernando Wirtz Suárez',
      degree: 'Especialización IA y Big Data',
      description: '• Big Data: Hadoop, Spark, Kafka\n• IA/ML: Python, TensorFlow, Keras, OpenCV\n• Web Scraping: Selenium, BeautifulSoup\n• Data Analysis: Pandas, Matplotlib',
      startDate: '2022',
      endDate: 'Presente',
    }
  ];
  
  const certificadosData = [
    {
      name: 'GIT + GitHub',
      empresaEmisora: 'Udemy',
      description: 'Control de versiones (12h)',
      logo: logoGit,
      fecha_espedicion: 'Sep 2022',
      link: 'https://www.udemy.com/certificate/UC-8c6c6cd5-151f-4195-bc76-338131150397/'
    },
    {
      name: 'SOLID Principles',
      empresaEmisora: 'Udemy',
      description: 'Arquitectura de software (2h)',
      logo: logoSolid,
      fecha_espedicion: 'Sep 2022',
      link: 'https://www.udemy.com/certificate/UC-18d21047-46ba-4329-ae37-b23bdce830e9/'
    },
    {
      name: 'Azure Fundamentals AZ-900',
      empresaEmisora: 'Udemy',
      description: 'Microsoft Azure Cloud (6.5h)',
      logo: logoAzure,
      fecha_espedicion: 'Abr 2023',
      link: 'https://indra.udemy.com/certificate/UC-08cff7de-06bf-4b85-876c-f74a0f3fd54d/'
    }
  ];  


const Education = () => {
  return (
    <div className="content-container">
    <div className="education">
      <h2 className="section-title">Formación Académica</h2>
      <ul>
        {educationData.map((education, index) => (
          <li key={index}>
            <h3>{education.degree}</h3>
            <p style={{ fontWeight: '600', marginTop: '0.5rem' }}>{education.institution}</p>
            <p style={{ opacity: '0.7', fontSize: '0.9rem', marginBottom: '1rem' }}>{education.startDate} — {education.endDate}</p>
            <p>
  {education.description.split('\n').map((line, i) => (
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
      <GridContainer>
        {certificadosData.map((certificado, index) => (
          <CardCertificado key={index} logo={certificado.logo} link ={certificado.link} empresaEmisora={certificado.empresaEmisora} fecha_espedicion={certificado.fecha_espedicion} title={certificado.name} description={certificado.description.split('\n').map((line, i) => (
     <React.Fragment key={i}>
       {line}
       <br />
     </React.Fragment>
   ))} />
        ))}
      </GridContainer>
    </div>
    </div>
  );
};

export default Education;
