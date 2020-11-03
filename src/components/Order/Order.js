import React from "react";
import styles from "./Order.module.css";
const order = (props) => {
    let ingredients = [];

    for (let i in props.ingredients) {
        ingredients.push(
            <span
                key={i}
                style={{
                    textTransform: "capitalize",
                    display: "inline-block",
                    margin: "0 8px",
                    border: "1px solid #ccc",
                    padding: "5px",
                }}
            >
                {i} {props.ingredients[i]}
            </span>
        );
    }

    return (
        <div className={styles.Order}>
            {ingredients}
            <p>
                Price: <strong>{props.price}</strong>
            </p>
        </div>
    );
};

export default order;
