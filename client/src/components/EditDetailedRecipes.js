import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesInput from './RecipeBookComponents/CategoriesInput';
import IngredientMeasurements from './RecipeBookComponents/IngredientMeasurements';

import FormStyles from '../styles/Form.styles';
import { clearFormState, formOnChange } from '../redux/actions/Recipe.actions';
import Axios from 'axios';

const EditDetailedRecipes = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedRecipe, setSelectedRecipe] = useState();

  const reduxOnChange = (e) => dispatch(formOnChange(e.target));

  useEffect(() => {
    Axios.get(
      `https://secret-family-recipies.herokuapp.com/api/recipies/${id}`
    ).then(({ data }) => setSelectedRecipe(data));
    return dispatch(clearFormState);
  }, [setSelectedRecipe]);

  const renderForm = () => {
    if (selectedRecipe) {
      const {
        description,
        instructions,
        source,
        title,
        ingredients,
      } = selectedRecipe;
      return (
        <FormStyles
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2>Recipe Form</h2>
          <label htmlFor="title">
            Title
            <input
              onChange={reduxOnChange}
              id="title"
              name="title"
              type="text"
              value={title}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              onChange={reduxOnChange}
              name="description"
              id="description"
              value={description}
            ></textarea>
          </label>
          <label htmlFor="source">
            Source
            <input
              onChange={reduxOnChange}
              id="source"
              name="source"
              type="text"
              value={source}
            />
          </label>
          <label htmlFor="instructions">
            Instructions
            <textarea
              onChange={reduxOnChange}
              name="instructions"
              type="text"
              value={instructions}
            />
          </label>
          <IngredientMeasurements ingredients={ingredients} />
          <CategoriesInput />
        </FormStyles>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  };

  return renderForm();
};

export default EditDetailedRecipes;
