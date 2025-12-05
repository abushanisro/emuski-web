'use client'

import React from 'react';

const MethodologySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="w-full px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Methodology
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We follow a structured and transparent process to ensure the highest quality outcomes for our clients.
          </p>
        </div>
        <div className="flex justify-center">
          <img 
            src="/assets/infographic/manufacturing-methodology-infographic.svg" 
            alt="Our Methodology"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
