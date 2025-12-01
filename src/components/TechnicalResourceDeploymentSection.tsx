export function TechnicalResourceDeploymentSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Technical Resource Deployment
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            ‘Deployment of Technical Expertise in Costing, VAVE - Teardown Benchmarking Engineering Services’
          </p>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            At EMUSKI, we offer highly skilled technical resources to meet your business needs, whether on-site or remotely. Our team of expert engineers, analysts, and consultants is ready to assist across various areas including costing, teardown benchmarking, and design engineering, ensuring your projects are supported with the highest level of expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16 space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground text-center mb-4">Resource you may be looking for</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-border rounded-lg">
                <h4 className="text-lg font-semibold text-foreground mb-2">Costing Experts</h4>
                <p className="text-muted-foreground">Bringing 8+ years of experience in manufacturing and costing, along with expertise in the latest costing software.</p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h4 className="text-lg font-semibold text-foreground mb-2">Teardown Benchmarking</h4>
                <p className="text-muted-foreground">Bringing 10+ years of experience in teardown and costing, along with expertise in the latest costing software.</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground text-center mb-4">Our resource expertise includes:</h3>
            <ul className="list-disc list-inside space-y-4 pl-4 text-muted-foreground">
              <li>
                <strong>Tailored expertise:</strong> Candidates are carefully selected through a comprehensive interview process, ensuring the right fit for your project needs.
              </li>
              <li>
                <strong>Flexible deployment:</strong> Based on customer requirements, we deploy a team or individual with the appropriate expertise and experience, ensuring a quick turnaround time.
              </li>
              <li>
                <strong>Scalability:</strong> Our technical resources can scale to align with the size and scope of your project, providing the right level of support as needed.
              </li>
              <li>
                <strong>Cost effective solution:</strong> We ensure that our resources provide value by complementing your internal operations. If our expertise doesn’t exceed the cost of your current employee operations, adding resources wouldn’t be beneficial. We offer top-tier technical teams at a cost-effective rate.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
