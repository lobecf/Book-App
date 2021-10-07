import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return (
        <nav className="nav-bar">
            <Link className="nav-bar-link" to="/">
                {" "}
                HOME{" "}
            </Link>
            <Link className="nav-bar-link" to="/login">
                {" "}
                LOGIN{" "}
            </Link>
            <Link className="nav-bar-link" to="/sign-up">
                {" "}
                SIGN UP{" "}
            </Link>
        </nav>
    )
}

export default Nav;