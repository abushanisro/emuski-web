'use client'

import { useState, useEffect, useCallback } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Search, Filter, Grid, List, Eye, Download, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Helper function to dynamically load industry images
const loadIndustryImages = (industryPath: string, companyName: string) => {
  const basePath = `/assets/industry-components/${industryPath}`;
  // This would need to be populated dynamically in a real implementation
  // For now, we'll use placeholder structure
  return [];
};

// Industry-based gallery structure
const industryData = {
  "Space": {
    description: "Advanced space technology components and satellite manufacturing solutions",
    color: "bg-emuski-teal"
  },
  "Medical": {
    description: "Precision medical device components and healthcare manufacturing solutions",
    color: "bg-emuski-teal"
  },
  "Aerospace": {
    description: "Aerospace engineering components and aviation manufacturing expertise",
    color: "bg-emuski-teal"
  },
  "Automotive": {
    description: "Automotive manufacturing components and vehicle systems engineering", 
    color: "bg-emuski-teal"
  },
  "Defense": {
    description: "Defense technology components and military-grade manufacturing solutions",
    color: "bg-emuski-teal"
  },
  "Industrial Components": {
    description: "High-quality industrial components for machinery, equipment and large-scale manufacturing applications",
    color: "bg-emuski-teal"
  }
};

