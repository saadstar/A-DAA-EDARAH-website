import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import ListAnchor from "./ListAnchor";
import { useTranslation } from 'react-i18next';

const HeaderArea = () => {
    const { t } = useTranslation();
    const [isSticky, setIsSticky] = useState(false);


    const [isOpen, setIsOpen] = useState(true);
    const mobileNav = useRef();

    const changeStatus = () => {    
        setIsOpen(prevState => !prevState);
    }


    useEffect(() => {
        openSlide()
    }, [isOpen])

    useEffect(() => {
        const handleScroll = () => {
            const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

            if (height > 1400) {
                if (window.pageYOffset > 300 && !isSticky) {
                    setIsSticky(true);
                } else if (window.pageYOffset <= 300 && isSticky) {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSticky]);

    const openSlide = () => {
        const navElement = mobileNav.current;
        if (isOpen) {
            mobileNav.current.style.right = '-380px';
        } else {
            mobileNav.current.style.right = '0';
        }
    }

    const location = useLocation();
    return (
        <div id="header-sticky" className={`header-area ${location.pathname !== '/' ? 'header-two bread-header' : ''} ${isSticky ? 'header-sticky' : ''}`}>
            <div className="navigation">
                <div className="container">
                    <div className="header-inner-box">

                        <div className="logo">
                            <Link to={'/'}> <img src="/assets/img/logo.png" width="150" alt="logo" height='100' /> </Link>
                        </div>

                        <div className="main-menu d-none d-lg-inline-block">
                            <ul>
                                <ListAnchor />
                            </ul>
                        </div>

                        <div className="mobile-nav-bar d-block d-lg-none">
                            <div className="mobile-nav-wrap">
                                <div id="hamburger" onClick={changeStatus}>
                                    <i className="las la-bars"></i>
                                </div>
                                <div className="mobile-nav" ref={mobileNav}>
                                    <button type="button" className="close-nav" onClick={changeStatus}>
                                        <i className="las la-times-circle"></i>
                                    </button>
                                    <nav className="sidebar-nav">
                                        <ul className="metismenu" id="mobile-menu">
                                            <ListAnchor />
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="header-right d-none d-lg-block">
                            <div className="contact-icon-wrap">
                                <img src="assets/img/chat.png" alt="chatIcon" style={{margin:'0 10px'}}/>
                                <div className="contact-info">
                                    <p>{t('HeaderArea.needHelp')}</p>
                                    <p><b>{t('Setting.phone')}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HeaderArea;
