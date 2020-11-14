import React, { useEffect, useState } from "react";
import { addIngredientUtil } from "../../utils/RecipeFormUtils";

const IngredientMeasurements = (props) => {
  const { formData, setFormData } = props;

  const [amount, setAmount] = useState(0);
  const [measurement, setMeasurement] = useState("");
  const [item, setItem] = useState("");

  const [ingredientString, setIngredientString] = useState();

  const onChange = (e) => (setState) => {
    e.preventDefault();
    const { value } = e.target;

    setState(value);
  };

  useEffect(() => {
    setIngredientString({
      name:
        amount && measurement && item
          ? `${amount}${measurement} of ${item}`
          : null,
    });
  }, [amount, measurement, item]);

  return (
    <div>
      <h3>Ingredients</h3>
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
      <button
        onClick={(e) =>
          addIngredientUtil(e)({
            formData,
            setFormData,
            ingredientString,
            amount,
            measurement,
            item,
            setIngredientString,
            setAmount,
            setMeasurement,
            setItem,
          })
        }
      >
        Add Ingredient
      </button>
    </div>
  );
};

export default IngredientMeasurements;
