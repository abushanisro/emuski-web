import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Search, Filter, Grid, List, Eye, Download, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

// Helper function to dynamically load industry images
const loadIndustryImages = (industryPath: string, companyName: string) => {
  const basePath = `/assets/indutry-componets/${industryPath}`;
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
    thumbnail: "/assets/indutry-componets/dhigantara - Space/WhatsApp Image 2025-08-28 at 10.34.17 AM.jpeg",
    images: [
      "/assets/indutry-componets/dhigantara - Space/WhatsApp Image 2025-08-28 at 10.34.17 AM.jpeg",
      "/assets/indutry-componets/dhigantara - Space/WhatsApp Image 2025-08-28 at 10.36.22 AM.jpeg", 
      "/assets/indutry-componets/dhigantara - Space/WhatsApp Image 2025-08-28 at 11.05.36 AM.jpeg",
      "/assets/indutry-componets/dhigantara - Space/WhatsApp Image 2025-09-03 at 11.58.16 AM.jpeg",
      "/assets/indutry-componets/dhigantara - Space/WhatsApp Image 2025-09-03 at 11.58.40 AM.jpeg",
      "/assets/indutry-componets/dhigantara - Space/WhatsApp Image 2025-09-03 at 11.58.58 AM.jpeg",
      "/assets/indutry-componets/dhigantara - Space/WhatsApp Image 2025-09-15 at 12.00.26 PM (1).jpeg",
      "/assets/indutry-componets/dhigantara - Space/WhatsApp Image 2025-09-15 at 12.00.26 PM.jpeg"
    ],
    image: "/assets/indutry-componets/dhigantara - Space/WhatsApp Image 2025-08-28 at 10.34.17 AM.jpeg",
    description: "Advanced space technology manufacturing for satellite components and space exploration equipment. Our precision engineering capabilities deliver critical components for space mission applications.",
    tags: ["Space", "Satellite", "Technology", "Precision"]
  },

  // Medical Industry - Forus  
  {
    id: 2,
    title: "Medical Device Manufacturing",
    category: "Medical",
    type: "gallery", 
    thumbnail: "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg",
    images: [
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.07.21 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.07.57 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.08.38 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.09.26 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.10.05 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.10.52 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.11.16 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.11.53 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.12.21 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.13.05 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.13.35 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.14.09 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.14.34 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.15.13 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.15.37 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.16.05 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.16.51 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-28 at 2.07.05 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-09-10 at 2.53.06 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-09-10 at 9.02.28 AM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-10-10 at 3.21.50 PM (1).jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-10-10 at 3.21.50 PM (2).jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-10-10 at 3.21.50 PM (3).jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-10-10 at 3.21.50 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-10-10 at 3.21.51 PM (1).jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-10-10 at 3.21.51 PM (2).jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-10-10 at 3.21.51 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-10-10 at 3.21.52 PM (1).jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-10-10 at 3.21.52 PM (2).jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-10-10 at 3.21.52 PM (3).jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-10-10 at 3.21.52 PM.jpeg",
      "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-10-10 at 3.21.53 PM.jpeg"
    ],
    image: "/assets/indutry-componets/forus - Medical/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg",
    description: "Precision medical device components and healthcare manufacturing solutions. Our expertise ensures compliance with strict medical industry standards and regulatory requirements.",
    tags: ["Medical", "Healthcare", "Devices", "Compliance"]
  },

  // Aerospace Industry - Kadet
  {
    id: 3,
    title: "Aerospace Engineering Components",
    category: "Aerospace",
    type: "gallery",
    thumbnail: "/assets/indutry-componets/kadet - Aerospace/WhatsApp Image 2025-08-26 at 11.04.27 AM.jpeg",
    images: [
      "/assets/indutry-componets/kadet - Aerospace/WhatsApp Image 2025-08-26 at 11.04.27 AM.jpeg",
      "/assets/indutry-componets/kadet - Aerospace/WhatsApp Image 2025-08-27 at 1.23.28 PM.jpeg",
      "/assets/indutry-componets/kadet - Aerospace/WhatsApp Image 2025-08-27 at 7.40.06 PM.jpeg",
      "/assets/indutry-componets/kadet - Aerospace/WhatsApp Image 2025-08-28 at 10.20.42 AM.jpeg",
      "/assets/indutry-componets/kadet - Aerospace/WhatsApp Image 2025-08-28 at 10.33.21 AM.jpeg",
      "/assets/indutry-componets/kadet - Aerospace/WhatsApp Image 2025-08-28 at 12.35.54 AM.jpeg"
    ],
    image: "/assets/indutry-componets/kadet - Aerospace/WhatsApp Image 2025-08-26 at 11.04.27 AM.jpeg",
    description: "Aerospace engineering components and aviation manufacturing expertise. Our capabilities deliver critical aerospace components meeting stringent aviation industry standards.",
    tags: ["Aerospace", "Aviation", "Engineering", "Critical"]
  },

  // Automotive Industry - Moon Rider
  {
    id: 4,
    title: "Automotive Manufacturing",
    category: "Automotive",
    type: "gallery",
    thumbnail: "/assets/indutry-componets/moon rider - Automotive/WhatsApp Image 2025-09-07 at 1.14.42 PM.jpeg",
    images: [
      "/assets/indutry-componets/moon rider - Automotive/WhatsApp Image 2025-09-07 at 1.14.42 PM.jpeg"
    ],
    image: "/assets/indutry-componets/moon rider - Automotive/WhatsApp Image 2025-09-07 at 1.14.42 PM.jpeg", 
    description: "Automotive manufacturing components and vehicle systems engineering. Our expertise in automotive manufacturing delivers precision vehicle component production.",
    tags: ["Automotive", "Vehicle", "Systems", "Manufacturing"]
  },

  // Defense Industry - Tonbo
  {
    id: 5,
    title: "Defense Technology Solutions",
    category: "Defense",
    type: "gallery",
    thumbnail: "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.45 PM (1).jpeg",
    images: [
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.45 PM (1).jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.45 PM (2).jpeg", 
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.45 PM.jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.46 PM (1).jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.46 PM (2).jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.46 PM (3).jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.46 PM.jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.47 PM (1).jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.47 PM (2).jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.47 PM (3).jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.47 PM.jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.48 PM (1).jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.48 PM (2).jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.48 PM.jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.49 PM (1).jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.49 PM (2).jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.49 PM (3).jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.49 PM.jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.50 PM (1).jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.50 PM (2).jpeg",
      "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.50 PM.jpeg"
    ],
    image: "/assets/indutry-componets/tonbo - Defense/WhatsApp Image 2025-10-10 at 3.25.45 PM (1).jpeg",
    description: "Defense technology components and military-grade manufacturing solutions. Our capabilities deliver mission-critical components meeting stringent defense standards.",
    tags: ["Defense", "Military", "Technology", "Critical"]
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
  }, [selectedImage, currentImageIndex, currentGalleryIndex]);

  // Set SEO meta tags for gallery page
  useEffect(() => {
    document.title = "EMUSKI Component Gallery - Manufacturing Excellence Showcase";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore EMUSKI\'s comprehensive gallery of precision manufacturing components, engineering solutions, and production excellence. Showcasing automotive, aerospace, and industrial manufacturing capabilities.');
    }
  }, []);

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

  const navigateGallery = (direction: number) => {
    if (!selectedImage || !selectedImage.images) return;
    
    const newIndex = currentGalleryIndex + direction;
    if (newIndex >= 0 && newIndex < selectedImage.images.length) {
      setCurrentGalleryIndex(newIndex);
    }
  };

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
      <section className="relative bg-emuski-teal-darker text-white overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 mt-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight" style={{color: 'rgb(18, 26, 33)'}}>
              Industry Portfolio Gallery
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Explore EMUSKI's comprehensive manufacturing solutions across Space, Medical, Aerospace, Automotive, and Defense industries. Discover our partnerships and precision engineering capabilities.
            </p>
            <div className="h-1 w-24 bg-white rounded-full mx-auto"></div>
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
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
              <img
                src={getCurrentImage()}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain"
              />
              
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