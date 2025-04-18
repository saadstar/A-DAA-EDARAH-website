import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard'; // adjust path if needed

import Service1 from '../assets/img/service/1.png';
import Service2 from '../assets/img/service/2.png';
import Service3 from '../assets/img/service/3.png';
import Service4 from '../assets/img/service/4.png';
import Service5 from '../assets/img/service/5.png';
import Service6 from '../assets/img/service/6.png';
import Service7 from '../assets/img/service/7.png';
import Service8 from '../assets/img/service/8.png';

const ServiceSection = () => {
  const { t } = useTranslation();

  const iconImportPaths = {
    Service1: Service1,
    Service2: Service2,
    Service3: Service3,
    Service4: Service4,
    Service5: Service5,
    Service6: Service6,
    Service7: Service7,
    Service8: Service8,
  };

  const servicesData = t('Services.servicesData', { returnObjects: true });

  return (
    <div className="service-section section-padding pb-60">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-8 col-lg-8">
            <motion.div
              className="section-title mb-0"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h6 style={{ color: "#B0915D" }}>{t('Services.title')}</h6>
              <h2 style={{ color: "white" }}>{t('Services.subtitle')}</h2>
            </motion.div>
          </div>
        </div>

        <div className="row mt-100">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              icon={iconImportPaths[service.icon]}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
