import React from 'react';
import {useTranslation} from "react-i18next";
import FaqItem from "./FaqItem";


const FaqV2 = () => {
    const { t , i18n} = useTranslation();
    const faqs = t('FaqSection.faqs', { returnObjects: true });

    return (
        <div className="faq-section section-padding">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-wrap">
                            <div className="cp-custom-accordion">
                                <div className="accordions" id="accordionExample">
                                    {faqs.slice(0, 4).map((faq, index) => (
                                        <FaqItem faq={faq} index={index} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-wrap">
                            <div className="cp-custom-accordion">
                                <div className="accordions" id="accordionExample2">
                                    {faqs.slice(4).map((faq, index) => (
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


export default FaqV2;