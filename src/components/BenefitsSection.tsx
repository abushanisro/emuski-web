const benefits = [
  {
    title: "Enhanced Product Development",
    description: "Helps to identify areas of improvement in future designs by learning from both strengths and weaknesses of competitors.",
  },
  {
    title: "Faster Time-to-Market",
    description: "Tear down benchmarking helps companies eliminate design errors and accelerate the implementation of successful innovations.",
  },
  {
    title: "Cost Reduction",
    description: "Identifying cost-effective materials or processes that can lower production costs without compromising quality.",
  },
  {
    title: "Enabling Strategic Negotiations",
    description: "Cost breakdown allowed the Client to conduct value-based price negotiation with the suppliers.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Benefits of VAVE - Teardown Benchmarking
          </h2>
        </div>

        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 border border-border rounded-lg text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
