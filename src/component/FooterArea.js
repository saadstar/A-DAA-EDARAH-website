import React from 'react';
import {Trans, useTranslation} from 'react-i18next';
import Footer from '../assets/img/footer-bg.jpg';
import {Link} from "react-router-dom";
import NavLinks from "../Data/NavLinks.json";


const FooterArea = () => {
    const {t} = useTranslation();
    const NavLinksArr = Object.entries(NavLinks);
    const servicesData = t('Services.servicesData', {returnObjects: true});

    return (
    <div className="footer-area" data-background={Footer} >
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                        <div className="footer-widget">
                            <div className="logo">
                                <Link to={'/'} style={{cursor:"pointer"}}><img src={'/assets/img/Artboard 3.png'} alt="" width={"width: 50%;"} height={140}/></Link>
                            </div>
                            <div className="contact-info-wrap">
                                <div className="single-contact-info">
                                    <div className="contact-icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h6>{t('FooterArea.address')}</h6>
                                        <p>{t('FooterArea.address')}</p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="contact-icon">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h6>{t('FooterArea.phoneNumber')}</h6>
                                        <p>{t('Setting.phone')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                        <div className="footer-widget">
                            <h5>{t('FooterArea.services')}</h5>
                            <div className="list-item">
                                <ul>
                                    {servicesData.slice(0, 5).map((value, index) => {
                                        return <li key={index} style={{color: '#fff', margin: '10px 0'}}><i
                                            className="las la-angle-double-right"></i>{value.title}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-5 col-sm-5">
                        <div className="footer-widget">
                            <h5>{t('FooterArea.link')}</h5>
                            <div className="list-item">
                                <ul>
                                    {NavLinksArr.map((value, index) => {
                                        return <li key={index}><Link to={value[1]["Path"]}><i
                                            className="las la-angle-double-right"></i>{t('ListAnchor.' + value[1]["Text"])}
                                        </Link></li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-widget">
                            <h5>{t('FooterArea.newsletter')}</h5>
                            <div className="newsletter-form">
                                <input type="text" placeholder={t('FooterArea.newsletterPlaceholder')}/>
                                <input type="submit" value={t('FooterArea.subscribe')}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom row mt-80">
                    <div className="col-lg-6 col-md-5">
                        <span> <Trans i18nKey={'FooterArea.rightsReserved'} components={{}}></Trans> </span>
                    </div>
                    <div className="col-lg-6 col-md-7 text-md-end">
                        <span>{t('FooterArea.Designed')}</span>
                    </div>
                </div>
            </div>
        </div>);
}

export default FooterArea;
