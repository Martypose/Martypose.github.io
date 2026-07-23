import React from 'react';
import ExperienceTimeline from '../components/ExperienceTimeline';

const About = () => {
  return (
    <div className="content-container">
      <div className="about">
        <div className="about-intro">
          <h2>Operations & Industrial AI Developer</h2>
          <p>
            Diseño y despliego sistemas de visión artificial en producción real.
            En Madeiras Estanqueiro (Galicia) construí Oráculo: inspección automática
            de madera con cámaras en línea, deep learning y dashboards de
            monitorización — de la captura en edge al registro de cada tabla.
          </p>
        </div>

        <div className="skills-section">
          <div className="skill-category">
            <h3><span role="img" aria-label="AI">🤖</span> IA & Visión</h3>
            <p>Python • YOLO • OpenCV • Deep Learning • GPU</p>
          </div>
          <div className="skill-category">
            <h3><span role="img" aria-label="Edge">📡</span> Edge & IoT</h3>
            <p>Raspberry Pi • ZMQ • MQTT • Edge Computing</p>
          </div>
          <div className="skill-category">
            <h3><span role="img" aria-label="Backend">💻</span> Backend</h3>
            <p>Node.js • Express • Python • Java • Spring</p>
          </div>
          <div className="skill-category">
            <h3><span role="img" aria-label="Frontend">⚛️</span> Frontend</h3>
            <p>React • Angular • HTML/CSS • Dashboards en tiempo real</p>
          </div>
          <div className="skill-category">
            <h3><span role="img" aria-label="Database">🗄️</span> Bases de Datos</h3>
            <p>PostgreSQL • MySQL • Oracle • MongoDB</p>
          </div>
          <div className="skill-category">
            <h3><span role="img" aria-label="Ops">☁️</span> Ops & Infra</h3>
            <p>Linux • systemd • Docker • CI/CD • Git</p>
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
