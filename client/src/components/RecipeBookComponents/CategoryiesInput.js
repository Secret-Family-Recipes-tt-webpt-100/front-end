import React, { useState } from "react";
import { addCategoryUtil } from "../../utils/RecipeFormUtils";

const CategoryiesInput = () => {
  const [categoryState, setCategoryState] = useState();
  const [categoryInput, setCategoryInput] = useState();

  const addCategory = (e) => addCategoryUtil(e)();

  return (
    <>
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
    </>
  );
};

export default CategoryiesInput;
