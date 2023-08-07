import React from 'react';

import styles from './Pwf.module.css';

function Pwf() {
    return (
        <div className={`container ${styles.container}`}>
            <h3>Process We Follow</h3>
            <p className={styles.subHead}>Way To Make</p>
            <div className={styles.processCards}>
                <div className={styles.card} data-aos-duration="1000" data-aos="flip-up">
                    <h4>1. Make A Deal</h4>
                    <p>Our team collaborates with you to create a tailored plan, including timelines, milestones, and budget, ensuring a transparent and efficient development process.</p>
                </div>
                <div className={styles.card} data-aos="flip-down" data-aos-duration="1000">
                    <h4>2. Design Your Product</h4>
                    <p>Our creative designers conceptualize stunning and user-friendly interfaces that resonate with your brand identity and captivate your users.</p>
                </div>
                <div className={styles.card} data-aos="flip-up" data-aos-duration="1000">
                    <h4>3. Code It</h4>
                    <p>Our skilled developers bring the design to life, writing clean and efficient code to build robust and feature-rich websites and apps.</p>
                </div>
                <div className={styles.card} data-aos="flip-down" data-aos-duration="1000">
                    <h4>4. Test It</h4>
                    <p>Rigorous testing across devices and platforms ensures a bug-free and seamless user experience, guaranteeing a high-quality product.</p>
                </div>
                <div className={styles.card} data-aos="flip-up" data-aos-duration="1000">
                    <h4>5. Deploy</h4>
                    <p>With precision, we launch your project, ensuring a smooth transition from development to the live environment, and provide ongoing support to ensure your success.</p>
                </div>
                <div className={styles.card} data-aos="flip-down" data-aos-duration="1000">
                    <h4>6. Get Feedback</h4>
                    <p> We value your input! Share your thoughts post-launch to help us refine and optimize the project, ensuring it meets and exceeds your expectations. Your satisfaction is our priority.</p>
                </div>
            </div>
        </div>
    )
}

export default Pwf