import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const teardownPhases = [
  {
    title: "Pre-Teardown",
    image: "/assets/engineering/car.png",
    content: (
      <div className="space-y-4">
        <p>Prior to disassembly, we conduct a comprehensive evaluation of the vehicle’s features at the overall product level. As the teardown progresses, we shift focus to analyzing features at the subsystem level. These identified features are then correlated with specific BOM components, enabling precise, feature-driven cost benchmarking.</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Document Customer Touchpoints:</strong> Identify and record all areas frequently interacted with by the customer.</li>
          <li><strong>Analyze Vehicle Weight Distribution:</strong> Check how the weight is spread across the vehicle to see how it might affect handling and design.</li>
          <li><strong>Verify Static Functional Elements:</strong> Check the functionality of non-moving systems.</li>
          <li><strong>Evaluate Vehicle Features:</strong> Review and assess available features, including comfort, convenience, safety, and technology systems.</li>
          <li><strong>Capture Initial Visual Condition:</strong> Take detailed photographs of the vehicle’s exterior and interior to document its as-received condition prior to disassembly.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "During Teardown",
    image: "/assets/engineering/breakdown.png",
    content: (
      <div className="space-y-4">
        <p>Teardown activity is to understand the design strategy and material usage. After disassembly, it’s important to keep the original layout and relationships between parts and systems intact. To do this, we carefully document the vehicle’s architecture using detailed maps and diagrams. This method provides more accurate structural information than relying only on 3D scans.</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Tool Access Point Analysis:</strong> Evaluate component accessibility and identify optimal tool entry points.</li>
          <li><strong>Identification of Special Tool Requirements:</strong> Determine if any non-standard or specialized tools are needed for disassembly.</li>
          <li><strong>Measurement of Critical Clearances:</strong> Record key spacing and tolerances that impact fit, function, or reassembly.</li>
          <li><strong>Fastener Type and Size Documentation:</strong> Catalog all fasteners, including type, size, and location.</li>
          <li><strong>Comprehensive Photographic Documentation:</strong> Capture detailed images throughout the teardown to ensure accurate records of part layout and condition.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Post-Teardown",
    image: "/assets/engineering/scan.png",
    content: (
      <div className="space-y-4">
        <p>Once the teardown is complete, the focus shifts from disassembly to analysis, documentation, and data extraction. The post-teardown phase is critical for translating physical insights into valuable engineering and business intelligence.</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Multi-Angle Image Capture:</strong> High-resolution photographs from various angles to document component condition and layout.</li>
          <li><strong>Bill of Materials (BOM) and Weight Breakdown:</strong> Comprehensive listing of parts with associated weights for system-level analysis.</li>
          <li><strong>Fastener Analysis:</strong> Identification and classification of fastener types, sizes, and their applications.</li>
          <li><strong>Fluid Volume Measurement:</strong> Quantification of all fluid types used within the vehicle systems.</li>
          <li><strong>Material Categorization:</strong> Classification of materials used in components for cost, sustainability, or recyclability studies.</li>
          <li><strong>Manufacturer and Supplier Identification:</strong> Collection of part markings and labels to determine component origins.</li>
        </ul>
      </div>
    ),
  },
];

export function TeardownBenchmarkingSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Teardown & Benchmarking - Methodology
          </h2>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            At EMuski, we recognize the importance of teardown analysis, which has enabled us to clearly define and structure the process into distinct phases. Our teardown methodology is categorized into Pre-Teardown, Teardown, and Post-Teardown activities, allowing for a systematic and efficient approach.
          </p>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            We approach teardown with a well-defined structure, ensuring a comprehensive and insightful analysis across three key phases:
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <Accordion type="single" collapsible className="w-full">
            {teardownPhases.map((phase, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{phase.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">{phase.content}</div>
                    <div className="md:w-1/3">
                      <img src={phase.image} alt={phase.title} className="rounded-lg" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}