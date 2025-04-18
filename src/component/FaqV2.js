import React from 'react';
import { useTranslation } from "react-i18next";
import FaqItem from "./FaqItem";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const FaqV2 = () => {
  const { t } = useTranslation();
  const faqs = t('FaqSection.faqs', { returnObjects: true });

  const [leftRef, leftInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [rightRef, rightInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="faq-section section-padding">
      <div className="container">
        <div className="row gx-5">
          {/* Left Column */}
          <motion.div
            ref={leftRef}
            className="col-xl-6 col-lg-6"
            initial={{ opacity: 0, x: -50 }}
            animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="faq-wrap">
              <div className="cp-custom-accordion">
                <div className="accordions" id="accordionExample">
                  {faqs.slice(0, 4).map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <FaqItem faq={faq} index={index} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            ref={rightRef}
            className="col-xl-6 col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="faq-wrap">
              <div className="cp-custom-accordion">
                <div className="accordions" id="accordionExample2">
                  {faqs.slice(4).map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <FaqItem faq={faq} index={index} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FaqV2;
