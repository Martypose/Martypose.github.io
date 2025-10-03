import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  margin: 1rem;
  padding: 1.5rem;
  max-width: 350px;
  background: var(--color-card);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  text-align: center;
  color: var(--color-text);
`;

const Description = styled.p`
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.85;
`;

const MetaInfo = styled.p`
  font-size: 0.85rem;
  opacity: 0.7;
  margin-top: 0.5rem;
  text-align: center;
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

const CardCertificado = ({ logo, title, description, fecha_espedicion, empresaEmisora, link }) => {
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
      <MetaInfo>{empresaEmisora} • {fecha_espedicion}</MetaInfo>
    </CardContainer>
  );
};

export { Card, CardCertificado, MetaInfo };
