import React, { Fragment } from 'react';
import styles from './hero.module.css';
import HomeContent from './content';
import HomeIllus from './illus';

function Hero() {
    return (
        <section className={`${styles.hero} container`} id="home" >
            <HomeContent />
            <HomeIllus />
        </section>
    )
}

export default Hero;