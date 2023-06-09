import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--color-card-shadow);
  margin: 1rem;
  padding: 1.5rem;
  max-width: 350px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Card = ({ image, title, description, link }) => {
  return (
    <CardContainer
      onClick={() => {
        if(link !== null || link !== ''){
          window.open(`${link}`, '_blank');
        }
        
      }}
    >
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

const CardCertificado = ({ logo, title, description, fecha_espedicion,empresaEmisora, link }) => {
  return (
    <CardContainer
      onClick={() => {
        if(link !== null || link !== ''){
          window.open(`${link}`, '_blank');
        }
        
      }}
    >
      <Image src={logo} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <fecha_espedicion>{fecha_espedicion}</fecha_espedicion>
      <empresaEmisora>{empresaEmisora}</empresaEmisora>
    </CardContainer>
  );
};

export { Card, CardCertificado };
