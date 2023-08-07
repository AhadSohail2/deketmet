import Link from 'next/link'
import React from 'react'

import Image from 'next/image'

import styles from './Hero.module.css'

function Hero() {

    return (
        <div className={`container ${styles.container} `}>
            <div className={styles.content} data-aos-duration="1000" data-aos="fade-up">
                <h2>Web And App Development</h2>
                <p>Web and app development is our passion. With expertise in both domains, we offer comprehensive solutions to elevate your online presence. From designing captivating websites to crafting intuitive mobile applications, we deliver seamless user experiences. Our team&&apos;s technical prowess, creativity, and dedication ensure your project&&apos;s success, empowering you to reach new heights in the digital landscape. Partner with us to unlock the full potential of your business with cutting-edge web and app development services.</p>
                <div className={styles.socialLinks}>
                    <Link href="https://api.whatsapp.com/send/?phone=%2B923470555428&text&type=phone_number&app_absent=0"><i className="fa-brands fa-whatsapp"></i></Link>
                    <Link href="https://www.facebook.com/Deketmet"><i className="fa-brands fa-facebook"></i></Link>
                </div>
                <div className={styles.contactBtn}>
                    <Link href="/services/#contact">Contact Us</Link>
                </div>
            </div>
            <div data-aos="fade-down" data-aos-duration="1000" className={styles.illus}>
                <Image src="/services/serviceIllu.svg" width={800} height={500} alt='Service Illus' />
            </div>
        </div>
    )
}

export default Hero