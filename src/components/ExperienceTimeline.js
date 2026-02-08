import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import imatia from '../assets/imatia.jpg';
import minsait from '../assets/minsait.jpg';

const iconStyle = (bg) => ({
  background: bg,
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const imgStyle = {
  width: '70%',
  height: '70%',
  objectFit: 'contain',
};

const contentStyle = {
  background: 'var(--bg-card)',
  color: 'var(--text-primary)',
  border: '1px solid var(--glass-border)',
  boxShadow: 'var(--shadow)',
  backdropFilter: 'blur(10px)',
};

const arrowStyle = {
  borderRight: '7px solid var(--glass-border)',
};

const ExperienceTimeline = () => (
  <VerticalTimeline className="custom-line" lineColor="var(--accent-primary)">
    {/* Madeiras Estanqueiro */}
    <VerticalTimelineElement
      date="2024 - actualidad"
      contentStyle={contentStyle}
      contentArrowStyle={arrowStyle}
      iconStyle={iconStyle('linear-gradient(135deg, #667eea, #764ba2)')}
      icon={
        <span
          role="img"
          aria-label="Vision"
          style={{ fontSize: '1.4rem' }}
        >
          🔬
        </span>
      }
    >
      <h3>Ingeniero de Visión Artificial</h3>
      <h4>Madeiras Estanqueiro</h4>
      <p>
        • Sistemas de visión por computadora en tiempo real
        <br />
        • Modelos de deep learning para detección y medición automática
        <br />
        • Dashboard de monitorización full-stack
        <br />
        • Integración IoT con líneas de producción
      </p>
      <div className="tech-tags">
        <span className="tech-tag">Python</span>
        <span className="tech-tag">YOLO</span>
        <span className="tech-tag">OpenCV</span>
        <span className="tech-tag">React</span>
        <span className="tech-tag">Node.js</span>
      </div>
    </VerticalTimelineElement>

    {/* Imatia */}
    <VerticalTimelineElement
      date="jun. 2023 - 2024"
      contentStyle={contentStyle}
      contentArrowStyle={arrowStyle}
      iconStyle={iconStyle('rgb(227, 52, 60)')}
      icon={
        <img src={imatia} alt="Imatia" style={imgStyle} />
      }
    >
      <h3>Programador Full Stack</h3>
      <h4>Imatia</h4>
      <p>
        • Spring + Angular + PostgreSQL
        <br />
        • ETLs Python
        <br />
        • CI/CD con Jenkins
      </p>
      <div className="tech-tags">
        <span className="tech-tag">Java</span>
        <span className="tech-tag">Spring</span>
        <span className="tech-tag">Angular</span>
        <span className="tech-tag">PostgreSQL</span>
      </div>
    </VerticalTimelineElement>

    {/* Minsait */}
    <VerticalTimelineElement
      date="feb. 2021 - jun. 2023"
      contentStyle={contentStyle}
      contentArrowStyle={arrowStyle}
      iconStyle={iconStyle('rgb(28, 59, 75)')}
      icon={
        <img src={minsait} alt="Minsait" style={imgStyle} />
      }
    >
      <h3>Desarrollador de Software</h3>
      <h4>Minsait — Naturgy</h4>
      <p>
        • Backend Java + Oracle SQL
        <br />
        • Migraciones a Oracle Cloud
        <br />
        • PowerBuilder & JSP
      </p>
      <div className="tech-tags">
        <span className="tech-tag">Java</span>
        <span className="tech-tag">Oracle</span>
        <span className="tech-tag">Cloud</span>
        <span className="tech-tag">JSP</span>
      </div>
    </VerticalTimelineElement>
  </VerticalTimeline>
);

export default ExperienceTimeline;