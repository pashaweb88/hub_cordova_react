import { combineReducers } from "redux";
import { appsReducer } from "./appsReducer";

export const rooReducer = combineReducers({
  apps: appsReducer,
});

export type RootState = ReturnType<typeof rooReducer>;
