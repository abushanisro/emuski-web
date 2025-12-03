// Technical Specifications and Performance Data for Engineering Customers

export interface TechnicalSpec {
  parameter: string;
  value: string | number;
  unit?: string;
  tolerance?: string;
  standard?: string;
  notes?: string;
}

export interface CapabilityMatrix {
  process: string;
  materials: string[];
  tolerances: TechnicalSpec[];
  surfaceFinish: TechnicalSpec[];
  dimensions: TechnicalSpec[];
  certifications: string[];
}

// CNC Machining Technical Specifications
export const CNC_MACHINING_SPECS: CapabilityMatrix = {
  process: "CNC Machining",
  materials: [
    "Aluminum 6061-T6, 7075-T6, 2024-T3",
    "Stainless Steel 304, 316, 17-4 PH",
    "Carbon Steel 1018, 1045, 4140",
    "Titanium Ti-6Al-4V (Grade 5)",
    "Inconel 718, Hastelloy X",
    "Brass C360, Copper C101",
    "Engineering Plastics: PEEK, POM, Nylon 6/6"
  ],
  tolerances: [
    { parameter: "Linear Dimensional Accuracy", value: "±0.0025", unit: "mm", standard: "ISO 2768-m" },
    { parameter: "Angular Tolerance", value: "±0.1", unit: "°", standard: "ISO 2768-m" },
    { parameter: "Geometric Tolerance (GD&T)", value: "±0.005", unit: "mm", standard: "ASME Y14.5" },
    { parameter: "Positional Accuracy", value: "±0.0025", unit: "mm", standard: "ISO 1101" },
    { parameter: "Straightness", value: "0.005", unit: "mm/100mm", standard: "ISO 1101" },
    { parameter: "Flatness", value: "0.005", unit: "mm", standard: "ISO 1101" },
    { parameter: "Cylindricity", value: "0.0025", unit: "mm", standard: "ISO 1101" }
  ],
  surfaceFinish: [
    { parameter: "Standard Machined", value: "3.2", unit: "µm Ra", standard: "ISO 4287" },
    { parameter: "Fine Machined", value: "1.6", unit: "µm Ra", standard: "ISO 4287" },
    { parameter: "Precision Machined", value: "0.8", unit: "µm Ra", standard: "ISO 4287" },
    { parameter: "Ultra-fine Machined", value: "0.4", unit: "µm Ra", standard: "ISO 4287" },
    { parameter: "Mirror Finish", value: "0.05", unit: "µm Ra", standard: "ISO 4287" }
  ],
  dimensions: [
    { parameter: "Maximum Part Size", value: "1200 x 800 x 600", unit: "mm" },
    { parameter: "Minimum Feature Size", value: "0.1", unit: "mm diameter" },
    { parameter: "Maximum Length/Diameter Ratio", value: "20:1", unit: "" },
    { parameter: "Minimum Wall Thickness", value: "0.2", unit: "mm" }
  ],
  certifications: ["ISO 9001:2015", "AS9100D", "IATF 16949", "ISO 14001:2015"]
};

// Injection Molding Technical Specifications
export const INJECTION_MOLDING_SPECS: CapabilityMatrix = {
  process: "Injection Molding",
  materials: [
    "ABS (Acrylonitrile Butadiene Styrene)",
    "PC (Polycarbonate)",
    "PA6/PA66 (Nylon 6/66)",
    "POM (Polyoxymethylene/Acetal)",
    "PEEK (Polyetheretherketone)",
    "PPS (Polyphenylene Sulfide)",
    "PTFE (Polytetrafluoroethylene)",
    "TPU (Thermoplastic Urethane)"
  ],
  tolerances: [
    { parameter: "Linear Tolerance", value: "±0.05", unit: "mm", standard: "ISO 20457" },
    { parameter: "Angular Tolerance", value: "±0.5", unit: "°", standard: "ISO 20457" },
    { parameter: "Draft Angle", value: "0.5-2", unit: "°", notes: "Minimum recommended" },
    { parameter: "Wall Thickness Variation", value: "±10", unit: "%", standard: "ISO 294-4" }
  ],
  surfaceFinish: [
    { parameter: "Standard Finish", value: "VDI 24-30", unit: "VDI", standard: "VDI 3400" },
    { parameter: "Smooth Finish", value: "VDI 15-21", unit: "VDI", standard: "VDI 3400" },
    { parameter: "Polished Finish", value: "VDI 12-18", unit: "VDI", standard: "VDI 3400" },
    { parameter: "Mirror Finish", value: "VDI 3-12", unit: "VDI", standard: "VDI 3400" }
  ],
  dimensions: [
    { parameter: "Maximum Part Size", value: "600 x 400 x 200", unit: "mm" },
    { parameter: "Minimum Wall Thickness", value: "0.3", unit: "mm" },
    { parameter: "Maximum Wall Thickness", value: "25", unit: "mm" },
    { parameter: "Maximum Clamp Force", value: "1200", unit: "tons" }
  ],
  certifications: ["ISO 9001:2015", "ISO 14855", "FDA CFR 177", "USP Class VI"]
};

