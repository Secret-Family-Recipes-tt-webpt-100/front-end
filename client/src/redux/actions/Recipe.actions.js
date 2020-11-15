import { CHANGE_STATE } from "../types";

export const formOnChange = ({ name, value }) => {
  console.table({ name, value });
  return {
    type: CHANGE_STATE,
    payload: { name, value },
  };
};
