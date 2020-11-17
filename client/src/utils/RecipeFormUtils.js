export const addCategoryUtil = (e) => (payload) => {
  const { formData, categoryInput, setFormData, setCategoryInput } = payload;
  if (!categoryInput) {
    alert('You have to type in a category');
  } else {
    e.preventDefault();
    setFormData({
      ...formData,
      category: [...formData.category, categoryInput],
    });
    setCategoryInput('');
  }
};

export const addIngredientUtil = (e) => (payload) => {
  const {
    formData,
    setFormData,
    ingredientString,
    setIngredientString,
    setAmount,
    setMeasurement,
    setItem,
    amount,
    measurement,
    item,
  } = payload;
  e.preventDefault();

  const condition = !!(amount && measurement && item && ingredientString);

  if (!condition) {
    alert('Not all the fields for ingredients have been used.');
  } else {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, ingredientString],
    });

    setAmount(0);
    setMeasurement('');
    setItem('');
    setIngredientString(null);
  }

  return null;
};
