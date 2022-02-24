import confStore from "./store/confStore";
import { bugAdded, bugResolved } from "./store/bugs";

const store = confStore();

const unsubscribe = store.subscribe(() => {
  console.log("confStore changed", store.getState());
});

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
