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
        <div className={styles.buyCart}>Carrito de compras</div>
        <Product />
        <div className={styles.divider}></div>

        <span className={styles.subtotalText}>Subtotal:</span>
        <div className={styles.subtotalNumber}>S/.1000</div>
        <span className={styles.shippingText}>Envío</span>
        <span className={styles.shippingNumber}>S/.400</span>
        <div className={styles.divider}></div>
        <span className={styles.totalPriceText}>Total:</span>
        <span className={styles.totalPriceNumber}>S/.1100</span>
        <button className={styles.payButton}>Pagar</button>
        <span className={styles.clearCart}>Limpiar Carrito</span>
      </div>
    </div>
  );
};
