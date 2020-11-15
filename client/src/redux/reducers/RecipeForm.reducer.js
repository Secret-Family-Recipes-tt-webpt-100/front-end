import { CHANGE_STATE, ADD_INGREDIENT } from "../types";

/**
 * //TODO
 * Create the default state for this Reducer
 */

const initialState = {
  title: "",
  description: "",
  source: "",
  instructions: "",
  ingredients: [],
  category: [],
};

const RecipeFormReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_STATE:
      const { name, value } = payload;
      return {
        ...state,
        [name]: value,
      };
    case ADD_INGREDIENT:
      const { ingredient } = payload;
      return {
        ...state,
        ingredients: [...state.ingredients, ingredient],
      };
    default:
      return state;
  }
};

export default RecipeFormReducer;