// Updated gallery items with industry categorization
const galleryItems = [
  // Space Industry - Dhigantara
  {
    id: 1,
    title: "Space Technology Components",
    category: "Space",
    type: "gallery",
    thumbnail:  "/assets/industry-components/space-satellite-manufacturing/space-satellite-component-4.jpeg",
    images: [
      "/assets/industry-components/space-satellite-manufacturing/space-satellite-component-4.jpeg",
      "/assets/industry-components/space-satellite-manufacturing/space-satellite-component-5.jpeg",
      "/assets/industry-components/space-satellite-manufacturing/space-satellite-component-7.jpeg", 
      "/assets/industry-components/space-satellite-manufacturing/space-satellite-component-1.jpeg",
      "/assets/industry-components/space-satellite-manufacturing/space-satellite-component-2.jpeg",
      "/assets/industry-components/space-satellite-manufacturing/space-satellite-component-6.jpeg",
      "/assets/industry-components/space-satellite-manufacturing/space-satellite-component-3.jpeg",
      "/assets/industry-components/space-satellite-manufacturing/space-satellite-component-8.jpeg"
    ],
    image: "/assets/industry-components/space-satellite-manufacturing/space-satellite-component-1.jpeg",
    description: "Advanced space technology manufacturing for satellite components and space exploration equipment. Our precision engineering capabilities deliver critical components for space mission applications.",
    tags: ["Space", "Satellite", "Technology", "Precision"]
  },

  // Medical Industry - Forus  
  {
    id: 2,
    title: "Medical Device Manufacturing",
    category: "Medical",
    type: "gallery", 
    thumbnail: "/assets/industry-components/medical-device-manufacturing/medical-device-component-11.jpeg",
    images: [
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-11.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-21.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-3.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-4.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-5.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-6.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-7.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-8.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-9.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-10.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-1.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-12.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-13.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-14.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-15.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-16.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-17.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-18.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-19.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-20.jpeg",
      "/assets/industry-components/medical-device-manufacturing/medical-device-component-2.jpeg",
    ],
    image: "/assets/industry-components/medical-device-manufacturing/medical-device-component-1.jpeg",
    description: "Precision medical device components and healthcare manufacturing solutions. Our expertise ensures compliance with strict medical industry standards and regulatory requirements.",
    tags: ["Medical", "Healthcare", "Devices", "Compliance"]
  },

  // Aerospace Industry - Kadet
  {
    id: 3,
    title: "Aerospace Engineering Components",
    category: "Aerospace",
    type: "gallery",
    thumbnail: "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-1.jpeg",
    images: [
      "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-1.jpeg",
      "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-2.jpeg",
      "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-3.jpeg",
      "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-4.jpeg",
      "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-5.jpeg",
      "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-6.jpeg"
    ],
    image: "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-1.jpeg",
    description: "Aerospace engineering components and aviation manufacturing expertise. Our capabilities deliver critical aerospace components meeting stringent aviation industry standards.",
    tags: ["Aerospace", "Aviation", "Engineering", "Critical"]
  },

  // Automotive Industry - Moon Rider
  {
    id: 4,
    title: "Automotive Manufacturing",
    category: "Automotive",
    type: "gallery",
    thumbnail: "/assets/industry-components/automotive-component-manufacturing/automotive-component-3.jpg",
    images: [
      "/assets/industry-components/automotive-component-manufacturing/automotive-component-3.jpg",
      "/assets/industry-components/automotive-component-manufacturing/automotive-component-2.jpg",
      "/assets/industry-components/automotive-component-manufacturing/automotive-component-1.jpeg",
    ],
    image: "/assets/industry-components/automotive-component-manufacturing/automotive-component-1.jpeg", 
    description: "Automotive manufacturing components and vehicle systems engineering. Our expertise in automotive manufacturing delivers precision vehicle component production.",
    tags: ["Automotive", "Vehicle", "Systems", "Manufacturing"]
  },

  // Defense Industry - Tonbo
  {
    id: 5,
    title: "Defense Technology Solutions",
    category: "Defense",
    type: "gallery",
    thumbnail: "/assets/industry-components/defense-technology-manufacturing/defense-component-1.jpeg",
    images: [
      "/assets/industry-components/defense-technology-manufacturing/defense-component-1.jpeg",
      "/assets/industry-components/defense-technology-manufacturing/defense-component-2.jpeg", 
      "/assets/industry-components/defense-technology-manufacturing/defense-component-3.jpeg",
      "/assets/industry-components/defense-technology-manufacturing/defense-component-4.jpeg",
      "/assets/industry-components/defense-technology-manufacturing/defense-component-5.jpeg",
      "/assets/industry-components/defense-technology-manufacturing/defense-component-6.jpeg",
    ],
    image: "/assets/industry-components/defense-technology-manufacturing/defense-component-1.jpeg",
    description: "Defense technology components and military-grade manufacturing solutions. Our capabilities deliver mission-critical components meeting stringent defense standards.",
    tags: ["Defense", "Military", "Technology", "Critical"]
  },

  //Industrial components
  {
    id: 6,
    title: "Industrial Components",
    category: "Industrial",
    type: "gallery",
    thumbnail: "/assets/industry-components/industrial-components/industrial-component-1.jpeg",
    images: [
      "/assets/industry-components/industrial-components/industrial-component-1.jpg",
      "/assets/industry-components/industrial-components/industrial-component-2.jpg",
      "/assets/industry-components/industrial-components/industrial-component-3.jpg",
      "/assets/industry-components/industrial-components/industrial-component-4.jpg",
      "/assets/industry-components/industrial-components/industrial-component-5.jpg",
      "/assets/industry-components/industrial-components/industrial-component-6.jpg",
      "/assets/industry-components/industrial-components/industrial-component-7.jpg",
      "/assets/industry-components/industrial-components/industrial-component-8.jpg",
      "/assets/industry-components/industrial-components/industrial-component-9.jpg",
      "/assets/industry-components/industrial-components/industrial-component-10.jpg"
    
    ],
    image: "/assets/industry-components/industrial-components/industrial-component-1.jpeg",
    description: "Industrial components and manufacturing solutions. Our capabilities deliver high-performance components meeting stringent industrial standards.",
    tags: ["Industrial", "Manufacturing", "Components", "Precision"]
    
  }
];

// Industry categories for tabbed interface
const industryCategories = ["All", "Space", "Medical", "Aerospace", "Automotive", "Defense"];

