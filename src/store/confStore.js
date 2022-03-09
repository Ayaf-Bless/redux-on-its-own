import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { logger } from "./middleware/logger";

export default function confStore() {
  return configureStore({ reducer, middleware: [logger("console")] });
}
