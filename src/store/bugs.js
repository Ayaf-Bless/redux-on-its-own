import { createAction } from "@reduxjs/toolkit";
// ACTION TYPES
const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

//ACTIONS CREATORS
export const bugUpdated = createAction("BugUpdated");
export const bugAdded = createAction("BugUpdated");
export const bugResolved = createAction("BugResolve");
export const bugRemoved = createAction("BugRemoved");

let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === bugAdded.type)
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === bugRemoved.type)
    return state.filter((bug) => bug.id !== action.payload.id);
  else if (action.type === bugResolved.type)
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );
  return [];
}
