import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/HeroBanner.css";


gsap.registerPlugin(ScrollTrigger);



const HeroBanner = ({ title, HeroImage }) => {
  
// GSAP effect

  const heroRef = useRef();

  useEffect(() => {
    const hero = heroRef.current;

   gsap.to(hero, {
     yPercent: -20, // Moves the background upwards slightly
     ease: "none",
     scrollTrigger: {
       trigger: hero,
       start: "top top",
       end: "bottom top",
       scrub: 1, // Smooth animation while scrolling
     },
   });

   }, []);
  

  const HeroStyles = {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div class="hero-banner">
      <div ref={heroRef} className="banner_img" style={HeroStyles}></div>
      <div class="page-center">
        <div class="banner-content">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;