import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartAppContext = createContext(undefined);

export const CartAppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios(
      "https://60c6708619aa1e001769f49c.mockapi.io/api/shopping-cart/list"
    );
    localStorage.setItem("dataInfo", JSON.stringify(data));
    setData(data);
  };

  useEffect(() => {
    if (data.length < 1) {
      const cacheData = localStorage.getItem("dataInfo");
      cacheData && cacheData.length > 0 && setData(JSON.parse(cacheData));
    }
  }, []);

  return (
    <CartAppContext.Provider value={{ cart, data, getData, setCart }}>
      {children}
    </CartAppContext.Provider>
  );
};
