import React from "react";
import cart from "../../images/shopping-cart.png";
import "./style.css";

const Cart = ({ itemCount }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img className="mr-3" src={cart} alt="Shopping Cart" />
      <span >{itemCount}</span>
    </div>
  );
};

export default Cart;
