import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import navLinks from "../Data/NavLinks.json";

const CtaSection = () => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className="cta-area" ref={ref}>
            <div className="container">
                <motion.div
                    className="cta-inner"
                    data-background="/assets/img/https___s3.us-east-1.amazonaws.com_co-assets_assets_images_real-estate-business-RichLegg.avif"
                    style={{
                        backgroundImage: `url(/assets/img/https___s3.us-east-1.amazonaws.com_co-assets_assets_images_real-estate-business-RichLegg.avif)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "12px",
                        padding: "60px 30px",
                        textAlign: "center",
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h2
                        className="text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Trans i18nKey="CtaSection.title" components={{ 1: <br /> }} />
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link to={navLinks.CONTACT.Path} className="bordered-btn mt-30">
                            {t('CtaSection.buttonText')} <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default CtaSection;
