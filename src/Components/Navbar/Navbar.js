import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return(
        <nav>
            <img src={ require(`../../images/globe-2-xxl.png`).default } alt="" className="nav--logo" />
            <p className="nav--title">my travel diary.</p>
        </nav>
    );
};
