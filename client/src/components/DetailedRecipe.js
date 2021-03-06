import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DefaultImage from '../img/dish.svg';
import DetailedRecipeStyles from '../styles/DetailedRecipe.styles';

const DetailedRecipe = () => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();
  const { authenticated: isAuthenticated, sourceId } = useSelector(
    (state) => state.AuthUser
  );

  useEffect(() => {
    Axios.get(
      `https://secret-family-recipies.herokuapp.com/api/recipies/${id}`
    ).then((res) => setRecipe(res.data));
  }, [setRecipe]);

  const renderFucntionButtons = () => {
    return isAuthenticated && Number(sourceId) === recipe.sourceId ? (
      <div className="function-buttons">
        <button>Edit</button>
      </div>
    ) : null;
  };

  const RecipeInfo = () => {
    const { image, title, instructions, ingredients } = recipe;

    return (
      <DetailedRecipeStyles>
        {image ? (
          <img src={image} alt={`Image for ${title}`} />
        ) : (
          <img src={DefaultImage} alt={`Image for ${title}`} />
        )}

        <h1>{title}</h1>
        <div className="instructions">
          <h3>Instructions</h3>
          <p>{instructions}</p>
        </div>
        <div className="ingredients">
          <h3>Igredients</h3>
          <ul>
            {ingredients
              ? ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.name}</li>
                ))
              : null}
          </ul>
        </div>
        {renderFucntionButtons()}
        {/* <div className="categories">
          <ul>
            {categories
              ? categories.map((category, index) => (
                  <li key={index}>{category.name}</li>
                ))
              : null}
          </ul>
        </div> */}
      </DetailedRecipeStyles>
    );
  };

  return recipe ? RecipeInfo() : null;
};

export default DetailedRecipe;
