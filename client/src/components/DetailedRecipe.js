import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailedRecipe = () => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();

  useEffect(() => {
    Axios.get(
      `https://secret-family-recipies.herokuapp.com/api/recipies/${id}`
    ).then((res) => setRecipe(res.data));
  }, [setRecipe]);

  const RecipeInfo = () => {
    const { image, title, instructions, ingredients, categories } = recipe;

    return (
      <div>
        <img src={image} alt={`Image for ${title}`} />
        <h1>{title}</h1>
        <p>{instructions}</p>
        <ul>
          {ingredients
            ? ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name}</li>
              ))
            : null}
        </ul>
        <ul>
          {categories
            ? categories.map((category, index) => (
                <li key={index}>{category.name}</li>
              ))
            : null}
        </ul>
      </div>
    );
  };

  return recipe ? RecipeInfo() : null;
};

export default DetailedRecipe;
