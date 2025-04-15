import React from 'react';
import { useTranslation } from 'react-i18next';
import AppointmentBg from '../assets/img/appointment-bg.png';

const AppointmentSection = () => {
    const { t } = useTranslation();

    return (
        <div className="appointment-section pb-180">
            <div className="container">
                <div className="appointment-inner" data-background={AppointmentBg} >
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <div className="section-title">
                                <h6 className="text-white wow fadeInUp animated" data-wow-delay="200ms">{t('AppointmentSection.title')}</h6>
                                <h2 className="text-white wow fadeInDown animated" data-wow-delay="400ms">{t('AppointmentSection.subtitle')}</h2>
                            </div>
                            <p className="text-white wow fadeInUp animated" data-wow-delay="200ms">{t('AppointmentSection.content')}</p>
                            <div className="contact-wrap">
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="contact-details">
                                    <h6>{t('AppointmentSection.contactTitle')}</h6>
                                    <p>{t('AppointmentSection.phoneNumber')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 wow fadeInDown animated" data-wow-delay="400ms">
                            <div className="apppointment-form-wrap white-bg">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppointmentSection;
