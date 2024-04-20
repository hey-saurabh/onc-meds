import React from 'react'
import styles from "./navbar.module.scss"
import Link from 'next/link';
import { GithubOutlined } from "@ant-design/icons";

const Navbar = () => {

    return (
        <>
            <div style={{borderBottom:'1px solid #E9EEF5'}} className={`${styles.navbar}`}>
                <div className={`${styles.navbar_inner} pageContainer`}>
                    <Link className={`${styles.logo}`} href="/">
                        <img style={{width:'70px'}} src='images/icons/ONC-MEDS_transparent.png' />
                    </Link>
                    <Link className={`${styles.logoMobile}`} href="/">
                        <img style={{width:'160px'}} src='https://i.postimg.cc/vHbBwtt6/ONC-MEDS-transparent.png' />
                    </Link>

                    <div className={`${styles.nav_buttons}`} >
                        <a className={`${styles.desktopIcon}`} href='https://github.com/hey-saurabh/onc-meds' target='_blank'><GithubOutlined /></a>
                    </div>

                </div>
            </div>
        </>
    )
};
export default Navbar;