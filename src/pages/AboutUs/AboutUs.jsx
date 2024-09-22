import React from 'react'
import AboutHeroSection from '../../components/AboutHeroSection/AboutHeroSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection/whyChooseUsSection';
import ServicesWeOffer from '../../components/ServicesWeOffer/ServicesWeOffer';
import Footer from '../../common/Footer/Footer';


const AboutUs=()=> {
  return (
    <>
        <AboutHeroSection/>
        <WhyChooseUsSection/>
        <ServicesWeOffer/>
        <div>
        <Footer/>
        </div>
    </>
  )
}

export default AboutUs