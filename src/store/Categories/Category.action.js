import { CATEGORIES_ACTION_TYPES } from "./Category.types";

import { createAction } from "../../utils/Reducer.utils";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
