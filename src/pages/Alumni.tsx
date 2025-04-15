import React from 'react';
import { alumniMembers } from '../data/alumni';
import { Building, Linkedin, Globe } from 'lucide-react';

export function Alumni() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Alumni</h1>
          <p className="mt-4 text-xl text-gray-500">
            Former lab members and their continuing success
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {alumniMembers.map((alumni) => (
            <div key={alumni.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {alumni.image && (
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">{alumni.name}</h2>
                <p className="text-primary font-medium">Years: {alumni.years}</p>
                <div className="mt-4 flex items-center text-gray-600">
                  <Building className="h-5 w-5 mr-2" />
                  <p>{alumni.currentPosition}</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-gray-900">Key Achievements</h3>
                  <ul className="mt-2 list-disc list-inside">
                    {alumni.achievements.map((achievement) => (
                      <li key={achievement} className="text-gray-600">{achievement}</li>
                    ))}
                  </ul>
                </div>
                {alumni.linkedinUrl && (
                  <div className="mt-6">
                    <a
                      href={alumni.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-primary"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </div>
                )}
                {alumni.websiteUrl && (
                  <div className="mt-2">
                    <a
                      href={alumni.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-primary"
                    >
                      <Globe className="h-5 w-5 mr-2" />
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}