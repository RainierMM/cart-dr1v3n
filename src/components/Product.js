import React, { useContext, Fragment, useState } from "react";
import styles from "./styles.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { CartAppContext } from "../context";

const Product = () => {
  const { data } = useContext(CartAppContext);

  console.log(data);

  return (
    <>
      {data && data.length > 0
        ? data.map(({ id, name, price, image, amount }) => (
            <Fragment key={id}>
              <div className={styles.divider}></div>

              <img className={styles.image} src={image} />

              <div className={styles.description}>
                <p className={styles.productName}>{name}</p>
                <div className={styles.productAmountBox}>
                  <p className={styles.productAmount}>Cantidad</p>
                  <div className={styles.radioButtonsArea}>
                    <div className={styles.productAmountButton}>
                      <div className={styles.sustract}>-</div>
                    </div>
                    <span className={styles.productAmountNumber}>{amount}</span>
                    <div className={styles.productAmountButton}>
                      <div className={styles.add}>+</div>
                    </div>
                  </div>
                </div>
              </div>
              <div styles={styles.nullBox}></div>
              <div styles={styles.priceBox}>
                <p className={styles.productPrice}>{`S/.${price}`}</p>
                <div className={styles.deleteProduct}>
                  <DeleteIcon style={{ color: "#FFFFFF", margin: "-5px" }} />
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "0.5em",
                      lineHeight: "0.563em",
                      marginLeft: "0.234em",
                    }}
                  >
                    Quitar producto
                  </span>
                </div>
              </div>
            </Fragment>
          ))
        : null}
    </>
  );
};

export default Product;
