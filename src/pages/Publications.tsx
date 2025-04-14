import React, { useState } from 'react';
import { publications } from '../data/publications';
import { FileText, ExternalLink } from 'lucide-react';

export function Publications() {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedArea, setSelectedArea] = useState<string>('all');

  const years = Array.from(new Set(publications.map(pub => pub.year))).sort((a, b) => b - a);
  const areas = Array.from(new Set(publications.map(pub => pub.area)));

  const filteredPublications = publications.filter(pub => {
    const yearMatch = selectedYear === 'all' || pub.year === selectedYear;
    const areaMatch = selectedArea === 'all' || pub.area === selectedArea;
    return yearMatch && areaMatch;
  });

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Publications</h1>
          <p className="mt-4 text-xl text-gray-500">
            Our research contributions to the scientific community
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="rounded-md border-gray-300 shadow-sm focus:border-[#7CC5DE] focus:ring-[#7CC5DE]"
          >
            <option value="all">All Years</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-[#7CC5DE] focus:ring-[#7CC5DE]"
          >
            <option value="all">All Areas</option>
            {areas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        <div className="mt-8 space-y-8">
          {filteredPublications.map((pub) => (
            <div key={pub.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-[#7CC5DE] mt-1" />
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-gray-900">{pub.title}</h2>
                  <p className="mt-2 text-gray-600">{pub.authors.join(', ')}</p>
                  <p className="mt-1 text-[#7CC5DE]">{pub.journal} ({pub.year})</p>
                  <p className="mt-4 text-gray-700">{pub.abstract}</p>
                  <div className="mt-4">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#7CC5DE] hover:text-[#6BB4CD]"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Publication
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}