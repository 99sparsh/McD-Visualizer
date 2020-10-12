import React from "react";

import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

import styles from "./SideDrawer.module.css";

const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open) attachedClasses[1] = styles.Open;
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(" ")}>
                <div className={styles.Logo}>
                    <Logo />
                </div>

                <nav>
                    <NavItems />
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;
