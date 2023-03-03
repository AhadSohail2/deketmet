import React, { Fragment } from 'react';
import MainNavigation from './main-navigation';
import styles from './layout.module.css'
import NavLogo from './logo';

function Layout(props) {
    return (
        <Fragment>
            <div className={`container ${styles.NavContainer}`} >
                <header className={styles.header}>
                    <NavLogo />
                    <MainNavigation />
                </header>
            </div>
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout