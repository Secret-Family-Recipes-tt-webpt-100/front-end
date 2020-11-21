// import {} from '../types';

const { IS_AUTHENTICATED, LOGOUT } = require('../types');

const initialState = {
  authenticated: false,
  sourceId: null,
};

// eslint-disable-next-line default-param-last
const AuthUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      if (localStorage.getItem('token')) {
        return {
          ...state,
          authenticated: true,
          sourceId: action.payload.sourceId,
        };
      } else {
        return { ...state, authenticated: false };
      }
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
        sourceId: null,
      };
    default:
      return state;
  }
};

export default AuthUserReducer;
