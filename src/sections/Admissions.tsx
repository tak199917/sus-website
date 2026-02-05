import { useEffect, useRef, useState } from 'react';
import { Calendar, FileText, Phone, CheckCircle, ArrowRight, User, Mail, Phone as PhoneIcon, MessageSquare } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const admissionSteps = [
  {
    step: 1,
    title: 'Inquiry',
    description: 'Submit an enquiry form or call our admissions office',
    icon: Phone,
  },
  {
    step: 2,
    title: 'Campus Visit',
    description: 'Schedule a tour to experience our facilities',
    icon: Calendar,
  },
  {
    step: 3,
    title: 'Application',
    description: 'Complete and submit the application form',
    icon: FileText,
  },
  {
    step: 4,
    title: 'Assessment',
    description: 'Age-appropriate evaluation for grade placement',
    icon: CheckCircle,
  },
  {
    step: 5,
    title: 'Enrollment',
    description: 'Complete admission formalities and join us',
    icon: User,
  },
];

const requirements = [
  'Completed application form',
  'Birth certificate copy',
  'Previous school records (if applicable)',
  'Passport-size photographs',
  'Address proof',
  'Parent/Guardian ID proof',
];

export default function Admissions() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.grade) {
      newErrors.grade = 'Please select a grade';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setDialogMessage('Thank you for your enquiry! Our admissions team will contact you within 24 hours.');
      setShowDialog(true);
      setFormData({ name: '', email: '', phone: '', grade: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

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
            Admissions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#00457c] mb-4 font-['Fraunces']">
            Join Sunrise Family
          </h2>
          <p className="text-gray-600 text-lg">
            Begin your child&apos;s journey toward excellence. Our admission process is designed to be transparent, supportive, and focused on finding the right fit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Process & Requirements */}
          <div className="space-y-10">
            {/* Admission Process */}
            <div>
              <h3 
                className={`text-xl font-semibold text-[#00457c] mb-6 font-['Fraunces'] transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Admission Process
              </h3>
              <div className="space-y-4">
                {admissionSteps.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className={`flex items-start gap-4 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                      }`}
                      style={{ transitionDelay: `${200 + index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00457c] flex items-center justify-center text-white font-semibold text-sm">
                        {item.step}
                      </div>
                      <div className="flex-1 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-4 h-4 text-[#f36b25]" />
                          <h4 className="font-semibold text-gray-900 font-['Fraunces']">{item.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Requirements */}
            <div 
              className={`bg-[#f8fafc] rounded-xl p-6 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-xl font-semibold text-[#00457c] mb-4 font-['Fraunces']">
                Required Documents
              </h3>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-[#f36b25] flex-shrink-0" />
                    <span className="text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fee Enquiry CTA */}
            <div 
              className={`bg-gradient-to-r from-[#00457c] to-[#002a5c] rounded-xl p-6 text-white transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h4 className="text-lg font-semibold mb-2 font-['Fraunces']">Fee Structure Enquiry</h4>
              <p className="text-white/80 text-sm mb-4">
                Contact our admissions office for detailed fee structure and payment options.
              </p>
              <a 
                href="tel:+919876543210"
                className="inline-flex items-center text-[#f36b25] font-medium hover:text-white transition-colors"
              >
                <PhoneIcon className="w-4 h-4 mr-2" />
                +91 91090 01795
              </a>
            </div>
          </div>

          {/* Right Side - Enquiry Form */}
          <div 
            className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#00457c] mb-2 font-['Fraunces']">
                Enquiry Form
              </h3>
              <p className="text-gray-600 text-sm">
                Fill in your details and we&apos;ll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Parent/Guardian Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-[#00457c] focus:ring-2 focus:ring-[#00457c]/10 outline-none transition-all`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-[#00457c] focus:ring-2 focus:ring-[#00457c]/10 outline-none transition-all`}
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-[#00457c] focus:ring-2 focus:ring-[#00457c]/10 outline-none transition-all`}
                      placeholder="10-digit number"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Grade Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Grade Seeking Admission *
                </label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.grade ? 'border-red-500' : 'border-gray-200'} focus:border-[#00457c] focus:ring-2 focus:ring-[#00457c]/10 outline-none transition-all bg-white`}
                >
                  <option value="">Select Grade</option>
                  <option value="nursery">Nursery</option>
                  <option value="kg">Kindergarten</option>
                  <option value="1-5">Primary (Grades 1-5)</option>
                  <option value="6-8">Middle School (Grades 6-8)</option>
                  <option value="9-12">Secondary (Grades 9-12)</option>
                </select>
                {errors.grade && <p className="text-red-500 text-xs mt-1">{errors.grade}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Additional Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#00457c] focus:ring-2 focus:ring-[#00457c]/10 outline-none transition-all resize-none"
                    placeholder="Any specific questions or requirements..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg"
              >
                Submit Enquiry
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <p className="text-center text-xs text-gray-500">
                By submitting, you agree to our privacy policy and terms of service
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-[#00457c]">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Enquiry Submitted
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              {dialogMessage}
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
    </section>
  );
}
