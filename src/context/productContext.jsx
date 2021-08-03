//Dependencies
import React, { useState, useEffect } from "react";
//Assets
import { callProducts } from "../services/apiProducts";

//Creating context
export const ProductContext = React.createContext();

//Creating Provider
export function ProductProvider({ children }) {
  //Defining initial states with useState
  const [products, setProducts] = useState({
    loading: true,
    error: null,
    data: undefined,
  });

  /* --------------------------------- */
  //First time it renders, it calls API and gets products data
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  /* --------------------------------- */
  //Getting products data
  const getData = async () => {
    //initial state: loading and without errors
    setProducts({ ...products, loading: true, error: null });

    try {
      //data: async call, it returns promise
      const productsData = await callProducts();
      //stop loading and presenting data
      setProducts({ ...products, loading: false, data: productsData });
    } catch (error) {
      //stop loading and presenting error
      setProducts({ ...products, loading: false, error });
    }
  };
  /* --------------------------------- */

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}