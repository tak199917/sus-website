import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Award, Users, BookOpen, Heart } from 'lucide-react';

const values = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'Rigorous standards and innovative teaching methods',
  },
  {
    icon: Heart,
    title: 'Character Building',
    description: 'Instilling values of integrity and compassion',
  },
  {
    icon: Users,
    title: 'Inclusive Community',
    description: 'Celebrating diversity and fostering belonging',
  },
  {
    icon: Award,
    title: 'Holistic Growth',
    description: 'Nurturing mind, body, and spirit together',
  },
];

export default function About() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#f8fafc] overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/about-student.jpg" 
                  alt="Student learning at Vidyodaya"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00457c]/10 to-transparent" />
              </div>

              {/* Experience Badge */}
              <div 
                className={`absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#f36b25] flex items-center justify-center text-white">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00457c] font-['Fraunces']">25+</div>
                    <div className="text-sm text-gray-500">Years of Excellence<br/>in Education</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#f36b25]/20 rounded-full" />
              <div className="absolute -bottom-8 left-1/4 w-4 h-4 rounded-full bg-[#00457c]/20" />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            {/* Section Label */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="inline-block text-[#f36b25] text-sm font-semibold uppercase tracking-wider">
                About Our School
              </span>
            </div>

            {/* Headline */}
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-medium text-[#00457c] leading-tight font-['Fraunces'] transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Where Knowledge Becomes Brilliant
            </h2>

            {/* Description */}
            <div 
              className={`space-y-4 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                Sunrise Universal School is a learner-centric institution committed to holistic and inclusive education. Rooted in Indian values and universal thinking, the school nurtures intellectual excellence, creativity, discipline, and compassion in every child.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a strong focus on character building, critical thinking, and lifelong learning, Sunrise Universal School prepares students to become confident, responsible, and globally aware citizens—living by its guiding motto, “May our knowledge become brilliant.”
              </p>
            </div>

            {/* Vision & Mission */}
            <div 
              className={`grid sm:grid-cols-2 gap-6 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#00457c]/10 flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5 text-[#00457c]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 font-['Fraunces']">Our Vision</h4>
                <p className="text-sm text-gray-600">
                 To shape enlightened global citizens rooted in wisdom, diversity, and excellence in action.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#f36b25]/10 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5 text-[#f36b25]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 font-['Fraunces']">Our Mission</h4>
                <p className="text-sm text-gray-600">
                 To provide inclusive, value-based education that nurtures brilliance, character, and holistic growth in every learner.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div 
              className={`transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a 
                href="#academics"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#academics')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center text-[#00457c] font-medium hover:text-[#f36b25] transition-colors"
              >
                Explore our programs
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <div 
            className={`text-center mb-12 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-medium text-[#00457c] font-['Fraunces']">
              Our Core Values
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00457c] to-[#f36b25] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 font-['Fraunces']">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
