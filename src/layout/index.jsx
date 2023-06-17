import React from "react";
import 'bulma/css/bulma.min.css';
import NavBar from "../components/NavBar";
const Layout = ({ children }) => {
    return(
        <div>
        <NavBar />
        {children}
        </div>
    )
}

export default Layout;