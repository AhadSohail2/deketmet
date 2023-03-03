import React from 'react';
import Image from 'next/image';

import styles from './illus.module.css';



function HomeIllus() {
  return (
    <div className={styles.img}>
      <Image src='/images/site/HomeIllustration.svg' alt='Deketmet A man is standing and announce the product and the illustration is for design and development'
        width={800} height={800} />
    </div>
  )
}

export default HomeIllus