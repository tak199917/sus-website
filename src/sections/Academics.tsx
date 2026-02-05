import { useEffect, useRef, useState } from 'react';
import { BookOpen, Microscope, Calculator, Globe, Cpu, Beaker, Lightbulb, Users } from 'lucide-react';

const curriculumLevels = [
  {
    level: 'Early Years',
    grades: 'Nursery - KG',
    age: '3-5 years',
    focus: 'Foundational skills, motor development, social interaction',
    color: 'bg-rose-50 border-rose-200',
    iconColor: 'text-rose-500',
  },
  {
    level: 'Primary',
    grades: 'Grades 1-5',
    age: '6-10 years',
    focus: 'Core academics, curiosity building, creative expression',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-500',
  },
  {
    level: 'Middle School',
    grades: 'Grades 6-8',
    age: '11-13 years',
    focus: 'Subject specialization, critical thinking, leadership',
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-500',
  },
  {
    level: 'Secondary',
    grades: 'Grades 9-12',
    age: '14-17 years',
    focus: 'Advanced academics, career preparation, life skills',
    color: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-500',
  },
];

const facilities = [
  {
    icon: Microscope,
    title: 'Science Labs',
    description: 'State-of-the-art Physics, Chemistry, and Biology laboratories',
  },
  {
    icon: Cpu,
    title: 'Computer Labs',
    description: 'Modern computing facilities with latest software and hardware',
  },
  {
    icon: BookOpen,
    title: 'Library',
    description: 'Extensive collection of books, journals, and digital resources',
  },
  {
    icon: Beaker,
    title: 'STEM Lab',
    description: 'Dedicated space for robotics, coding, and innovation projects',
  },
];

const teachingMethods = [
  {
    icon: Lightbulb,
    title: 'Inquiry-Based Learning',
    description: 'Students learn through questioning, exploration, and discovery',
  },
  {
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Group projects and peer learning foster teamwork skills',
  },
  {
    icon: Globe,
    title: 'Experiential Learning',
    description: 'Field trips, workshops, and hands-on activities',
  },
  {
    icon: Calculator,
    title: 'Technology Integration',
    description: 'Smart classrooms and digital tools enhance learning',
  },
];

export default function Academics() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#f8fafc]">
      <div className="section-container">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-[#f36b25] text-sm font-semibold uppercase tracking-wider mb-3">
            Academics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#00457c] mb-4 font-['Fraunces']">
            Excellence in Education
          </h2>
          <p className="text-gray-600 text-lg">
            A comprehensive curriculum designed to inspire curiosity, foster critical thinking, and build lifelong learners
          </p>
        </div>

        {/* Grade Structure */}
        <div className="mb-20">
          <h3 
            className={`text-2xl font-semibold text-[#00457c] mb-8 text-center font-['Fraunces'] transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Grade Structure
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumLevels.map((level, index) => (
              <div
                key={level.level}
                className={`${level.color} rounded-xl p-6 border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium ${level.iconColor}`}>{level.age}</span>
                  <span className="text-xs bg-white/80 px-2 py-1 rounded-full text-gray-600">{level.grades}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 font-['Fraunces']">{level.level}</h4>
                <p className="text-sm text-gray-600">{level.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Approach */}
        <div className="mb-20">
          <h3 
            className={`text-2xl font-semibold text-[#00457c] mb-8 text-center font-['Fraunces'] transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Teaching Approach
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00457c]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#00457c]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 font-['Fraunces']">{method.title}</h4>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Facilities */}
        <div>
          <h3 
            className={`text-2xl font-semibold text-[#00457c] mb-8 text-center font-['Fraunces'] transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Labs & Digital Classrooms
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={facility.title}
                  className={`group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="h-2 bg-gradient-to-r from-[#00457c] to-[#f36b25]" />
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00457c] to-[#f36b25] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 font-['Fraunces']">{facility.title}</h4>
                    <p className="text-sm text-gray-600">{facility.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Schedule a Campus Tour
          </a>
        </div>
      </div>
    </section>
  );
}
