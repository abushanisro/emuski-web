const sectors = [
  "Automotive & EV Components",
  "Industrial Machinery & Equipment",
  "Agriculture & Farm Equipment",
  "Robotics, Automation & Industrial IoT",
  "Medical Devices & Healthcare Engineering",
  "Defense Engineering & Tactical Systems",
  "Space, Aerospace & UAV Platforms",
  "Consumer Products & Home Goods",
  "Electronics & Appliances"
];


const SectorsServedSection = () => {
  return (
    <section className="py-20 border-b border-border/30 relative overflow-hidden" style={{ backgroundColor: 'rgb(18, 26, 33)' }}>
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Sectors We Serve</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Delivering innovative engineering solutions across diverse industries
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-emuski-teal/20 rounded-xl p-5 hover:bg-white/10 hover:border-emuski-teal/40 transition-all duration-300 hover:shadow-lg hover:shadow-emuski-teal/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emuski-teal group-hover:scale-125 transition-transform duration-300" />
                  <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-emuski-teal transition-colors duration-300">
                    {sector}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsServedSection;