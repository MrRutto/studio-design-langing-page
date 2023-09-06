import React from "react";
import styles from "./navbar.module.scss";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.row}>
                <p className={styles.brand}><span>A+</span> Studio</p>
                <ul>
                    <li>Home</li>
                    <li>What We Do</li>
                    <li>Service</li>
                    <li>Project</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;