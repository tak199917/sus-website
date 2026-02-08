import { useState } from 'react';
import { 
  Facebook, Instagram, 
  ArrowUp, Mail, Phone, MapPin, Send, 
  YoutubeIcon
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Our Programs', href: '#academics' },
  { name: 'Admission', href: '#admissions' },
  { name: 'News & Events', href: '#news' },
  { name: 'Contact', href: '#contact' },
  { name: 'Careers', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2FSunrise.Universal.School&sa=D&sntz=1&usg=AOvVaw0wcsnDmpZLIzI4WEqDxY9X', label: 'Facebook' },
  { icon: YoutubeIcon, href: 'https://www.youtube.com/@sunriseuniversalschool', label: 'Youtube' },
  { icon: Instagram, href: 'https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fsunrise_universal_school%3Figsh%3DMWxoc3cxMWpzYjZ0Yg%3D%3D&sa=D&sntz=1&usg=AOvVaw3h8cDYzY2CrXUgOYpQVb8F', label: 'Instagram' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowDialog(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative">
      {/* CTA Banner */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/footer-cta-bg.jpg" 
            alt="Students in classroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00457c]/95 to-[#002a5c]/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 section-container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 font-['Fraunces']">
            Ready to Start Your Child&apos;s Journey?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Schedule a visit and experience the Sunrise difference. Our doors are always open for curious minds.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="btn-primary text-lg px-8 py-4"
            >
              Book a Tour Today
            </a>
            <a 
              href="#admissions"
              onClick={(e) => { e.preventDefault(); scrollToSection('#admissions'); }}
              className="px-8 py-4 rounded-md border-2 border-white text-white font-medium hover:bg-white hover:text-[#00457c] transition-all"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#002a5c] text-white py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#00457c] font-bold text-xl">
                        <img src="/SUS logo.png" className="w-12 h-12 object-contain" />

                </div>
                <div>
                  <div className="font-bold text-xl font-['Fraunces']">Sunrise Universal School</div>
                  <div className="text-white/60 text-sm">May Your Knowledge Become Brillant</div>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Nurturing young minds for a brighter tomorrow. We provide holistic education 
                that develops academic excellence, character, and creativity. Join us in shaping the future leaders of the world.
                <br/><br/>
                UDISE Code: 23190623770
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f36b25] flex items-center justify-center transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Contact Info */}
                 <div className="space-y-3 pt-4">
                <a href="tel:+919109001795" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 9109001795, 9329824774
                </a>
                <a href="sus022017@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  sus022017@gmail.com
                </a>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  Rewas Devdra Road, Ramtekri, Mandsaur, Madhya Pradesh -458001
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-['Fraunces']">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f36b25]" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-['Fraunces']">Stay Updated</h4>
              <p className="text-white/70 mb-4">
                Subscribe to our newsletter for the latest news, events, and updates from Sunrise Universal School.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-[#f36b25] focus:ring-2 focus:ring-[#f36b25]/20 outline-none transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f36b25] hover:bg-[#e55a1b] text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#001a3a] py-5">
        <div className="section-container flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Sunrise Universal Schoo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#f36b25] hover:bg-[#e55a1b] text-white shadow-lg flex items-center justify-center transition-all hover:-translate-y-1 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Newsletter Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-[#00457c]">
              Successfully Subscribed!
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Thank you for subscribing to our newsletter. You&apos;ll receive the latest updates and news from Sunrise Universal School.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <button
              onClick={() => setShowDialog(false)}
              className="w-full btn-primary"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
