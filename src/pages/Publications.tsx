import { useState } from 'react';
import { publications } from '../data/publications';
import { FileText, ExternalLink, Quote } from 'lucide-react';

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
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Publications ({filteredPublications.length})</h2>
            <div className="text-sm text-gray-500">
              Total citations: {filteredPublications.reduce((sum, pub) => sum + (pub.citations || 0), 0)}
            </div>
          </div>
          {filteredPublications.map((pub) => (
            <div key={pub.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-[#7CC5DE] mt-1 flex-shrink-0" />
                <div className="ml-4 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900">{pub.title}</h3>
                  <p className="mt-2 text-gray-600">{pub.authors.join(', ')}</p>
                  <div className="mt-1 flex items-center gap-4">
                    <p className="text-[#7CC5DE] font-medium">{pub.journal} ({pub.year})</p>
                    {pub.citations !== undefined && (
                      <div className="flex items-center text-gray-500 text-sm">
                        <Quote className="h-4 w-4 mr-1" />
                        {pub.citations} citations
                      </div>
                    )}
                  </div>
                  <p className="mt-4 text-gray-700">{pub.abstract}</p>
                  <div className="mt-4 flex items-center gap-4">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#7CC5DE] hover:text-[#6BB4CD] font-medium"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Publication
                    </a>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {pub.area}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Scholar Profile Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Complete Google Scholar Profile</h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              View Professor Craig MacLean's full academic profile with comprehensive citation metrics, h-index, and complete publication history
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Profile Highlights</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Complete publication record and citations</li>
                <li>• h-index and i10-index metrics</li>
                <li>• Co-author network and collaborations</li>
                <li>• Research area classifications</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Impact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Total citation count across all publications</li>
                <li>• Annual citation trends and growth</li>
                <li>• Most cited publications and their impact</li>
                <li>• Recent publications and ongoing research</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://scholar.google.com/citations?hl=en&user=xUOyZtIAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              View Complete Google Scholar Profile
            </a>
            <p className="mt-3 text-sm text-gray-500">
              Opens in a new tab • Updated automatically by Google Scholar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}