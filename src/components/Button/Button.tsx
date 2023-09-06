import React from "react";
import styles from "./Button.module.scss";

const Button = ({title}: {title: string}) => {
    return (
        <button className={styles.button}>{ title }</button>
    )
}

export default Button