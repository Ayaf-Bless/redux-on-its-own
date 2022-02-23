import { BUG_ADDED } from "./actionTypes";

export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    description: description,
  },
});
