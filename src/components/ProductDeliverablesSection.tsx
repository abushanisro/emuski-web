import { Check } from 'lucide-react';

const deliverables = [
  "Project Details",
  "Part Details",
  "MFG process Plan",
  "Mill TC",
  "Ballon Drawing",
  "Final Inspection Report",
  "Dock Audit Check List",
  "Product Image",
  "Key Learnings",
];

export function ProductDeliverablesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-emuski-dark-blue mb-6">
              OUR PRODUCT DELIVERABLES INCLUDES
            </h2>
            <ul className="space-y-4">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-6 w-6 text-green-500 mr-4" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img src="/assets/manufacturing/product1.png" alt="Product Deliverable 1" className="rounded-lg shadow-lg" />
            <img src="/assets/manufacturing/product2.png" alt="Product Deliverable 2" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
