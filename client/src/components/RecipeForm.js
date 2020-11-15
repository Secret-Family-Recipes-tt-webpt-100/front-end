import React from "react";

import FormStyles from "../styles/Form.styles";

import IngredientMeasurements from "./RecipeBookComponents/IngredientMeasurements";
import CategoryiesInput from "./RecipeBookComponents/CategoryiesInput";

import { useDispatch } from "react-redux";
import { formOnChange } from "../redux/actions/Recipe.actions";

const RecipeForm = () => {
  // Redux State Handlers
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const reduxOnChange = (e) => dispatch(formOnChange(e.target));

  return (
    <FormStyles onSubmit={onSubmit}>
      <h2>Recipe Form</h2>
      <label htmlFor="title">
        Title
        <input onChange={reduxOnChange} id="title" name="title" type="text" />
      </label>
      <label htmlFor="description">
        Description
        <textarea
          onChange={reduxOnChange}
          name="description"
          id="description"
        ></textarea>
      </label>
      <label htmlFor="source">
        Source
        <input onChange={reduxOnChange} id="source" name="source" type="text" />
      </label>
      <label htmlFor="instructions">
        Instructions
        <textarea onChange={reduxOnChange} name="instructions" type="text" />
      </label>
      <label htmlFor="ingredients">
        <IngredientMeasurements />
      </label>
      <label htmlFor="category">
        <CategoryiesInput />
      </label>
      <input type="submit" value="Create Recipe" />
    </FormStyles>
  );
};

export default RecipeForm;
