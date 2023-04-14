import { Children, createContext, useEffect, useState } from "react";

import { fakeFetch } from "../utils.js/utils";

// export let data = [];
// (async () => {
//   try {
//     const res = await fakeFetch("https://example.com/api/products");
//     const {
//       data: { products }
//     } = res;
//     data = products;
//   } catch (e) {
//     console.error(e.message);
//   }
// })();

export const DataBaseContext = createContext();
export const DataBaseProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch("https://example.com/api/products");
        const {
          data: { products }
        } = res;
        setData(products);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch();
  }, []);
  return (
    <DataBaseContext.Provider value={{ data }}>
      {children}
    </DataBaseContext.Provider>
  );
};
