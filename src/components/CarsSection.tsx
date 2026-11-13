import { useState } from 'react';
import porsche911GT3RS from '../assets/cars/147647342_1794335360339586.jpg';
import mercedesAMGG63 from '../assets/cars/966433920_1794336494676749.jpg';
import ferrariF8Tributo from '../assets/cars/954590984_1794338173823801.jpg';
import rollsRoyceGhost from '../assets/cars/1012560791_1794339001634125.jpg';
import {
  ArrowUpRight,
  Gauge,
  Zap,
  Shield,
  ChevronRight,
  X,
  SlidersHorizontal,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface CarModel {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: string;
  hp: number;
  acceleration: string;
  topSpeed: string;
  range: string;
  drivetrain: string;
  imagePlaceholder: string;
  badge: string;
  description: string;
  features: string[];
}

export const CARS_FLEET: CarModel[] = [
  {
    id: 'porsche-911-gt3-rs',
    name: 'PORSCHE 911 GT3 RS',
    tagline: 'Track-focused naturally aspirated performance',
    category: 'Hypercar',
    price: 'PRICE ON REQUEST',
    hp: 518,
    acceleration: '3.0s',
    topSpeed: '184 MPH',
    range: 'Rear-Wheel Drive',
    drivetrain: '7-speed PDK · Rear-Wheel Drive',
    imagePlaceholder: porsche911GT3RS,
    badge: 'TRACK FOCUSED',
    description:
      'The 992-generation Porsche 911 GT3 RS is a road-legal, track-focused sports car powered by a naturally aspirated 4.0-litre flat-six boxer engine producing 518 hp. Its motorsport-derived aerodynamics, active DRS and seven-speed PDK transmission are engineered for exceptional circuit performance.',
    features: [
      '4.0L naturally aspirated flat-six boxer engine',
      '518 hp and 465 Nm of torque',
      '7-speed Porsche Doppelkupplung (PDK)',
      'Porsche Active Aerodynamics with DRS',
      'Rear-wheel drive with Porsche Torque Vectoring Plus',
      '0–60 mph in 3.0 seconds · 184 mph top speed',
    ],
  },
  {
    id: 'mercedes-amg-g63',
    name: 'Mercedes-AMG G 63',
    tagline: 'Iconic luxury meets uncompromising off-road performance',
    category: 'Luxury SUV',
    price: 'PRICE ON REQUEST',
    hp: 585,
    acceleration: '4.4s',
    topSpeed: '137 MPH',
    range: 'AMG Performance 4MATIC',
    drivetrain: 'AMG Performance 4MATIC · AWD',
    imagePlaceholder: mercedesAMGG63,
    badge: 'LUXURY SUV',
    description:
      'The latest Mercedes-AMG G 63 combines the iconic G-Class design with a handcrafted 4.0-litre V8 biturbo mild-hybrid powertrain. It delivers 585 hp and 850 Nm through the AMG SPEEDSHIFT TCT 9G transmission and permanent AMG Performance 4MATIC all-wheel drive, backed by three selectable differential locks and advanced off-road capability.',
    features: [
      'Handcrafted 4.0L V8 biturbo engine with 48V mild-hybrid technology',
      '585 hp and 850 Nm of torque',
      'AMG SPEEDSHIFT TCT 9G automatic transmission',
      'AMG Performance 4MATIC all-wheel drive',
      'Three selectable differential locks and low-range off-road gearing',
      '0–100 km/h in 4.4 seconds · 220 km/h top speed',
    ],
  },
  {
    id: 'ferrari-f8-tributo',
    name: 'FERRARI F8 TRIBUTO',
    tagline: 'The ultimate tribute to Ferrari’s mid-rear V8 berlinetta',
    category: 'Hypercar',
    price: 'PRICE ON REQUEST',
    hp: 710,
    acceleration: '2.9s',
    topSpeed: '211 MPH',
    range: 'Rear-Wheel Drive',
    drivetrain: '7-speed F1 dual-clutch · RWD',
    imagePlaceholder: ferrariF8Tributo,
    badge: 'ITALIAN EXCELLENCE',
    description:
      'The Ferrari F8 Tributo is powered by a 3.9-litre 90-degree twin-turbo V8 mounted in a mid-rear position. Producing 720 cv (approximately 710 hp) and 770 Nm, it combines Ferrari’s advanced aerodynamics and driver-focused technology with breathtaking performance.',
    features: [
      '3,902 cc 90-degree twin-turbo V8',
      '720 cv (approximately 710 hp) and 770 Nm of torque',
      '7-speed F1 dual-clutch transmission',
      'Rear-wheel drive with E-Diff3 electronic differential',
      'Ferrari Side Slip Control 6.1 and FDE+',
      '0–100 km/h in 2.9 seconds · 340 km/h top speed',
    ],
  },
  {
    id: 'rolls-royce-ghost',
    name: 'ROLLS ROYCE GHOST',
    tagline: 'Effortless V12 power wrapped in modern British luxury',
    category: 'Luxury Saloon',
    price: 'PRICE ON REQUEST',
    hp: 563,
    acceleration: '4.6s',
    topSpeed: '155 MPH',
    range: 'All-Wheel Drive',
    drivetrain: '8-speed automatic · AWD',
    imagePlaceholder: rollsRoyceGhost,
    badge: 'PURE LUXURY',
    description:
      'The Rolls-Royce Ghost pairs a 6.75-litre twin-turbocharged V12 with effortless all-wheel-drive performance and the marque’s signature serenity. Its aluminium Architecture of Luxury, all-wheel steering and Planar Suspension System deliver a composed, exceptionally refined driving experience.',
    features: [
      '6.75L twin-turbocharged V12 engine',
      '563 hp and 850 Nm of torque',
      '8-speed automatic transmission',
      'All-wheel drive and all-wheel steering',
      'Planar Suspension System with road-scanning Flagbearer technology',
      '0–60 mph in 4.6 seconds · 155 mph top speed',
    ],
  },
];

const CAR_TRANSLATIONS: Record<
  string,
  {
    tagline: string;
    category: string;
    badge: string;
    description: string;
    features: string[];
  }
> = {
  'porsche-911-gt3-rs': {
    tagline: 'أداء حلبات بمحرك طبيعي السحب',
    category: 'هايبركار',
    badge: 'مخصصة للحلبات',
    description:
      'تأتي Porsche 911 GT3 RS من الجيل 992 بمحرك بوكسر سداسي الأسطوانات سعة 4.0 لتر بتنفس طبيعي يولد 518 حصانًا. تجمع بين الديناميكا الهوائية المستوحاة من رياضة السيارات ونظام DRS النشط وناقل الحركة PDK ذي السبع سرعات لتقديم أداء استثنائي على الحلبات مع اعتمادها للسير على الطرق.',
    features: [
      'محرك بوكسر 6 أسطوانات سعة 4.0 لتر بتنفس طبيعي',
      'قوة 518 حصانًا وعزم 465 نيوتن متر',
      'ناقل حركة PDK مزدوج القابض بسبع سرعات',
      'ديناميكا هوائية نشطة Porsche Active Aerodynamics مع DRS',
      'دفع خلفي ونظام Porsche Torque Vectoring Plus',
      'تسارع 0–60 ميل/س خلال 3.0 ثوانٍ وسرعة قصوى 184 ميل/س',
    ],
  },
  'mercedes-amg-g63': {
    tagline: 'فخامة G-Class الأسطورية مع قدرات أداء وطرق وعرة',
    category: 'SUV فاخرة',
    badge: 'SUV فاخرة',
    description:
      'تجمع Mercedes-AMG G 63 الحديثة بين تصميم G-Class الأيقوني ومحرك V8 مزدوج التيربو سعة 4.0 لتر مع نظام هجين خفيف 48 فولت. يولد المحرك 585 حصانًا و850 نيوتن متر، وينقل القوة عبر ناقل AMG SPEEDSHIFT TCT 9G ونظام الدفع الرباعي AMG Performance 4MATIC، مع ثلاثة أقفال تفاضلية قابلة للاختيار وتجهيزات متقدمة للقيادة على الطرق الوعرة.',
    features: [
      'محرك V8 سعة 4.0 لتر مزدوج التيربو مع نظام هجين خفيف 48 فولت',
      'قوة 585 حصانًا وعزم 850 نيوتن متر',
      'ناقل حركة أوتوماتيكي AMG SPEEDSHIFT TCT 9G',
      'نظام الدفع الرباعي AMG Performance 4MATIC',
      'ثلاثة أقفال تفاضلية ونظام تعشيق منخفض للطرق الوعرة',
      'تسارع 0–100 كم/س خلال 4.4 ثوانٍ · سرعة قصوى 220 كم/س',
    ],
  },
  'ferrari-f8-tributo': {
    tagline: 'تحفة فيراري بمحرك V8 وسطي خلفي مزدوج التيربو',
    category: 'هايبركار',
    badge: 'إبداع إيطالي',
    description:
      'تعمل Ferrari F8 Tributo بمحرك V8 بزاوية 90 درجة وسعة 3.9 لتر مع شاحني تيربو، مثبت بوضعية وسطية خلفية. يولد المحرك 720 حصانًا متريًا (نحو 710 حصان ميكانيكي) و770 نيوتن متر، مع ديناميكا هوائية متطورة وتقنيات تركّز على السائق.',
    features: [
      'محرك V8 مزدوج التيربو سعة 3902 سم³ بزاوية 90 درجة',
      'قوة 720 حصانًا متريًا (نحو 710 HP) وعزم 770 نيوتن متر',
      'ناقل حركة F1 مزدوج القابض بسبع سرعات',
      'دفع خلفي مع ترس تفاضلي إلكتروني E-Diff3',
      'نظام Ferrari Side Slip Control 6.1 وتقنية FDE+',
      'تسارع 0–100 كم/س خلال 2.9 ثانية · سرعة قصوى 340 كم/س',
    ],
  },
  'rolls-royce-ghost': {
    tagline: 'قوة V12 سلسة وفخامة بريطانية عصرية',
    category: 'سيدان فاخرة',
    badge: 'فخامة خالصة',
    description:
      'تجمع Rolls-Royce Ghost بين محرك V12 مزدوج التيربو سعة 6.75 لتر ونظام دفع رباعي يمنحها أداءً سلسًا وهادئًا. وتعتمد على هيكل Architecture of Luxury المصنوع من الألمنيوم، مع نظام توجيه للعجلات الأربع وتعليق Planar Suspension لتجربة قيادة فائقة الراحة والثبات.',
    features: [
      'محرك V12 مزدوج التيربو سعة 6.75 لتر',
      'قوة 563 حصانًا وعزم 850 نيوتن متر',
      'ناقل حركة أوتوماتيكي بثماني سرعات',
      'دفع رباعي مع توجيه للعجلات الأربع',
      'نظام تعليق Planar Suspension وتقنية Flagbearer لمسح الطريق',
      'تسارع 0–60 ميل/س خلال 4.6 ثوانٍ · سرعة قصوى 155 ميل/س',
    ],
  },
};

export default function CarsSection({ standalone = false, onViewAll, onBack }: { standalone?: boolean; onViewAll?: () => void; onBack?: () => void }) {
  const [selectedCar, setSelectedCar] = useState<CarModel | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { isArabic } = useLanguage();

  const text = isArabic
    ? {
        portfolio: '[ أسطول السيارات ]',
        fleet: 'أسطول',
        COBRA: 'COBRA',
        description:
          'كل سيارة مصممة بدقة حرفية استثنائية، وهندسة متقدمة، وأداء لا مثيل له يجمع بين الفخامة والقوة.',
        all: 'الكل',
        hypercar: 'هايبركار',
        luxury: 'سيدان فاخرة',
        luxurySUV: 'SUV فاخرة',
        horsepower: 'القوة',
        acceleration: '0-60 ميل/س',
        drivetrain: 'نظام الدفع',
        configure: 'التخصيص والمواصفات',
        close: 'إغلاق النافذة',
        powerOutput: 'إخراج القوة',
        topSpeed: 'السرعة القصوى',
        keyFeatures: 'أهم التجهيزات المخصصة',
        estimatedPrice: 'السعر الابتدائي التقديري',
        reserve: 'طلب تخصيص',
        whatsappInquiry: 'استفسر عن السيارة عبر واتساب',
        priceOnRequest: 'السعر عند الطلب',
      }
    : {
        portfolio: '[ FLEET PORTFOLIO ]',
        fleet: 'THE',
        COBRA: 'COBRA',
        description:
          'Each vehicle is crafted with bespoke artisan precision, high-density battery architectures, and unmatched hyper-electric power.',
        all: 'All',
        hypercar: 'Hypercar',
        luxury: 'Luxury Saloon',
        luxurySUV: 'Luxury SUV',
        horsepower: 'HORSEPOWER',
        acceleration: '0-60 MPH',
        drivetrain: 'DRIVETRAIN',
        configure: 'Configure & Specifications',
        close: 'Close modal',
        powerOutput: 'POWER OUTPUT',
        topSpeed: 'TOP SPEED',
        keyFeatures: 'KEY BESPOKE FEATURES',
        estimatedPrice: 'ESTIMATED STARTING PRICE',
        reserve: 'Reserve Allocation',
        whatsappInquiry: 'ENQUIRE ABOUT THIS CAR ON WHATSAPP',
        priceOnRequest: 'PRICE ON REQUEST',
      };

  const categories = [
    { value: 'All', label: text.all },
    { value: 'Hypercar', label: text.hypercar },
    { value: 'Luxury Saloon', label: text.luxury },
    { value: 'Luxury SUV', label: text.luxurySUV },
  ];

  const filteredCars =
    activeCategory === 'All'
      ? CARS_FLEET
      : CARS_FLEET.filter((car) => car.category === activeCategory);

  const getCarText = (car: CarModel) => {
    if (!isArabic) {
      return {
        tagline: car.tagline,
        category: car.category,
        badge: car.badge,
        description: car.description,
        features: car.features,
      };
    }

    return CAR_TRANSLATIONS[car.id];
  };

  return (
    <section
      id="cars"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative py-28 px-6 md:px-16 w-full bg-[#1B1716] text-[#EDEBDE] transition-colors duration-300 border-t border-black/5 dark:border-white/5"
    >
      {standalone && (
        <div className="max-w-7xl mx-auto mb-8">
          <button onClick={onBack} className="px-5 py-3 rounded-lg border border-[#EDEBDE]/25 text-[#EDEBDE] hover:bg-[#EDEBDE]/10 transition-colors font-mono text-xs tracking-widest">
            {isArabic ? 'العودة إلى الموقع' : 'BACK TO WEBSITE'}
          </button>
        </div>
      )}

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="inline-block text-xs font-mono tracking-[0.3em] uppercase text-[#810100] dark:text-[#EDEBDE] mb-3">
            {text.portfolio}
          </span>

          <h2 className="font-cinzel text-4xl sm:text-6xl font-extrabold tracking-tight">
            {isArabic ? (
              <>
                <span className="text-[#810100] dark:text-[#a20b0b]">
                  {text.COBRA}
                </span>{' '}
                {text.fleet}
              </>
            ) : (
              <>
                {text.fleet}{' '}
                <span className="text-[#810100] dark:text-[#a20b0b]">
                  {text.COBRA}
                </span>{' '}
                FLEET
              </>
            )}
          </h2>

          <p className="font-sans text-[#c9c3b5] max-w-xl text-base mt-4 font-light">
            {text.description}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#2A1B1A] border border-black/5 dark:border-white/10 rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all duration-300 ${
                activeCategory === cat.value
                  ? 'bg-[#810100] text-white shadow-md'
                  : 'text-[#b8afa0] hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Fleet Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 md:gap-8">
        {(standalone ? filteredCars : filteredCars.slice(0, 2)).map((car) => {
          const carText = getCarText(car);

          return (
            <div
              key={car.id}
              className="group relative rounded-2xl overflow-hidden bg-[#261e1c] border border-black/10 dark:border-white/10 hover:border-[#810100]/60 dark:hover:border-[#630102] transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Top Badge & Price */}
              <div className="p-6 md:p-8 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded bg-[#810100] text-white text-[10px] font-mono tracking-widest uppercase">
                  {carText.badge}
                </span>

                <span className="font-cinzel font-bold text-lg text-[#EDEBDE]">
                  {isArabic ? text.priceOnRequest : car.price}
                </span>
              </div>

              {/* Car Image */}
              <div className="relative w-full aspect-[16/9] px-6 my-2 flex items-center justify-center overflow-hidden">
                <img
                  src={car.imagePlaceholder}
                  alt={car.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Car Name & Tagline */}
              <div className="p-6 md:p-8 pt-2 space-y-4">
                <div>
                  <h3 className="font-cinzel text-2xl md:text-3xl font-bold tracking-wide text-[#EDEBDE] group-hover:text-[#810100] dark:group-hover:text-[#EDEBDE] transition-colors">
                    {car.name}
                  </h3>

                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide mt-1">
                    {carText.tagline}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/10 dark:border-white/10 text-center">
                  <div className="p-2 rounded bg-[#EDEBDE]/50 dark:bg-black/20">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">
                      {text.horsepower}
                    </span>
                    <span className="text-sm font-bold font-mono text-[#EDEBDE]">
                      {car.hp} HP
                    </span>
                  </div>

                  <div className="p-2 rounded bg-[#EDEBDE]/50 dark:bg-black/20">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">
                      {text.acceleration}
                    </span>
                    <span className="text-sm font-bold font-mono text-[#EDEBDE]">
                      {car.acceleration}
                    </span>
                  </div>

                  <div className="p-2 rounded bg-[#EDEBDE]/50 dark:bg-black/20">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">
                      {text.drivetrain}
                    </span>
                    <span className="text-sm font-bold font-mono text-[#EDEBDE] truncate block">
                      {car.drivetrain}
                    </span>
                  </div>
                </div>

                {/* View Specification Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedCar(car)}
                    className="w-full py-3.5 px-4 bg-[#810100] hover:bg-[#a20b0b] text-white font-mono text-xs uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg"
                  >
                    <span>{text.configure}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!standalone && onViewAll && (
        <div className="max-w-7xl mx-auto mt-12 flex justify-center">
          <button onClick={onViewAll} className="px-10 py-4 rounded-lg bg-[#EDEBDE] text-[#1B1716] hover:bg-[#d8d2c4] transition-colors font-mono text-xs font-bold tracking-widest">
            {isArabic ? 'عرض السيارات كاملة' : 'VIEW ALL CARS'}
          </button>
        </div>
      )}

      {/* Car Modal Detailed View */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#261e1c] border border-black/20 dark:border-white/20 p-6 md:p-10 text-[#EDEBDE] shadow-2xl"
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            {(() => {
              const carText = getCarText(selectedCar);

              return (
                <>
                  {/* Close Modal Button */}
                  <button
                    onClick={() => setSelectedCar(null)}
                    className="absolute top-6 left-6 p-2 rounded-full bg-[#e4dfcf] dark:bg-[#EDEBDE]/10 hover:bg-slate-200 dark:hover:bg-[#EDEBDE]/20 transition-colors"
                    aria-label={text.close}
                  >
                    <X className="w-5 h-5 text-[#EDEBDE]" />
                  </button>

                  <span className="px-3 py-1 rounded bg-[#810100] text-white text-[10px] font-mono tracking-widest uppercase">
                    {carText.badge}
                  </span>

                  <h3 className="font-cinzel text-3xl md:text-4xl font-extrabold mt-3">
                    {selectedCar.name}
                  </h3>

                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                    {carText.tagline}
                  </p>

                  <div className="my-6 p-6 rounded-xl bg-[#e4dfcf] dark:bg-[#1B1716] border border-black/5 dark:border-white/5">
                    <p className="text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                      {carText.description}
                    </p>
                  </div>

                  {/* Spec Matrix Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                    <div className="p-4 rounded-lg bg-[#f4f1e7] dark:bg-[#EDEBDE]/5 border border-black/5 dark:border-white/5 text-center">
                      <Gauge className="w-5 h-5 text-[#810100] dark:text-[#EDEBDE] mx-auto mb-1" />

                      <span className="block text-[10px] font-mono text-slate-400">
                        {text.powerOutput}
                      </span>

                      <span className="text-base font-mono font-bold">
                        {selectedCar.hp} HP
                      </span>
                    </div>

                    <div className="p-4 rounded-lg bg-[#f4f1e7] dark:bg-[#EDEBDE]/5 border border-black/5 dark:border-white/5 text-center">
                      <Zap className="w-5 h-5 text-[#810100] dark:text-[#EDEBDE] mx-auto mb-1" />

                      <span className="block text-[10px] font-mono text-slate-400">
                        {text.acceleration}
                      </span>

                      <span className="text-base font-mono font-bold">
                        {selectedCar.acceleration}
                      </span>
                    </div>

                    <div className="p-4 rounded-lg bg-[#f4f1e7] dark:bg-[#EDEBDE]/5 border border-black/5 dark:border-white/5 text-center">
                      <SlidersHorizontal className="w-5 h-5 text-[#810100] dark:text-[#EDEBDE] mx-auto mb-1" />

                      <span className="block text-[10px] font-mono text-slate-400">
                        {text.topSpeed}
                      </span>

                      <span className="text-base font-mono font-bold">
                        {selectedCar.topSpeed}
                      </span>
                    </div>

                    <div className="p-4 rounded-lg bg-[#f4f1e7] dark:bg-[#EDEBDE]/5 border border-black/5 dark:border-white/5 text-center">
                      <Shield className="w-5 h-5 text-[#810100] dark:text-[#EDEBDE] mx-auto mb-1" />

                      <span className="block text-[10px] font-mono text-slate-400">
                        {text.drivetrain}
                      </span>

                      <span className="text-xs font-mono font-bold">
                        {selectedCar.drivetrain}
                      </span>
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="mb-8">
                    <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-3">
                      {text.keyFeatures}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {carText.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-xs font-sans text-slate-700 dark:text-slate-300"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-[#810100] dark:text-[#EDEBDE]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reserve Action CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/10 dark:border-white/10">
                    <div>
                      <span className="block text-[10px] font-mono text-slate-400 uppercase">
                        {text.estimatedPrice}
                      </span>

                      <span className="font-cinzel text-2xl font-bold">
                        {isArabic ? text.priceOnRequest : selectedCar.price}
                      </span>
                    </div>

                    <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-3">
                      <a
                        href={`https://wa.me/963935110004?text=${encodeURIComponent(
                          isArabic
                            ? `مرحباً COBRA MOTORS، أرغب بالاستفسار عن سيارة ${selectedCar.name}. ممكن معرفة السعر والتوفر والتفاصيل الإضافية وخيارات الشراء؟`
                            : `Hello COBRA MOTORS, I’m interested in the ${selectedCar.name}. Could you share its price, availability, further details and purchase options?`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#1fba59] text-[#102719] font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all inline-flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        {text.whatsappInquiry}
                      </a>
                      <button
                        onClick={() => {
                          setSelectedCar(null);
                          const el = document.getElementById('contact');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full sm:w-auto px-6 py-3.5 border border-[#EDEBDE]/20 hover:bg-[#EDEBDE]/10 text-[#EDEBDE] font-mono text-xs uppercase tracking-widest rounded-lg transition-all"
                      >
                        {text.reserve}
                      </button>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
}
