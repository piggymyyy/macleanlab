import React from 'react';
import { Microscope, Dna, TestTubes } from 'lucide-react';

export function FeaturedResearch() {
  const features = [
    {
      name: 'Antimicrobial Resistance',
      description: 'Understanding the evolution and mechanisms of antimicrobial resistance in bacterial populations.',
      icon: TestTubes,
    },
    {
      name: 'Phage Therapy',
      description: 'Developing novel therapeutic approaches using bacteriophages to combat resistant infections.',
      icon: Microscope,
    },
    {
      name: 'Evolutionary Biology',
      description: 'Studying the fundamental principles of bacterial evolution and adaptation.',
      icon: Dna,
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Research Focus Areas
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our lab combines experimental and theoretical approaches to understand bacterial evolution and develop new therapeutic strategies.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#7CC5DE] text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}