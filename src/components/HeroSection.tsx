import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import cobraLogo from '../assets/cobra-logo.png';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  const { isArabic } = useLanguage();

  const text = isArabic
    ? {
        description:
          'نعيد تعريف هندسة الأداء الفائق من خلال فخامة خالدة، ودقة ديناميكية هوائية، وتناغم صوتي بلا تنازلات.',
        explore: 'استكشف التجربة',
        fleet: 'اكتشف الأسطول',
        electric: 'دفع كهربائي بجميع العجلات',
        warranty: 'ضمان بمواصفات مخصصة',
      }
    : {
        description:
          'Redefining hyper-performance engineering with timeless luxury, aerodynamic precision, and zero-compromise acoustic harmony.',
        explore: 'Explore Experience',
        fleet: 'Discover Fleet',
        electric: 'All-Wheel Electric Drive',
        warranty: 'Tailor Spec Warranty',
      };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-16 overflow-hidden bg-[#EDEBDE] text-[#1B1716] transition-colors duration-300"
    >
      {/* Subtle Ivory Background Details */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E4DFCF] opacity-60 blur-[130px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#E4DFCF] opacity-60 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1B17160A_1px,transparent_1px),linear-gradient(to_bottom,#1B17160A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center my-auto">
        <div className="space-y-6 max-w-5xl">
          <h1 className="sr-only">COBRA MOTORS</h1>
          <img
            src={cobraLogo}
            alt="COBRA MOTORS"
            className="block w-full max-w-[560px] h-auto object-contain object-left"
          />

          <p
            dir={isArabic ? 'rtl' : 'ltr'}
            className={`${isArabic ? 'font-arabic' : 'font-sans'} text-lg sm:text-2xl text-[#3A2422] max-w-2xl font-light leading-relaxed pt-2`}
          >
            {text.description}
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('cinematic-experience');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                if (onExploreClick) onExploreClick();
              }}
              className="px-8 py-4 bg-[#1B1716] hover:bg-[#302927] text-[#EDEBDE] font-medium text-sm tracking-widest uppercase rounded-lg shadow-xl shadow-[#1B1716]/20 flex items-center justify-center space-x-3 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <span>{text.explore}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('cars');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-transparent hover:bg-[#1B1716]/5 border border-[#630102]/30 text-[#1B1716] font-medium text-sm tracking-widest uppercase rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Compass className="w-4 h-4" />
              <span>{text.fleet}</span>
            </button>
          </div>

          <div
            dir={isArabic ? 'rtl' : 'ltr'}
            className="flex items-center space-x-6 text-xs text-[#1B1716]"
          >
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-[#1B1716]" />
              <span>{text.electric}</span>
            </div>

            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#810100]" />
              <span>{text.warranty}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
