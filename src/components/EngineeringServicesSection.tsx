import { ReactNode } from "react";

interface EngineeringServicesSectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  variant?: "light" | "dark" | "gradient";
  columns?: 1 | 2 | 3 | 4;
}

export function EngineeringServicesSection({
  id,
  title,
  description,
  children,
  variant = "light",
  columns = 2,
}: EngineeringServicesSectionProps) {
  const bgClasses = {
    light: "bg-white",
    dark: "bg-gray-50",
    gradient: "bg-gradient-to-br from-slate-50 via-white to-slate-50",
  };

  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section id={id} className={`py-16 md:py-20 ${bgClasses[variant]}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className={`grid ${columnClasses[columns]} gap-6 max-w-7xl mx-auto`}>
          {children}
        </div>
      </div>
    </section>
  );
}
