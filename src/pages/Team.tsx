import React from 'react';
import { teamMembers } from '../data/team';
import { Mail, Link as LinkIcon, Linkedin } from 'lucide-react';

export function Team() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Our Team</h1>
          <p className="mt-4 text-xl text-gray-500">
            Meet the researchers driving innovation in microbial evolution
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">{member.name}</h2>
                <p className="text-primary font-medium">{member.title}</p>
                <p className="mt-4 text-gray-600">{member.bio}</p>
                <div className="mt-4">
                  <h3 className="font-semibold text-gray-900">Research Interests</h3>
                  <ul className="mt-2 list-disc list-inside">
                    {member.research.map((interest) => (
                      <li key={interest} className="text-gray-600">{interest}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-gray-600 hover:text-primary"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Email
                  </a>
                  {member.profileUrl && (
                    <a
                      href={member.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-primary"
                    >
                      <LinkIcon className="h-5 w-5 mr-2" />
                      Profile
                    </a>
                  )}
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-primary"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}