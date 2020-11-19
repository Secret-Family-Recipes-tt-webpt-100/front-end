// import {} from '../types';

const { IS_AUTHENTICATED } = require('../types');

const initialState = {
  authenticated: false,
};

// eslint-disable-next-line default-param-last
const AuthUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      if (localStorage.getItem('token')) {
        return { ...state, authenticated: true };
      } else {
        return { ...state, authenticated: false };
      }
    default:
      return state;
  }
};

export default AuthUserReducer;
