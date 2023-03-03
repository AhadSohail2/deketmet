import React from 'react'
import styles from './content.module.css'

function AboutContent(props) {
    return (
        <div data-aos={props.aos}  className={styles.aboutContent}>
            <h3>
                We are <span>Deketmet</span>
            </h3>
            <h2>
                We can build anything you want
            </h2>
            <p>
             Hi, We are DEKETMET. We will help you to grow your business by using digital services. We have experienced developers, marketers, and designers who have completed numerous projects. Our goal is to provide quality content.
            </p>
        </div>
    )
}

export default AboutContent