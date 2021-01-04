import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { jsonReducer } from "./reducers/JSONReducer";

export const store = createStore(jsonReducer, applyMiddleware(thunk));