// Sheet Metal Fabrication Specifications
export const SHEET_METAL_SPECS: CapabilityMatrix = {
  process: "Sheet Metal Fabrication",
  materials: [
    "Aluminum 5052-H32, 6061-T6",
    "Stainless Steel 304, 316L, 430",
    "Carbon Steel CRS, HRS, Galvanized",
    "Copper C101, C110",
    "Brass 260, 360"
  ],
  tolerances: [
    { parameter: "Linear Tolerance", value: "±0.1", unit: "mm", standard: "ISO 2768-m" },
    { parameter: "Angular Tolerance", value: "±1", unit: "°", standard: "ISO 2768-m" },
    { parameter: "Bend Tolerance", value: "±0.5", unit: "°", standard: "ISO 2768-m" },
    { parameter: "Hole Position", value: "±0.05", unit: "mm", standard: "ISO 286-2" }
  ],
  surfaceFinish: [
    { parameter: "As-formed", value: "6.3", unit: "µm Ra", standard: "ISO 4287" },
    { parameter: "Deburred", value: "3.2", unit: "µm Ra", standard: "ISO 4287" },
    { parameter: "Ground", value: "1.6", unit: "µm Ra", standard: "ISO 4287" }
  ],
  dimensions: [
    { parameter: "Maximum Sheet Size", value: "3000 x 1500", unit: "mm" },
    { parameter: "Thickness Range", value: "0.5-12", unit: "mm" },
    { parameter: "Minimum Bend Radius", value: "1x thickness", unit: "mm" },
    { parameter: "Maximum Bend Angle", value: "165", unit: "°" }
  ],
  certifications: ["ISO 9001:2015", "AWS D1.1", "EN 1090", "ASME IX"]
};

// Performance Metrics and KPIs
export const PERFORMANCE_METRICS = {
  businessMetrics: [
    { metric: "Industries Served", value: 15, unit: "+", period: "Active Verticals" },
    { metric: "Global Clients", value: 75, unit: "+", period: "International Partners" },
    { metric: "Engineering Projects", value: 120, unit: "+", period: "Individual Projects" },
    { metric: "Components Manufactured", value: 2500, unit: "+", period: "Unique Parts Delivered" }
  ],
  quality: [
    { metric: "First Pass Yield", value: 99.5, unit: "%", period: "2024 YTD" },
    { metric: "Defect Rate (PPM)", value: 15, unit: "PPM", period: "2024 YTD" },
    { metric: "Customer Quality Rating", value: 4.9, unit: "/5.0", period: "2024 Average" },
    { metric: "Supplier Quality Rating", value: 98.2, unit: "%", period: "2024 YTD" }
  ],
  delivery: [
    { metric: "On-Time Delivery", value: 98.7, unit: "%", period: "2024 YTD" },
    { metric: "Lead Time - Prototyping", value: 3.2, unit: "days", period: "Average" },
    { metric: "Lead Time - Production (1K units)", value: 12.5, unit: "days", period: "Average" },
    { metric: "Setup Time Reduction", value: 35, unit: "% vs 2023", period: "2024 YTD" }
  ],
  efficiency: [
    { metric: "Overall Equipment Effectiveness (OEE)", value: 87.3, unit: "%", period: "2024 YTD" },
    { metric: "Machine Utilization", value: 92.1, unit: "%", period: "2024 YTD" },
    { metric: "Cycle Time Improvement", value: 28, unit: "% vs baseline", period: "2024 YTD" },
    { metric: "Energy Consumption per Unit", value: -15.2, unit: "% reduction", period: "2024 vs 2023" }
  ],
  innovation: [
    { metric: "Automation Index", value: 73, unit: "%", period: "2024" },
    { metric: "AI Integration Score", value: 85, unit: "/100", period: "2024" },
    { metric: "Digital Twin Coverage", value: 68, unit: "% of processes", period: "2024" },
    { metric: "Predictive Maintenance Accuracy", value: 94.2, unit: "%", period: "2024 YTD" }
  ]
};

// Process Capability Studies (Cpk Values)
export const PROCESS_CAPABILITY = {
  cncMachining: [
    { process: "4-Axis Milling", parameter: "Dimensional Accuracy", cpk: 2.1, sigma: "6.3σ" },
    { process: "CNC Turning", parameter: "Concentricity", cpk: 1.8, sigma: "5.4σ" },
    { process: "Swiss Machining", parameter: "Position Tolerance", cpk: 2.3, sigma: "6.9σ" }
  ],
  injectionMolding: [
    { process: "Cavity Filling", parameter: "Weight Consistency", cpk: 1.9, sigma: "5.7σ" },
    { process: "Dimensional Control", parameter: "Critical Dimensions", cpk: 1.7, sigma: "5.1σ" }
  ],
  sheetMetal: [
    { process: "Laser Cutting", parameter: "Edge Quality", cpk: 2.0, sigma: "6.0σ" },
    { process: "Press Brake", parameter: "Bend Angle", cpk: 1.6, sigma: "4.8σ" }
  ]
};

