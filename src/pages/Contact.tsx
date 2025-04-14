import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-500">
            Get in touch with the MacLean Lab
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-[#7CC5DE] mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Address</h3>
                <p className="mt-1 text-gray-600">
                  Department of Biology<br />
                  University of Oxford<br />
                  Oxford, OX1 3SZ<br />
                  United Kingdom
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-6 w-6 text-[#7CC5DE] mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <a 
                  href="mailto:contact@macleanlab.ox.ac.uk" 
                  className="mt-1 text-[#7CC5DE] hover:text-[#6BB4CD] inline-block"
                >
                  contact@macleanlab.ox.ac.uk
                </a>
                <p className="mt-2 text-gray-600">
                  For inquiries about our research, collaborations, or media requests, 
                  please email us and we'll get back to you as soon as possible.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-[#7CC5DE] mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-gray-600">+44 (0)1865 123456</p>
                <p className="mt-2 text-gray-600">
                  Available Monday to Friday, 9:00 AM - 5:00 PM (GMT)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Lab</h2>
            <p className="text-gray-600 mb-4">
              We are always looking for talented researchers to join our team. If you're interested
              in our work and would like to apply for positions, please send your CV and a cover
              letter to the email address above.
            </p>
            <p className="text-gray-600">
              We encourage applications from candidates with backgrounds in molecular biology, 
              computational biology, and related fields. Please include "Job Application" in 
              your email subject line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}