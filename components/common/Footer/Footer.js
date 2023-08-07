import React, { Fragment } from 'react'

import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <Fragment>

            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src="/whitelog.png" width={80} height={80} alt='Deketmet White Logo' />
                    <h1>Deketmet</h1>
                </div>
                <div className={styles.services}>
                    <h3>Services</h3>
                    <Link href="/services">Web Development</Link>
                    <Link href="/services">Mobile App Development</Link>
                </div>
                <div className={styles.socialLinks}>
                    <div><Link target='_blank' href="https://api.whatsapp.com/send/?phone=%2B923470555428&text&type=phone_number&app_absent=0"> <i className="fa-brands fa-whatsapp"></i> Whatsapp</Link></div>
                    <div><Link target='_blank' href="https://www.facebook.com/Deketmet"> <i className="fa-brands fa-facebook"></i> Facebook</Link></div>
                    <div><Link target='_blank' href="mailto:support@deketmet.com"> <i className="fa-solid fa-envelope"></i> support@deketmet.com</Link></div>
                </div>
                {/* <div className={styles.newsletter}>
                    <h3>Subscribe</h3>
                    <p>Get In Touch With Us</p>
                    <form>
                        <input type='email' placeholder='Email' required></input>
                        <button>Submit</button>
                    </form>
                </div> */}
            </div>
            <div className={styles.lowerFooter}>
                <p>Deketmet All Right Reserved 2023</p>
            </div>
        </Fragment>
    )
}

export default Footer