const sectors = [
  {
    name: "Automotive & EV Components",
    icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M5 17H4a1 1 0 01-1-1v-5.586a1 1 0 01.293-.707l2.414-2.414A1 1 0 06.414 7H19a2 2 0 012 2v7a1 1 0 01-1 1h-1"
  },
  {
    name: "Industrial Machinery & Equipment",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
  },
  {
    name: "Agriculture & Farm Equipment",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
  },
  {
    name: "Robotics, Automation & Industrial IoT",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
  },
  {
    name: "Medical Devices & Healthcare Engineering",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
  },
  {
    name: "Defense Engineering & Tactical Systems",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
  },
  {
    name: "Space, Aerospace & UAV Platforms",
    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
  },
  {
    name: "Consumer Products & Home Goods",
    icon: "M10 20l4-5-4-5-4 5 4 5z"  // you can replace with appropriate icon
  },
  {
    name: "Electronics & Appliances",
    icon: "M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"  // placeholder icon
  }
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
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">SECTORS WE SERVED</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="flex items-center hover:scale-105 transition-transform duration-300">
                <div className="bg-emuski-teal-darker p-4 rounded-l-lg">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={sector.icon}></path>
                  </svg>
                </div>
                <div className="bg-emuski-teal-darker p-4 rounded-r-lg w-full">
                  <h3 className="text-xl font-semibold text-white">{sector.name}</h3>
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