import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import Axios from 'axios';

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
    <div>
      <h2>Home Page</h2>
      <div>
        {recipes
          ? recipes.map((recipe) => {
              return <Recipe key={recipe.id} recipe={recipe} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Home;
