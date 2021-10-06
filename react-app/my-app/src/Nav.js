import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return (
        <nav>
            <Link to="/">
                {" "}
                HOME{" "}
            </Link>
            <Link to="/login">
                {" "}
                LOGIN{" "}
            </Link>
            <Link to="/sign-up">
                {" "}
                SIGN UP{" "}
            </Link>
        </nav>
    )
}

export default Nav;