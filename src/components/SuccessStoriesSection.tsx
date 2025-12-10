import Link from "next/link";
import { Clock, User } from "lucide-react";
import { Card } from "./ui/card";

interface CaseStudy {
  title: string;
  client: string;
  service: string;
  excerpt: string;
  image: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
  slug: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Accelerating Innovation: 500 Components in 30 Days",
    client: "Opto Imaging Pioneer",
    service: "NPD Center – End-to-End Manufacturing & Assembly",
    excerpt: "A leading opto imaging company needed 500 intricate mechanical components and 10 complete devices within one month. They needed a partner to manage the entire supply chain, manufacturing, and assembly under extreme time pressure.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&q=80",
    tags: ["Case Study", "NPD Center", "Manufacturing"],
    readTime: "5 min read",
    slug: "opto-imaging-pioneer-500-components-30-days"
  },
  {
    title: "Zero-Zero Tolerance: Engineering Solutions for Defense Criticality",
    client: "Defense Sector Manufacturer",
    service: "NPD Center – Precision Manufacturing & R&D",
    excerpt: "A defense manufacturer needed components with incredibly tight tolerances for turret rotation, receivers, and barrel mount blocks. Previous suppliers failed to meet critical specifications before and after anodization, halting final assembly.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    tags: ["Case Study", "Defense", "Precision Engineering"],
    readTime: "4 min read",
    slug: "defense-zero-zero-tolerance-engineering"
  },
  {
    title: "Expert Engineer Support – Extending Capabilities",
    client: "Global Aerospace OEM",
    service: "Expert Engineer Support",
    excerpt: "Resource constraints were causing project delays and complex quotes went unevaluated. Our embedded engineers became their extended team.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80",
    tags: ["Case Study", "Engineering Services", "Aerospace"],
    readTime: "5 min read",
    slug: "aerospace-oem-expert-engineer-support"
  }
];

export function SuccessStoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <div className="h-1 w-12 bg-emuski-teal-dark rounded"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <Link key={index} href={`/blog/${study.slug}`}>
                <Card className="group overflow-hidden bg-white border-gray-200 hover:border-emuski-teal/50 transition-all duration-300 h-full shadow-sm hover:shadow-md cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-end mb-3">
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{study.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emuski-teal-dark transition-colors line-clamp-2">
                      {study.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {study.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">EMUSKI Team | Case Study</span>
                      </div>

                      <div className="flex items-center text-emuski-teal-darker font-medium text-sm">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
