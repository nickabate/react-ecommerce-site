import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import { loggerMiddleware } from "./middleware/logger";

import { rootReducer } from "./Root-Reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"], // getting this from auth
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && loggerMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== " production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
