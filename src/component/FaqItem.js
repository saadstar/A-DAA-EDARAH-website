import React from 'react';
import {useTranslation} from "react-i18next";

const FaqItem = ({ faq, index }) => {

    const {i18n} = useTranslation();
    return (
        <div className="accordion-items" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
                <button className={`accordion-buttons collapsed ${i18n.language === "ar" ? "collapsedar" : ""} `} type="button" data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`} aria-expanded="true"
                        aria-controls={`collapse${index}`}>
                    <span>0{index + 1}</span>{faq.question}
                </button>
            </h2>
            <div id={`collapse${index}`} className={`accordion-collapse collapse ${!index ? 'show': ''}`}
                 aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {faq.answer}
                </div>
            </div>
        </div>
    );
};

export default FaqItem;
