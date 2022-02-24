import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default function confStore() {
  return configureStore({ reducer });
}
