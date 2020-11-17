import {
  CHANGE_STATE,
  ADD_INGREDIENT,
  ADD_CATEGORY,
  CLEAR_STATE,
} from '../types';

const initialState = {
  title: '',
  description: '',
  source: '',
  instructions: '',
  ingredients: [],
  category: [],
};

const RecipeFormReducer = ({ type, payload }, state = initialState) => {
  const { name, value, ingredient, category } = payload;

  switch (type) {
    case CHANGE_STATE:
      return {
        ...state,
        [name]: value,
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, { name: ingredient }],
      };
    case ADD_CATEGORY:
      return {
        ...state,
        category: [...state.category, { name: category }],
      };
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
};

export default RecipeFormReducer;
