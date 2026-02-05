import { useEffect, useRef, useState } from 'react';
import { BookOpen, Trophy, Palette, Monitor, HeartHandshake } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    title: 'Academics',
    description: 'Rigorous curriculum designed to build strong foundations and foster critical thinking skills.',
    color: 'bg-blue-50 text-blue-600',
    borderColor: 'border-blue-200',
  },
  {
    icon: Trophy,
    title: 'Sports',
    description: 'Comprehensive athletic programs promoting physical fitness, teamwork, and sportsmanship.',
    color: 'bg-orange-50 text-orange-600',
    borderColor: 'border-orange-200',
  },
  {
    icon: Palette,
    title: 'Arts',
    description: 'Creative expression through visual arts, music, drama, and dance programs.',
    color: 'bg-purple-50 text-purple-600',
    borderColor: 'border-purple-200',
  },
  {
    icon: Monitor,
    title: 'Digital Learning',
    description: 'Cutting-edge technology integration preparing students for the digital age.',
    color: 'bg-cyan-50 text-cyan-600',
    borderColor: 'border-cyan-200',
  },
  {
    icon: HeartHandshake,
    title: 'Student Wellbeing',
    description: 'Holistic support systems ensuring emotional, social, and mental wellness.',
    color: 'bg-green-50 text-green-600',
    borderColor: 'border-green-200',
  },
];

export default function Highlights() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-[#f36b25] text-sm font-semibold uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#00457c] mb-4 font-['Fraunces']">
            Excellence in Every Dimension
          </h2>
          <p className="text-gray-600 text-lg">
            We provide a holistic education that nurtures every aspect of your child&apos;s development
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group relative bg-white rounded-xl border-2 ${item.borderColor} p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-['Fraunces']">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00457c] to-[#f36b25] rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center text-[#00457c] font-medium hover:text-[#f36b25] transition-colors"
          >
            Learn more about our approach
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
