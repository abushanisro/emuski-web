const sectors = [
  "Automotive",
  "Industry machineries",
  "Consumer Product",
  "Agriculture",
  "Consumer electronics",
];

export function SectorsServedSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sectors We Serve
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mt-16 flex flex-wrap justify-center gap-4">
          {sectors.map((sector, index) => (
            <div key={index} className="p-4 border border-border rounded-lg bg-background">
              <p className="text-lg font-semibold text-foreground">{sector}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
