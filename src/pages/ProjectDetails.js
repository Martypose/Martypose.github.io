import React from 'react';
import { useLocation } from 'react-router-dom';

const ProjectDetails = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const name = params.get('name');
    const description = params.get('description');
    const image = params.get('image');
  
    // El resto de tu componente


  return (
    <div className="content-container">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  );
};

export default ProjectDetails;