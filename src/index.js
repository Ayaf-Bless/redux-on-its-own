import store from "./store";
import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";
import { bugAdded, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch(bugAdded("Bug1"));

store.dispatch(bugResolved(1));

store.dispatch({
  type: BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());
