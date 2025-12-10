'use client'

import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Recaptcha } from "./ui/recaptcha";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  User,
  Building,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Globe,
  Linkedin,
  Twitter,
  Users,
  MessageCircle,
  Shield,
  Settings,
  Award,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    details: "+91-83444-74556",
    description: "Speak directly with our sales team for immediate assistance.",
    link: "tel:+918344474556",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "enquiries@emuski.com",
    description: "Send us your inquiries and we'll respond within 24 hours.",
    link: "mailto:enquiries@emuski.com",
  },
  {
    icon: MapPin,
    title: "Business Office",
    details: "126, RNS Plaza, Electronic City Phase 2, Bangalore",
    description: "Visit our headquarters for business inquiries.",
    link: "https://maps.google.com/maps?q=Rudhra+Coworks+Electronic+City+Phase+2+Bangalore+126+RNS+Plaza+KIADB+Industrial+Area+near+Tech+Mahindra+Gate+next+to+Hyderabad+Magic+Bengaluru+Karnataka+560100",
  },
  {
    icon: Building,
    title: "Manufacturing Facility",
    details: "Ground floor, 5/541-1, Santhapuram road, 1st cross, Kamaraj nagar, Chinna elasagiri, Hosur, Krishnagiri district, Tamil Nadu-635126",
    description: "Our state-of-the-art production facility in Hosur.",
    link: "https://maps.google.com/maps?q=Ground+floor+5/541-1+Santhapuram+road+1st+cross+Kamaraj+nagar+Chinna+elasagiri+Hosur+Krishnagiri+district+Tamil+Nadu+635126",
  },
];

