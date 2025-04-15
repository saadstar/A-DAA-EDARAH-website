import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <div className="contact-page white-bg section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="section-title">
                            <h6>{t('ContactSection.title')}</h6>
                            <h2>{t('ContactSection.subtitle')}</h2>
                        </div>
                        <div className="contact-form-wrap mt-40">
                            <form action="#">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder={t('ContactSection.formName')} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" placeholder={t('ContactSection.formEmail')} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="tel" placeholder={t('ContactSection.formPhoneNumber')} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder={t('ContactSection.formSubject')} />
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" id="message" cols="30" rows="10" placeholder={t('ContactSection.formMessage')}></textarea>
                                        <input type="submit" value={t('ContactSection.submitButtonText')} />
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-info-wrap gray-bg">
                            <h3>{t('ContactSection.contactInfoTitle')}</h3>
                            <p>{t('ContactSection.contactInfoDescription')}</p>
                            <div className="contact-info-inner mt-60">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-contact-info">
                                            <div className="info-icon">
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                            <div className="info-content">
                                                <h4>{t('ContactSection.phoneTitle')}</h4>
                                                <p>{t('Setting.phone')}</p>
                                                {/*<p>(208) 555-0112</p>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-contact-info">
                                            <div className="info-icon">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <div className="info-content">
                                                <h4>{t('ContactSection.emailTitle')}</h4>
                                                <p>{t('Setting.email')}</p>
                                                {/*<p>sara.cruz@example.com</p>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-contact-info">
                                            <div className="info-icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div className="info-content">
                                                <h4>{t('ContactSection.locationTitle')}</h4>
                                                <p className="mb-10">4517 Washington Ave. Manchester, Kentucky 39495</p>
                                                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="google-map mt-100">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3690.404245521138!2d91.80989606467384!3d22.338360085303748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdewanhat%20near%20Chattogram!5e0!3m2!1sen!2sbd!4v1677069314806!5m2!1sen!2sbd" width="600" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
