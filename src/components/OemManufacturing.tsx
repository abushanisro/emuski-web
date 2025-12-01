import { Package, CheckCircle, TrendingUp, Truck, Focus, DollarSign, Award, ShieldCheck } from 'lucide-react';

export function OemManufacturing() {
  return (
    <div>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          OEM Manufacturing
        </h2>
        <p className="text-xl text-muted-foreground">
          Your Vision, Manufactured with Precision
        </p>
        <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
          As a trusted partner to Original Equipment Manufacturers (OEMs), EMuski provides comprehensive manufacturing solutions that bring your products to life. We manage the entire production lifecycle, from sourcing raw materials to final assembly and quality assurance, allowing you to focus on innovation and market growth.
        </p>
        <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
          Our state-of-the-art facilities and expert teams are equipped to handle complex manufacturing requirements, ensuring your products are built to exact specifications, on time, and within budget.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">What We Deliver</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <Package className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">End-to-End Production:</h4>
                <p>Full-service manufacturing from raw material to finished product.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">Quality Assurance:</h4>
                <p>Rigorous quality control at every stage to ensure product excellence.</p>
              </div>
            </li>
            <li className="flex items-start">
              <TrendingUp className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">Scalable Manufacturing:</h4>
                <p>From low-volume runs to large-scale production, we adapt to your needs.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Truck className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">Supply Chain Management:</h4>
                <p>Optimized sourcing and logistics for efficient and reliable production.</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">Why OEM Manufacturing Matters</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <Focus className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <p>Allows you to focus on core competencies like R&D and marketing.</p>
            </li>
            <li className="flex items-start">
              <DollarSign className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <p>Reduces capital expenditure on manufacturing facilities and equipment.</p>
            </li>
            <li className="flex items-start">
              <Award className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <p>Leverages our expertise to improve product quality and reduce costs.</p>
            </li>
            <li className="flex items-start">
              <ShieldCheck className="w-6 h-6 text-emuski-teal-dark mr-4 mt-1" />
              <p>Ensures a stable and reliable supply chain for your products.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl font-semibold text-foreground mb-4">The EMuski Advantage</h3>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          We act as a true extension of your team. Our integrated approach combines manufacturing excellence with engineering insights, ensuring that your products are not only well-made but also optimized for performance and cost. With EMuski, you gain a partner committed to your success.
        </p>
      </div>
    </div>
  );
}
