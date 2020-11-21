import { IS_AUTHENTICATED, LOGOUT } from '../types';

export const isAuthenticated = (id) => {
  return {
    type: IS_AUTHENTICATED,
    payload: {
      sourceId: id,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
