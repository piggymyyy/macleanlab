import React from 'react';
import { TestTubes, Dna } from 'lucide-react';
import { BacteriophageIcon } from '../components/common/BacteriophageIcon';
import { researchData } from '../data/research';

const iconMap: Record<string, React.FC<any>> = {
  'TestTubes': TestTubes,
  'Bacteriophage': BacteriophageIcon,
  'Dna': Dna
};

export function Research() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Our Research</h1>
          <p className="mt-4 text-xl text-gray-500">
            Exploring the frontiers of microbial evolution and antimicrobial resistance
          </p>
        </div>

        <div className="mt-16">
          {researchData.map((area) => (
            <div key={area.id} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">{area.name}</h2>
                <p className="mt-4 text-xl text-gray-500">{area.overview}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {area.projects.map((project) => {
                  const Icon = iconMap[project.icon];
                  return (
                    <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <Icon className="h-6 w-6 text-[#7CC5DE]" />
                          <h3 className="ml-3 text-xl font-bold text-gray-900">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900">Current Projects</h4>
                            <ul className="mt-2 list-disc list-inside space-y-1">
                              {project.projects.map((subProject) => (
                                <li key={subProject} className="text-gray-600">
                                  {subProject}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {project.collaborators && (
                            <div>
                              <h4 className="font-semibold text-gray-900">Collaborators</h4>
                              <ul className="mt-2 list-disc list-inside">
                                {project.collaborators.map((collaborator) => (
                                  <li key={collaborator} className="text-gray-600">
                                    {collaborator}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {project.funding && (
                            <div>
                              <h4 className="font-semibold text-gray-900">Funding</h4>
                              <ul className="mt-2 list-disc list-inside">
                                {project.funding.map((fund) => (
                                  <li key={fund} className="text-gray-600">{fund}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}