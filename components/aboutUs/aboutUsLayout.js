import React, { Fragment, useEffect } from 'react';
import styles from "./aboutUs.module.css";
import AboutContent from './content';
import AboutSuccess from './success';
import Aos from 'aos';
function AboutUs() {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <section id='aboutUs' className={styles.aboutUs} >
            <div className={styles.aboutUsStyleLine}>
                <svg xmlns="http://www.w3.org/2000/svg" width="363.081" height="273.83" viewBox="0 0 363.081 273.83">
                <path id="Path_29" data-name="Path 29" d="M864.668-1647.335c30,32,78.667-18,110-36.667s28-10,30-4-65.333,73.333-102,78.667-32-10.667-38-16-4.667-4-24.667,30.667-44.667,44-51.333,40-14-25.333-21.333-54.667S720-1560,705.334-1550s-58,126.667-58,126.667L642.667-1434s77.333-193.334,114-188,22.667,39.333,37.333,43.333S864.668-1647.335,864.668-1647.335Z" transform="translate(-642.125 1695.831)" fill="#377a7a" stroke="#707070" strokeWidth="1" />
                </svg>
            </div>
            <div className={`container ${styles.aboutUsContainer}`}>
                <AboutContent aos="fade-right" />
                <AboutSuccess aos="flip-left" />
            </div>
        </section>
    )
}

export default AboutUs