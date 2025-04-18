import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import HeroAreaImg from '../assets/img/hero-area-img.png';
import { Link } from 'react-router-dom';
import navLinks from '../Data/NavLinks.json';
import { animate } from 'framer-motion';

const HeroArea = () => {
  const { t, i18n } = useTranslation();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    animate(titleRef.current, { opacity: 1, y: 0 }, { delay: 0.2, duration: 0.6 });
    animate(subtitleRef.current, { opacity: 1, y: 0 }, { delay: 0.4, duration: 0.6 });
    animate(descRef.current, { opacity: 1, y: 0 }, { delay: 0.6, duration: 0.6 });
    animate(btnRef.current, { opacity: 1, y: 0 }, { delay: 0.8, duration: 0.6 });
    animate(imgRef.current, { opacity: 1, scale: 1 }, { delay: 0.5, duration: 1.2 });
  }, []);

  return (
    <div
      className="hero-area theme-bg bg-cover d-flex align-items-center relative"
      style={{ backgroundImage: `url(${HeroAreaImg})`, direction: 'rtl' }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="hero-area-content">
              <div className="section-title">
                <h6
                  ref={titleRef}
                  style={{
                    letterSpacing: i18n.language === 'en' ? '3px' : '',
                    opacity: 0,
                    transform: 'translateY(40px)'
                  }}
                >
                  {t('HeroArea.title')}
                </h6>
              </div>

              <h1
                className="text-white"
                ref={subtitleRef}
                style={{ opacity: 0, transform: 'translateY(40px)' }}
              >
                {t('HeroArea.subtitle')}
              </h1>

              <p
                className="text-white mt-30"
                ref={descRef}
                style={{ opacity: 0, transform: 'translateY(40px)' }}
              >
                {t('HeroArea.description')}
              </p>

              <div
                className="hero-btn mt-40"
                ref={btnRef}
                style={{ opacity: 0, transform: 'translateY(40px)' }}
              >
                <Link
                  to={navLinks.REQUEST.Path}
                  className="theme-btn mr-35 hover:scale-105 transition-transform duration-300"
                >
                  {t('ListAnchor.ApplyRequest')}{' '}
                  <i className={`fa-solid fa-arrow-${i18n.language === 'en' ? 'right' : 'left'}`}></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6">
            <div
              className="hero-img-wrap"
              ref={imgRef}
              style={{ opacity: 0, transform: 'scale(0.8)' }}
            >
              <img
                src="/assets/img/38057462-423f-4611-8dbc-dbe2bc31ffcb.jpeg"
                alt="hero"
                loading="lazy"
                style={{ borderRadius: '20%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;