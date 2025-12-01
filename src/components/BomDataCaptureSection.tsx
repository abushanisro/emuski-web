export function BomDataCaptureSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Part BOM Data Capture
          </h2>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            Capturing detailed Bill of Materials (BOM) data for each part is essential to build a structured understanding of the product and its components. This process enables cost analysis, design benchmarking, and supply chain insights.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">1. Basic Part Information</h3>
            <ul className="list-disc list-inside pl-4">
              <li>Part Name</li>
              <li>Part Number</li>
              <li>Vehicle Location</li>
              <li>Associated System/Sub-System</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">2. Physical Properties</h3>
            <ul className="list-disc list-inside pl-4">
              <li>Dimensions</li>
              <li>Weight</li>
              <li>Volume</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">3. Material Specifications</h3>
            <ul className="list-disc list-inside pl-4">
              <li>Material Type</li>
              <li>Material Grade</li>
              <li>Finish/Coating</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">4. Manufacturing & Assembly Data</h3>
            <ul className="list-disc list-inside pl-4">
              <li>Manufacturing Process</li>
              <li>Joining Methods</li>
              <li>Fasteners Used</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">5. Functional Role & Feature Mapping</h3>
            <ul className="list-disc list-inside pl-4">
              <li>Function</li>
              <li>Linked Feature</li>
              <li>Criticality</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">6. Supplier & Cost Insights (if available)</h3>
            <ul className="list-disc list-inside pl-4">
              <li>OEM or Tier Supplier</li>
              <li>Estimated Cost</li>
              <li>Country of Origin</li>
            </ul>
          </div>
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-xl font-semibold text-foreground">7. Supporting Visuals & Documentation</h3>
            <ul className="list-disc list-inside pl-4">
              <li>Photographs</li>
              <li>Exploded Views</li>
              <li>Notes/Observations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