const offices = [
  {
    city: "Headquarters & Business Office",
    address: "Rudhra Coworks - Coworking Space\n126, RNS Plaza, KIADB Industrial Area, 1\nnear Tech Mahindra Gate, next to Hyderabad Magic\nElectronic City Phase 2\nBengaluru, Karnataka 560100",
    phone: "+91 83444 74556",
    email: "enquiries@emuski.com",
    mapUrl: "https://maps.google.com/maps?q=Rudhra+Coworks+Electronic+City+Phase+2+Bangalore+126+RNS+Plaza+KIADB+Industrial+Area+near+Tech+Mahindra+Gate+next+to+Hyderabad+Magic+Bengaluru+Karnataka+560100&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    city: "Manufacturing Facility",
    address: "Ground floor, 5/541-1, Santhapuram road,\n1st cross, Kamaraj nagar, Chinna\nelasagiri, Hosur, Krishnagiri district,\nTamil Nadu-635126",
    phone: "+91 83444 74556",
    email: "enquiries@emuski.com",
    mapUrl: "https://maps.google.com/maps?q=Ground+floor+5/541-1+Santhapuram+road+1st+cross+Kamaraj+nagar+Chinna+elasagiri+Hosur+Krishnagiri+district+Tamil+Nadu+635126&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    city: "Registered Office",
    address: "3/5-264, Srinivasan, Desavilakku,\nManthivalvu, Tharamangalam,\nThuttampatti, Salem,\nTamil Nadu - 636 306",
    phone: "+91 83444 74556",
    email: "enquiries@emuski.com",
    mapUrl: "https://maps.google.com/maps?q=3/5-264+Srinivasan+Desavilakku+Manthivalvu+Tharamangalam+Thuttampatti+Salem+Tamil+Nadu+636306&t=&z=15&ie=UTF8&iwloc=&output=embed"
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: ""
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);


  useEffect(() => {
    document.title = "Contact EMUSKI | Get In Touch - Manufacturing Solutions";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Contact EMUSKI for manufacturing solutions. Speak with our experts about your OEM manufacturing, precision engineering, and AI-powered production needs.');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const sendEmail = async (data: any, file: File | null) => {
    // Email configuration
    const emailData = {
      to: 'abushan.isro@gmail.com',
      from: 'noreply@EMUSKI.com',
      subject: `New Project Inquiry - ${data.name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Requirements:</strong></p>
        <p>${data.requirements || 'Not provided'}</p>
        <p><strong>File Attached:</strong> ${file ? file.name : 'No file'}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    // For now, we'll store in localStorage and log the email data
    // In production, you would integrate with an email service like SendGrid, EmailJS, or Nodemailer
    console.log('📧 EMAIL TO SEND TO abushan.isro@gmail.com:', emailData);
    if (file) {
      console.log('📎 FILE ATTACHED:', file.name, file.type, file.size);
    }

    // You can integrate with EmailJS here:
    // const result = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData, 'YOUR_USER_ID');

    return Promise.resolve({ success: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if reCAPTCHA is verified
    if (!recaptchaToken) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email notification
      await sendEmail(formData, uploadedFile);

      // Store in localStorage as fallback
      const contacts = JSON.parse(localStorage.getItem("emuski_contacts") || "[]");

      const newContact = {
        id: Date.now().toString(),
        ...formData,
        fileName: uploadedFile?.name || null,
        recaptchaToken,
        timestamp: new Date().toISOString(),
        status: "new"
      };

      contacts.push(newContact);
      localStorage.setItem("emuski_contacts", JSON.stringify(contacts));

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        requirements: ""
      });
      setUploadedFile(null);
      setRecaptchaToken(null);

      // Reset file input
      const fileInput = document.getElementById('file') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-black">
        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0">
          <img
            src="/assets/pages/manufacturing-services-hero-page.svg"
            alt="Contact EMUSKI Manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>

        {/* Mobile Background */}
        <div className="md:hidden absolute inset-0">
          <img
            src="/assets/pages/manufacturing-services-hero-page.svg"
            alt="Contact EMUSKI Manufacturing"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {/* Category Badge */}
                <div className="inline-flex items-center">
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-500/20 border border-cyan-500/50 rounded text-cyan-400 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
                    Get In Touch
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Contact Us
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
                  Ready to transform your manufacturing? Let's discuss how we can help bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
              {/* Contact Form */}
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Tell us about your project!
                  </h2>
                  <p className="text-sm text-gray-600">
                    Convert your idea into Marketable Products with our world-class engineers
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      autoComplete="name"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Company Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      autoComplete="email"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      autoComplete="tel"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="requirements" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Requirements
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      autoComplete="off"
                      rows={4}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent resize-vertical"
                      placeholder="share your requirements..."
                    />
                  </div>

                  <div>
                    <label htmlFor="file" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Upload file (optional)
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setUploadedFile(file);
                        }
                      }}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-emuski-teal/10 file:text-emuski-teal-darker hover:file:bg-emuski-teal/20"
                    />
                    {uploadedFile && (
                      <p className="text-xs text-gray-600 mt-1.5">
                        Selected: {uploadedFile.name}
                      </p>
                    )}
                  </div>

                  {/* reCAPTCHA */}
                  <div>
                    <Recaptcha 
                      onVerify={setRecaptchaToken}
                      onError={() => setRecaptchaToken(null)}
                      theme="light"
                      size="normal"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || submitStatus === "success" || !recaptchaToken}
                    className="w-full bg-emuski-teal-dark hover:bg-emuski-teal/90 text-white font-semibold py-2.5 text-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : submitStatus === "success" ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Submitted!
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 text-xs">
                        Thank you for your message! We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 text-xs">
                        {!recaptchaToken
                          ? "Please complete the security verification before submitting the form."
                          : "Sorry, there was an error sending your message. Please try again or contact us directly."
                        }
                      </p>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Our Locations
                  </h2>
                  <p className="text-sm text-gray-600">
                    Visit us at any of our facilities or connect with our team online.
                  </p>
                </div>

                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <Card key={index} className="p-4 border-2 border-gray-200 hover:border-emuski-teal/50 transition-colors">
                      <h3 className="text-base font-bold text-gray-900 mb-3">{office.city}</h3>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 text-emuski-teal-darker mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-gray-700 whitespace-pre-line leading-relaxed">{office.address}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-emuski-teal-darker flex-shrink-0" />
                          <p className="text-xs text-gray-700">{office.phone}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-emuski-teal-darker flex-shrink-0" />
                          <p className="text-xs text-gray-700">{office.email}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Google Maps */}
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Purchase Manager Section */}
      <section className="py-8 sm:py-10 bg-gradient-to-r from-emuski-teal-darker to-emuski-teal-dark">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                Your Trusted Purchase Manager for Global On-Demand Manufacturing
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
              {/* Skilled Workforce */}
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                <span className="text-white text-sm sm:text-base font-semibold whitespace-nowrap">Skilled Workforce</span>
              </div>

              {/* Direct Communication */}
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                <span className="text-white text-sm sm:text-base font-semibold whitespace-nowrap">Direct Communication</span>
              </div>

              {/* Robust IP Protection */}
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                <span className="text-white text-sm sm:text-base font-semibold whitespace-nowrap">IP Protection</span>
              </div>

              {/* Flexible Manufacturing */}
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                <span className="text-white text-sm sm:text-base font-semibold whitespace-nowrap">Low/High Volume</span>
              </div>

              {/* ISO Certified */}
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                <span className="text-white text-sm sm:text-base font-semibold whitespace-nowrap">ISO-Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps - Full Width Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us on Map</h3>
                  <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden border-2 border-gray-200">
                    <iframe
                      src={offices[0].mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="EMUSKI Office Location - Rudhra Coworks, Electronic City Phase 2, Bangalore"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="mt-4 text-center">
                    <Button 
                      variant="outline" 
                      className="border-emuski-teal text-emuski-teal-darker hover:bg-emuski-teal hover:text-white"
                      onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=Rudhra+Coworks+Electronic+City+Phase+2+Bangalore+126+RNS+Plaza+KIADB+Industrial+Area+near+Tech+Mahindra+Gate+next+to+Hyderabad+Magic+Bengaluru+Karnataka+560100`, '_blank')}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">How to Reach Us</h2>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                Choose the method that works best for you. We're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="p-6 sm:p-8 text-center border-2 border-gray-200 hover:border-emuski-teal hover:bg-emuski-teal/5 transition-all duration-300 group relative hover:shadow-lg">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emuski-teal/10 group-hover:bg-emuski-teal rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-emuski-teal-darker group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-900 transition-colors duration-300">{method.title}</h3>
                    <p className="font-semibold text-emuski-teal-darker mb-2 text-sm sm:text-base group-hover:text-emuski-teal transition-colors duration-300">{method.details}</p>
                    <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">{method.description}</p>
                    
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};