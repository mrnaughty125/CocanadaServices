import React, { useState } from 'react';
import styles from './index.module.css';
import logo from '../../../assets/logo.svg';
import { Navigate, useNavigate } from 'react-router-dom';
export const AppHeader = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState('home');

  return (
    <header className={styles.header}>
         <img
            src={logo}
            alt="mahatria"
            className={styles.appIcon}
            loading="lazy"
          />
      <nav className={styles.nav}>
          <div className={active === 'home'? `${styles.activeColor}`: `${styles.navElements}`} onClick = {()=>{
            setActive('home')
            navigate('/')}}>Home</div>
          <div className={active === 'aboutus'? `${styles.activeColor}`: `${styles.navElements}`} onClick = {()=>{
            setActive('aboutus')
            navigate('/aboutus')}}>About us</div>
          <div className={active === 'services'? `${styles.activeColor}`: `${styles.navElements}`}onClick = {()=>{
            setActive('services')
            navigate('/services')}}>Services</div>
          <div className={active === 'blog'? `${styles.activeColor}`: `${styles.navElements}`}onClick = {()=>{
            setActive('blog')
            navigate('/blog')}}>Blog</div>
        <button className={styles.contactBtn} onClick = {()=>{
            setActive('contactUs')
            navigate('/contactUs')}}>Contact us</button>
      </nav>
    </header>
  );
};


