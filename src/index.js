import confStore from "./store/confStore";
import { bugAdded, bugResolved } from "./store/bugs";

const store = confStore();

const unsubscribe = store.subscribe(() => {
  console.log("confStore changed", store.getState());
});

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugAdded("Bug2"));
store.dispatch(bugAdded("Bug3"));

store.dispatch(bugResolved(1));

console.log(store.getState());
