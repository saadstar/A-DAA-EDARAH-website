import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const FaqSection = () => {
    const { t , i18n} = useTranslation();
    const faqs = t('FaqSection.faqs', { returnObjects: true });

    const floatAnimation = {
        animate: {
          y: [0, -10, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        },
      };
    return (
        <div className="faq-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        {/* Title and FAQ accordion animation */}
                        <motion.div
                            className="section-title"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h6>{t('FaqSection.title')}</h6>
                            <h2>{t('FaqSection.subtitle')}</h2>
                        </motion.div>

                        <motion.div
                            className="faq-wrap mt-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <div className="cp-custom-accordion mt-60">
                                <div className="accordions" id="accordionExample">
                                    {faqs.slice(0, 3).map((faq, index) => (
                                        <motion.div
                                            className="accordion-items"
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }} // Stagger animation delay
                                        >
                                            <h2 className="accordion-header" id={`heading${index}`}>
                                                <button
                                                    className={`accordion-buttons collapsed ${i18n.language === "ar" ? "collapsedar" : ""}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${index}`}
                                                    aria-expanded="true"
                                                    aria-controls={`collapse${index}`}
                                                >
                                                    <span>0{index + 1}</span>{faq.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${index}`}
                                                className={`accordion-collapse collapse ${!index ? 'show' : ''}`}
                                                aria-labelledby={`heading${index}`}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>                
                    <div className="col-xl-6 col-lg-6">
                        <motion.div
                            className="faq-img-wrap"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            <img src={"/assets/img/9cfcf9c0-66c4-4b78-a481-376e6b911568.jpeg"} alt="" />
                            <motion.div {...floatAnimation} className="team-card d-none d-md-block">
                                <img src="assets/img/team-card.png" alt="" />
                            </motion.div>
                            <motion.div className="achievement-wrap" style={{marginRight:"20px"}}{...floatAnimation}>
                                <div className="medal-icon">
                                    <img src="assets/img/medal_dark.png" alt="" />
                                </div>
                                <motion.div className="achievement-content" >
                                    <h3>230+</h3>
                                    <h6>Award Win</h6>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqSection;
