import React from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";
import navLinks from "../Data/NavLinks.json";

const FeatureSection = () => {
    const { t } = useTranslation();
    const features = t('FeatureSection.features', { returnObjects: true });

    return (
        <div className="feature-section section-padding">
            <div className="feature-bg"></div>
            <div className="container">
                <div className="row">
                    <div className="offset-xl-5 col-xl-7 offset-lg-5 col-lg-7">
                        <div className="feature-wrap">
                            <div className="section-title">
                                <h6 className="text-white">{t('FeatureSection.title')}</h6>
                                <h2 className="text-white">{t('FeatureSection.subtitle')}</h2>
                            </div>
                            <p className="text-white">{t('FeatureSection.description')}</p>
                            <div className="feature-list-item">
                                <ul>
                                    {features.map((feature, index) => (
                                        <li key={index}><i className="fa-solid fa-circle-check"></i>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <Link to={navLinks.CONTACT.Path} className="bordered-btn-two mt-50">{t('ListAnchor.ContactUs')}<i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureSection;
