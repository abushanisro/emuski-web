import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const deliverables = [
  {
    title: "Project Details",
    description: "Comprehensive documentation of project scope, objectives, timelines, and key milestones."
  },
  {
    title: "Part Details",
    description: "Detailed specifications, material data sheets, and technical drawings for all manufactured parts."
  },
  {
    title: "MFG process Plan",
    description: "A step-by-step outline of the manufacturing process, including machinery used, quality control points, and production flow."
  },
  {
    title: "Mill TC",
    description: "Mill Test Certificates (MTC) providing chemical and mechanical properties of raw materials used."
  },
  {
    title: "Balloon Drawing",
    description: "Engineering drawings with numbered balloons indicating critical dimensions and features for inspection."
  },
  {
    title: "Final Inspection Report",
    description: "A detailed report of the final quality inspection, ensuring all parts meet specified tolerances and standards."
  },
  {
    title: "Dock Audit Check List",
    description: "A checklist used during the final audit before shipment to ensure all requirements are met."
  },
  {
    title: "Product Image",
    description: "High-resolution images of the final product for visual verification and documentation."
  },
  {
    title: "Key Learnings",
    description: "Insights and improvements identified during the project, contributing to continuous process optimization."
  },
];

const ProductDeliverablesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">OUR PRODUCT DELIVERABLES INCLUDE</h2>
            <h3 className="text-xl font-semibold text-gray-600 mb-8 text-left">PROJECT DELIVERY REPORT</h3>
            <Accordion type="single" collapsible className="w-full">
              {deliverables.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="flex items-center text-left">
                    <svg className="w-6 h-6 text-emuski-teal-darker mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-lg text-gray-700">{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-10">{item.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <img src="/assets/manufacturing/product2.svg" alt="Product Deliverables" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDeliverablesSection;