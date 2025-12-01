const tools = [
  {
    name: "3D Scanning",
    description: "For creating detailed digital models of components to study geometries, tolerances, and design variations.",
  },
  {
    name: "X-ray Imaging or CT Scans",
    description: "These are sometimes used to examine internal structures without damaging parts, especially for complex or precision components.",
  },
  {
    name: "Material Testing",
    description: "To analyze the properties of the materials used.",
  },
  {
    name: "Costing 360 software",
    description: "Assists in creating a feature mapping, detailed BOM and cost breakdown.",
  },
];

export function ToolsAndTechniquesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Tools and Techniques Used
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">{tool.name}</h3>
              <p className="text-muted-foreground">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
