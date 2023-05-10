import { CATEGORIES_ACTION_TYPES } from "./Category.types";

import { createAction } from "../../utils/Reducer.utils";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
