import React from 'react'

import styles from './About.module.css';

function About() {
    return (
        <div className={`container ${styles.container}`}>
            <h3>About Service</h3>
            <p className={styles.subHead}>Make A Product</p>
            <div className={styles.content}>
                <div className={styles.cards} >
                    <div data-aos-duration="1000" data-aos="fade-right">React</div>
                    <div data-aos-duration="1000" data-aos="fade-left">Next JS</div>
                    <div data-aos-duration="1000" data-aos="fade-right">Node JS</div>
                    <div data-aos-duration="1000" data-aos="fade-left">Express JS</div>
                    <div data-aos-duration="1000" data-aos="fade-right">Mongo DB</div>
                    <div data-aos-duration="1000" data-aos="fade-left">React Native</div>
                    <div data-aos-duration="1000" data-aos="fade-right">Flutter</div>
                    <div data-aos-duration="1000" data-aos="fade-left">Devops</div>
                </div>
                <div className={styles.paraContent} data-aos-duration="1000" data-aos="fade-left">
                    <p>Welcome to our exceptional development services! We specialize in crafting cutting-edge solutions using React, React Native,Flutter, Node.js, Express.js, MongoDB, TypeScript, and MySQL. With a comprehensive skill set, we excel in all areas of web and app development. Our experienced team thrives on delivering high-quality projects tailored to your unique needs. Whether it&&apos;s developing dynamic websites or feature-rich mobile applications, we pride ourselves on seamless functionality and captivating user experiences. Partner with us to bring your ideas to life and stay ahead in the rapidly evolving digital landscape. Your success is our ultimate goal!</p>
                </div>
            </div>
        </div>
    )
}

export default About