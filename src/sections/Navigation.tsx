import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Identity', href: '#logo-meaning' },
  { name: 'Academics', href: '#academics' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Campus Life', href: '#campus-life' },
  { name: 'News & Notices', href: '#news' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation({ scrollY }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isScrolled = scrollY > 100;

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.slice(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-[#00457c] text-white py-2 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="section-container flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +91 9109001795, 9329824774
            </span>
            <span className="hidden sm:inline text-white/60">|</span>
            <span className="hidden sm:inline">sus022017@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Admissions Open 2026-27</span>
            <a 
              href="#admissions" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#admissions'); }}
              className="bg-[#f36b25] px-3 py-1 rounded text-xs font-medium hover:bg-[#e55a1b] transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'top-10 bg-transparent py-4'
        }`}
      >
        <div className="section-container flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-3"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
              isScrolled ? 'bg-[#00457c] text-white' : 'bg-white text-[#00457c]'
            }`}>
              <img
                src="SUS logo.png"
                alt="Sunrise Universal School"
                className={`w-10 h-10 object-contain transition-all ${
                  isScrolled ? '' : 'bg-white p-1 rounded-full'
                }`}
              />

            </div>
            <div className={`hidden sm:block transition-colors ${isScrolled ? 'text-[#00457c]' : 'text-white'}`}>
              <div className="font-bold text-lg leading-tight font-['FerroRosso']">Sunrise Universal School</div>
              <div className={`text-xs ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>May Your Knowledge Become Brilliant</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? isScrolled 
                      ? 'text-[#f36b25] bg-[#fff0e6]' 
                      : 'text-white bg-white/20'
                    : isScrolled
                      ? 'text-gray-700 hover:text-[#00457c] hover:bg-gray-100'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#00457c] text-white hover:bg-[#002a5c]'
                  : 'bg-white text-[#00457c] hover:bg-[#e6f2ff]'
              }`}
            >
              Book a Visit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled ? 'text-[#00457c] hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="section-container py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#f36b25] bg-[#fff0e6]'
                    : 'text-gray-700 hover:text-[#00457c] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="block w-full text-center px-5 py-3 rounded-md bg-[#00457c] text-white font-medium hover:bg-[#002a5c] transition-colors"
              >
                Book a Visit
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
