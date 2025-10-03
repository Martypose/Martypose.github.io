import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import imatia from '../assets/imatia.jpg';
import minsait from '../assets/minsait.jpg';

const ExperienceTimeline = () => (
  <VerticalTimeline className="custom-line">
    <VerticalTimelineElement
      date="jun. 2023 - actualidad"
      contentStyle={{ background: 'var(--color-card)', color: 'var(--color-text)' }}
      contentArrowStyle={{ borderRight: '7px solid var(--color-card)' }}
      iconStyle={{ 
          background: 'rgb(227,52,60)', 
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
      }}
      icon={<img src={imatia} alt="imatiaIcon" style={{width: '70%', height: '70%', objectFit: 'contain'}}/>}
    >
      <h3>Programador Full Stack</h3>
      <h4>Imatia</h4>
      <p>• Spring + Angular + PostgreSQL<br/>• ETLs Python<br/>• CI/CD con Jenkins</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      date="feb. 2021 - jun. 2023"
      contentStyle={{ background: 'var(--color-card)', color: 'var(--color-text)' }}
      contentArrowStyle={{ borderRight: '7px solid var(--color-card)' }}
      iconStyle={{ 
          background: 'rgb(28,59,75)', 
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
      }}
      icon={<img src={minsait} alt="minsaitIcon" style={{width: '70%', height: '70%', objectFit: 'contain'}}/>}
    >
      <h3>Desarrollador de software</h3>
      <h4>Minsait - Naturgy</h4>
      <p>• Backend Java + Oracle SQL<br/>• Migraciones a Oracle Cloud<br/>• PowerBuilder & JSP</p>
    </VerticalTimelineElement>
    {/* Aquí puedes seguir agregando más elementos de línea de tiempo para tus otras experiencias */}
  </VerticalTimeline>
);

export default ExperienceTimeline;