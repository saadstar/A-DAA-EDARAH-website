import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ service, icon, index }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="col-xl-4 col-lg-4 col-md-6 min-h-2"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="single-service-wrap">
        <div className="service-icon">
          <img src={icon} width={"55px"} alt="" />
        </div>
        <h4>{service.title}</h4>
        <p>{service.description}</p>
        <Link to="/services" className="service-link">
          {t('AboutSection.learnMore')} <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
