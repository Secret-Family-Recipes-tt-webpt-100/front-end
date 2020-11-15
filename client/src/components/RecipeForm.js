import React, { useState } from "react";

import FormStyles from "../styles/Form.styles";

import { addCategoryUtil } from "../utils/RecipeFormUtils";
import IngredientMeasurements from "./RecipeBookComponents/IngredientMeasurements";

import { useDispatch, useSelector } from "react-redux";
import { formOnChange } from "../redux/actions/Recipe.actions";

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    source: "",
    instructions: "",
    ingredients: [],
    category: [],
  });

  // Redux State Handlers
  const reduxFormData = useSelector((state) => state.RecipeForm);
  const dispatch = useDispatch();

  const [categoryInput, setCategoryInput] = useState("");

  const addCategory = (e) =>
    addCategoryUtil(e)({
      formData,
      categoryInput,
      setFormData,
      setCategoryInput,
    });

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
        <span>
          {formData.category.map((category, index) => (
            <p key={index}>{category.name}</p>
          ))}
        </span>
        Category
        <input
          onChange={(e) => setCategoryInput({ name: e.target.value })}
          name="category"
          id="category"
          type="text"
          value={categoryInput.name}
        />
        <button onClick={addCategory}>Add Category</button>
      </label>
      <input type="submit" value="Create Recipe" />
    </FormStyles>
  );
};

export default RecipeForm;
