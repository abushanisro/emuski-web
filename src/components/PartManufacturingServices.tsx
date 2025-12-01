import { Check } from 'lucide-react';

const services = [
  "RAPID PROTOTYPING",
  "RAPID MANUFACTURING",
  "STRATEGIC SOURCING SUPPORT",
  "LOW-VOLUME PRODUCTION OF CUSTOM PARTS",
];

export function PartManufacturingServices() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-emuski-dark-blue mb-6">
              OUR SERVICE IN PART MANUFACTURING
            </h2>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-6 w-6 text-green-500 mr-4" />
                  <span className="text-lg text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src="/assets/manufacturing/services.png" alt="Part Manufacturing Services" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
