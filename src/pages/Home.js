import {React} from 'react';
import HeaderTopArea from "../component/HeaderTopArea";
import HeaderArea from "../component/HeaderArea";
import HeroArea from "../component/HeroArea";
import AboutSection from "../component/AboutSection";
import ServiceSection from "../component/ServiceSection";
import VideoSection from "../component/VideoSection";
import AppointmentSection from "../component/AppointmentSection";
import FaqSection from "../component/FaqSection";
import CtaSection from "../component/CtaSection";
import FooterArea from "../component/FooterArea";


const Home = () => {

    return (

        <>
            <HeaderTopArea/>
            <HeaderArea/>
            <HeroArea/>
            <AboutSection/>
            <ServiceSection/>
            <VideoSection/>
            <AppointmentSection/>
            <FaqSection/>
            <CtaSection/>
            <FooterArea/>
        </>


    );
};


export default Home;