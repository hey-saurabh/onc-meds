import React from 'react'
import styles from "./navbar.module.scss"
import Link from 'next/link';
import { closeBulb, githubIcon, githubLight, openBulb } from '@/utils/iconClasses';
import { useRouter } from 'next/router';

const Navbar = ({ toggleDark, isDark }) => {

    const router = useRouter();


    return (
        <>
            <div style={{borderBottom:'1px solid #E9EEF5'}} className={`${styles.navbar}`}>
                <div className={`${styles.navbar_inner} pageContainer`}>
                    <Link className={`${styles.logo}`} href="/">
                        <img style={{width:'130px'}} src={isDark ? 'images/onc_meds_logo_white.png' : 'images/onc_meds_logo.png'} />
                    </Link>
                    <Link className={`${styles.logoMobile}`} href="/">
                    <img style={{width:'130px'}} src={isDark ? 'images/onc_meds_logo_white.png' : 'images/onc_meds_logo.png'} />
                    </Link>

                    <div className={`${styles.nav_buttons}`} >
                        {router.asPath == "/" ? "" : <a><button onClick={toggleDark}>{openBulb}</button></a>}
                        <a className={`${styles.desktopIcon}`} href='https://github.com/hey-saurabh/onc-meds' target='_blank'>{isDark ? githubLight : githubIcon}</a>
                    </div>

                </div>
            </div>
        </>
    )
};
export default Navbar;