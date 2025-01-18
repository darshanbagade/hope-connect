import React from 'react';
import { Heart, Book, Briefcase, Phone, Shield, Users } from 'lucide-react';

const supportCategories = [
  {
    icon: Heart,
    title: 'Immediate Support',
    description: 'Access emergency assistance and crisis support services',
    link: '/emergency-support'
  },
  {
    icon: Book,
    title: 'Education & Training',
    description: 'Free courses and skill development programs',
    link: '/education'
  },
  {
    icon: Briefcase,
    title: 'Job Opportunities',
    description: 'Connect with employers and find meaningful work',
    link: '/jobs'
  },
  {
    icon: Users,
    title: 'Counseling Services',
    description: 'Professional mental health and trauma support',
    link: '/counseling'
  },
  {
    icon: Shield,
    title: 'Legal Assistance',
    description: 'Free legal aid and advocacy services',
    link: '/legal-aid'
  },
  {
    icon: Phone,
    title: '24/7 Helpline',
    description: 'Confidential support whenever you need it',
    link: '/helpline'
  }
];

export function VictimSupport() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              We're Here to Help
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Your journey to recovery and stability starts here. All services are free and confidential.
            </p>
          </div>
        </div>
      </div>

      {/* Support Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {supportCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
                  {category.title}
                </h3>
                <p className="mt-2 text-gray-500 text-center">
                  {category.description}
                </p>
                <div className="mt-6 text-center">
                  <a
                    href={category.link}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-red-600">
                  Need Immediate Help?
                </h2>
                <p className="mt-2 text-gray-600">
                  Our emergency helpline is available 24/7. Don't hesitate to reach out.
                </p>
                <div className="mt-4">
                  <a
                    href="tel:+1-800-123-4567"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call 1-800-123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500 text-sm">
          <p>Your privacy and safety are our top priority. All communications are confidential and secure.</p>
        </div>
      </div>
    </div>
  );
}