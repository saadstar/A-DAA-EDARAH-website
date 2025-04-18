import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import navLinks from "../Data/NavLinks.json";

const FeatureSection = () => {
  const { t } = useTranslation();
  const features = t('FeatureSection.features', { returnObjects: true });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="feature-section section-padding">
      <div className="feature-bg"></div>
      <div className="container">
        <div className="row">
          <motion.div
            ref={ref}
            className="offset-xl-5 col-xl-7 offset-lg-5 col-lg-7"
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="feature-wrap">
              <div className="section-title">
                <h6 className="text-white">{t('FeatureSection.title')}</h6>
                <h2 className="text-white">{t('FeatureSection.subtitle')}</h2>
              </div>
              <p className="text-white">{t('FeatureSection.description')}</p>

              <div className="feature-list-item">
                <ul>
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <i className="fa-solid fa-circle-check"></i>{feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <Link to={navLinks.CONTACT.Path} className="bordered-btn-two mt-50">
                {t('ListAnchor.ContactUs')}<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
