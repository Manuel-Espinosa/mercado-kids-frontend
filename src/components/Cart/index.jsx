import React from "react";
import cart from "../../images/shopping-cart.png";

const Cart = ({ itemCount }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img src={cart} alt="Shopping Cart" />
      {itemCount > 0 && (
        <span
          style={{
            position: "absolute",
            top: "0",
            left: "29px",
            background: "red",
            color: "white",
            opacity: 0.75,
            borderRadius: "50%",
            padding: "0.4rem",
            fontSize: "1rem",
            fontWeight: "bold",
            lineHeight: "1",
            borderWidth: "2px",
          }}
        >
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default Cart;
