import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./bugs";

export default function confStore() {
  return createStore(reducer, devToolsEnhancer({ trace: true }));
}
