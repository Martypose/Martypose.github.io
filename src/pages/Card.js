import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-sm, 12px);
  margin: 0;
  padding: 0;
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(102, 126, 234, 0.2);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3),
      0 0 30px rgba(102, 126, 234, 0.08);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 60%,
      var(--bg-card) 100%
    );
    opacity: 0.6;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${CardContainer}:hover & {
    transform: scale(1.08);
  }
`;

const Content = styled.div`
  padding: 1.4rem;
`;

const Title = styled.h3`
  margin-bottom: 0.6rem;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`;

const Description = styled.p`
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
`;

const MetaInfo = styled.p`
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-top: 0.8rem;
  padding-top: 0.8rem;
  border-top: 1px solid var(--glass-border);
`;

const Card = ({ image, title, description, link, tags }) => {
  return (
    <CardContainer
      onClick={() => {
        if (link) {
          window.open(link, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {tags && tags.length > 0 && (
          <div className="tech-tags" style={{ marginTop: '1rem' }}>
            {tags.map((tag, i) => (
              <span key={i} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </Content>
    </CardContainer>
  );
};

const CardCertificado = ({
  logo,
  title,
  description,
  fecha_espedicion,
  empresaEmisora,
  link,
}) => {
  return (
    <CardContainer
      onClick={() => {
        if (link) {
          window.open(link, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      <ImageWrapper>
        <Image src={logo} alt={title} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <MetaInfo>
          {empresaEmisora} • {fecha_espedicion}
        </MetaInfo>
      </Content>
    </CardContainer>
  );
};

export { Card, CardCertificado, MetaInfo };
