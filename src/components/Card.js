import React, { useContext, useEffect } from "react";
import Product from "./Product";
import styles from "./styles.module.css";

import { CartAppContext } from "../context";

export const Card = () => {
  const { data, getData } = useContext(CartAppContext);

  useEffect(() => {
    if (data.length < 1) getData();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.gridContainer}>
        <p className={styles.buyCart}>Carrito de compras</p>
        <Product />
      </div>
    </div>
  );
};
