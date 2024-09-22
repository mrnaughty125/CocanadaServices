import React from 'react';
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <a href="#about" className={styles.link}>About Us</a>
                    <a href="#services" className={styles.link}>Services</a>
                    <a href="#contact" className={styles.link}>Contact</a>
                </div>
                <div className={styles.socialMedia}>
                    <a href="https://facebook.com" className={styles.socialLink}>Facebook</a>
                    <a href="https://twitter.com" className={styles.socialLink}>Twitter</a>
                    <a href="https://linkedin.com" className={styles.socialLink}>LinkedIn</a>
                </div>
            </div>
            <div className={styles.copyRight}>
                &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;
