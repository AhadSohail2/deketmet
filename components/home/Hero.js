import Link from 'next/link'
import React from 'react'

import Image from 'next/image'

import styles from './Hero.module.css'

function Hero() {

    let height = 100;
    let width = 150;
    return (
        <div id='home' className={`container ${styles.container} `}>
            <div className={styles.content} data-aos="flip-down" data-aos-duration="1000">
                <h2>We Are <span>Deketmet</span></h2>
                <p>
Experienced web and app development services provider. 2+ years of expertise delivering innovative solutions to clients worldwide.</p>
                <div className={styles.socialLinks}>
                    <Link href="https://api.whatsapp.com/send/?phone=%2B923470555428&text&type=phone_number&app_absent=0"><i className="fa-brands fa-whatsapp"></i></Link>
                    <Link href="https://www.facebook.com/Deketmet"><i className="fa-brands fa-facebook"></i></Link>
                </div>
                <div className={styles.aboutBtn}>
                    <Link href="/#about">About Us</Link>
                </div>
            </div>
            <div>
                <div className={styles.slider} data-aos="flip-up" data-aos-duration="1000">
                    <div>
                        <Image src="/logo/html.png" alt="HTML Logo" width={width} height={height} />
                        <Image src="/logo/css.png" alt="CSS Logo" width={width} height={height} />
                        <Image src="/logo/react.png" alt="React Logo" width={width} height={height} />
                        <Image src="/logo/flutter.png" alt="Flutter Logo" width={width} height={height} />
                        <Image src="/logo/js.png" alt="Js Logo" width={width} height={height} />
                        <Image src="/logo/express.png" alt="express Logo" width={width} height={height} />
                        <Image src="/logo/node.png" alt="node Logo" width={width} height={height} />
                        <Image src="/logo/tailwind.png" alt="Tailwind Logo" width={width} height={height} />
                        <Image src="/logo/html.png" alt="HTML Logo" width={width} height={height} />
                        <Image src="/logo/css.png" alt="CSS Logo" width={width} height={height} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero