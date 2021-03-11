import React, { useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import WhyUs from "./components/WhyUs";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Aos from "aos";
import "aos/dist/aos.css";
import Skills from "./components/Skills";
import ProjectRequest from "./components/ProjectRequest";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
const App = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div>
      <Header />
      <WhyUs />
      <AboutUs />
      <Services />
      <Process />
      <Testimonials />
      <Skills />
      <ProjectRequest />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
