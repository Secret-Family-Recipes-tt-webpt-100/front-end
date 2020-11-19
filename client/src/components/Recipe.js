import React from 'react';
import { Link } from 'react-router-dom';
import RecipeStyles from '../styles/Recipe.styles';

const Recipe = ({ recipe }) => {
  const { id, image, title, source } = recipe;
  return (
    <RecipeStyles key={id}>
      <img src={image} alt={`Recipe for ${title}`} />
      <div className="content">
        <h3>{title}</h3>
        <span>{source}</span>
        <Link to={`/recipes/${id}`}>See More</Link>
      </div>
    </RecipeStyles>
  );
};

export default Recipe;
