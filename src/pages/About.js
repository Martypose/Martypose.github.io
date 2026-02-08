import React from 'react';
import ExperienceTimeline from '../components/ExperienceTimeline';

const About = () => {
  return (
    <div className="content-container">
      <div className="about">
        <div className="about-intro">
          <h2>Ingeniero Full Stack & AI</h2>
          <p>
            Apasionado por la inteligencia artificial aplicada, la visión por
            computadora y el desarrollo de soluciones innovadoras para entornos
            industriales y empresariales.
          </p>
        </div>

        <div className="skills-section">
          <div className="skill-category">
            <h3><span role="img" aria-label="AI">🤖</span> IA & Visión</h3>
            <p>Python • YOLO • OpenCV • TensorFlow • Deep Learning</p>
          </div>
          <div className="skill-category">
            <h3><span role="img" aria-label="Backend">💻</span> Backend</h3>
            <p>Java • Spring • Node.js • Express • Python • Flask</p>
          </div>
          <div className="skill-category">
            <h3><span role="img" aria-label="Frontend">⚛️</span> Frontend</h3>
            <p>React • Angular • Flutter • HTML/CSS</p>
          </div>
          <div className="skill-category">
            <h3><span role="img" aria-label="Data">📊</span> Data & Big Data</h3>
            <p>Hadoop • Spark • Kafka • Pandas • Matplotlib</p>
          </div>
          <div className="skill-category">
            <h3><span role="img" aria-label="Database">🗄️</span> Bases de Datos</h3>
            <p>PostgreSQL • MySQL • Oracle • MongoDB</p>
          </div>
          <div className="skill-category">
            <h3><span role="img" aria-label="Cloud">☁️</span> DevOps & Cloud</h3>
            <p>Docker • Linux • Azure • CI/CD • Git</p>
          </div>
        </div>

        <h2 className="section-title">Experiencia Profesional</h2>
        <ExperienceTimeline />

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="/cv/"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            <span role="img" aria-label="PDF">📄</span> Ver Currículum
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
