import { sanityClient } from '../sanity';
import { useEffect, useRef, useState } from 'react';
import { Calendar, ArrowRight, Bell, FileText, Users, Trophy } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Notices', icon: Bell },
  { id: 'academic', name: 'Academic', icon: FileText },
  { id: 'events', name: 'Events', icon: Users },
  { id: 'achievements', name: 'Achievements', icon: Trophy },
];

export default function NewsNotices() {
  const [isVisible, setIsVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [notices, setNotices] = useState<any[]>([]);
const [loading, setLoading] = useState(true);
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
      useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "notice"] | order(date desc){
          _id,
          title,
          excerpt,
          date,
          category,
          featured
        }`
      )
      .then((data) => {
        setNotices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Sanity fetch error:', err);
        setLoading(false);
      });
  }, []);
  if (loading) {
  return (
    <section className="py-20 text-center">
      <p>Loading notices…</p>
    </section>
  );
}
  const filteredNotices = activeCategory === 'all' 
    ? notices 
    : notices.filter(notice => notice.category === activeCategory);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }),
      full: date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    };
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-[#f36b25] text-sm font-semibold uppercase tracking-wider mb-3">
            News & Notices
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#00457c] mb-4 font-['Fraunces']">
            Latest Updates
          </h2>
          <p className="text-gray-600 text-lg">
            Stay informed with the latest announcements, events, and achievements
          </p>
        </div>

        {/* Category Filters */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#00457c] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Notices Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.map((notice, index) => {
            const date = formatDate(notice.date);
            const categoryInfo = categories.find(c => c.id === notice.category);
            const CategoryIcon = categoryInfo?.icon || Bell;
            
            return (
              <article
                key={notice.id}
                className={`group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  notice.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-[#f36b25]/20' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Date Badge */}
                <div className="flex items-start justify-between p-5 pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-14 bg-[#00457c] rounded-lg flex flex-col items-center justify-center text-white">
                      <span className="text-lg font-bold leading-none">{date.day}</span>
                      <span className="text-xs uppercase">{date.month}</span>
                    </div>
                    <div>
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        notice.category === 'events' ? 'bg-purple-100 text-purple-700' :
                        notice.category === 'academic' ? 'bg-blue-100 text-blue-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        <CategoryIcon className="w-3 h-3" />
                        {categoryInfo?.name}
                      </span>
                      {notice.featured && (
                        <span className="ml-2 inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-[#f36b25]/10 text-[#f36b25]">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Fraunces'] group-hover:text-[#00457c] transition-colors line-clamp-2">
                    {notice.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {notice.excerpt}
                  </p>
                  <button className="inline-flex items-center text-sm font-medium text-[#f36b25] hover:text-[#00457c] transition-colors">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#00457c] text-[#00457c] font-medium hover:bg-[#00457c] hover:text-white transition-all">
            <Calendar className="w-5 h-5" />
            View All Notices
          </button>
        </div>
      </div>
    </section>
  );
}
