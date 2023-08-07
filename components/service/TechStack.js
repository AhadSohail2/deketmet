import Image from 'next/image'
import React from 'react'

import styles from './TechStack.module.css'

function TechStack() {
    return (
        <div data-aos="flip-left" data-aos-duration="1000" className={`container ${styles.container}`}>
            <h3>Tech Stack</h3>
            <Image src="/services/logo.png" width={885} height={287} alt='Languages Logos' />
        </div>
    )
}

export default TechStack