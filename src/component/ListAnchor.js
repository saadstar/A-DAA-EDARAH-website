import React from 'react';
import {Link} from "react-router-dom";
import NavLinks from '../Data/NavLinks.json'
import {useTranslation} from "react-i18next";
import i18n from '../i18n';
import EnglishImage from '../assets/img/english.png';
import ArabicImage from '../assets/img/arabic.png';

const ListAnchor = () => {

    const {t} = useTranslation();
    const NavLinksArr = Object.entries(NavLinks);
    const cl = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            {
                NavLinksArr.map((value, index) => {                    
                        return <li key={index}><Link to={value[1]["Path"]} style={{ letterSpacing : i18n.language === "en" ? "2px" : "" }}>{t('ListAnchor.'+value[1]["Text"])}</Link></li>
                    }
                )
            }

            {i18n.language !== 'en' && <li style={{ cursor: 'pointer', marginRight: `10px`}} onClick={() => cl('en')}><a style={{padding: 0,}} href='/'> <img src={"/assets/img/117479.png"} width={`30px`} style={{height: '30px', borderRadius: '50%'}} alt='english'/></a></li>}
            {i18n.language !== 'ar' && <li style={{ cursor: 'pointer', marginRight: `10px`}} onClick={() => cl('ar')}><img src={ArabicImage} width={`30px`}style={{height: '30px',borderRadius: '50%'}} alt='arabic'/></li>}


        </>
    );
}


export default ListAnchor;