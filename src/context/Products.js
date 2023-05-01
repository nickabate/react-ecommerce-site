import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line
// import { addCollectionAndDocuments } from "../utils/Firebase";

// shop data only needed to interact with firestore db from our frontend - used to populate our db
// import SHOP_DATA from "../data/shop-data";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // useEffect to populate our firestore db - only need to run once to populate
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
