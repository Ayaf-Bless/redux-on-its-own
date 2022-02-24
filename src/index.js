import confStore from "./store/confStore";
import { bugAdded, bugResolved } from "./store/bugs";
import { projectAdded } from "./store/project";

const store = confStore();

const unsubscribe = store.subscribe(() => {
  console.log("confStore changed", store.getState());
});

store.dispatch(
  projectAdded({
    name: "project 1",
  })
);

store.dispatch(bugAdded({ description: "Bug1" }));
store.dispatch(
  bugAdded({
    description: "Bug2",
  })
);
store.dispatch(
  bugAdded({
    description: "Bug3",
  })
);

store.dispatch(
  bugResolved({
    id: 1,
  })
);

console.log(store.getState());
