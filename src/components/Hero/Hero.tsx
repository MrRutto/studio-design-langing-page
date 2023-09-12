import React from "react";
import styles from "./hero.module.scss";
import { HeroImage, DotMatrix } from "assets/images";
import { Button } from "components/Button";

const Hero = () => {
    return (
        <div className={styles.banner}>
            <div className={`container ${styles.content}`}>
                <div style={{ zIndex: 1 }}>
                    <h1 className={styles.heroHeader}>A Digital Product Agency</h1>
                    <p  className={styles.heroContent}>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
                    <Button title={'Contact Now'} />
                </div>
                <div className={styles.dotMatrixWrapper}>
                    <img className="" src={DotMatrix} alt="Dot matrix" />
                    <img className="" src={DotMatrix} alt="Dot matrix" />
                </div>
            </div>
            <img className="col-12 col-md-5" src={HeroImage} alt="Hero Image" />
        </div>
    )
}

export default Hero;