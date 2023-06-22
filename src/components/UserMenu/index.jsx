import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/User";

const UserMenu = () => {
  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    // Reset the user value in the context
    setUser(null);
  };

  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <Link className="navbar-link has-text-weight-semibold" to="">
        Mi Perfil
      </Link>
      <div className="navbar-dropdown">
        <Link className="navbar-item" to="/profile">
          Editar perfil
        </Link>
        <Link className="navbar-item" to="">
          Mis Compras
        </Link>
        <Link className="navbar-item" to="/" onClick={handleLogout}>
          Cerrar Sesión
        </Link>
      </div>
    </div>
  );
};

export { UserMenu };
