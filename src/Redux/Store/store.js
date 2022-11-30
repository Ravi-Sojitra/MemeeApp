import { applyMiddleware, createStore } from "redux";
import rootReducer from "../Reducer/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {};
// const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  rootReducer,

  initialState,
  // applyMiddleware(thunk),
  composeWithDevTools(applyMiddleware(thunk))
);

// const store = createStore(rootReducer);

export default store;
