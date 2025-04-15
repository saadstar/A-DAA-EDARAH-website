import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroAreaImg from '../assets/img/hero-area-img.png';
import {Link} from "react-router-dom";
import navLinks from "../Data/NavLinks.json"
const HeroArea = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="hero-area theme-bg bg-cover d-flex align-items-center" data-background={HeroAreaImg}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="hero-area-content">
                            <div className="section-title">
                                <h6  className="wow fadeInDown animated" data-wow-delay="200ms" style={{ letterSpacing : i18n.language === "en" ? "3px" : "" }}>{t('HeroArea.title')}</h6>
                            </div>
                            <h1 className="text-white wow fadeInDown animated" data-wow-delay="300ms">{t('HeroArea.subtitle')}</h1>
                            <p className="text-white mt-30 wow fadeInDown animated" data-wow-delay="400ms">{t('HeroArea.description')}</p>
                            <div className="hero-btn mt-40 wow fadeInUp animated" data-wow-delay="500ms">
                                <Link to={navLinks.CONTACT.Path} className="theme-btn mr-35">{t('ListAnchor.ContactUs')}<i className = {`fa-solid fa-arrow-${i18n.language === "en" ? 'right' : 'left'}`}></i></Link>
                                {/* <div className="video-wrap d-inline-flex align-items-center">
                                   <a href="https://www.youtube.com/watch?v=KEFt2quibkg" className="video-play-btn mfp-iframe"><i className="fa-solid fa-play"></i></a>
                                   <span className="text-white">See How It Works</span>
                              </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight animated" data-wow-delay="200ms">
                        <div className="hero-img-wrap">
                            <img src={"/assets/img/ChatGPT Image Apr 16, 2025, 12_18_50 AM.png"} alt="hero" loading='lazy' style={{borderRadius:"20%",objectFit:"contain"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroArea;
