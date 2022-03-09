import confStore from "./store/confStore";
import { bugAdded, bugResolved, unresolvedBugsSelector } from "./store/bugs";
import { projectAdded } from "./store/project";

const store = confStore();

store.dispatch((dispatch, getState) => {
  dispatch({ type: "bugAdded", bugs: [1, 2, 3] });
  console.log(getState());
});
