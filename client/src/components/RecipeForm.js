import React, { useState } from "react";

import { onChange as customOnChange } from "../utils/FormUtils";

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    source: "",
    instructions: "",
    ingredients: [],
    category: [],
  });

  const onChange = (e) => customOnChange(e)(formData, setFormData);

  return (
    <form>
      <h2>Recipe Form</h2>
      <label htmlFor="title">
        <input id="title" name="title" type="text" />
      </label>
      <label htmlFor="description">
        <textarea name="description" id="description"></textarea>
      </label>
      <label htmlFor="source">
        <input id="source" name="source" type="text" />
      </label>
      <label htmlFor="instructions">
        <textarea name="instructions" name="instructions" type="text" />
      </label>
      <label htmlFor="ingredients">
        <input name="ingredients" id="ingredients" type="text" />
      </label>
      <label htmlFor="category">
        <input name="category" id="category" type="text" />
      </label>
      <input type="submit" value="Create Recipe" />
    </form>
  );
};

export default RecipeForm;
