import React, { useContext, Fragment, useEffect } from "react";
import styles from "./styles.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { CartAppContext } from "../context";

const Product = () => {
  const { data, cart, setCart } = useContext(CartAppContext);

  const addAmount = (itemId, newAmount) => {
    const find = cart.findIndex(({ id }) => id === itemId);
    const newCart = [...cart];

    if (newCart[find].amount >= 0) newCart[find].amount = newAmount + 1;

    setCart(newCart);
  };

  const sustractAmount = (itemId, newAmount) => {
    const find = cart.findIndex(({ id }) => id === itemId);
    const newCart = [...cart];

    if (newCart[find].amount >= 1) {
      newCart[find].amount = newAmount - 1;
    } else {
      newCart[find].amount = 0;
    }

    setCart(newCart);
  };

  const deleteProduct = (itemId) => {
    const find = cart.findIndex(({ id }) => id === itemId);
    const newCart = [...cart];

    newCart.splice(newCart[find], 1);

    setCart(newCart);
  };

  return (
    <>
      {cart && cart.length > 0
        ? cart.map(({ id, name, price, image, amount }) => (
            <Fragment key={id}>
              <div className={styles.divider}></div>

              <img className={styles.image} src={image} />

              <div className={styles.description}>
                <p className={styles.productName}>{name}</p>
                <div className={styles.productAmountBox}>
                  <p className={styles.productAmount}>Cantidad</p>
                  <div className={styles.radioButtonsArea}>
                    <div
                      onClick={() => sustractAmount(id, amount)}
                      className={styles.productAmountButton}
                    >
                      <div className={styles.sustract}>-</div>
                    </div>
                    <span className={styles.productAmountNumber}>{amount}</span>
                    <div
                      onClick={() => addAmount(id, amount)}
                      className={styles.productAmountButton}
                    >
                      <div className={styles.add}>+</div>
                    </div>
                  </div>
                </div>
              </div>
              <div styles={styles.nullBox}></div>
              <div styles={styles.priceBox}>
                <p className={styles.productPrice}>{`S/.${price * amount}`}</p>
                <div
                  onClick={() => {
                    deleteProduct(id);
                  }}
                  className={styles.deleteProduct}
                >
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
