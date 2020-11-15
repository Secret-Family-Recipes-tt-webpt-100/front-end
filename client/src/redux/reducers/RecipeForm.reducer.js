import {
  CHANGE_STATE,
  ADD_INGREDIENT,
  ADD_CATEGORY,
  CLEAR_STATE,
} from "../types";

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
    case ADD_CATEGORY:
      const { category } = payload;
      return {
        ...state,
        category: [...state.category, category],
      };
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
};

export default RecipeFormReducer;
