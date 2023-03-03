import React, { useEffect } from 'react'
import PWFItems from './pwf-item';
import styles from './pwfLayout.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

function PwfLayout() {
    
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    return (
        <div className={`container ${styles.pwfContainer}`}>
            <PWFItems
                title="Client Support"
                image="/images/site/icons/Ideas.svg"
                content="Our goal is to provide quality content that satisfies our clients" 
                aos="fade-right"
            />
            <PWFItems
                title="Unique Designs"
                image="/images/site/icons/PixelPerfect.svg"
                content="We will design a website that has a unique design from other websites"
                aos="flip-up"
            />
            <PWFItems
                title="Reasonable Pricing"
                image="/images/site/icons/HighQuality.svg"
                content="We are providing services at reasonable pricing according to your product."
                aos="fade-down"
            />
        </div>
    )
}

export default PwfLayout;