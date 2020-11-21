import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import Axios from 'axios';
import HomeStyles from '../styles/Home.styles';

const Home = () => {
  const [recipes, setRecipes] = useState();

  useEffect(
    () =>
      Axios.get(
        'https://secret-family-recipies.herokuapp.com/api/recipies'
      ).then((res) => setRecipes(res.data)),
    [setRecipes]
  );

  return (
    <HomeStyles>
      <h1>Home Page</h1>
      <div className="recipe-list">
        {recipes
          ? recipes.map((recipe) => {
              return <Recipe key={recipe.id} recipe={recipe} />;
            })
          : null}
      </div>
    </HomeStyles>
  );
};

export default Home;
