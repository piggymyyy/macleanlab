import React from 'react';
import { mediaItems } from '../data/media';
import { Calendar, ExternalLink, PlayCircle, FileText } from 'lucide-react';

export function Media() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Media & Press</h1>
          <p className="mt-4 text-xl text-gray-500">
            Articles, videos, and media coverage of our research
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {mediaItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {item.thumbnail && (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${
                    item.type === 'article' 
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.type === 'article' ? (
                      <>
                        <FileText className="h-4 w-4" />
                        Article
                      </>
                    ) : (
                      <>
                        <PlayCircle className="h-4 w-4" />
                        Video
                      </>
                    )}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h2>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    {item.date}
                  </div>
                  {item.source && (
                    <div className="text-gray-600">
                      <span className="font-medium">Source:</span> {item.source}
                    </div>
                  )}
                  {item.author && (
                    <div className="text-gray-600">
                      <span className="font-medium">Author:</span> {item.author}
                    </div>
                  )}
                </div>
                <p className="mt-4 text-gray-600">{item.description}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  {item.type === 'article' ? 'Read Article' : 'Watch Video'}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}