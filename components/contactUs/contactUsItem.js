import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './contactUsItem.module.css'
function ContactItemInfo(props) {
    return (
        <div data-aos="flip-down" className={styles.itemContainer}>
            <div className={styles.itemIcon}>
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <div className={styles.itemContent}>
                <h3>{props.title}</h3>
                <p>{props.data}</p>
            </div>
        </div>
    )
}

export default ContactItemInfo