import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import ListAnchor from "./ListAnchor";
import { useTranslation } from 'react-i18next';

const HeaderArea = () => {
    const { t } = useTranslation();
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const mobileNav = useRef();    
    const location = useLocation();

    const changeStatus = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        openSlide();
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const height = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );
            if (height > 1400) {
                if (window.pageYOffset > 300 && !isSticky) {
                    setIsSticky(true);
                } else if (window.pageYOffset <= 300 && isSticky) {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isSticky]);

    const openSlide = () => {
        if (mobileNav.current) {
            mobileNav.current.style.right = isOpen ? '-380px' : '0';
        }
    };

    return (
        <motion.div
            id="header-sticky"
            className={`header-area ${location.pathname !== '/' ? 'header-two bread-header' : ''} ${isSticky ? 'header-sticky' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navigation">
                <div className="container">
                    <div className="header-inner-box">
                        {/* Logo */}
                        <motion.div
                            className="logo"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Link to={'/'}>
                                <img src="/assets/img/logo.png" width="100" alt="logo" height='60' />
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <motion.div
                            className="main-menu d-none d-lg-inline-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <ul>
                                <ListAnchor />
                            </ul>
                        </motion.div>

                        {/* Mobile Navigation */}
                        <div className="mobile-nav-bar d-block d-lg-none">
                            <motion.div
                                className="mobile-nav-wrap"
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div id="hamburger" onClick={changeStatus}>
                                    <i className="las la-bars"></i>
                                </div>
                                <motion.div
                                    className="mobile-nav"
                                    ref={mobileNav}
                                    initial={{ right: '-380px' }}
                                    animate={{ right: isOpen ? '-380px' : '0' }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <button type="button" className="close-nav" onClick={changeStatus}>
                                        <i className="las la-times-circle"></i>
                                    </button>
                                    <nav className="sidebar-nav">
                                        <ul className="metismenu" id="mobile-menu">
                                            <ListAnchor />
                                        </ul>
                                    </nav>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Header Right */}
                        <motion.div
                            className="header-right d-none d-lg-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            <div className="contact-icon-wrap">
                                <img src="assets/img/chat.png" alt="chatIcon" style={{ margin: '0 10px' }} />
                                <div className="contact-info">
                                    <p>{t('HeaderArea.needHelp')}</p>
                                    <p><b>{t('Setting.phone')}</b></p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HeaderArea;