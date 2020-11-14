import React, { useState } from "react";

import { onChange as customOnChange } from "../utils/FormUtils";
import FormStyles from "../styles/Form.styles";

import { addCategoryUtil } from "../utils/RecipeFormUtils";
import IngredientMeasurements from "./RecipeBookComponents/IngredientMeasurements";

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    source: "",
    instructions: "",
    ingredients: [],
    category: [],
  });

  const [categoryInput, setCategoryInput] = useState("");

  const onChange = (e) => customOnChange(e)(formData, setFormData);

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

  return (
    <FormStyles onSubmit={onSubmit}>
      <h2>Recipe Form</h2>
      <label htmlFor="title">
        Title
        <input id="title" name="title" type="text" />
      </label>
      <label htmlFor="description">
        Description
        <textarea name="description" id="description"></textarea>
      </label>
      <label htmlFor="source">
        Source
        <input id="source" name="source" type="text" />
      </label>
      <label htmlFor="instructions">
        Instructions
        <textarea name="instructions" type="text" />
      </label>
      <label htmlFor="ingredients">
        {/* TODO:
          Create Redux state for this components so no props drilling occurs
        */}
        <IngredientMeasurements formData={formData} setFormData={setFormData} />
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
