import React, { Fragment } from 'react'
import Image from 'next/image';
import styles from './Portfolio.module.css';

function Portfolio() {
    return (
        <Fragment>
            <div className={styles.heading}>
                <h3>Check What We have Made</h3>
            </div>
            <div className={`container ${styles.container}`}>
                <Image data-aos="fade-left" data-aos-duration="1000" src="/portfolio/ProjectOne.png" width={700} height={400} alt="" />
                <Image data-aos="fade-right" data-aos-duration="1000" src="/portfolio/ProjectTwo.png" width={500} height={400} alt="" />
                <Image data-aos="fade-left" data-aos-duration="1000" src="/portfolio/ProjectThree.png" width={500} height={400} alt="" />
                <Image data-aos="fade-right" data-aos-duration="1000" src="/portfolio/ProjectFour.png" width={700} height={400} alt="" />
            </div>
        </Fragment>
    )
}

export default Portfolio