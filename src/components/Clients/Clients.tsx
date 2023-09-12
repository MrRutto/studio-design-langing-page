import React from "react";
import styles from "./clients.module.scss";
import { airbnb, amazon, google, uberEats } from "assets/clients";

const Clients = () => {
    return (
        <div className="container" style={{ marginTop: 40 }}>
            <div className="row justify-content-between">
                <div className={`col-12 col-md-4 ${styles.content}`}>
                    <p className="header" style={{ marginBottom: "17px !important"}}>Our Client</p>
                    <p className="content">Several selected clients, who already believe in our service.</p>
                </div>
                <div className="row col-12 col-md-8 align-items-center justify-content-end">
                    <div className={`col-md-3 ${styles.logoWrapper}`}>
                        <img className={styles.googleImage} src={google} alt="Airbnb Logo" />
                    </div>
                    <div className={`col-md-3 ${styles.logoWrapper}`}>
                        <img className={styles.airbnbImage} src={airbnb} alt="Airbnb Logo" />
                    </div>
                    <div className={`col-md-3 ${styles.logoWrapper}`}>
                        <img className={styles.uberEatsImage} src={uberEats} alt="Airbnb Logo" />
                    </div>
                    <div className={`col-md-3 ${styles.logoWrapper}`}>
                        <img className={styles.amazonImage} src={amazon} alt="Airbnb Logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients;