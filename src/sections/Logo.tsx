import { useEffect, useRef, useState } from 'react';
import { Sun, BookOpen, Pen, Flower2, Flag, Sparkles, Quote } from 'lucide-react';

const logoElements = [
  {
    icon: Flower2,
    title: 'The Lotus',
    sanskrit: 'कमल',
    description: 'The lotus represents purity, enlightenment, and spiritual growth. Just as the lotus rises beautifully from muddy waters, our students emerge enlightened through education.',
    color: 'from-pink-500 to-rose-400',
    bgColor: 'bg-pink-50',
  },
  {
    icon: BookOpen,
    title: 'The Book',
    sanskrit: 'पुस्तक',
    description: 'Books symbolize wisdom, curiosity, and intellectual growth. Our school values a well-rounded education that nurtures the mind and spirit.',
    color: 'from-amber-500 to-orange-400',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Pen,
    title: 'The Pen',
    sanskrit: 'लेखनी',
    description: 'The pen represents the power of expression and communication. It signifies our commitment to providing quality education that empowers students.',
    color: 'from-blue-500 to-indigo-400',
    bgColor: 'bg-blue-50',
  },
];

const tricolorSignificance = [
  {
    color: '#FF9932',
    name: 'Saffron (केसरिया)',
    meaning: 'Courage and Sacrifice',
    description: 'Represents the strength and courage to pursue knowledge',
  },
  {
    color: '#ffffff',
    textColor: '#000000',
    name: 'White (सफेद)',
    meaning: 'Peace and Truth',
    description: 'Symbolizes the purity of thought and pursuit of truth',
  },
  {
    color: '#138808',
    name: 'Green (हरा)',
    meaning: 'Growth and Prosperity',
    description: 'Represents fertility, growth, and auspiciousness',
  },
];

const leadershipTeam = [
  { name: 'Pradeep Sahani', role: 'Founder', photo: '/team/pradeeps.png', bio: 'Visionary founder with a passion for education and holistic development.' },
  { name: 'Yogita Porwal', role: 'Director', photo: '/team/yogitap.png', bio: 'Leads the school with a focus on nurturing creativity and innovation.' },
  { name: 'Taksh Porwal', role: 'Academic & Operations Coordinator', photo: '/team/takshp.png', bio: 'Handles academics, digital systems, curriculum innovation, and school operations.' },
  { name: 'Deepesh Bhagwat', role: 'Principal', photo: '/team/deepeshb.png', bio: 'Leads the school with a focus on academic excellence and holistic development.' },
  { name: 'Komal Tanna', role: 'Coordinator', photo: '/team/komalt.png', bio: 'Oversees curriculum development, teacher training, and student welfare.' },
];
const roleColors: Record<string, string> = {
  Founder: 'bg-purple-100 text-purple-700',
  'Director': 'bg-blue-100 text-blue-700',
  'Academic & Operations Coordinator': 'bg-green-100 text-green-700',
  'Coordinator': 'bg-orange-100 text-orange-700',
  Principal: 'bg-red-100 text-red-700',
};

export default function LogoMeaning() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<any | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const topLeaders = leadershipTeam.filter(
    (m) => m.role === 'Founder' || m.role === 'Director'
  );

  const coreTeam = leadershipTeam.filter(
    (m) =>
      m.role !== 'Founder' &&
      m.role !== 'Director'
  );
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
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-flex items-center gap-2 text-[#f36b25] text-sm font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            Our Identity
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#00457c] mb-4 font-['Fraunces']">
            Meaning & Significance of Our Logo
          </h2>
          <p className="text-gray-600 text-lg">
            Every element of our logo carries deep meaning, reflecting our values, mission, and the ancient wisdom that guides us
          </p>
        </div>

        {/* School Name Section */}
        <div
          className={`bg-gradient-to-br from-[#00457c] to-[#002a5c] rounded-2xl p-8 md:p-12 mb-16 text-white transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Sun className="w-6 h-6 text-[#f36b25]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold font-['Fraunces']">
                  Sunrise Universal School
                </h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">&quot;Sunrise&quot;</strong> signifies the beginning of a new day, symbolizing the start of a journey towards knowledge and growth. It represents hope, new beginnings, and the dawning of wisdom.
              </p>
              <p className="text-white/80 leading-relaxed">
                <strong className="text-white">&quot;Universal&quot;</strong> emphasizes our commitment to embracing diversity and creating an environment where students from all backgrounds can thrive. Education should be accessible to all.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Quote className="w-5 h-5 text-[#f36b25]" />
                Shanti Mantra
              </h4>
              <p className="text-sm text-white/90 font-medium mb-2">
                ॐ सह नाववतु सह नौ भुनक्तु<br />
                सह वीर्यं करवावहै<br />
                तेजस्विनावधीतमस्तु मा विद्विषावहै<br />
                ॐ शान्तिः शान्तिः शान्तिः
              </p>
              <p className="text-xs text-white/60 mt-3">
                &quot;May we all be protected together, may we all be nourished together,<br />
                may we work together with great energy, may our intellect be sharpened,<br />
                may there be no hostility among us.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Logo Elements Grid */}
        <div className="mb-16">
          <h3
            className={`text-2xl font-semibold text-[#00457c] mb-8 text-center font-['Fraunces'] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Elements of Our Logo
          </h3>
          {/* School Logo Display */}
<div
  className={`flex justify-center mb-20 transition-all duration-700 delay-150 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-white shadow-xl border-4 border-[#f36b25] p-4">
    <img
      src="/SUS_v2_Logo(colored).png"
      alt="Sunrise Universal School Logo"
      className="w-full h-full object-contain -translate-y-2"
    />
  </div>
</div>

          <div className="grid md:grid-cols-3 gap-8">
            {logoElements.map((element, index) => {
              const Icon = element.icon;
              return (
                <div
                  key={element.title}
                  className={`group relative bg-white rounded-2xl border border-gray-100 shadow-lg p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${element.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title with Sanskrit */}
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 font-['Fraunces']">
                      {element.title}
                    </h4>
                    <span className="text-sm text-[#f36b25] font-medium">{element.sanskrit}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {element.description}
                  </p>

                  {/* Decorative Element */}
                  <div className={`absolute -bottom-2 -right-2 w-16 h-16 ${element.bgColor} rounded-full opacity-50 -z-10`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Tri-color Section */}
        <div
          className={`bg-[#f8fafc] rounded-2xl p-8 md:p-12 mb-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Flag className="w-6 h-6 text-[#f36b25]" />
            <h3 className="text-2xl font-semibold text-[#00457c] font-['Fraunces']">
              The Tri-color Significance
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tricolorSignificance.map((color, index) => (
              <div
                key={color.name}
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div
                  className="w-full h-3 rounded-full mb-4"
                  style={{ backgroundColor: color.color }}
                />
                <h4 className="font-semibold text-gray-900 mb-1 font-['Fraunces']">{color.name}</h4>
                <p
                  className="text-sm font-medium mb-2"
                  style={{ color: color.textColor || color.color }}
                >{color.meaning}</p>
                <p className="text-sm text-gray-600">{color.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              The Ashoka Chakra at the center symbolizes progress, movement, and righteousness —
              reminding us of our duty to continuously evolve and contribute to society.
            </p>
          </div>
        </div>

        {/* Motto Section */}
        <div
          className={`bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 mb-16 border border-amber-100 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-[#f36b25] text-sm font-semibold uppercase tracking-wider mb-3">
              Our Motto
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#00457c] mb-4 font-['Fraunces']">
              तेजस्विनावधीतमस्तु
            </h3>
            <p className="text-xl text-gray-700 mb-4 italic">
              &quot;May our knowledge become brilliant&quot;
            </p>
            <p className="text-sm text-gray-500 mb-6">
              — From Yajur Veda
            </p>
            <p className="text-gray-600 leading-relaxed">
              This ancient Sanskrit motto guides our educational philosophy. It emphasizes continuous learning,
              intellectual growth, and the transformative power of knowledge. We strive to create an environment
              that fosters brilliance in every student.
            </p>
          </div>
        </div>

        {/* Establishment & Philosophy */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div
            className={`bg-white rounded-2xl border border-gray-100 shadow-lg p-8 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
          >
            <h4 className="text-xl font-semibold text-[#00457c] mb-4 font-['Fraunces']">
              Our Journey
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00457c] flex items-center justify-center text-white font-bold">
                  2004
                </div>
                <div>
                  <p className="font-medium text-gray-900">Sunrise Group of Institutes</p>
                  <p className="text-sm text-gray-600">Parent organization established with motto &quot;One-Stop Destination for all your educational needs&quot;</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f36b25] flex items-center justify-center text-white font-bold">
                  2017
                </div>
                <div>
                  <p className="font-medium text-gray-900">Sunrise Universal School</p>
                  <p className="text-sm text-gray-600">Physical establishment of the school after 5 years of mental preparation</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`bg-gradient-to-br from-[#00457c] to-[#002a5c] rounded-2xl p-8 text-white transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
          >
            <h4 className="text-xl font-semibold mb-4 font-['Fraunces']">
              Our Philosophy
            </h4>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm font-medium text-[#f36b25] mb-1">योगः कर्मसु कौशलम्</p>
                <p className="text-sm text-white/80">&quot;Excellence in Action is Yoga&quot; — Bhagavad Gita</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm font-medium text-[#f36b25] mb-1">सिद्धिर्भवति कर्मजा</p>
                <p className="text-sm text-white/80">&quot;Success comes through hard work&quot;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div
          className={`transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <h3 className="text-2xl font-semibold text-[#00457c] mb-8 text-center font-['Fraunces']">
            Our Leadership Team
          </h3>

          {/* TOP LEADERS */}
          <h4 className="text-center text-lg font-semibold text-gray-500 mb-6">
            Leadership
          </h4>

          <div className="grid sm:grid-cols-2 gap-8 justify-center mb-14">
            {topLeaders.map((member) => (
              <div
                key={member.name}
                onClick={() => setSelectedLeader(member)}
                className="group relative bg-white rounded-2xl p-6 text-center
        shadow-md border border-gray-100
        transition-all duration-500
        hover:-translate-y-3 hover:shadow-2xl
        hover:ring-2 hover:ring-[#f36b25]/40 cursor-pointer"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-2xl
          bg-gradient-to-br from-[#f36b25]/10 to-[#00457c]/10
          opacity-0 group-hover:opacity-100
          transition pointer-events-none"
                />

                <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#f36b25] bg-white">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="font-semibold text-gray-900 font-['Fraunces']">
                  {member.name}
                </h4>

                <span
                  className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${roleColors[member.role]
                    }`}
                >
                  {member.role}
                </span>
              </div>
            ))}
          </div>

          {/* CORE TEAM */}
          <h4 className="text-center text-lg font-semibold text-gray-500 mb-6">
            Core Team
          </h4>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeam.map((member) => (
              <div
                key={member.name}
                onClick={() => setSelectedLeader(member)}
                className="group relative bg-white rounded-2xl p-6 text-center
        shadow-md border border-gray-100
        transition-all duration-500
        hover:-translate-y-3 hover:shadow-2xl
        hover:ring-2 hover:ring-[#f36b25]/40 cursor-pointer"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-2xl
          bg-gradient-to-br from-[#f36b25]/10 to-[#00457c]/10
          opacity-0 group-hover:opacity-100
          transition pointer-events-none"
                />

                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#f36b25] bg-white">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="font-semibold text-gray-900 font-['Fraunces']">
                  {member.name}
                </h4>

                <span
                  className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${roleColors[member.role]
                    }`}
                >
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BIO MODAL */}
        {selectedLeader && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            onClick={() => setSelectedLeader(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-lg w-full p-8 relative animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
                                        
              {selectedLeader.photo && (
                <img
                  src={selectedLeader.photo}
                  alt={selectedLeader.name}
                  className="w-28 h-28 rounded-full mx-auto object-cover mb-4 border"
                />
              )}

              <h3 className="text-2xl font-bold text-center text-[#00457c] font-['Fraunces']">
                {selectedLeader.name}
              </h3>

              <p className="text-center text-[#f36b25] font-medium mb-4">
                {selectedLeader.role}
              </p>

              <p className="text-gray-600 text-center leading-relaxed">
                {selectedLeader.bio || 'Biography coming soon.'}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
