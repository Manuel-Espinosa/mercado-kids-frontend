import React from "react";
import { Link } from "react-router-dom";


const ProfileMenu = () =>{
    return(
        <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link has-text-weight-semibold" to="">
          Menu
        </Link>
        <div className="navbar-dropdown">
          <Link className="navbar-item" to="/register">
            Crear perfil
          </Link>
          <Link className="navbar-item" to="/login">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    )
}

export {ProfileMenu}