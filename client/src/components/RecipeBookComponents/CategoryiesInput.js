import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../redux/actions/Recipe.actions";

const CategoryiesInput = () => {
  const [categoryInput, setCategoryInput] = useState("");

  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.RecipeForm.category);

  const submittingCategory = () => {
    if (!categoryInput) {
      alert("You need to type something to add categories.");
    } else {
      dispatch(addCategory(categoryInput));
      setCategoryInput("");
    }
  };

  return (
    <>
      <span>
        {categoryState.map(({ name }, index) => (
          <p key={index}>{name}</p>
        ))}
      </span>
      Category
      <input
        value={categoryInput}
        onChange={(e) => setCategoryInput(e.target.value)}
        name="category"
        id="category"
        type="text"
      />
      <button onClick={submittingCategory}>Add Category</button>
    </>
  );
};

export default CategoryiesInput;
