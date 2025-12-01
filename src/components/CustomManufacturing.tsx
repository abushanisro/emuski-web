import { Settings, Cpu, FlaskConical, Scaling, Lightbulb, Wrench, Gem, GitPullRequest } from 'lucide-react';

export function CustomManufacturing() {
  return (
    <div>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Custom Manufacturing
        </h2>
        <p className="text-xl text-muted-foreground">
          Your Unique Requirements, Precisely Engineered
        </p>
        <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
          When standard solutions won't do, EMUSKI's Custom Manufacturing services provide the tailored precision you need. We specialize in manufacturing components and products that meet unique specifications, complex geometries, and stringent quality standards.
        </p>
        <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
          Our team works closely with you to understand your specific challenges and develop a manufacturing process that delivers on your vision. From one-off parts to specialized production runs, we have the expertise and equipment to get it done right.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">What We Deliver</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <Settings className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">Bespoke Solutions:</h4>
                <p>Manufacturing tailored to your exact design and material specifications.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Cpu className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">Complex Geometries:</h4>
                <p>Advanced CNC machining and fabrication for intricate parts.</p>
              </div>
            </li>
            <li className="flex items-start">
              <FlaskConical className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">Material Expertise:</h4>
                <p>Experience with a wide range of metals, plastics, and exotic materials.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Scaling className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">Flexible Volumes:</h4>
                <p>From single prototypes to low-volume production runs.</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">Why Custom Manufacturing Matters</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <Lightbulb className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <p>Enables the creation of innovative products without design constraints.</p>
            </li>
            <li className="flex items-start">
              <Wrench className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <p>Provides solutions for legacy parts or specialized equipment.</p>
            </li>
            <li className="flex items-start">
              <Gem className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <p>Ensures the highest level of quality and precision for critical components.</p>
            </li>
            <li className="flex items-start">
              <GitPullRequest className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <p>Allows for rapid adaptation to new design requirements.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl font-semibold text-foreground mb-4">The EMUSKI Advantage</h3>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our advantage lies in our deep engineering expertise combined with our advanced manufacturing capabilities. We don't just follow your prints; we collaborate with you to optimize your design for manufacturability, ensuring the best possible outcome in terms of quality, cost, and performance.
        </p>
      </div>
    </div>
  );
}
