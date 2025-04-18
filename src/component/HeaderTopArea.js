import React from 'react';
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const HeaderTopArea = () => {
    const { t } = useTranslation();
    const location = useLocation();
    return (
        <div className={`header-top-area ${location.pathname === '/' ? 'theme-bg' : 'secondary-bg'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8">
                        <span><i className="fa-solid fa-envelope"></i>{t('Setting.email')}</span>
                        <span><i className="fa-solid fa-location-dot"></i>{t('Setting.address')}</span>
                        <span><i className="fa-solid fa-clock"></i>{t('Setting.workingHours')}</span>
                    </div>
                    <div className="col-xl-4 col-lg-4 text-end">
                        <div className="social-area">
                            <a href="https://x.com/Edarah_sa" target='_blank' rel='noopener'><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/edarah.sa/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://x.com/Edarah_sa" target='_blank'><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/edarah_sa/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTopArea;
