import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Sunrise Universal School is more than just a school-it's a place where learning is fun! The bagless education system makes studies stress-free, and teachers focus on concept-based learning. I love how every subject is taught through activities and real-life examples. Proud to be a part of SUS!",
    name: 'Hemant Jain',
    role: 'Parent of Grade 5 Student',
    avatar: 'HJ',
  },
  {
    quote: "The school focuses not only on academics but also on overall personality development. My child has become more confident, responsible, and communicative. We are grateful to the management and teachers for their continuous guidance.",
    name: 'Ravi Vyas',
    role: 'Parent of Grade 5 Student',
    avatar: 'RV',
  },
  {
    quote: "The teachers are extremely caring and approachable. They understand each child’s needs and motivate them to do better. We feel very satisfied with the personal attention given to students.",
    name: 'Hemlata Prajapat',
    role: 'Parent & Educator',
    avatar: 'HP',
  },
  {
    quote: "The school provides excellent opportunities through co-curricular activities, celebrations, and competitions. My child loves participating in events and has learned teamwork and leadership. Thank you for creating such a vibrant learning environment.",
    name: 'Harsha Jain',
    role: 'Parent of Nursey Student',
    avatar: 'HJ',
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/testimonial-bg.jpg" 
          alt="Students in classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#00457c]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-[#f36b25] text-sm font-semibold uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 font-['Fraunces']">
            What Parents Say
          </h2>
          <p className="text-white/80 text-lg">
            Hear from the families who have experienced the Vidyodaya difference
          </p>
        </div>

        {/* Testimonial Slider */}
        <div 
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-[#f36b25] flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Testimonial Content */}
            <div className="relative min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`transition-all duration-500 ${
                    index === currentIndex 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 absolute inset-0 translate-x-8'
                  }`}
                >
                  <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f36b25] to-[#00457c] flex items-center justify-center text-white font-semibold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-white/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/20">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-[#f36b25] w-8' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrev}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white font-['Fraunces']">98%</div>
            <div className="text-white/70 text-sm mt-1">Parent Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white font-['Fraunces']">4.9</div>
            <div className="text-white/70 text-sm mt-1">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white font-['Fraunces']">1500+</div>
            <div className="text-white/70 text-sm mt-1">Happy Families</div>
          </div>
        </div>
      </div>
    </section>
  );
}
