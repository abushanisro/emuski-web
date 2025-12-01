import React from 'react';

const sectors = [
  {
    name: "Machine/Equipment Details",
    icon: "M12 8v4m0 4h.01M4.93 4.93l.707.707M18.36 18.36l.707.707M1 12h2m18 0h2M4.93 19.07l.707-.707M18.36 5.64l.707-.707"
  },
  {
    name: "Printer Manufacture",
    icon: "M12 8v4m0 4h.01M4.93 4.93l.707.707M18.36 18.36l.707.707M1 12h2m18 0h2M4.93 19.07l.707-.707M18.36 5.64l.707-.707"
  },
  {
    name: "Robotics and Automation",
    icon: "M12 8v4m0 4h.01M4.93 4.93l.707.707M18.36 18.36l.707.707M1 12h2m18 0h2M4.93 19.07l.707-.707M18.36 5.64l.707-.707"
  },
  {
    name: "Industry machineries",
    icon: "M12 8v4m0 4h.01M4.93 4.93l.707.707M18.36 18.36l.707.707M1 12h2m18 0h2M4.93 19.07l.707-.707M18.36 5.64l.707-.707"
  },
  {
    name: "Agriculture Devices",
    icon: "M12 8v4m0 4h.01M4.93 4.93l.707.707M18.36 18.36l.707.707M1 12h2m18 0h2M4.93 19.07l.707-.707M18.36 5.64l.707-.707"
  },
  {
    name: "Consumer Product",
    icon: "M12 8v4m0 4h.01M4.93 4.93l.707.707M18.36 18.36l.707.707M1 12h2m18 0h2M4.93 19.07l.707-.707M18.36 5.64l.707-.707"
  }
];

const SectorsServedSection = () => {
  return (
    <section className="py-20 bg-industrial-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">SECTORS WE SERVE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-emuski-teal-dark p-4 rounded-l-lg">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={sector.icon}></path>
                </svg>
              </div>
              <div className="bg-emuski-teal-light p-4 rounded-r-lg w-full">
                <h3 className="text-xl font-semibold text-gray-700">{sector.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsServedSection;