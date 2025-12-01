import { Check } from 'lucide-react';

const solutions = [
  "CNC/VMC Plastic & Metal 5-Axis Precision Machining Prototypes",
  "CNC/VMC Aluminum Machining Prototypes",
  "3D Printing SLA & SLS Prototypes",
  "Sheet Metal Prototypes",
  "Vacuum Casting Plastic Prototypes",
  "Injection Molding Low-Volume Prototypes",
  "Expert in Fixture, tooling, jig manufacturing",
];

export function SolutionsOfferedSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-emuski-dark-blue mb-6">
              SOLUTION WE OFFER
            </h2>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-6 w-6 text-green-500 mr-4" />
                  <span className="text-lg text-muted-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src="/assets/manufacturing/solution.png" alt="Solutions Offered" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
