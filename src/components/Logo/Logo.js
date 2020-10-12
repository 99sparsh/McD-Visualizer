import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";

import styles from "./Logo.module.css";

const logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={burgerLogo} alt="My Burger" />
        </div>
    );
};

export default logo;