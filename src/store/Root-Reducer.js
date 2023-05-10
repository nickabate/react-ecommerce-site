import { combineReducers } from "redux";

import { userReducer } from "./User/User.reducer";
import { categoriesReducer } from "./Categories/Category.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
