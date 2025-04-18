import React from 'react';
import { useTranslation } from 'react-i18next';
import Medal from '../assets/img/about/medal.png';
import { Link } from 'react-router-dom';
import navLinks from '../Data/NavLinks.json';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

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

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="about-section gray-bg section-padding">
      <div className="container">
        <div className="row align-items-center">
          {/* Image and animated badge */}
          <div className="col-xl-6 col-lg-6">
            <motion.div
              className="about-img-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img
                src="/assets/img/35d4d3fd-a050-48b0-a114-f9df11178be4 (1).jpeg"
                alt="aboutus"
                loading="lazy"
                style={{ borderRadius: '10%' }}
              />

              {/* Floating animated medal */}
              <motion.div
                className="achievement-wrap theme-bg d-flex"
                {...floatAnimation}
                style={{ marginTop: '20px' }}
              >
                <div className="icon">
                  <img src={Medal} alt="medal" />
                </div>
                <div className="content">
                  <span className="year">20+</span>
                  <span>{t('AboutSection.achievement')}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Content section */}
          <div className="col-xl-6 col-lg-6">
            <motion.div
              className="about-content-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1}
            >
              <div className="section-title">
                <h6>{t('AboutSection.title')}</h6>
                <h2>{t('AboutSection.subtitle')}</h2>
              </div>
              <p>{t('AboutSection.content')}</p>
            </motion.div>

            <motion.div
              className="about-list-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={2}
            >
              <ul style={{ display: 'flex', flexDirection: 'column' }}>
                {t('AboutSection.listItems', { returnObjects: true }).map((item, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-circle-check"></i> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-40"
            >
              <Link to={navLinks.ABOUT.Path} className="bordered-btn">
                {t('AboutSection.learnMore')} <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;