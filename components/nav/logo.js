import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Styles from './logo.module.css'

function NavLogo() {
    return (
        <div className={Styles.link}>
            <Link href={"/#home"} >
                <a>
                    <img src="/images/Logo/Logo.png" alt='Deketmet' className={Styles.img} ></img>
                </a>
            </Link>
        </div>
    )
}

export default NavLogo