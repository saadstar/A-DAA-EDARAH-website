import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import AppointmentBg from '../assets/img/appointment-bg.png';
import { motion } from 'framer-motion';

const AppointmentSection = () => {
    const { t } = useTranslation();

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="appointment-section pb-180" ref={ref}>
            <div className="container">
                <motion.div
                    className="appointment-inner"
                    data-background={AppointmentBg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <motion.div
                                className="section-title"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h6 className="text-white">{t('AppointmentSection.title')}</h6>
                                <h2 className="text-white">{t('AppointmentSection.subtitle')}</h2>
                            </motion.div>
                            <motion.p
                                className="text-white"
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                {t('AppointmentSection.content')}
                            </motion.p>
                            <motion.div
                                className="contact-wrap"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="contact-details">
                                    <h6>{t('AppointmentSection.contactTitle')}</h6>
                                    <p>{t('AppointmentSection.phoneNumber')}</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-xl-7 col-lg-7" ref={formRef}>
                            <motion.div
                                className="apppointment-form-wrap white-bg"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: formInView ? 1 : 0, x: formInView ? 0 : 50 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <h2>{t('AppointmentSection.appointmentFormTitle')}</h2>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" placeholder={t('AppointmentSection.formFirstName')} />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" placeholder={t('AppointmentSection.formLastName')} />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" placeholder={t('AppointmentSection.formEmail')} />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" placeholder={t('AppointmentSection.formPhoneNumber')} />
                                        </div>
                                        <div className="col-md-12">
                                            <textarea name="message" id="message" cols="30" rows="10" placeholder={t('AppointmentSection.formMessage')}></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <input type="submit" value={t('AppointmentSection.formSubmit')} />
                                        </div>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AppointmentSection;
