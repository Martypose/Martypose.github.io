import React from 'react';
import curriculum from '../assets/Martín_Pose_-_Software_Developer.pdf';
import ExperienceTimeline from '../components/ExperienceTimeline';

const About = () => {
  return (
    <div className="content-container">
    <div className="about">
      <div className="about-intro">
        <h2>Desarrollador Full Stack</h2>
        <p>Apasionado por la IA, Big Data y soluciones innovadoras</p>
      </div>

      <div className="skills-section">
        <div className="skill-category">
          <h3>🚀 Backend</h3>
          <p>Java • Spring • Node.js • Express • Python • Flask</p>
        </div>
        <div className="skill-category">
          <h3>💡 Frontend</h3>
          <p>React • Angular • Flutter</p>
        </div>
        <div className="skill-category">
          <h3>📊 Data & AI</h3>
          <p>TensorFlow • OpenCV • Hadoop • Spark • Kafka</p>
        </div>
        <div className="skill-category">
          <h3>🗄️ Databases</h3>
          <p>PostgreSQL • MySQL • Oracle</p>
        </div>
      </div>

      <h2 className="section-title">Experiencia Profesional</h2>
      <ExperienceTimeline />
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href={curriculum} download="Curriculum_Martin_Pose.pdf" className="download-btn">
          📄 Descargar Currículum
        </a>
      </div>
    </div>
    </div>
  );
};

export default About;
