export function CostReductionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Cost Reduction and VAVE
          </h2>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            Benchmark-based cost optimization involves a detailed teardown analysis of both our customer’s product and competing models. By examining and comparing every cost-driving element, we uncover differences and inefficiencies—ultimately generating strategic ideas for reducing overall costs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Identifying Engineering Challenges and Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground">
            <div className="p-6 border border-border rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-2">1. Over-engineering</h4>
              <p>Remove what is not adding value for the customer.</p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-2">2. Alternate Material</h4>
              <p>Is your competitor achieving the same outcome with a cheaper material?</p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-2">3. Alternate Manufacturing Process</h4>
              <p>Are you using the most efficient manufacturing process for your volumes?</p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-2">4. Alternate Supplier</h4>
              <p>Can you source the same part better from a different supplier?</p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-2">5. Should Costing</h4>
              <p>How far is my Should Cost from my actual cost?</p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-2">6. Sourcing Decisions</h4>
              <p>Based on Should Cost and further make vs buy / sourcing location / localization and other decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
