import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, Download, BookOpen } from 'lucide-react';

const stats = [
  { number: '25+', label: 'Years of Excellence' },
  { number: '1500+', label: 'Happy Students' },
  { number: '98%', label: 'Success Rate' },
  { number: '50+', label: 'Expert Faculty' },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#00457c] via-[#00457c] to-[#002a5c]"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orange Circle */}
        <div 
          className={`absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#f36b25]/20 floating-animation transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ animationDelay: '0s' }}
        />
        {/* Blue Ring */}
        <div 
          className={`absolute bottom-20 left-10 w-64 h-64 rounded-full border-[20px] border-[#00457c]/30 spin-slow transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        />
        {/* Small Orange Dots */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-[#f36b25]/40 floating-animation" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-[#f36b25]/30 floating-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-white/20 floating-animation" style={{ animationDelay: '1.5s' }} />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00457c]/90 via-[#00457c]/70 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 section-container min-h-screen flex items-center pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#f36b25] animate-pulse" />
              Admissions Open for 2026-27
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight font-['Fraunces'] transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Educating
              </h1>
              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight font-['Fraunces'] transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Young <span className="text-[#f36b25]">Minds</span>
              </h1>
              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight font-['Fraunces'] transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                for a Better Future
              </h1>
            </div>

            {/* Subheadline */}
            <p 
              className={`text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Where academic excellence meets holistic development — nurturing students 
              to become confident, compassionate, and responsible citizens.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button 
                onClick={() => scrollToSection('#admissions')}
                className="btn-primary group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Admissions Open
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary border-white text-white hover:bg-white hover:text-[#00457c]"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Book a Visit
              </button>
              <button 
                onClick={() => window.open('#', '_blank')}
                className="px-6 py-3.5 rounded-md text-white font-medium hover:bg-white/10 transition-colors flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Prospectus
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div 
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="relative">
              {/* Decorative Ring Behind */}
              <div className="absolute -inset-4 rounded-full border-2 border-[#f36b25]/30 scale-110" />
              <div className="absolute -inset-8 rounded-full border border-white/10 scale-125" />
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/hero-girl.jpg" 
                  alt="Happy student at Sunrise Universal School"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00457c]/20 to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <div 
                className={`absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 transition-all duration-700 delay-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#f36b25]/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-[#f36b25]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#00457c]">25+</div>
                    <div className="text-sm text-gray-500">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="relative z-10 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="section-container py-8">
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center"
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white font-['Fraunces']">{stat.number}</div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
