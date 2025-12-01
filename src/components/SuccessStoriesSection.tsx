const caseStudies = [
  {
    title: "New Product Development (NPD) – Accelerating Innovation",
    client: "Tier-1 Automotive Supplier",
    service: "New Product Development (NPD)",
    challenge: "The client struggled with repeated design iterations and long lead times during the development of a next-gen engine component. This delayed validation and risked missing OEM program deadlines.",
    approach: [
      "Utilized EMUSKI’s NPD Center to run rapid design iterations.",
      "Conducted in-house testing and validation, eliminating third-party delays.",
      "Collaborated closely with client engineers to shorten feedback loops."
    ],
    outcome: [
      "Reduced development cycle time by 35%.",
      "Improved design quality with first-time-right prototypes.",
      "Ensured on-time delivery to the OEM, securing the client’s business."
    ]
  },
  {
    title: "Rapid Prototyping & On-Demand Manufacturing – Faster Time-to-Market",
    client: "Industrial Equipment OEM",
    service: "Rapid Prototyping & On-Demand Manufacturing",
    challenge: "The client needed quick turnaround prototypes for a critical product demo. Traditional manufacturing routes were too slow and costly for low-volume needs.",
    approach: [
      "Produced functional prototypes using in-house 3D printing and CNC machining.",
      "Validated performance with real-world testing.",
      "Transitioned seamlessly into on-demand manufacturing to support pilot builds."
    ],
    outcome: [
      "Delivered prototypes in 7 days instead of 4 weeks.",
      "Supported a successful product demo, helping the client secure new business.",
      "Scaled into low-volume production without additional supplier onboarding."
    ]
  },
  {
    title: "VAVE – Teardown & Benchmarking – Driving Cost Competitiveness",
    client: "Consumer Electronics Manufacturer",
    service: "VAVE – Teardown & Benchmarking",
    challenge: "High production costs made the client’s flagship product less competitive compared to rivals in the market.",
    approach: [
      "Conducted detailed teardown analysis at EMUSKI’s Teardown Center.",
      "Benchmarked components against global competitors.",
      "Recommended alternative materials, part redesign, and supplier re-sourcing."
    ],
    outcome: [
      "Achieved 12% cost reduction per unit.",
      "Simplified assembly process, reducing labor costs.",
      "Enhanced competitiveness with improved cost-to-feature ratio."
    ]
  },
  {
    title: "Expert Engineer Support – Extending In-House Capabilities",
    client: "Global Aerospace OEM",
    service: "Expert Engineer Support",
    challenge: "The client lacked specialized cost engineers to evaluate complex supplier quotes and was facing project delays due to resource constraints.",
    approach: [
      "Deployed should-cost engineers and VAVE specialists to integrate with the client’s team.",
      "Built detailed cost models and validated supplier quotations.",
      "Assisted with supplier technical evaluations and design validation."
    ],
    outcome: [
      "Reduced sourcing cycle time by 30%.",
      "Identified cost-saving opportunities worth $2M annually.",
      "Accelerated project timelines by supplementing client resources."
    ]
  },
  {
    title: "Supplier Development – Building Reliable Supply Chains in India",
    client: "European Industrial OEM",
    service: "Supplier Development (India sourcing)",
    challenge: "The client wanted to diversify its supply base into India but faced challenges in identifying suppliers that met global quality standards.",
    approach: [
      "Mapped manufacturing clusters across India to identify potential suppliers.",
      "Conducted supplier qualification audits and capability assessments.",
      "Supported in contract finalization and pilot production runs."
    ],
    outcome: [
      "Qualified 5 new suppliers aligned with global standards.",
      "Reduced sourcing costs by 18% through Indian manufacturing clusters.",
      "Improved supply chain resilience and reduced lead time risks."
    ]
  }
];

export function SuccessStoriesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground">
            Real Results. Expert Insights. Lasting Impact.
          </p>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            At EMUSKI, we don’t just provide services—we deliver measurable outcomes. Our Success Stories showcase how OEMs have partnered with us to accelerate innovation, reduce costs, and strengthen competitiveness.
          </p>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Alongside, our Blogs bring you expert perspectives, industry trends, and actionable strategies to help your business stay ahead in a fast-changing manufacturing landscape.
          </p>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Together, these stories and insights highlight what’s possible when OEMs collaborate with EMUSKI—achieving excellence in cost, quality, and speed.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">{study.title}</h3>
              <p className="text-sm text-muted-foreground mb-4"><strong>Client:</strong> {study.client} | <strong>Service:</strong> {study.service}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Our Approach</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {study.approach.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Outcome</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {study.outcome.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>
              <button className="mt-6 bg-emuski-teal-dark text-white px-6 py-2 rounded-lg font-semibold hover:bg-emuski-teal-darker transition-colors">
                Read Full Case Study
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
