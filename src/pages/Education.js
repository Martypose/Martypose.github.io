import React from 'react';
import fotocarnet from '../assets/fotocarnet.png';
import Navbar from './Navbar';

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
    </div>
    </div>
  );
};

export default Education;
