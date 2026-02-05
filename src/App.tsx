import { useEffect, useState, useRef } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Highlights from './sections/Highlights';
import About from './sections/About';
import LogoMeaning from './sections/Logo';
import Programs from './sections/Programs';
import Academics from './sections/Academics';
import Admissions from './sections/Admissions';
import CampusLife from './sections/CampusLife';
import Testimonials from './sections/Testimonials';
import NewsNotices from './sections/NewsNotices';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={mainRef}
      className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      <Navigation scrollY={scrollY} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <Highlights />
        
        <section id="about">
          <About />
        <section id="logo-meaning">
  <LogoMeaning />
</section>

        </section>

        <Programs />
        
        <section id="academics">
          <Academics />
        </section>
        
        <section id="admissions">
          <Admissions />
        </section>
       { 
        <section id="campus-life">
          <CampusLife />
        </section>
       }
        <Testimonials />
        
        <section id="news">
          <NewsNotices />
        </section>
        
        <section id="gallery">
          <Gallery />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
