import React from "react";
import "bulma/css/bulma.min.css";
import useCart from "../../hooks/useCart";
import emptyCart from "../../images/empty-cart.png";

const CartTable = () => {
  const [cartItems, setCartItems] = useCart();
  console.log(cartItems);

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div className="container">
      <div className="columns is-vcentered is-centered">
        <div className="column is-two-thirds">
          {cartItems.length > 0 ? (
            <table className="table is-striped is-fullwidth is-borderless">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        style={{ width: "50px", height: "auto" }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        className="button is-small is-danger"
                        onClick={() => handleRemoveFromCart(item._id)}
                      >
                        Quitar
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td>Total:</td>
                  <td>${calculateTotalPrice()}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div>
              <figure className="image is-1by1">
                <img src={emptyCart} alt="Empty Cart" />
              </figure>
            </div>
          )}
          {cartItems.length > 0 && (
            <div>
              <button className="button is-danger" onClick={handleClearCart}>
                Limpiar carrito
              </button>
              <button className="button is-success ml-2">Comprar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartTable;
