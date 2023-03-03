import React from 'react'
import styles from './service.module.css';


function Service(props) {

    const {title,content,color} = props;

    return (
        <div data-aos="fade-up-right" co={color} className={styles.service}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
  )
}

export default Service