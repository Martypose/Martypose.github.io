import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceTimeline = () => (
  <VerticalTimeline className="custom-line">
    <VerticalTimelineElement
      date="jun. 2023 - actualidad"
      contentStyle={{ background: 'var(--color-card)', color: 'var(--color-text)' }}
      contentArrowStyle={{ borderRight: '7px solid var(--color-card)' }}
      iconStyle={{ background: 'var(--color-timeline)', color: 'var(--color-timeline-text)' }}
    >
      <h3>Programador full stack</h3>
      <h4>Imatia</h4>
      <p>La Coruña, Galicia / Galiza, España</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      date="feb. 2021 - jun. 2023"
      contentStyle={{ background: 'var(--color-card)', color: 'var(--color-text)' }}
      contentArrowStyle={{ borderRight: '7px solid var(--color-card)' }}
      iconStyle={{ background: 'var(--color-timeline)', color: 'var(--color-timeline-text)' }}
    >
      <h3>Desarrollador de software</h3>
      <h4>Minsait</h4>
      <p>
        Desarrollando Software para empresa de energía Naturgy. Trabajando con Java y Oracle SQL mayormente en backend.
        Realizando despliegues de software a diferentes entornos, probando migraciones de aplicaciones a nube Oracle,
        mantenimiento de dichos entornos. Breves desarrollos con PowerBuilder y JSP en frontend.
      </p>
      <p>A Coruña</p>
    </VerticalTimelineElement>
    {/* Aquí puedes seguir agregando más elementos de línea de tiempo para tus otras experiencias */}
  </VerticalTimeline>
);

export default ExperienceTimeline;