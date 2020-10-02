import React from "react";

import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngrident";

const burger = (props) => {
    let tranformedIngridents = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if (tranformedIngridents.length === 0) {
        tranformedIngridents = <p>No ingredients added</p>;
    }
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {tranformedIngridents}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
