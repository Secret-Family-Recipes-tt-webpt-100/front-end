import { ADD_INGREDIENT, CHANGE_STATE } from "../types";

export const formOnChange = ({ name, value }) => {
  console.table({ name, value });
  return {
    type: CHANGE_STATE,
    payload: { name, value },
  };
};

export const addIngredient = (ingredient) => {
  return {
    type: ADD_INGREDIENT,
    payload: {
      ingredient,
    },
  };
};
