import { configureStore } from "@reduxjs/toolkit";
import reducer from "./project";

export default function confStore() {
  return configureStore({ reducer });
}
