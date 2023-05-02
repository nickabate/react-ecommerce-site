import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line
// import { addCollectionAndDocuments } from "../utils/Firebase";

import { getCategoriesAndDocuments } from "../utils/Firebase";

// shop data only needed to interact with firestore db from our frontend - used to populate our db
// import SHOP_DATA from "../data/shop-data";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      // console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  // useEffect to populate our firestore db - only need to run once to populate
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
