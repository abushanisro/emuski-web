export function ShouldCostingSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Should Costing and Assembly level Costing
          </h2>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            Following the measurement of all cost drivers for each part, we perform a thorough should costing analysis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-muted-foreground">
            <h3 className="text-2xl font-semibold text-foreground">Costing 360: Inhouse tool for teardown and benchmarking</h3>
            <p>
              Our in-house estimating tool, Costing 360, is a cloud-based platform equipped with global databases for material, labor, and facility costs. It enables the generation of detailed, structured Bill of Materials (BoMs), allowing for efficient management of full product cost roll-ups. All estimates can be downloaded in Excel format, following the standard QAF template for seamless integration and reporting.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img src="/assets/engineering/cost360.png" alt="Costing 360" className="rounded-lg shadow-lg" />
            <img src="/assets/engineering/cost360crm.png" alt="Costing 360 CRM" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
