import React from 'react';

import FormStyles from '../styles/Form.styles';

import IngredientMeasurements from './RecipeBookComponents/IngredientMeasurements';
import CategoriesInput from './RecipeBookComponents/CategoriesInput';

import { useDispatch, useSelector } from 'react-redux';
import { formOnChange } from '../redux/actions/Recipe.actions';
import Axios from 'axios';

const RecipeForm = () => {
  // Redux State Handlers
  const RecipeFormState = useSelector((state) => state.RecipeForm);
  const { description, instructions, source, title } = RecipeFormState;
  const dispatch = useDispatch();
  const sourceId = useSelector((state) => state.AuthUser.sourceId);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...RecipeFormState,
      sourceId,
    };
    try {
      const postedRecipe = await Axios.post(
        'https://secret-family-recipies.herokuapp.com/api/recipies',
        data,
        {
          headers: {
            authorization: localStorage.getItem('token'),
          },
        }
      );

      const { id: postId } = postedRecipe.data;

      await Axios.post(
        `https://secret-family-recipies.herokuapp.com/api/recipies/i/${postId}`,
        RecipeForm.ingredients
      );
      await Axios.post(
        `https://secret-family-recipies.herokuapp.com/api/recipies/c/${postId}`,
        RecipeFormState.categories
      );
    } catch (error) {
      console.error(error);
    }
  };

  const reduxOnChange = (e) => dispatch(formOnChange(e.target));

  return (
    <FormStyles onSubmit={onSubmit}>
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
      <IngredientMeasurements />
      <CategoriesInput />
      <input type="submit" value="Create Recipe" />
    </FormStyles>
  );
};

export default RecipeForm;
