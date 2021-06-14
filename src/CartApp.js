import React from "react";
import { Card } from "./components/Card";

import styles from "./index.module.css";

const CartApp = () => {
  return (
    <div className={styles.mainContainer}>
      <Card />
    </div>
  );
};

export default CartApp;
