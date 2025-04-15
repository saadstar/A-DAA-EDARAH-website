import React from 'react';
import { useTranslation } from 'react-i18next';
import About1 from '../assets/img/about/about-1.png';
import Medal from '../assets/img/about/medal.png';
import {Link} from "react-router-dom";
import navLinks from "../Data/NavLinks.json";

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <div className="about-section gray-bg section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 wow fadeInLeft animated" data-wow-delay="200ms">
                        <div className="about-img-wrap">
                            <img src={"/assets/img/35d4d3fd-a050-48b0-a114-f9df11178be4 (1).jpeg"} alt="aboutus" loading='lazy' style={{borderRadius:"10%"}} />
                            <div className="achievement-wrap theme-bg d-flex">
                                <div className="icon">
                                    <img src={Medal} alt="" />
                                </div>
                                <div className="content">
                                    <span className="year">20+</span>
                                    <span>{t('AboutSection.achievement')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInUp animated" data-wow-delay="300ms">
                        <div className="about-content-wrap">
                            <div className="section-title">
                                <h6>{t('AboutSection.title')}</h6>
                                <h2>{t('AboutSection.subtitle')}</h2>
                            </div>
                            <p>{t('AboutSection.content')}</p>
                        </div>
                        <div className="about-list-item">
                            <ul style={{
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                {t('AboutSection.listItems', { returnObjects: true }).map((item, index) => (
                                    <li key={index}><i className="fa-solid fa-circle-check"></i>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <Link to={navLinks.ABOUT.Path} className="bordered-btn mt-40">{t('AboutSection.learnMore')} <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
