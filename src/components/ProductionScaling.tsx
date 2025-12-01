import { Workflow, Network, ShieldCheck, ArrowUpRight, Rocket, ShieldAlert, CircleDollarSign, Target } from 'lucide-react';

export function ProductionScaling() {
  return (
    <div>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Production Scaling
        </h2>
        <p className="text-xl text-muted-foreground">
          From Prototype to Full-Scale Production, Seamlessly
        </p>
        <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
          Scaling from a successful prototype to full-scale production is a critical and often challenging phase. EMuski provides the expertise and infrastructure to manage this transition smoothly, ensuring that your product can be manufactured at volume without sacrificing quality or cost-effectiveness.
        </p>
        <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
          We bridge the gap between prototyping and mass production, helping you navigate supply chain complexities, optimize manufacturing processes, and ramp up production to meet market demand.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">What We Deliver</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <Workflow className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">Process Optimization:</h4>
                <p>Refining manufacturing processes for efficiency and repeatability at scale.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Network className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">Supply Chain Development:</h4>
                <p>Establishing and managing a robust supply chain for all your components.</p>
              </div>
            </li>
            <li className="flex items-start">
              <ShieldCheck className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">Quality Control Systems:</h4>
                <p>Implementing scalable quality systems to ensure consistency across all units.</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowUpRight className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">Volume Production:</h4>
                <p>Managing the ramp-up to high-volume manufacturing to meet your targets.</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">Why Production Scaling Matters</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <Rocket className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <p>Ensures a smooth transition from development to market launch.</p>
            </li>
            <li className="flex items-start">
              <ShieldAlert className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <p>Minimizes the risks associated with scaling up production too quickly.</p>
            </li>
            <li className="flex items-start">
              <CircleDollarSign className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <p>Optimizes cost per unit through economies of scale and process efficiency.</p>
            </li>
            <li className="flex items-start">
              <Target className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <p>Allows you to meet market demand without being constrained by manufacturing capacity.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl font-semibold text-foreground mb-4">The EMuski Advantage</h3>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our experience in both prototyping and high-volume manufacturing gives us a unique perspective on scaling. We anticipate the challenges of production ramp-up and address them early in the design and prototyping phases, ensuring a seamless and successful transition to mass production.
        </p>
      </div>
    </div>
  );
}
