import React, { Fragment } from 'react';
import styles from './content.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
function HomeContent() {
    return (

        <section className={styles.heroContent}>
            <div className={styles.heroContentInfo}>
                <h3>Hello We Are</h3>
                <h1>Deketmet</h1>
                <h2>Designers . Developers . Marketers</h2>
                <p> We are DEKETMET. We help our clients to set up and grow online businesses and apps.
                     
                </p>
                <a href='#aboutUs'>About Us</a>
            </div>
            <div className={styles.heroContentIcons}>
                <a href='https://www.facebook.com/Deketmet' rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                {/* <a href=''><FontAwesomeIcon icon={faTwitter} size="2x" /></a> */}
                <a href='https://api.whatsapp.com/send?phone=03470555428' rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faWhatsapp} size="2x" /></a>
            </div>
        </section>
    )
}

export default HomeContent