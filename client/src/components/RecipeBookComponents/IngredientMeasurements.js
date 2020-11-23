import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient } from '../../redux/actions/Recipe.actions';
import IngredientMeasurementStyles from '../../styles/IngredientMeasurement.styles';

const IngredientMeasurements = (props) => {
  const [amount, setAmount] = useState(0);
  const [measurement, setMeasurement] = useState('');
  const [item, setItem] = useState('');

  const [ingredientString, setIngredientString] = useState();

  // Redux State Handlers
  const dispatch = useDispatch();
  const ingredientState = useSelector((state) => state.RecipeForm.ingredients);

  const onChange = (e) => (setState) => {
    e.preventDefault();
    const { value } = e.target;

    setState(value);
  };

  const submittingIngredient = (e) => {
    e.preventDefault();
    const condition = !!(amount && measurement && item && ingredientString);

    if (!condition) {
      alert('Not all the fields for ingredients have been used.');
    } else {
      dispatch(addIngredient(ingredientString));
      setAmount(0);
      setMeasurement('');
      setItem('');
    }
  };

  useEffect(() => {
    setIngredientString(
      amount && measurement && item
        ? `${amount}${measurement} of ${item}`
        : null
    );
  }, [amount, measurement, item]);

  return (
    <IngredientMeasurementStyles>
      <h3>Ingredients</h3>
      <ul>
        {props.ingredients.map(({ name }, index) => {
          return <li key={index}>{name}</li>;
        })}
        {ingredientState.map(({ name }, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
      <label htmlFor="ingredientAmount">
        Amount
        <input
          onChange={(e) => onChange(e)(setAmount)}
          type="number"
          id="ingredientAmount"
          value={amount}
        />
      </label>
      <label htmlFor="ingredientMeasurement">
        Measurement
        <select
          onChange={(e) => onChange(e)(setMeasurement)}
          name="ingredientMeasurement"
          id="ingredientMeasurement"
          value={measurement}
        >
          <option value="c">Cup</option>
          <option value="g">gram</option>
          <option value="kg">Kilogram</option>
          <option value="L">Liter</option>
          <option value="lb">Pound</option>
          <option value="mL">Mililiter</option>
          <option value="oz">Ounce</option>
          <option value="pt">Pint</option>
          <option value="tsp">Teaspoon</option>
          <option value="Tbsp">Tablespoon</option>
        </select>
      </label>
      <label htmlFor="ingredientItem">
        Item
        <input
          onChange={(e) => onChange(e)(setItem)}
          type="text"
          id="ingredientItem"
          value={item}
        />
      </label>
      <button onClick={submittingIngredient}>Add Ingredient</button>
    </IngredientMeasurementStyles>
  );
};

export default IngredientMeasurements;
