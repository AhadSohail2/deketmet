import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from './portfolioItem.module.css';
import Aos from 'aos';
function PortItem(props) {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const { title, category, image, size } = props;

  return (
    <div data-aos="zoom-in-down" size={size} className={styles.portItemContainer}>
      <div className={styles.portImage}>
        <Image src={image} alt={title} width={650} height={350} />
      </div>
      <h3>{title}</h3>
      <h4>{category}</h4>
    </div>
  )
}

export default PortItem