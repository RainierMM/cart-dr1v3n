import React, { useContext, useEffect } from "react";
import Product from "./Product";
import styles from "./styles.module.css";

import { CartAppContext } from "../context";

export const Card = () => {
  const { data, getData, getPrice, setCart } = useContext(CartAppContext);

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    if (data.length < 1) getData();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.gridContainer}>
        <div className={styles.buyCart}>Carrito de compras</div>
        <Product />
        <div className={styles.dividerSpecial}></div>

        <span className={styles.subtotalText}>Subtotal:</span>
        <div className={styles.subtotalNumber}>{`S/.${getPrice()}`}</div>
        <span className={styles.shippingText}>Envío</span>
        <span className={styles.shippingNumber}>
          {getPrice() !== 0 ? `S/. 40` : `S/. 0`}
        </span>
        <div className={styles.divider}></div>
        <span className={styles.totalPriceText}>Total:</span>
        <span className={styles.totalPriceNumber}>
          {getPrice() !== 0 ? `S/.${getPrice() + 40}` : `S/. 0`}
        </span>
        <button className={styles.payButton}>Pagar</button>
        <span
          onClick={() => {
            clearCart();
          }}
          className={styles.clearCart}
        >
          Limpiar Carrito
        </span>
      </div>
    </div>
  );
};
