import React from 'react';
import { CardCertificado } from './Card';
import styled from 'styled-components';
import logoGit from '../assets/git.jpg';
import logoSolid from '../assets/solid.png';
const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const educationData = [
    // Agrega tu formación aquí siguiendo el formato de ejemplo
    {
      institution: 'CPR Plurilingüe Karbo',
      degree: 'Técnico Superior en Desarrollo de Aplicaciones Informáticas',
      description: '• Desarrollos con Java-MySQL-HTML/JS-PHP para webs y apps de escritorio.\n• Desarrollos móvil con Android (Java) y Flutter (Dart).\n• Juego desarrollado con C# con motor Unity.\n• Trabajo final multiplataforma utilizando Flutter para app móvil, React(JS) para web\n• Node-MySQL para backend.',
      startDate: '2018-09-01',
      endDate: '2020-09-01',
    },
  
    {
      institution: 'IES Fernando Wirtz Suárez',
      degree: 'Curso especialización Inteligencia Artificial y Big Data',
      description: 'Adquirí habilidades en Big Data, programación de IA y aprendizaje automático, trabajando con tecnologías como Apache Hadoop, Spark y Kafka.\n\n Aprendí a utilizarPython, OpenCV, TensorFlow y Keras para desarrollar soluciones inteligentes y creativas. \n\nMe familiaricé con el web scraping usando Selenium y BeautifulSoup, y realicé análisis y visualización de datos con Pandas y Matplotlib.\n Además, gané experiencia en el uso de Docker y conceptos de redes para mejorar la eficiencia en el desarrollo.',
      startDate: '2022-11-01',
      endDate: 'Presente',
    }
  ];
  
  const certificadosData = [
    {
      name: 'GIT+GitHub: Todo un sistema de control de versiones de cero',
      empresaEmisora: 'Udemy',
      description: 'Curso de 12h sobre el sistema de control de versiones.',
      logo: logoGit,
      fecha_espedicion: '2022-09-14',
      link: 'https://www.udemy.com/certificate/UC-8c6c6cd5-151f-4195-bc76-338131150397/'
    },
    {
      name: 'SOLID Principles: Introducing Software Architecture & Design',
      empresaEmisora: 'Udemy',
      description: 'Curso de 2h sobre los principios de diseño SOLID en software.',
      logo: logoSolid,
      fecha_espedicion: '2022-09-15',
      link: 'https://www.udemy.com/certificate/UC-18d21047-46ba-4329-ae37-b23bdce830e9/'


    }
  
    // Agrega más proyectos siguiendo el mismo formato
  ];  


const Education = () => {
  return (
    <div className="content-container">
    <div className="education">
      <ul>
        {educationData.map((education, index) => (
          <li key={index}>
            <h3>{education.degree}</h3>
            <p>
  {education.description.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {line}
      <br />
    </React.Fragment>
  ))}
</p>
            <p>{education.institution}</p>
            <p>{education.startDate} — {education.endDate}</p>
          </li>
        ))}
      </ul>
      <br></br>
      <h2>Certificados</h2>
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
