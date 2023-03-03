import React from 'react';
import Image from 'next/image';
import styles from './pwf-item.module.css';
function PWFItems(props) {
    return (
        <div data-aos={props.aos} className={styles.pwfItem}>
            <div className={styles.pwfImage}>
                <Image src={props.image} alt={props.title} width={50} height={50} />
            </div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default PWFItems