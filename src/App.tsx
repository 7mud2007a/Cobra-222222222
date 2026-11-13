import { useLayoutEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AnimatedNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CarsSection from './components/CarsSection';
import TechSection from './components/TechSection';
import AboutSection from './components/AboutSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';

export default function App() {
  const [showCarsOnly, setShowCarsOnly] = useState(false);

  useLayoutEffect(() => {
    // Always start at the hero instead of restoring a previous footer scroll position.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#1B1716] text-[#EDEBDE] font-sans selection:bg-[#810100] selection:text-white transition-colors duration-300">
        {showCarsOnly ? (
          <main>
            <CarsSection standalone onBack={() => { setShowCarsOnly(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
          </main>
        ) : (
          <>
            <AnimatedNavbar onNavigate={handleNavigate} />
            <main>
              <HeroSection onExploreClick={() => handleNavigate('cars')} />
              <CarsSection onViewAll={() => { setShowCarsOnly(true); window.scrollTo({ top: 0, behavior: 'instant' }); }} />
              <TechSection />
              <AboutSection />
              <SocialSection />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}
