import React from 'react';
import { Link } from 'react-router-dom';
import RecipeStyles from '../styles/Recipe.styles';

import DefaultImage from '../img/dish.svg';

const Recipe = ({ recipe }) => {
  const { id, image, title, source } = recipe;
  return (
    <RecipeStyles key={id}>
      {image ? (
        <img src={image} alt={`Recipe for ${title}`} />
      ) : (
        <img src={DefaultImage} alt={`Recipe for ${title}`} />
      )}

      <div className="content">
        <h3>{title}</h3>
        <span>{source}</span>
        <Link to={`/recipes/${id}`}>
          <button>See More</button>
        </Link>
      </div>
    </RecipeStyles>
  );
};

export default Recipe;
