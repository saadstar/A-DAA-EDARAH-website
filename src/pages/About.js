import React from 'react';
import HeaderTopArea from "../component/HeaderTopArea";
import HeaderArea from "../component/HeaderArea";
import BreadcrumbArea from "../component/BreadcrumbArea";
import AboutSection from "../component/AboutSection";
import FeatureSection from "../component/FeatureSection";
import FaqSection from "../component/FaqSection";
import CtaSection from "../component/CtaSection";
import FooterArea from "../component/FooterArea";
import { Helmet } from "react-helmet-async";



const About = () => {

    return (
      <>
        <Helmet>
          <title>About EDARAH</title>
          <meta
            name="description"
            content="تقييم عقاري – في خدمتك أينما كنت. واحدة من أهم الشركات الرائدة في تقديم خدمات التقييم العقاري  ومدعومه بأسطول كبير ومجهز لخدمة عملائنا."
            data-rh="true"
          />
          <link rel="canonical" href="/about" />
        </Helmet>
        <HeaderTopArea />
        <HeaderArea />
        <BreadcrumbArea />
        <AboutSection />
        <FeatureSection />
        <FaqSection />
        <CtaSection />
        <FooterArea />
      </>
    );

};


export default About;