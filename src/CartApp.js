import React from "react";
import { Card } from "./components/Card";
import styles from "./index.module.css";

import { CartAppProvider } from "./context";

const CartApp = () => {
  return (
    <CartAppProvider>
      <div className={styles.mainContainer}>
        <Card />
      </div>
    </CartAppProvider>
  );
};

export default CartApp;
