import { useState, useEffect, useRef } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FAQSection } from "../components/FAQSection";
import { TechnicalSpecsSection } from "../components/TechnicalSpecsSection";
import { ManufacturingServicesTabs } from "../components/ManufacturingServicesTabs";
import ProductDeliverablesSection from "../components/ProductDeliverablesSection";
import SectorsServedSection from "../components/SectorsServedSection";
import ManufacturingExcellenceSection from "../components/ManufacturingExcellenceSection";
import { SolutionsOfferedSection } from "../components/SolutionsOfferedSection";
import { Upload, X, FileText, AlertTriangle, Send, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";



export default function ManufacturingServices() {
  // Handle hash navigation and tab selection
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // Set active tab based on hash
      const tabMap: { [key: string]: string } = {
        'custom': 'custom',
        'prototyping': 'prototyping',
        'scaling': 'scaling',
        'on-demand': 'on-demand'
      };
      
      if (tabMap[hash]) {
        // Trigger tab click
        setTimeout(() => {
          const tabButton = document.querySelector(`[data-state][id*="${tabMap[hash]}"]`) as HTMLButtonElement;
          if (tabButton) {
            tabButton.click();
          }
          
          // Scroll to tabs section
          const element = document.querySelector('#manufacturing-tabs');
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 200);
      }
    }
  }, []);

  // SEO Meta Tags and Structured Data
  useEffect(() => {
    // Update document title for SEO
    document.title = "OEM Manufacturing Services in Bangalore | Precision Engineering Solutions | EMUSKI";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Leading OEM manufacturing services in Bangalore, India. Expert precision engineering, rapid prototyping, custom manufacturing, and AI-powered production solutions for automotive, aerospace, medical devices, and electronics industries. ISO certified manufacturing partner with 15+ years experience.');

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'OEM manufacturing Bangalore, precision engineering services, custom manufacturing India, rapid prototyping Bangalore, CNC machining services, injection molding, sheet metal fabrication, automotive manufacturing, aerospace manufacturing, medical device manufacturing, electronics manufacturing, manufacturing automation, lean manufacturing, Industry 4.0, smart manufacturing, manufacturing consulting, supply chain optimization, quality assurance manufacturing, ISO certified manufacturing, design for manufacturing, VAVE methodology, cost optimization manufacturing');

    // Add canonical URL
    let canonicalUrl = document.querySelector('link[rel="canonical"]');
    if (!canonicalUrl) {
      canonicalUrl = document.createElement('link');
      canonicalUrl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalUrl);
    }
    canonicalUrl.setAttribute('href', 'https://www.EMUSKI.com/manufacturing-services');

    // Add hreflang for international SEO
    let hreflangEn = document.querySelector('link[hreflang="en"]');
    if (!hreflangEn) {
      hreflangEn = document.createElement('link');
      hreflangEn.setAttribute('rel', 'alternate');
      hreflangEn.setAttribute('hreflang', 'en');
      document.head.appendChild(hreflangEn);
    }
    hreflangEn.setAttribute('href', 'https://www.EMUSKI.com/manufacturing-services');

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'OEM Manufacturing Services in Bangalore | Precision Engineering | EMUSKI' },
      { property: 'og:description', content: 'Leading OEM manufacturing services in Bangalore, India. Expert precision engineering, rapid prototyping, and custom manufacturing solutions for automotive, aerospace, medical, and electronics industries.' },
      { property: 'og:url', content: 'https://www.EMUSKI.com/manufacturing-services' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.emuski.com/assets/manufacturing-services-og.jpg' },
      { property: 'og:locale', content: 'en_US' }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Add Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'OEM Manufacturing Services in Bangalore | EMUSKI' },
      { name: 'twitter:description', content: 'Leading OEM manufacturing services in Bangalore. Expert precision engineering, rapid prototyping, and custom manufacturing solutions.' },
      { name: 'twitter:image', content: 'https://www.emuski.com/assets/manufacturing-services-twitter.jpg' }
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "OEM Manufacturing Services",
      "description": "Comprehensive OEM manufacturing services including precision engineering, rapid prototyping, custom manufacturing, and production scaling solutions",
      "provider": {
        "@type": "Organization",
        "name": "EMUSKI Manufacturing Solutions",
        "url": "https://www.EMUSKI.com/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "126, RNS Plaza, KIADB Industrial Area, Electronic City Phase 2",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560100",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-83444-74556",
          "contactType": "Customer Service"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Manufacturing",
      "category": "OEM Manufacturing",
      "offers": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "OEM Manufacturing",
            "description": "Complete manufacturing solutions from concept to production"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Manufacturing",
            "description": "Tailored manufacturing services meeting specific requirements"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rapid Prototyping",
            "description": "Fast and efficient prototyping services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Production Scaling",
            "description": "Seamless scaling from prototype to full production"
          }
        }
      ],
      "potentialAction": {
        "@type": "ContactAction",
        "target": "https://www.EMUSKI.com/contact"
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"][data-page="manufacturing-services"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('data-page', 'manufacturing-services');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

    // Cleanup function
    return () => {
      // Remove page-specific structured data when component unmounts
      const pageScript = document.querySelector('script[data-page="manufacturing-services"]');
      if (pageScript) {
        pageScript.remove();
      }
    };
  }, []);

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadError, setUploadError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectDescription: "",
    quantity: "",
    timeline: ""
  });

  // Horizontal scroll state
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftGradient(scrollLeft > 10);
      setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollSection = (direction: 'left' | 'right') => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollAmount = direction === 'left' ? -600 : 600;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  // Security configurations
  const ALLOWED_FILE_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'image/jpeg',
    'image/png',
    'image/gif',
    'text/plain',
    'application/zip'
  ];
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const MAX_FILES = 5;

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return `File type "${file.type}" is not allowed. Please upload PDF, DOC, DOCX, XLS, XLSX, JPG, PNG, GIF, TXT, or ZIP files.`;
    }
    if (file.size > MAX_FILE_SIZE) {
      return `File size exceeds 10MB limit. Please choose a smaller file.`;
    }
    const fileName = file.name.toLowerCase();
    const dangerousExtensions = ['.exe', '.bat', '.cmd', '.scr', '.vbs', '.js', '.jar', '.com'];
    if (dangerousExtensions.some(ext => fileName.endsWith(ext))) {
      return `File type not allowed for security reasons.`;
    }
    return null;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadError("");

    if (uploadedFiles.length + files.length > MAX_FILES) {
      setUploadError(`Maximum ${MAX_FILES} files allowed.`);
      return;
    }

    const validFiles: File[] = [];
    for (const file of files) {
      const error = validateFile(file);
      if (error) {
        setUploadError(error);
        return;
      }
      validFiles.push(file);
    }

    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (indexToRemove: number) => {
    setUploadedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendQuoteEmail = async (data: any, files: any[]) => {
    // Email configuration
    const emailData = {
      to: 'abushan.isro@gmail.com',
      from: 'noreply@EMUSKI.com',
      subject: `New Quote Request - ${data.projectDescription.substring(0, 50)}...`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Quantity:</strong> ${data.quantity || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${data.timeline || 'Not specified'}</p>
        <p><strong>Project Description:</strong></p>
        <p>${data.projectDescription}</p>
        <p><strong>Files Attached:</strong> ${files.length} files</p>
        ${files.length > 0 ? `
        <p><strong>File Details:</strong></p>
        <ul>
          ${files.map(file => `<li>${file.name} (${formatFileSize(file.size)})</li>`).join('')}
        </ul>
        ` : ''}
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    // Log email data for debugging
    console.log('📧 QUOTE EMAIL TO SEND TO abushan.isro@gmail.com:', emailData);
    
    // For production, integrate with email service
    return Promise.resolve({ success: true });
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email notification
      await sendQuoteEmail(quoteData, uploadedFiles);
      
      const quotes = JSON.parse(localStorage.getItem("emuski_quotes") || "[]");
      const fileData = await Promise.all(
        uploadedFiles.map(async (file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
          data: `[File: ${file.name} - ${formatFileSize(file.size)}]`
        }))
      );

      const newQuote = {
        id: Date.now().toString(),
        ...quoteData,
        attachments: fileData,
        attachmentCount: uploadedFiles.length,
        timestamp: new Date().toISOString(),
        status: "new"
      };
      
      quotes.push(newQuote);
      localStorage.setItem("emuski_quotes", JSON.stringify(quotes));
      
      setSubmitStatus("success");
      setQuoteData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectDescription: "",
        quantity: "",
        timeline: ""
      });
      setUploadedFiles([]);
      setUploadError("");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden min-h-[600px]">
        <div className="absolute inset-0">
          <img src="/assets/hero/manufaturing.svg" alt="Manufacturing background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-20 h-full flex items-center justify-start px-12 md:px-16 lg:px-20 pt-20 pb-8">
          <div className="w-full max-w-lg lg:max-w-xl ml-4 lg:ml-8">
            <div className="text-left space-y-6 lg:space-y-8 animate-fade-in">
              <span className="inline-block text-emuski-teal text-sm font-bold tracking-wider uppercase">Manufacturing Excellence</span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                You Design It, We Build It : Justified Cost, Peerless Quality
              </h1>
              <p className="text-base text-gray-100 leading-relaxed">
                Your One-Stop Strategic Companion for AI-Driven Manufacturing Excellence. At EMuski, where cost and quality meets profitability - delivering straight to your door
              </p>
              <div className="pt-8">
                <a className="inline-flex items-center px-8 py-4 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white font-semibold text-base lg:text-lg rounded-lg transition-all duration-300 transform hover:scale-105" href="/manufacturing-services">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-2 h-5 w-5">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Services Quick Access */}
      <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="w-full px-4 sm:px-6">
          {/* Section Navigation */}
          <div className="flex items-center justify-end gap-2 mb-4">
            <button
              onClick={() => scrollSection('left')}
              className="p-2.5 rounded-lg bg-emuski-teal-darker text-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              aria-label="Scroll section left"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => scrollSection('right')}
              className="p-2.5 rounded-lg bg-emuski-teal-darker text-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              aria-label="Scroll section right"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>

          {/* Scrollable Section Wrapper */}
          <div className="relative">
            {/* Left Gradient Overlay */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-emuski-teal via-emuski-teal-dark to-transparent pointer-events-none z-10 transition-opacity duration-500 ${showLeftGradient ? 'opacity-30' : 'opacity-0'}`}
              style={{
                maskImage: 'linear-gradient(to right, black, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, black, transparent)'
              }}
            ></div>

            {/* Right Gradient Overlay */}
            <div
              className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-emuski-teal via-emuski-teal-dark to-transparent pointer-events-none z-10 transition-opacity duration-500 ${showRightGradient ? 'opacity-30' : 'opacity-0'}`}
              style={{
                maskImage: 'linear-gradient(to left, black, transparent)',
                WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
              }}
            ></div>

            {/* Horizontal Scroll Container */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none' }}
            >
              {/* Service Section */}
              <div className="flex gap-8 items-start min-w-full">
                {/* Left Column - Service Info */}
                <div className="flex-shrink-0 w-full lg:w-[400px]">
                  <div className="space-y-4">
                    {/* Category Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                      Manufacturing Services
                    </h2>

                    {/* Description */}
                    <p className="text-base text-gray-600 leading-relaxed">
                      Transform your ideas into reality with rapid prototyping and on-demand manufacturing solutions that deliver quality, speed, and innovation across automotive, aerospace, and industrial sectors.
                    </p>

                    {/* Quick Links */}
                    <div className="pt-2">
                      <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-emuski-teal-darker" />
                        Quick Links
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#on-demand"
                            className="group flex items-center gap-2 text-gray-700 hover:text-emuski-teal-darker transition-colors duration-200"
                          >
                            <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-emuski-teal-darker transition-colors"></span>
                            <span className="text-sm font-medium">On-Demand Manufacturing</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#prototyping"
                            className="group flex items-center gap-2 text-gray-700 hover:text-emuski-teal-darker transition-colors duration-200"
                          >
                            <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-emuski-teal-darker transition-colors"></span>
                            <span className="text-sm font-medium">Rapid Prototyping</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#custom"
                            className="group flex items-center gap-2 text-gray-700 hover:text-emuski-teal-darker transition-colors duration-200"
                          >
                            <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-emuski-teal-darker transition-colors"></span>
                            <span className="text-sm font-medium">Custom Manufacturing</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#scaling"
                            className="group flex items-center gap-2 text-gray-700 hover:text-emuski-teal-darker transition-colors duration-200"
                          >
                            <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-emuski-teal-darker transition-colors"></span>
                            <span className="text-sm font-medium">Production Scaling</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column - Featured Projects */}
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <div className="flex gap-6">
                    {/* On-Demand Manufacturing Card */}
                    <a
                      href="/manufacturing-services#on-demand"
                      className="flex-shrink-0 w-[340px] group"
                    >
                      <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emuski-teal-darker/40 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                          <img
                            src="/assets/componets/Part-Photos/IMG-20250519-WA0016.jpg"
                            alt="On-Demand Manufacturing"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          
                        </div>
                        <div className="p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emuski-teal-darker transition-colors line-clamp-2">
                            On-Demand Manufacturing
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                            Flexible manufacturing solutions as you need them with high-precision components manufactured to demanding specifications.
                          </p>
                          <div className="flex items-center gap-2 text-emuski-teal-darker font-semibold group-hover:gap-3 transition-all duration-300">
                            <span className="text-sm">Learn More</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emuski-teal via-emuski-teal-dark to-emuski-teal-darker transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                    </a>

                    {/* Rapid Prototyping Card */}
                    <a
                      href="/manufacturing-services#prototyping"
                      className="flex-shrink-0 w-[340px] group"
                    >
                      <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emuski-teal-darker/40 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                          <img
                            src="/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg"
                            alt="Rapid Prototyping"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md text-xs font-bold text-gray-900 rounded-full shadow-xl">
                              Engineering Services
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emuski-teal-darker transition-colors line-clamp-2">
                            Rapid Prototyping
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                            Fast and efficient prototyping services from concept to completion with precision and cost optimization.
                          </p>
                          <div className="flex items-center gap-2 text-emuski-teal-darker font-semibold group-hover:gap-3 transition-all duration-300">
                            <span className="text-sm">Learn More</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emuski-teal via-emuski-teal-dark to-emuski-teal-darker transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                    </a>

                    {/* Custom Manufacturing Card */}
                    <a
                      href="/manufacturing-services#custom"
                      className="flex-shrink-0 w-[340px] group"
                    >
                      <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emuski-teal-darker/40 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                          <img
                            src="/assets/componets/Part-Photos/IMG-20250310-WA0011.jpg"
                            alt="Custom Manufacturing"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md text-xs font-bold text-gray-900 rounded-full shadow-xl">
                              Precision Engineering
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emuski-teal-darker transition-colors line-clamp-2">
                            Custom Manufacturing
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                            Tailored manufacturing services meeting specific requirements with high-precision CNC machining capabilities.
                          </p>
                          <div className="flex items-center gap-2 text-emuski-teal-darker font-semibold group-hover:gap-3 transition-all duration-300">
                            <span className="text-sm">Learn More</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emuski-teal via-emuski-teal-dark to-emuski-teal-darker transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                    </a>

                    {/* Production Scaling Card */}
                    <a
                      href="/manufacturing-services#scaling"
                      className="flex-shrink-0 w-[340px] group"
                    >
                      <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emuski-teal-darker/40 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                          <img
                            src="/assets/componets/Matica-Photos2/DSC_1008.JPG"
                            alt="Production Scaling"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          
                        </div>
                        <div className="p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emuski-teal-darker transition-colors line-clamp-2">
                            Production Scaling
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                            Seamless scaling from prototype to full production with advanced assembly stations and workflow optimization.
                          </p>
                          <div className="flex items-center gap-2 text-emuski-teal-darker font-semibold group-hover:gap-3 transition-all duration-300">
                            <span className="text-sm">Learn More</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emuski-teal via-emuski-teal-dark to-emuski-teal-darker transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="custom">
        <ManufacturingExcellenceSection />
      </div>

      <SolutionsOfferedSection />

      

      <div id="manufacturing-tabs">
        <ManufacturingServicesTabs />
      </div>

      <ProductDeliverablesSection />

      <div id="scaling">
        <SectorsServedSection />
      </div>

      

      {/* Request Quote Section */}
      <section id="quote-section" className="py-12 md:py-16 lg:py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Start Your Manufacturing Project?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
              Get in touch with our manufacturing experts to discuss your requirements and receive a customized quote.
            </p>
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-white rounded-full mx-auto"></div>
          </div>

          {/* Quote Request Form */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-center text-emuski-teal-darker">
              Request Quote
            </h3>
            
            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quote-name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    id="quote-name"
                    name="name"
                    value={quoteData.name}
                    onChange={handleInputChange}
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="quote-email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    value={quoteData.email}
                    onChange={handleInputChange}
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quote-company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    id="quote-company"
                    name="company"
                    value={quoteData.company}
                    onChange={handleInputChange}
                    autoComplete="organization"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    value={quoteData.phone}
                    onChange={handleInputChange}
                    autoComplete="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quote-quantity" className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <input
                    type="text"
                    id="quote-quantity"
                    name="quantity"
                    value={quoteData.quantity}
                    onChange={handleInputChange}
                    autoComplete="off"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                    placeholder="e.g., 100 units, 50-200 pieces"
                  />
                </div>
                <div>
                  <label htmlFor="quote-timeline" className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <select
                    id="quote-timeline"
                    name="timeline"
                    value={quoteData.timeline}
                    onChange={handleInputChange}
                    autoComplete="off"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (Within 1 month)</option>
                    <option value="short">Short term (1-3 months)</option>
                    <option value="medium">Medium term (3-6 months)</option>
                    <option value="long">Long term (6+ months)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="project-description" className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                <textarea
                  id="project-description"
                  name="projectDescription"
                  value={quoteData.projectDescription}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent resize-vertical"
                  placeholder="Describe your manufacturing requirements, specifications, materials, and any specific needs..."
                />
              </div>

              {/* File Upload Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attach Files (Optional)
                  <span className="text-xs text-gray-500 ml-2">
                    PDF, DOC, XLS, Images, ZIP - Max 10MB each, {MAX_FILES} files max
                  </span>
                </label>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emuski-teal transition-colors">
                  <input
                    type="file"
                    id="quote-file-upload"
                    multiple
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.gif,.txt,.zip"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="quote-file-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Upload className="h-12 w-12 text-gray-400 mb-3" />
                    <span className="text-gray-600 font-medium mb-2">
                      Click to upload files or drag and drop
                    </span>
                    <span className="text-xs text-gray-500">
                      CAD files, drawings, specifications, RFQ documents, etc.
                    </span>
                  </label>
                </div>

                {/* Upload Error */}
                {uploadError && (
                  <div className="mt-2 flex items-center text-red-600 text-sm">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    {uploadError}
                  </div>
                )}

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">Uploaded Files:</h4>
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                      >
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-emuski-teal-darker" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{file.name}</p>
                            <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className="w-full bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Submitting Quote...</span>
                ) : submitStatus === "success" ? (
                  <span>Quote Submitted Successfully!</span>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Submit Quote Request</span>
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm text-center">
                    Thank you for your quote request! We'll review your requirements and get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm text-center">
                    Sorry, there was an error submitting your quote request. Please try again or contact us directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        compact={true} 
        maxItems={8} 
        showCategories={false}
        usePageSpecific={true}
      />

      <Footer />
    </div>
  );
}