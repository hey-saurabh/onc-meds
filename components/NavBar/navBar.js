import React from 'react'
import styles from "./navbar.module.scss"
import Link from 'next/link';
import { aboutIcon, closeBulb, githubIcon, githubLight, openBulb } from '@/utils/iconClasses';
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
                    {router.asPath == "/about" && <div className={isDark ? styles.headingDark : styles.headingLight}>ONC MEDS</div>}
                    <div className={`${styles.nav_buttons}`} >
                        {router.asPath != "/about" && <Link className='flex flex-cols items-center gap-1 text-lg' href={"/about"}>{aboutIcon} About</Link>}
                        {router.asPath == "/" ? "" : <a><button onClick={toggleDark}>{openBulb}</button></a>}
                        <a className={`${styles.desktopIcon}`} href='https://github.com/hey-saurabh/onc-meds' target='_blank'>{isDark ? githubLight : githubIcon}</a>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Navbar;