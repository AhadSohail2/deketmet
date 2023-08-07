import React from 'react'

import styles from './Services.module.css';
import Link from 'next/link';

function Services() {
    return (
        <div id='services' className={`container ${styles.container}`}>
            <h3 className={styles.heading}>Our Expertise</h3>
            <p className={styles.subHead}>In Two</p>
            <div className={styles.cards}>
                <div className={styles.card} data-aos="flip-up" data-aos-duration="1000">
                    <h4>Web App Development</h4>
                    <p>We specialize in creating cutting-edge web applications that deliver exceptional user experiences. Our expert team leverages the latest technologies and best practices to craft responsive, interactive, and feature-rich web apps that meet your business needs and captivate your audience.</p>
                    <div className={styles.cardLink}>
                        <Link href="/services">Learn More</Link>
                    </div>
                </div>
                <div className={styles.card} data-aos="flip-down" data-aos-duration="1000">
                    <h4>Mobile App Development</h4>
                    <p> Harnessing our expertise in iOS and Android platforms, we create high-performance apps with seamless integration of device features. Expect exceptional user experiences and satisfaction guaranteed when you choose us for your native app development needs.</p>
                    <div className={styles.cardLink}>
                        <Link href="/services">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services