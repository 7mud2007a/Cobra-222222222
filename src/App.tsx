import { ThemeProvider } from './context/ThemeContext';
import AnimatedNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CarsSection from './components/CarsSection';
import TechSection from './components/TechSection';
import AboutSection from './components/AboutSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';

export default function App() {
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#070b08] text-slate-900 dark:text-slate-100 font-sans selection:bg-[#223023] selection:text-white transition-colors duration-300">
        <AnimatedNavbar onNavigate={handleNavigate} />
        <main>
          <HeroSection onExploreClick={() => handleNavigate('cars')} />
          <CarsSection />
          <TechSection />
          <AboutSection />
          <SocialSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
