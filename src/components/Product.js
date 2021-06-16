import React, { useContext } from "react";
import styles from "./styles.module.css";

import { CartAppContext } from "../context";

const Product = () => {
  const { data } = useContext(CartAppContext);

  return <div className={styles.divider}></div>;
};

export default Product;
