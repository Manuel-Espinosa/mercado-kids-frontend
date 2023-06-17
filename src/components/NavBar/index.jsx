import React, { useState } from "react";
import "bulma/css/bulma.css";
import Cart from "../Cart";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const itemCount = 5;

  return (
    <nav
      className="navbar is-success is-mobile"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item has-text-weight-semibold" href="/">
          Mercado Kids
        </a>
        <a
          role="button"
          className={`navbar-burger ${isMenuOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
        <div className="navbar-start">
          <a className="navbar-item has-text-weight-semibold" href="/">
            Categorias
          </a>
          <a className="navbar-item has-text-weight-semibold" href="/">
            Ofertas
          </a>
        </div>

        <div className="navbar-end">
          <a className="navbar-item has-text-weight-semibold" href="/">
            Perfil
          </a>
          <a className="navbar-item has-text-weight-semibold" href="/">
            Mis Compras
          </a>
          <a className="navbar-item has-text-weight-semibold" href="/">
            <Cart itemCount={itemCount}></Cart>
          </a>
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
