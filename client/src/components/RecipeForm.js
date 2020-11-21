import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

import IngredientMeasurements from './RecipeBookComponents/IngredientMeasurements';
import CategoriesInput from './RecipeBookComponents/CategoriesInput';
import { formOnChange } from '../redux/actions/Recipe.actions';

import FormStyles from '../styles/Form.styles';

const RecipeForm = () => {
  // Redux State Handlers
  const RecipeFormState = useSelector((state) => state.RecipeForm);
  const sourceId = useSelector((state) => state.AuthUser.sourceId);
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { description, instructions, source, title } = RecipeFormState;

  const asyncAddItems = (type, id, itemArray) => {
    itemArray.forEach(async (item) => {
      await Axios.post(
        `https://secret-family-recipies.herokuapp.com/api/recipies/${type}/${id}`,
        item
      );
    });
  };

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

      asyncAddItems('i', postId, RecipeForm.ingredients);
      asyncAddItems('c', postId, RecipeForm.categories);
    } catch (error) {
      console.error(error);
    }
    setFormSubmitted(true);
  };

  const reduxOnChange = (e) => dispatch(formOnChange(e.target));

  return !formSubmitted ? (
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
  ) : (
    <Redirect to="/" />
  );
};

export default RecipeForm;
