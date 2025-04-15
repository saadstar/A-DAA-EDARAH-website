import React from 'react';
import { useTranslation} from 'react-i18next';
import Service1 from '../assets/img/service/1.png';
import Service2 from '../assets/img/service/2.png';
import Service3 from '../assets/img/service/3.png';
import Service4 from '../assets/img/service/4.png';
import Service5 from '../assets/img/service/5.png';
import Service6 from '../assets/img/service/6.png';
import Service7 from '../assets/img/service/7.png';
import Service8 from '../assets/img/service/8.png';
import {Link} from "react-router-dom";


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
                    <div className="col-xl-8 col-lg-8 wow fadeInUp animated" data-wow-delay="200ms">
                        <div className="section-title mb-0">

                            <h6 style={{color:"white"}}>{t('Services.title')}</h6>
                            <h2 >{t('Services.subtitle')}</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-100">
                    {servicesData.map(service => (
                        <div key={service.id} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated min-h-2" data-wow-delay="200ms">
                            <div className="single-service-wrap">
                                <div className="service-icon">
                                    <img src={iconImportPaths[service.icon]} width={"55px"} alt="" />
                                </div>
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                                <Link to={"/services"} className="service-link">{t('AboutSection.learnMore')} <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
