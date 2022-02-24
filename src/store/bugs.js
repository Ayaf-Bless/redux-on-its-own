import { createAction, createReducer } from "@reduxjs/toolkit";

//ACTIONS CREATORS
export const bugUpdated = createAction("bugUpdated");
export const bugAdded = createAction("bugUpdated");
export const bugResolved = createAction("bugResolve");
export const bugRemoved = createAction("bugRemoved");

let lastId = 0;

export default createReducer([], {
  [bugAdded.type]: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugRemoved.type]: (state, action) => {
    state.filter((bug) => bug.id !== action.payload.id);
  },
  [bugResolved.type]: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state[index].resolved = true;
  },
});
