import React from 'react';
import {Trans, useTranslation} from 'react-i18next';
import CtaBg from '../assets/img/cta-bg.jpg';
import {Link} from "react-router-dom";
import navLinks from "../Data/NavLinks.json";

const CtaSection = () => {
    const { t } = useTranslation();

    return (
        <div className="cta-area">
            <div className="container">
                <div className="cta-inner" data-background={"/assets/img/https___s3.us-east-1.amazonaws.com_co-assets_assets_images_real-estate-business-RichLegg.avif"} style={{ backgroundImage: `url(/assets/img/https___s3.us-east-1.amazonaws.com_co-assets_assets_images_real-estate-business-RichLegg.avif)`,objectFit:"contain" }}>
                    <h2 className="text-white wow fadeInUp animated" data-wow-delay="200ms"><Trans i18nKey="CtaSection.title" components={{ 1: <br /> }} /></h2>
                    <Link to={navLinks.CONTACT.Path} className="bordered-btn mt-30 wow fadeInDown animated" data-wow-delay="400ms">{t('CtaSection.buttonText')} <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default CtaSection;
