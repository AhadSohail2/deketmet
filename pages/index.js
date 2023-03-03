import React, { Fragment } from "react"
import AboutUs from "../components/aboutUs/aboutUsLayout";
import Hero from "../components/home/hero";
import PwfLayout from "../components/pwf/pwfLayout";
import Portfolio from "../components/portfolio/portfolioLayout";
import Services from "../components/services/ServicesL";
import ContactUs from "../components/contactUs/ContactUsLayout";
import Footer from "../components/footer/footer";
function Home() {
  return (
    <Fragment>
      <Hero />
      <PwfLayout />
      <AboutUs />
      <Services />
      <Portfolio />
      <ContactUs />
      <Footer />
    </Fragment>
  )
}

export default Home;