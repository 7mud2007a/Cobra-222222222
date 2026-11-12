import { useEffect, useRef, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Bot,
  Send,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CARS_FLEET } from './CarsSection';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

export default function Footer() {
  const { isArabic } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: isArabic
        ? 'أهلاً بك في COBRA MOTORS! أنا مساعدك التجريبي. اسألني عن السيارات أو المواصفات أو طرق التواصل أو أقسام الموقع.'
        : 'Welcome to COBRA MOTORS! I am your demo assistant. Ask me about our cars, specifications, contact details, or website sections.',
    },
  ]);
  const [draft, setDraft] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getDemoReply = (question: string) => {
    const q = question.toLowerCase();
    const asksCars = /car|cars|vehicle|vehicles|fleet|سيار|مركب|الأسطول|الاسطول/.test(q);
    const asksContact = /contact|phone|number|email|call|تواصل|اتصال|رقم|هاتف|بريد|ايميل|إيميل/.test(q);
    const asksLocation = /where|location|address|وين|أين|موقعكم|عنوان/.test(q);
    const asksSpecs = /spec|horse|hp|power|speed|acceleration|مواصف|حصان|قوة|سرعة|تسارع/.test(q);
    const asksAbout = /about|cobra|who are|من أنتم|عن الشركة|كوبرا/.test(q);
    const asksNavigation = /navigate|section|find|how|وين بلاقي|أجد|ألاقي|قسم|الموقع/.test(q);

    if (asksContact) {
      return isArabic
        ? 'يمكنك التواصل معنا عبر البريد الإلكتروني: bznsman77@gmail.com أو الهاتف: +963 935 110 004. ستجد هذه المعلومات أيضاً في قسم «تواصل معنا» أسفل الموقع.'
        : 'You can reach us by email at bznsman77@gmail.com or by phone at +963 935 110 004. These details are listed in the Contact section at the bottom of the website.';
    }
    if (asksLocation) {
      return isArabic
        ? 'موقع COBRA MOTORS هو دمشق / صحنايا، سوريا.'
        : 'COBRA MOTORS is located in Damascus / Sahnaya, Syria.';
    }
    if (asksCars || asksSpecs) {
      const fleet = CARS_FLEET.map((car) =>
        '• ' + car.name + ' — ' + car.hp + ' HP, 0–60: ' + car.acceleration + ', top speed: ' + car.topSpeed + '. ' + (isArabic ? 'السعر عند الطلب' : car.price) + '.'
      ).join('\n');
      return isArabic
        ? 'السيارات المعروضة حالياً في أسطولنا (مع المواصفات المنشورة):\n' + fleet + '\nاضغط على «السيارات» أو زر المواصفات داخل بطاقة السيارة للتفاصيل الكاملة.'
        : 'The vehicles currently listed in our fleet (with published specifications):\n' + fleet + '\nOpen the Cars section and select a vehicle to view its full details.';
    }
    if (asksAbout) {
      return isArabic
        ? 'COBRA MOTORS موقع لاستعراض مجموعة سيارات عالية الأداء والفخامة. يمكنك تصفح الأسطول وفتح بطاقة أي سيارة لمشاهدة مواصفاتها وتجهيزاتها.'
        : 'COBRA MOTORS showcases a collection of luxury and high-performance vehicles. Browse the fleet and open any vehicle card to explore its specifications and features.';
    }
    if (asksNavigation) {
      return isArabic
        ? 'تقدر تستخدم شريط التنقل للوصول إلى الأقسام: الرئيسية، السيارات، التكنولوجيا، من نحن، والتواصل. اضغط «السيارات» لمشاهدة الأسطول والمواصفات.'
        : 'Use the navigation bar to explore Home, Cars, Technology, About, and Contact. Open the Cars section to browse the fleet and specifications.';
    }
    return isArabic
      ? 'أنا حالياً نسخة تجريبية بإجابات محددة من معلومات الموقع، ولست متصلاً بخدمة ذكاء اصطناعي خارجية. أقدر أساعدك بالسيارات ومواصفاتها وأرقام التواصل وأقسام الموقع. جرّب تسألني: «ما هي سياراتكم؟»'
      : 'I am currently a demo assistant with predefined answers from the website, not connected to an external AI service. I can help with cars, specifications, contact details, and website sections. Try asking: “What cars do you have?”';
  };

  const sendMessage = (value: string) => {
    const question = value.trim();
    if (!question) return;
    setMessages((current) => [
      ...current,
      { role: 'user', content: question },
      { role: 'assistant', content: getDemoReply(question) },
    ]);
    setDraft('');
  };

  const text = isArabic
    ? {
        description: 'قمة الفخامة في عالم السيارات. صُممت في دمشق، وهُندست لتدوم إلى الأبد.',
        location: 'دمشق / صحنايا، سوريا',
        fleetModels: 'طرازات الأسطول',
        technology: 'التكنولوجيا',
        atelier: 'المشغل',
        contact: 'تواصل معنا',
        activeAerodynamics: 'الديناميكا الهوائية النشطة',
        neuralCockpit: 'نظام المقصورة العصبي',
        laserMatrix: 'إضاءة المصفوفة الليزرية',
        provingGrounds: 'منشآت الاختبار في صحنايا',
        customization: 'التخصيص حسب الطلب',
        sustainability: 'تقرير الاستدامة',
        chronology: 'التسلسل الزمني',
        hours: 'الاثنين - الجمعة: 09:00 - 18:00 بتوقيت وسط أوروبا',
        appointment: 'بموعد مسبق فقط',
        rights: 'جميع الحقوق محفوظة.',
        craftedBy: 'تصميم وتطوير',
      }
    : {
        description: 'The pinnacle of luxury and performance automotive. Designed in Damascus, engineered for eternity.',
        location: 'Damascus / Sahnaya, Syria',
        fleetModels: 'FLEET MODELS',
        technology: 'TECHNOLOGY',
        atelier: 'ATELIER',
        contact: 'CONTACT',
        activeAerodynamics: 'Active Aerodynamics',
        neuralCockpit: 'Neural Cockpit OS',
        laserMatrix: 'Laser Matrix Lighting',
        provingGrounds: 'Sahnaya Proving Grounds',
        customization: 'Bespoke Customization',
        sustainability: 'Sustainability Report',
        chronology: 'Chronology',
        hours: 'Mon - Fri: 09:00 - 18:00 CET',
        appointment: 'By Appointment Only',
        rights: 'All Rights Reserved.',
        craftedBy: 'Crafted by',
      };

  return (
    <footer
      id="contact"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative w-full bg-[#1B1716] text-white pt-20 pb-12 px-6 md:px-16 border-t border-[#810100]/60 transition-colors duration-300"
    >
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#810100]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2
              className="font-cinzel text-2xl md:text-3xl font-bold tracking-[0.25em] text-white"
              dir="ltr"
            >
              COBRA <span className="text-[#b64b48]">MOTORS</span>
            </h2>

            <p className="font-sans text-xs text-slate-400 font-light leading-relaxed max-w-md">
              {text.description}
            </p>

            <div
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-slate-400 font-mono pt-2"
              dir={isArabic ? 'rtl' : 'ltr'}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#b64b48] shrink-0" />
                <span>{text.location}</span>
              </div>

              <div className="flex items-center gap-2" dir="ltr">
                <Mail className="w-3.5 h-3.5 text-[#b64b48] shrink-0" />

                <a
                  href="mailto:bznsman77@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  bznsman77@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#261e1c] rounded-2xl border border-[#EDEBDE]/10 shadow-xl overflow-hidden">
            <div className="px-5 py-4 md:px-6 bg-[#EDEBDE] text-[#1B1716] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#630102] text-[#EDEBDE] flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel font-bold tracking-wide">COBRA AI</h3>
                  <p className="text-[10px] font-mono text-[#630102]">{isArabic ? 'مساعدك داخل الموقع' : 'YOUR WEBSITE ASSISTANT'}</p>
                </div>
              </div>
              <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#630102]/20 text-[#630102]">DEMO</span>
            </div>

            <div className="p-4 md:p-6">
              <div className="h-[290px] overflow-y-auto space-y-3 pr-1" aria-live="polite">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div dir={isArabic ? 'rtl' : 'ltr'} className={`max-w-[88%] rounded-2xl px-4 py-3 text-xs leading-6 whitespace-pre-line ${message.role === 'user' ? 'bg-[#630102] text-[#EDEBDE] rounded-br-sm' : 'bg-[#EDEBDE] text-[#1B1716] rounded-bl-sm'}`}>
                      {message.content}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {[
                  { ar: 'ما هي سياراتكم؟', en: 'What cars do you have?' },
                  { ar: 'كيف أتواصل معكم؟', en: 'How can I contact you?' },
                  { ar: 'أين أجد المواصفات؟', en: 'Where are the specifications?' },
                ].map((suggestion) => (
                  <button key={suggestion.en} type="button" onClick={() => sendMessage(isArabic ? suggestion.ar : suggestion.en)} className="px-3 py-2 rounded-full border border-[#EDEBDE]/15 text-[10px] text-[#EDEBDE] hover:bg-[#630102] hover:border-[#630102] transition-colors">
                    {isArabic ? suggestion.ar : suggestion.en}
                  </button>
                ))}
              </div>

              <form onSubmit={(event) => { event.preventDefault(); sendMessage(draft); }} className="flex items-center gap-2 p-2 rounded-xl bg-black/30 border border-[#EDEBDE]/15 focus-within:border-[#810100] transition-colors">
                <input value={draft} onChange={(event) => setDraft(event.target.value)} dir={isArabic ? 'rtl' : 'ltr'} placeholder={isArabic ? 'اسأل COBRA AI عن السيارات أو الموقع...' : 'Ask COBRA AI about cars or the website...'} className="min-w-0 flex-1 bg-transparent px-2 py-2 text-xs text-[#EDEBDE] placeholder:text-slate-500 outline-none" aria-label={isArabic ? 'اكتب رسالتك' : 'Type your message'} />
                <button type="submit" disabled={!draft.trim()} aria-label={isArabic ? 'إرسال' : 'Send'} className="w-10 h-10 shrink-0 rounded-lg bg-[#810100] text-[#EDEBDE] flex items-center justify-center hover:bg-[#9A1717] disabled:opacity-40 transition-colors">
                  <Send className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} />
                </button>
              </form>
              <p className="mt-3 text-[9px] text-slate-500 text-center">{isArabic ? 'نسخة تجريبية — الإجابات مبنية على معلومات الموقع الحالية' : 'Demo version — answers are based on current website content'}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs font-mono border-b border-white/10">
          <div>
            <h4 className="text-slate-400 uppercase tracking-widest mb-4">
              {text.fleetModels}
            </h4>

            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a
                  href="#cars"
                  className="hover:text-[#b64b48] transition-colors"
                  dir="ltr"
                >
                  Mercedes-AMG S 63 E PERFORMANCE
                </a>
              </li>

              <li>
                <a
                  href="#cars"
                  className="hover:text-[#b64b48] transition-colors"
                  dir="ltr"
                >
                  BMW M4 CSL
                </a>
              </li>

              <li>
                <a
                  href="#cars"
                  className="hover:text-[#b64b48] transition-colors"
                  dir="ltr"
                >
                  Toyota Supra MK4 Turbo
                </a>
              </li>

              <li>
                <a
                  href="#cars"
                  className="hover:text-[#b64b48] transition-colors"
                  dir="ltr"
                >
                  Nissan GT-R R35
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-400 uppercase tracking-widest mb-4">
              {text.technology}
            </h4>

            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a
                  href="#technology"
                  className="hover:text-[#b64b48] transition-colors"
                >
                  {isArabic ? 'منظومة الدفع الكمومية' : 'Quantum Powertrain'}
                </a>
              </li>

              <li>
                <a
                  href="#technology"
                  className="hover:text-[#b64b48] transition-colors"
                >
                  {text.activeAerodynamics}
                </a>
              </li>

              <li>
                <a
                  href="#technology"
                  className="hover:text-[#b64b48] transition-colors"
                >
                  {text.neuralCockpit}
                </a>
              </li>

              <li>
                <a
                  href="#technology"
                  className="hover:text-[#b64b48] transition-colors"
                >
                  {text.laserMatrix}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-400 uppercase tracking-widest mb-4">
              {text.atelier}
            </h4>

            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#b64b48] transition-colors"
                >
                  {text.provingGrounds}
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#b64b48] transition-colors"
                >
                  {text.customization}
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#b64b48] transition-colors"
                >
                  {text.sustainability}
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#b64b48] transition-colors"
                >
                  {text.chronology}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-400 uppercase tracking-widest mb-4">
              {text.contact}
            </h4>

            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-center gap-2" dir="ltr">
                <Phone className="w-3 h-3 text-[#b64b48] shrink-0" />
                <span>+963 935 110 004</span>
              </li>

              <li>
                <span>{text.hours}</span>
              </li>

              <li>
                <span>{text.appointment}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div dir={isArabic ? 'rtl' : 'ltr'}>
            &copy; {new Date().getFullYear()} COBRA MOTORS AG. {text.rights}
          </div>

        </div>
      </div>
    </footer>
  );
}
