import React from 'react';
import { useTranslation } from 'react-i18next';
import Img1 from '../assets/img/star-primary.png';
import Img2 from '../assets/img/star-primary.png';

const FeatureSlider = () => {
    const { t } = useTranslation();
    const items = t('FeatureSlider.items', { returnObjects: true });

    return (
        <div className="feature_line">
            <div className="feature_item">
                {items.map((item, index) => (
                    <h5 key={index}><img src={require(`../assets/img/${item.image}`).default} alt=""/>{item.name}</h5>
                ))}
            </div>
        </div>
    );
}

export default FeatureSlider;
