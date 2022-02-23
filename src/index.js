import store from "./store";
import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";
import { bugAdded } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch(bugAdded("Bug1"));
unsubscribe();

store.dispatch({
  type: BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());
