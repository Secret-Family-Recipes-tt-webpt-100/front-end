import { ADD_CATEGORY, ADD_INGREDIENT, CHANGE_STATE } from "../types";

export const formOnChange = ({ name, value }) => {
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

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    payload: {
      category,
    },
  };
};
