import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">MacLean Lab</h3>
            <p className="text-gray-400">
              Department of Biology<br />
              University of Oxford
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                Oxford, UK
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} />
                +44 (0)123 456 7890
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                contact@macleanlab.ox.ac.uk
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/research" className="hover:text-[#7CC5DE]">Research</a></li>
              <li><a href="/publications" className="hover:text-[#7CC5DE]">Publications</a></li>
              <li><a href="/team" className="hover:text-[#7CC5DE]">Team</a></li>
              <li><a href="/contact" className="hover:text-[#7CC5DE]">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MacLean Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}