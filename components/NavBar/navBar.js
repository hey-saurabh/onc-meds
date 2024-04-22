import React from 'react'
import styles from "./navbar.module.scss"
import Link from 'next/link';
import { githubIcon } from '@/utils/iconClasses';

const Navbar = () => {

    return (
        <>
            <div style={{borderBottom:'1px solid #E9EEF5'}} className={`${styles.navbar}`}>
                <div className={`${styles.navbar_inner} pageContainer`}>
                    <Link className={`${styles.logo}`} href="/">
                        <img style={{width:'160px'}} src='images/onc_meds_logo.png' />
                    </Link>
                    <Link className={`${styles.logoMobile}`} href="/">
                        <img style={{width:'160px'}} src='images/onc_meds_logo.png' />
                    </Link>

                    <div className={`${styles.nav_buttons}`} >
                        <a className={`${styles.desktopIcon}`} href='https://github.com/hey-saurabh/onc-meds' target='_blank'>{githubIcon}</a>
                    </div>

                </div>
            </div>
        </>
    )
};
export default Navbar;