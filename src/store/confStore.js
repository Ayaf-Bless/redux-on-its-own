import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { logger } from "./middleware/logger";
import api from "./middleware/api";

export default function confStore() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger("console"), api],
  });
}
