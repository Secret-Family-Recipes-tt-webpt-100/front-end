import { CHANGE_STATE } from "../types";

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
    default:
      return state;
  }
};

export default RecipeFormReducer;
