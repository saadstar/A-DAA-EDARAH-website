import React from 'react';
import BreadcrumbAreaBg from "../assets/img/bread-bg.png";
import NavLinks from '../Data/NavLinks.json';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const BreadcrumbArea = (props) => {
    const { t , i18n} = useTranslation();
    const Data = Object.entries(NavLinks);
    const Location = useLocation();
    const currentPage = Data.find(value => value[1]['Path'] === Location.pathname);

    return (
        <div className="breadcrumb-area" style={{ backgroundImage: `url(/assets/img/pexels-energepic-com-27411-313691.jpg)` ,objectFit:"cover"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-title">
                            <h1 style={{ letterSpacing : i18n.language === "en" ? "1px" : "" }}>{t(`ListAnchor.${currentPage[1]['Text']}`)}</h1>
                            <h6><Link to={"/"}>{t('BreadcrumbArea.home')}</Link> / {t(`ListAnchor.${currentPage[1]['Text']}`)}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadcrumbArea;
