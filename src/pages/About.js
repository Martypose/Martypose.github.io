import React from 'react';
import curriculum from '../assets/Martín_Pose_-_Software_Developer.pdf';
import ExperienceTimeline from '../components/ExperienceTimeline';

const About = () => {
  return (
    <div className="content-container">
    <div className="about">
      <p>Soy Martín Pose, un desarrollador de software con más de dos años de experiencia.</p> 
      <p>Me apasiona el campo de la inteligencia artificial y el big data, lo que me ha llevado a desarrollar proyectos personales en React, Node.js, Express y Raspberry Pi.</p>

<p>A lo largo de mi carrera, he demostrado ser adaptable y siempre busco crecimiento profesional en el ámbito tecnológico. Mis habilidades incluyen el desarrollo de aplicaciones web con React y la creación de API REST utilizando Express y Node.js. También he trabajado con Flask en Raspberry Pi para implementar soluciones de visión por computadora en tiempo real.

</p><p>Mi formación académica incluye un título de Técnico Superior en Desarrollo de Aplicaciones Informáticas y un curso de especialización en Inteligencia Artificial y Big Data. En estos programas, adquirí habilidades en tecnologías como Apache Hadoop, Spark, Kafka, Python, OpenCV, TensorFlow y Keras. También me familiaricé con el web scraping utilizando Selenium y BeautifulSoup, y realicé análisis y visualización de datos con Pandas y Matplotlib.</p>
      
      <ExperienceTimeline />
      <a href={curriculum} download="Curriculum_Martin_Pose.pdf">Descargar currículum</a>
    </div>
    </div>
  );
};

export default About;
