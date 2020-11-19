import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../redux/actions/Recipe.actions';
import CategoriesInputStyles from '../../styles/CategoriesInput.styles';

const CategoriesInput = () => {
  const [categoryInput, setCategoryInput] = useState('');

  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.RecipeForm.category);

  const submittingCategory = (e) => {
    e.preventDefault();
    if (!categoryInput) {
      alert('You need to type something to add categories.');
    } else {
      dispatch(addCategory(categoryInput));
      setCategoryInput('');
    }
  };

  return (
    <CategoriesInputStyles>
      <div className="category-container">
        {categoryState.map(({ name }, index) => (
          <span key={index}>{name}</span>
        ))}
      </div>
      Category
      <input
        value={categoryInput}
        onChange={(e) => setCategoryInput(e.target.value)}
        name="category"
        id="category"
        type="text"
      />
      <button onClick={submittingCategory}>Add Category</button>
    </CategoriesInputStyles>
  );
};

export default CategoriesInput;
