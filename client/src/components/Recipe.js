import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  const { id, image, title, source } = recipe;
  return (
    <div key={id}>
      <img src={image} alt={`Recipe for ${title}`} />
      <h3>{title}</h3>
      <span>{source}</span>
      <Link to={`/recipes/${id}`}>See More</Link>
    </div>
  );
};

export default Recipe;
