import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import Cart from "../Cart";
import { ProfileMenu } from "../ProfileMenu";
import { UserMenu } from "../UserMenu";
import useCart from "../../hooks/useCart";
import useUser from "../../hooks/useUser";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [products] = useCart();
  const { user } = useUser();
  console.log(user)
  const cartItemCount = products.length;

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="navbar is-success is-mobile"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item has-text-weight-semibold" to="/">
          Mercado Kids By Manuel Espinosa
        </Link>
        <Link
          role="button"
          className={`navbar-burger ${isMenuOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link className="navbar-item has-text-weight-semibold" to="">
            Categorias
          </Link>
          <Link className="navbar-item has-text-weight-semibold" to="">
            Ofertas
          </Link>
        </div>

        <div className="navbar-end">
          {user ? <UserMenu /> : <ProfileMenu />}
          <Link className="navbar-item has-text-weight-semibold" to="/cart">
            <Cart itemCount={cartItemCount} />
          </Link>
          <div className="navbar-item">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input is-rounded is-large is-normal is-primary"
                  type="text"
                  placeholder="Buscar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
