import { useEffect, useRef, useState } from 'react';
import { 
  Users, Trophy, Palette, Music, Heart, Sparkles, 
  BookOpen, Camera, Code, Globe, Leaf, HandHeart 
} from 'lucide-react';

const activities = [
  {
    category: 'Clubs & Societies',
    icon: Users,
    items: [
      { name: 'Science Club', icon: Sparkles, description: 'Explore scientific wonders through experiments' },
      { name: 'Literary Club', icon: BookOpen, description: 'Debate, creative writing, and poetry' },
      { name: 'Photography Club', icon: Camera, description: 'Capture moments and learn visual storytelling' },
      { name: 'Coding Club', icon: Code, description: 'Programming, robotics, and app development' },
    ],
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-50',
  },
  {
    category: 'Sports',
    icon: Trophy,
    items: [
      { name: 'Cricket', icon: Trophy, description: 'Professional coaching and inter-school tournaments' },
      { name: 'Football', icon: Trophy, description: 'Team building through the beautiful game' },
      { name: 'Basketball', icon: Trophy, description: 'Indoor courts and regular practice sessions' },
      { name: 'Athletics', icon: Trophy, description: 'Track and field events training' },
    ],
    color: 'from-orange-500 to-amber-400',
    bgColor: 'bg-orange-50',
  },
  {
    category: 'Arts & Music',
    icon: Palette,
    items: [
      { name: 'Visual Arts', icon: Palette, description: 'Painting, sketching, and sculpture' },
      { name: 'Classical Music', icon: Music, description: 'Vocal and instrumental training' },
      { name: 'Dance', icon: Sparkles, description: 'Classical and contemporary dance forms' },
      { name: 'Drama', icon: Users, description: 'Theatre and performing arts' },
    ],
    color: 'from-purple-500 to-pink-400',
    bgColor: 'bg-purple-50',
  },
  {
    category: 'Yoga & Wellness',
    icon: Heart,
    items: [
      { name: 'Morning Yoga', icon: Heart, description: 'Daily yoga sessions for all students' },
      { name: 'Meditation', icon: Sparkles, description: 'Mindfulness and stress management' },
      { name: 'Sports Yoga', icon: Trophy, description: 'Yoga for athletic performance' },
      { name: 'Wellness Workshops', icon: Users, description: 'Health and wellness education' },
    ],
    color: 'from-green-500 to-emerald-400',
    bgColor: 'bg-green-50',
  },
  {
    category: 'Community Service',
    icon: HandHeart,
    items: [
      { name: 'Environmental Club', icon: Leaf, description: 'Sustainability and green initiatives' },
      { name: 'Social Outreach', icon: HandHeart, description: 'Helping underprivileged communities' },
      { name: 'Blood Donation Drives', icon: Heart, description: 'Regular health awareness campaigns' },
      { name: 'International Programs', icon: Globe, description: 'Global citizenship initiatives' },
    ],
    color: 'from-rose-500 to-red-400',
    bgColor: 'bg-rose-50',
  },
];

export default function CampusLife() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
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

  const currentActivity = activities[activeCategory];
  const CategoryIcon = currentActivity.icon;

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#f8fafc]">
      <div className="section-container">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-[#f36b25] text-sm font-semibold uppercase tracking-wider mb-3">
            Campus Life
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#00457c] mb-4 font-['Fraunces']">
            Beyond the Classroom
          </h2>
          <p className="text-gray-600 text-lg">
            Discover a vibrant community where students explore passions, develop talents, and create lasting memories
          </p>
        </div>

        {/* Category Tabs */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <button
                key={activity.category}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-[#00457c] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {activity.category}
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <div 
          className={`transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className={`bg-gradient-to-r ${currentActivity.color} p-6 text-white`}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <CategoryIcon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold font-['Fraunces']">{currentActivity.category}</h3>
                  <p className="text-white/80 text-sm">Explore our {currentActivity.category.toLowerCase()} programs</p>
                </div>
              </div>
            </div>

            {/* Items Grid */}
            <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentActivity.items.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.name}
                    className={`${currentActivity.bgColor} rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${currentActivity.color} flex items-center justify-center mb-3`}>
                      <ItemIcon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 font-['Fraunces']">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Activities Grid */}
        <div className="mt-16">
          <h3 
            className={`text-2xl font-semibold text-[#00457c] mb-8 text-center font-['Fraunces'] transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Featured Activities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Annual Sports Day', 
                desc: 'Inter-house competitions and athletic championships',
                image: '/gallery-sports.jpg',
                color: 'from-orange-500 to-amber-400'
              },
              { 
                title: 'Art Exhibition', 
                desc: 'Showcasing student creativity and artistic talent',
                image: '/gallery-arts.jpg',
                color: 'from-purple-500 to-pink-400'
              },
              { 
                title: 'Science Fair', 
                desc: 'Innovative projects and scientific discoveries',
                image: '/gallery-science.jpg',
                color: 'from-blue-500 to-cyan-400'
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-xl font-semibold text-white mb-1 font-['Fraunces']">{feature.title}</h4>
                  <p className="text-white/80 text-sm">{feature.desc}</p>
                </div>
                <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a 
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            View Campus Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
