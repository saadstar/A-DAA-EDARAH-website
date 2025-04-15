import React from 'react';
import { useTranslation } from 'react-i18next';


const FaqSection = () => {
    const { t , i18n} = useTranslation();
    const faqs = t('FaqSection.faqs', { returnObjects: true });

    return (
        <div className="faq-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="section-title">
                            <h6>{t('FaqSection.title')}</h6>
                            <h2>{t('FaqSection.subtitle')}</h2>
                        </div>
                        <div className="faq-wrap mt-0">
                            <div className="cp-custom-accordion mt-60">
                                <div className="accordions" id="accordionExample">
                                    {faqs.slice(0, 3).map((faq, index) => (
                                        <div className="accordion-items" key={index}>
                                            <h2 className="accordion-header" id={`heading${index}`}>
                                                <button className={`accordion-buttons collapsed ${i18n.language === "ar" ? "collapsedar" : ""} `}  type="button" data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse${index}`} aria-expanded="true"
                                                        aria-controls={`collapse${index}`}>
                                                    <span>0{index + 1}</span>{faq.question}
                                                </button>
                                            </h2>
                                            <div id={`collapse${index}`} className={`accordion-collapse collapse ${!index ? 'show': ''}`}
                                                 aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-img-wrap">
                            <img src={"/assets/img/9cfcf9c0-66c4-4b78-a481-376e6b911568.jpeg"} alt="" />
                            <div className="team-card d-none d-md-block">
                                {/*<img src="assets/img/team-card.png" alt="" />*/}
                            </div>
                            <div className="achievement-wrap">
                                <div className="medal-icon">
                                    <img src="assets/img/medal_dark.png" alt="" />
                                </div>
                                <div className="achievement-content">
                                    <h3>230+</h3>
                                    <h6>Award Win</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqSection;
