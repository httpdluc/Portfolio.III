"use client";
import React, { useEffect } from 'react';
import Perfil from './Perfil/Perfil';
import Services from './Services/Services';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement: "top-bottom",
      });
    }
    initAOS();
  })
  return (
    <div className="overflow-hidden">
      <Perfil/>
      <Services/>
      <Resume/>
      <Projects/>
      <Skills/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default Home;