import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FAQSection } from "../components/FAQSection";
import { TechnicalSpecsSection } from "../components/TechnicalSpecsSection";
import { ManufacturingServicesTabs } from "../components/ManufacturingServicesTabs";
import ProductDeliverablesSection from "../components/ProductDeliverablesSection";
import SectorsServedSection from "../components/SectorsServedSection";




import { PartManufacturingServices } from "../components/PartManufacturingServices";
import ManufacturingExcellenceSection from "../components/ManufacturingExcellenceSection";
import { SolutionsOfferedSection } from "../components/SolutionsOfferedSection";
import { Upload, X, FileText, AlertTriangle, Send } from "lucide-react";



export default function ManufacturingServices() {
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
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero/manufaturing.svg" alt="Manufacturing background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-32">
          <div className="max-w-3xl space-y-6 animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Advanced Manufacturing Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed" style={{ animationDelay: '0.2s' }}>
              From rapid prototyping and on-demand production to full-scale OEM manufacturing, we provide agile, precise, and scalable solutions to bring your products to market faster.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pt-4" style={{ animationDelay: '0.4s' }}>
              <button className="bg-emuski-teal-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-emuski-teal-darker transition-colors">
                Get a Quote
              </button>
              <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      

      

      

      <PartManufacturingServices />

      <ManufacturingExcellenceSection />

      <SolutionsOfferedSection />

      

      <ManufacturingServicesTabs />

      <ProductDeliverablesSection />

      <SectorsServedSection />

      {/* Technical Capabilities Section */}
      <TechnicalSpecsSection focus="capabilities" compact={true} showTitle={true} />

      {/* Request Quote Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
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