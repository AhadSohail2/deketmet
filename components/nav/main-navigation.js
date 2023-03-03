import React, { useState } from 'react'
import Styles from './mainNavigation.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function MainNavigation() {

    const [showNav, setShowNav] = useState(false)

    function NavHandler() {
        setShowNav(!showNav);
    }

    const showNavClass = showNav ? Styles.show : Styles.hide;


    return (
        <nav className={Styles.nav}>
            <div className={Styles.resBars}>
                <FontAwesomeIcon icon={faBars} onClick={NavHandler} />
            </div>
            <ul className={showNavClass}>
                <li><a href='#home'>Home</a></li>
                <li><a href='#aboutUs'>About Us</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio </a></li>
                <li><a href='#contactUs'>Contact Us </a></li>

            </ul>
        </nav>
    )
}

export default MainNavigation