export const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const openLightbox = (item: typeof galleryItems[0], index: number) => {
    setSelectedImage(item);
    setCurrentImageIndex(index);
    setCurrentGalleryIndex(0); // Start with first image in gallery
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
    setCurrentGalleryIndex(0);
  };

  const navigateGallery = useCallback((direction: number) => {
    if (!selectedImage || !selectedImage.images) return;

    const newIndex = currentGalleryIndex + direction;
    if (newIndex >= 0 && newIndex < selectedImage.images.length) {
      setCurrentGalleryIndex(newIndex);
    }
  }, [selectedImage, currentGalleryIndex]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowLeft') {
          navigateGallery(-1);
        } else if (e.key === 'ArrowRight') {
          navigateGallery(1);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex, currentGalleryIndex, navigateGallery]);

  // Set SEO meta tags for gallery page
  useEffect(() => {
    document.title = "EMUSKI Component Gallery - Manufacturing Excellence Showcase";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore EMUSKI\'s comprehensive gallery of precision manufacturing components, engineering solutions, and production excellence. Showcasing automotive, aerospace, and industrial manufacturing capabilities.');
    }
  }, []);

  // Filter items based on search term and industry
  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = selectedIndustry === "All" || item.category === selectedIndustry;
    
    return matchesSearch && matchesIndustry;
  });

  const getCurrentImage = () => {
    if (!selectedImage) return "";
    if (selectedImage.type === "gallery" && selectedImage.images) {
      return selectedImage.images[currentGalleryIndex];
    }
    return selectedImage.image;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 border-b border-border/30 overflow-hidden" style={{backgroundColor: 'rgb(18, 26, 33)'}}>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-4 sm:pt-5 md:pt-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Category Badge */}
                <div className="flex justify-center">
                  <span className="text-emuski-teal text-xs sm:text-sm font-semibold tracking-wider uppercase">
                    Our Portfolio
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2">
                  Industry Portfolio Gallery
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-2">
                  Explore EMUSKI's comprehensive manufacturing solutions across Space, Medical, Aerospace, Automotive, and Defense industries. Discover our partnerships and precision engineering capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 sm:px-6 py-20">

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          Showing {galleryItems.length} industry partnerships
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(item, index)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={`${item.title} - ${item.category} Manufacturing Component`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">
                      {item.type === "gallery" ? `View ${item.images?.length || 1} Images` : "Click to View"}
                    </span>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 text-white text-xs font-semibold rounded-sm ${
                    industryData[item.category as keyof typeof industryData]?.color || "bg-emuski-teal"
                  }`}>
                    {item.category}
                  </span>
                </div>
                
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emuski-teal-darker transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors text-xl sm:text-2xl font-bold shadow-lg backdrop-blur-sm border border-white/20 w-12 h-12 flex items-center justify-center"
            >
              ×
            </button>

            {/* Gallery Navigation */}
            {selectedImage.type === "gallery" && selectedImage.images && selectedImage.images.length > 1 && (
              <>
                <button
                  onClick={() => navigateGallery(-1)}
                  disabled={currentGalleryIndex === 0}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors shadow-lg backdrop-blur-sm border border-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => navigateGallery(1)}
                  disabled={currentGalleryIndex === selectedImage.images.length - 1}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors shadow-lg backdrop-blur-sm border border-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 left-4 z-30 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
                  {currentGalleryIndex + 1} / {selectedImage.images.length}
                </div>
              </>
            )}

            {/* Image Content */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative w-full" style={{ minHeight: '50vh' }}>
                <Image
                  src={getCurrentImage()}
                  alt={`${selectedImage.title} - Full Resolution`}
                  width={1600}
                  height={1200}
                  className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain"
                  quality={90}
                  priority
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`px-3 py-1 text-white text-xs sm:text-sm font-medium rounded-full ${
                      industryData[selectedImage.category as keyof typeof industryData]?.color || "bg-emuski-teal"
                    }`}>
                      {selectedImage.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
                <p className="text-gray-700 mb-4">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};