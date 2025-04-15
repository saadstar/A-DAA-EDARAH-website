import React from 'react';
import FaqBg from '../assets/img/faq-bg.jpg'
import FaqItem from "./FaqItem";
import {useTranslation} from "react-i18next";


const FaqServiceSection = () => {
    const { t , i18n} = useTranslation();

    const faqs = t('FaqSection.faqs', { returnObjects: true });

    return (
        <div className="faq-section section-padding pb-240">
            <div className="container">
                <div className="row faq-bg bg-cover" data-background={FaqBg} style={{ backgroundImage: `url(/assets/img/fffd9e7e55a86069e314fdaf6d8ff777.jpeg)` }}>

                    <div className="col-xl-6 col-lg-8 wow fadeInUp animated" data-wow-delay="200ms">
                        <div className="faq-wrapper">
                            <div className="section-title">
                                <h6>{t('FaqSection.title')}</h6>
                                <h2>{t('FaqSection.subtitle')}</h2>
                            </div>
                            <div className="faq-inner-content">
                                <div className="cp-custom-accordion mt-60">
                                    {faqs.slice(0, 3).map((faq, index) => (
                                        <FaqItem faq={faq} index={index} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

);
}

export default FaqServiceSection;