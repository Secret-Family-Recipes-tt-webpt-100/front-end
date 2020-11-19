import { IS_AUTHENTICATED } from '../types';

export const isAuthenticated = () => {
  return {
    type: IS_AUTHENTICATED,
  };
};