// Equipment and Technology Specifications
export const EQUIPMENT_SPECS = [
  {
    category: "4-Axis CNC Machining Centers",
    models: [
      {
        name: "DMG MORI DMU 50 ecoline",
        specifications: {
          "X-axis travel": "500mm",
          "Y-axis travel": "450mm", 
          "Z-axis travel": "400mm",
          "A-axis rotation": "+110° to -30°",
          "C-axis rotation": "360°",
          "Spindle speed": "18,000 RPM",
          "Tool capacity": "30 tools",
          "Positioning accuracy": "±0.005mm",
          "Repeatability": "±0.003mm"
        }
      }
    ]
  },
  {
    category: "CNC Turning Centers",
    models: [
      {
        name: "MAZAK INTEGREX i-200",
        specifications: {
          "Max turning diameter": "ø380mm",
          "Max turning length": "600mm",
          "Spindle speed": "5,000 RPM",
          "Y-axis travel": "±50mm",
          "Live tooling": "60 tools",
          "Positioning accuracy": "±0.005mm"
        }
      }
    ]
  }
];

// Material Property Database
export const MATERIAL_PROPERTIES = {
  metals: {
    "Aluminum 6061-T6": {
      tensileStrength: "310 MPa",
      yieldStrength: "276 MPa", 
      elongation: "12%",
      hardness: "95 HB",
      density: "2.70 g/cm³",
      thermalConductivity: "167 W/m·K",
      electricalResistivity: "0.040 μΩ·m"
    },
    "Stainless Steel 316L": {
      tensileStrength: "485-620 MPa",
      yieldStrength: "170-310 MPa",
      elongation: "40%",
      hardness: "79 HRB",
      density: "8.00 g/cm³",
      thermalConductivity: "16.2 W/m·K",
      corrosionResistance: "Excellent (PRE ≥ 24)"
    },
    "Titanium Ti-6Al-4V": {
      tensileStrength: "950 MPa",
      yieldStrength: "880 MPa",
      elongation: "14%",
      hardness: "36 HRC",
      density: "4.43 g/cm³",
      thermalConductivity: "6.7 W/m·K",
      biocompatibility: "USP Class VI"
    }
  },
  plastics: {
    "PEEK": {
      tensileStrength: "100 MPa",
      flexuralModulus: "4.0 GPa",
      impactStrength: "85 kJ/m²",
      heatDeflection: "143°C @ 1.8 MPa",
      density: "1.30 g/cm³",
      waterAbsorption: "0.5%",
      chemicalResistance: "Excellent"
    }
  }
};

// Quality Standards and Testing Protocols
export const QUALITY_STANDARDS = {
  dimensional: {
    equipment: [
      "Zeiss CONTURA G2 CMM - Accuracy: ±(1.2+L/350) μm",
      "Mitutoyo QM-353 CMM - Accuracy: ±(1.5+L/300) μm", 
      "Keyence IM-8000 Image Dimension - Accuracy: ±(3+L/100) μm"
    ],
    standards: ["ISO 1101", "ASME Y14.5", "ISO 286-2", "ISO 2768"]
  },
  surface: {
    equipment: [
      "Mitutoyo SJ-410 - Range: 0.005-360 μm",
      "Taylor Hobson Form Talysurf - Resolution: 0.01 μm"
    ],
    standards: ["ISO 4287", "ISO 4288", "ISO 25178"]
  },
  material: {
    equipment: [
      "Instron 3369 Universal Testing - Load capacity: 50kN",
      "Rockwell B&C Hardness Tester - Accuracy: ±2 HRC",
      "Olympus BX53M Metallurgical Microscope - Magnification: 50x-1000x"
    ],
    standards: ["ASTM E8", "ASTM E92", "ASTM E112", "ASTM E3"]
  }
};

// Industry-Specific Technical Requirements
export const INDUSTRY_REQUIREMENTS = {
  aerospace: {
    standards: ["AS9100D", "NADCAP", "AS9102", "AS13100"],
    materials: ["Ti-6Al-4V", "Inconel 718", "7075-T6 Aluminum", "17-4 PH SS"],
    tolerances: "±0.0025mm typical, ±0.001mm critical features",
    documentation: "First Article Inspection, Material Certs, Process Sheets"
  },
  medical: {
    standards: ["ISO 13485", "FDA 21 CFR 820", "USP Class VI", "ISO 10993"],
    materials: ["316L SS", "Ti-6Al-4V", "PEEK", "PTFE"],
    tolerances: "±0.005mm typical, ±0.002mm critical features",
    documentation: "Design Controls, Risk Management, Validation Protocols"
  },
  automotive: {
    standards: ["IATF 16949", "ISO 26262", "VDA 6.3", "AIAG"],
    materials: ["6061-T6 Al", "1018 Steel", "PA66-GF30", "ABS"],
    tolerances: "±0.1mm typical, ±0.05mm critical features", 
    documentation: "PPAP, Control Plans, FMEA, MSA"
  }
};