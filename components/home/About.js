import React from 'react'


import styles from './About.module.css';

function About() {
    return (
        <div id='about' className={`container ${styles.container}`}>
            <div className={styles.content} data-aos="flip-right" data-aos-duration="1000">
                <h3>About Us</h3>
                <p>Welcome to Deketmet, your trusted partner for web and app development services. With over 2 years of experience in the industry, we are committed to delivering innovative and top-notch solutions to our clients. Our expert team of developers excels in crafting custom websites and applications that are tailored to meet your unique business requirements. We take pride in our customer-centric approach, ensuring seamless communication and timely project delivery. At Deketmet, we strive to exceed expectations, making us the go-to choice for businesses seeking excellence in web and app development. Let&apos;s turn your vision into reality together!</p>
            </div>
            <div className={styles.info} data-aos="flip-left" data-aos-duration="1000">
                <div className={styles.aboutCard}>
                    <div>20</div>
                    <div>Projects Completed</div>
                </div>
                <div className={styles.aboutCard}>
                    <div>2</div>
                    <div>Years Of Success</div>
                </div>
            </div>
        </div>
    )
}

export default About;