import { useEffect, useRef, useState } from 'react';
import { Baby, Palette, FlaskConical, Laptop, Trophy, Drama } from 'lucide-react';

const programs = [
  {
    icon: Baby,
    title: 'Play Group',
    description: 'A gentle introduction to learning through play, exploration, and social interaction for our youngest learners. Ages 2-3 years.',
    color: 'from-pink-500 to-rose-400',
    bgColor: 'bg-pink-50',
  },
  {
    icon: Palette,
    title: 'Nursery',
    description: 'Creative discovery and foundational skills in a nurturing environment that celebrates curiosity. Ages 3-4 years.',
    color: 'from-purple-500 to-violet-400',
    bgColor: 'bg-purple-50',
  },
  {
    icon: FlaskConical,
    title: 'Primary School',
    description: 'Building strong academic foundations while fostering critical thinking and problem-solving abilities. Grades 1-5.',
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Laptop,
    title: 'Digital Learning',
    description: 'Cutting-edge technology integration preparing students for the digital age with confidence and competence.',
    color: 'from-cyan-500 to-teal-400',
    bgColor: 'bg-cyan-50',
  },
  {
    icon: Trophy,
    title: 'Sports & Athletics',
    description: 'Physical development, teamwork, and sportsmanship through diverse athletic programs and competitions.',
    color: 'from-orange-500 to-amber-400',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Drama,
    title: 'Creative Arts',
    description: 'Self-expression through visual arts, music, drama, and dance — where creativity flourishes and talents shine.',
    color: 'from-emerald-500 to-green-400',
    bgColor: 'bg-emerald-50',
  },
];

export default function Programs() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-[#f36b25] text-sm font-semibold uppercase tracking-wider mb-3">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#00457c] mb-4 font-['Fraunces']">
            Explore Our Learning Programs
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive educational pathways designed to nurture every aspect of your child&apos;s development
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1500">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isOdd = index % 2 === 0;
            
            return (
              <div
                key={program.title}
                className={`group relative bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl preserve-3d ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                } ${isOdd ? 'lg:-translate-y-2' : 'lg:translate-y-2'}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-['Fraunces'] group-hover:text-[#00457c] transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Learn More Link */}
                <a 
                  href="#admissions"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#admissions')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center text-sm font-medium text-[#f36b25] hover:text-[#00457c] transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#f36b25] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Corner Accent */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 ${program.bgColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#f8fafc] rounded-2xl p-6 sm:p-8">
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-semibold text-[#00457c] mb-1 font-['Fraunces']">
                Not sure which program is right?
              </h4>
              <p className="text-gray-600">
                Our admissions team is here to help you find the perfect fit
              </p>
            </div>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary whitespace-nowrap"
            >
              Get Guidance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
