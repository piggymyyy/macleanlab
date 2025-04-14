import React from 'react';
import { socialEvents } from '../data/social';
import { Calendar, MapPin, Users } from 'lucide-react';

export function Social() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Lab Life & Events</h1>
          <p className="mt-4 text-xl text-gray-500">
            Conferences, lab events, and team activities
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {socialEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.type === 'conference' 
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {event.type === 'conference' ? 'Conference' : 'Lab Event'}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-bold text-gray-900">{event.title}</h2>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {event.location}
                  </div>
                  {event.participants && (
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-2" />
                      {event.participants.join(', ')}
                    </div>
                  )}
                </div>
                <p className="mt-4 text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}