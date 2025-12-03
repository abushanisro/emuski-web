import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  image?: string;
  variant?: "default" | "compact" | "featured";
  id?: string;
}

export function EngineeringServiceCard({
  icon: Icon,
  title,
  description,
  features,
  image,
  variant = "default",
  id,
}: ServiceCardProps) {
  // Compact variant - for simple cards with just title and description
  if (variant === "compact") {
    return (
      <div id={id} className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-emuski-teal-darker/40 hover:shadow-lg transition-all duration-300">
        {Icon && (
          <div className="w-12 h-12 bg-emuski-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emuski-teal/20 transition-colors">
            <Icon className="w-6 h-6 text-emuski-teal-darker" />
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emuski-teal-darker transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    );
  }

  // Featured variant - with image
  if (variant === "featured" && image) {
    return (
      <div id={id} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-emuski-teal-darker/40 hover:shadow-xl transition-all duration-300">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-emuski-teal-darker transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>

          {features && features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-emuski-teal-dark rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emuski-teal via-emuski-teal-dark to-emuski-teal-darker transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    );
  }

  // Default variant - with icon and features
  return (
    <div id={id} className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-emuski-teal-darker/40 hover:shadow-lg transition-all duration-300">
      {Icon && (
        <div className="w-14 h-14 bg-gradient-to-br from-emuski-teal/10 to-emuski-teal-dark/10 rounded-xl flex items-center justify-center mb-5 group-hover:from-emuski-teal/20 group-hover:to-emuski-teal-dark/20 transition-all duration-300">
          <Icon className="w-7 h-7 text-emuski-teal-darker" />
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emuski-teal-darker transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-2.5">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-3 text-sm text-gray-700">
              <svg className="w-5 h-5 text-emuski-teal-dark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
