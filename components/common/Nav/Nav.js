import React, { useState } from 'react';

import Image from 'next/image';

import styles from './Nav.module.css';
import Link from 'next/link';


function Nav() {
    const [opened, setOpened] = useState(false);

    const openHandler = () => {
        setOpened((prev) => !prev)
    }

    return (
        <div className={`container ${styles.container}`}>
            <div className={styles.resContainer}>
                <Link href="/">
                    <div className={styles.logo}>
                        <Image src="/favicon.svg" width={60} height={60} alt="Deketmet Logo" />
                        <h1>Deketmet</h1>
                    </div>
                </Link>
                <button onClick={openHandler}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            <div className={`${styles.links} ${opened ? styles.active : styles.deactive}`}>
                <Link href="/">Home</Link>
                <Link href="/#about">About Us</Link>
                <Link href="/#services">Services</Link>
                <Link href="/services">Portfolio</Link>
                <Link href="/#contact">Get Quote</Link>
            </div>
        </div>
    )
}

export default Nav