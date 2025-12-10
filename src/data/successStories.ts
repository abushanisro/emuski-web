export interface SuccessStory {
  id: number;
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  excerpt: string;
  heroImage: string;
  readTime: string;
  publishDate: string;
  challenge: {
    title: string;
    description: string;
    keyPoints: string[];
    image?: string;
  };
  solution: {
    title: string;
    description: string;
    approach: string[];
    image?: string;
  };
  outcome: {
    title: string;
    description: string;
    results: string[];
    testimonial?: {
      quote: string;
      author: string;
      position: string;
    };
    image?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  tags: string[];
  relatedStories?: number[];
}

export const successStories: SuccessStory[] = [
  {
    id: 1,
    slug: "opto-imaging-pioneer-500-components-30-days",
    title: "Accelerating Innovation: 500 Components in 30 Days",
    client: "Opto Imaging Pioneer",
    industry: "Opto Imaging Technology",
    service: "NPD Center – End-to-End Manufacturing & Assembly",
    excerpt: "A leading opto imaging company needed 500 intricate mechanical components and 10 complete devices within one month. They needed a partner to manage the entire supply chain, manufacturing, and assembly under extreme time pressure.",
    heroImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&q=80",
    readTime: "5 min read",
    publishDate: "2025-01-08",
    challenge: {
      title: "The Challenge",
      description: "The client required the complete end-to-end building and assembly of a new device. This assembly was exceptionally complex, involving approximately 500 intricate mechanical components. Their goal was ambitious: to produce a batch of 10 finished devices and launch within a critical one-month timeframe.",
      keyPoints: [
        "Complete end-to-end building and assembly of a new cutting-edge device",
        "Approximately 500 intricate mechanical components requiring precision manufacturing",
        "Ambitious goal: produce 10 finished devices within one month",
        "Needed a partner to manage entire supply chain under extreme time pressure",
        "Manufacturing and assembly process had to run simultaneously to meet deadline"
      ],
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80"
    },
    solution: {
      title: "How We Helped",
      description: "The client approached EMUSKI's NPD Center for this critical task. Leveraging our comprehensive NPD capabilities, we took on the entire project. Our focus was on manufacturing and delivering all 500 mechanical components and integrating them to build the complete assembly.",
      approach: [
        "Leveraged EMUSKI's comprehensive NPD Center capabilities to take on the entire project",
        "Managed complete supply chain orchestration for all 500 mechanical components",
        "Executed precision manufacturing with micron-level tolerances for optical components",
        "Performed integrated assembly and testing to ensure fully functioning devices",
        "Implemented 24/7 production scheduling to meet the demanding deadline",
        "Strategic process ensured the client could get into a faster market"
      ],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
    },
    outcome: {
      title: "Outcome",
      description: "We successfully manufactured all required components and completed the entire assembly process. The project resulted in the delivery of 10 fully functioning devices within the demanding one-month deadline.",
      results: [
        "Successfully manufactured all 500 required components on time and within spec",
        "Delivered 10 fully functioning devices within the one-month deadline",
        "Achieved 99.8% first-pass yield on all components",
        "Accelerated market entry by 2-3 months versus alternative suppliers",
        "Proved ability to manage complex, multi-component projects and drastically reduce time-to-market"
      ],
      testimonial: {
        quote: "EMUSKI's NPD Center demonstrated extraordinary capability in managing this complex, time-critical project. Their expertise in precision manufacturing, combined with exceptional project management, enabled us to achieve what we thought was impossible.",
        author: "Engineering Director",
        position: "Opto Imaging Pioneer"
      },
      image: "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?w=1200&q=80"
    },
    metrics: [
      { label: "Components", value: "500" },
      { label: "Devices Delivered", value: "10" },
      { label: "Timeline", value: "30 Days" },
      { label: "First-Pass Yield", value: "99.8%" }
    ],
    tags: ["NPD Center", "Manufacturing", "Assembly", "Opto Imaging", "Precision Engineering"],
    relatedStories: [2, 3]
  },
  {
    id: 2,
    slug: "defense-zero-zero-tolerance-engineering",
    title: "Zero-Zero Tolerance: Engineering Solutions for Defense Criticality",
    client: "Defense Sector Manufacturer",
    industry: "Defense & Aerospace",
    service: "NPD Center – Precision Manufacturing & R&D",
    excerpt: "A defense manufacturer needed components with incredibly tight tolerances for turret rotation, receivers, and barrel mount blocks. Previous suppliers failed to meet critical specifications before and after anodization, halting final assembly.",
    heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    readTime: "4 min read",
    publishDate: "2025-01-05",
    challenge: {
      title: "The Challenge",
      description: "The client was developing a crucial device that included components for turret rotation, receivers and barrel mount blocks. The primary challenge lay in achieving and maintaining incredibly tight criticality and tolerance levels throughout the manufacturing process.",
      keyPoints: [
        "Manufacturing sensitive and mission-critical hardware for defense applications",
        "Components required for turret rotation, receivers, and barrel mount blocks",
        "Incredibly tight criticality and tolerance levels needed throughout manufacturing",
        "Previous suppliers failed to consistently meet required tolerances",
        "Critical specifications before and after anodization process were inconsistent",
        "Tolerance failures were halting the final dovetail assembly"
      ],
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80"
    },
    solution: {
      title: "How We Helped",
      description: "EMUSKI's NPD Center was approached to resolve this persistent tolerance issue. We accepted the challenge, understanding that failure was not an option for such a critical application.",
      approach: [
        "Performed extensive Research and Development (R&D) focused on the anodization process",
        "Measured anodization thickness during R&D phase to understand exact dimensional impact",
        "Conducted detailed analysis to determine optimal anodization thickness values",
        "Froze the right values for component tolerance before final plating",
        "Implemented deep process control to ensure part integrity at every stage",
        "Applied precise manufacturing and process-control methodology throughout production"
      ],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
    },
    outcome: {
      title: "Outcome",
      description: "By implementing our precise manufacturing and process-control methodology, combined with crucial R&D on the anodization process, we successfully manufactured components that could be mated in the final assembly with zero-zero tolerance.",
      results: [
        "Successfully manufactured components with zero-zero tolerance achievement",
        "Eliminated production failures that plagued previous suppliers",
        "Enabled reliable delivery of high-stakes defense device",
        "Mastered critical tolerances required before and after anodization",
        "Ensured perfect final assembly every time",
        "Established repeatable process for future critical defense components"
      ],
      testimonial: {
        quote: "EMUSKI successfully delivered where others had failed, mastering the critical tolerances required before and after anodization to ensure our final assembly was perfect.",
        author: "Manufacturing Director",
        position: "Defense Sector Manufacturer"
      },
      image: "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?w=1200&q=80"
    },
    metrics: [
      { label: "Tolerance Achievement", value: "Zero-Zero" },
      { label: "Failure Rate", value: "0%" },
      { label: "Process Control", value: "100%" },
      { label: "Assembly Success", value: "Perfect" }
    ],
    tags: ["Defense", "Precision Engineering", "R&D", "Anodization", "Tolerance Control"],
    relatedStories: [1, 3]
  },
  {
    id: 3,
    slug: "aerospace-oem-expert-engineer-support",
    title: "Expert Engineer Support – Extending Capabilities",
    client: "Global Aerospace OEM",
    industry: "Aerospace & Defense",
    service: "Expert Engineer Support",
    excerpt: "Resource constraints were causing project delays and complex quotes went unevaluated. Our embedded engineers became their extended team.",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80",
    readTime: "5 min read",
    publishDate: "2025-01-03",
    challenge: {
      title: "The Challenge",
      description: "The client lacked specialized cost engineers to evaluate complex supplier quotes and was facing project delays due to resource constraints. Complex technical evaluations and supplier quotations were piling up without proper assessment.",
      keyPoints: [
        "Lacked specialized cost engineers for supplier quote evaluation",
        "Facing significant project delays due to resource constraints",
        "Complex supplier quotes going unevaluated",
        "Technical evaluations needed for critical supplier decisions",
        "Design validation processes slowing down without expert support",
        "Risk of cost overruns and poor supplier selection"
      ],
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80"
    },
    solution: {
      title: "How We Helped",
      description: "EMUSKI deployed should-cost engineers and VAVE specialists to integrate seamlessly with the client's team. Our experts became an extension of their engineering department, providing critical expertise exactly when needed.",
      approach: [
        "Deployed should-cost engineers and VAVE specialists to integrate with client team",
        "Built detailed cost models for accurate supplier quotation validation",
        "Validated supplier quotations against industry benchmarks and should-cost analysis",
        "Assisted with comprehensive supplier technical evaluations",
        "Supported design validation processes with engineering expertise",
        "Provided ongoing consultation for strategic sourcing decisions"
      ],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
    },
    outcome: {
      title: "Outcome",
      description: "By supplementing the client's resources with specialized engineering expertise, we accelerated their project timelines and identified significant cost-saving opportunities across their supply chain.",
      results: [
        "Reduced sourcing cycle time by 30% through expert evaluation",
        "Identified cost-saving opportunities worth $2M annually",
        "Accelerated project timelines by supplementing client resources",
        "Improved supplier selection quality and negotiation outcomes",
        "Established robust cost models for future procurement",
        "Enhanced client team capabilities through knowledge transfer"
      ],
      testimonial: {
        quote: "EMUSKI's embedded engineers seamlessly integrated with our team, providing the specialized expertise we needed exactly when we needed it. Their should-cost analysis saved us millions.",
        author: "Procurement Director",
        position: "Global Aerospace OEM"
      },
      image: "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?w=1200&q=80"
    },
    metrics: [
      { label: "Cycle Time Reduction", value: "30%" },
      { label: "Annual Savings", value: "$2M" },
      { label: "Project Acceleration", value: "Significant" },
      { label: "Quote Evaluations", value: "100%" }
    ],
    tags: ["Aerospace", "Engineering Support", "Should-Cost", "VAVE", "Supplier Evaluation"],
    relatedStories: [1, 2]
  }
];

export const getSuccessStoryBySlug = (slug: string): SuccessStory | undefined => {
  return successStories.find(story => story.slug === slug);
};

export const getRelatedSuccessStories = (currentId: number, relatedIds?: number[]): SuccessStory[] => {
  if (!relatedIds || relatedIds.length === 0) {
    return successStories
      .filter(story => story.id !== currentId)
      .slice(0, 3);
  }

  return successStories.filter(story => relatedIds.includes(story.id));
};
