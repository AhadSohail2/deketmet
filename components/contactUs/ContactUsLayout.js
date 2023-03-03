import React from 'react'
import ContactFrom from './ContactFrom'
import ContactInfo from './ContactInfo'
import ContactUsHead from './ContactUsHead'
//styles
import styles from './ContactUs.module.css';
function ContactUs() {
  return (
    <section id='contactUs' className={`container ${styles.contactContainer} `}>
        <ContactUsHead/>
        <div className={styles.contactSubContainer}>
            <ContactInfo/>
            <ContactFrom/>
        </div>
    </section>
  )
}

export default ContactUs