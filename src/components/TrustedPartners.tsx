'use client'

export const TrustedPartners = () => {
  const partners = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <section className="py-8 border-b border-border/30 relative overflow-hidden" style={{ backgroundColor: 'rgb(18, 26, 33)' }}>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-white/80 mb-4">Trusted by Industry Leaders</h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {partners.concat(partners).map((num, idx) => (
              <div key={idx} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <img
                  src={`/assets/partners/manufacturing-partner-logo-${num}.svg`}
                  alt={`Manufacturing Partner ${num}`}
                  className="h-8 sm:h-12 w-auto object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};
