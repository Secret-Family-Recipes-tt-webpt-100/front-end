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

// eslint-disable-next-line default-param-last
const RecipeFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATE:
      return {
        ...state,
        [name]: action.payload.value,
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          { name: action.payload.ingredient },
        ],
      };
    case ADD_CATEGORY:
      return {
        ...state,
        category: [...state.category, { name: action.payload.category }],
      };
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
};

export default RecipeFormReducer;
