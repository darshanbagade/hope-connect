import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Program Graduate',
    content: 'Through this platform, I found not just a job, but a new beginning. The training and support changed my life completely.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Michael R.',
    role: 'NGO Partner',
    content: 'The platform has revolutionized how we connect with and help those in need. The impact tracking tools are invaluable.',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export function Testimonials() {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Real stories from people whose lives have been transformed through our platform.
            </p>
          </div>
          <div className="mt-20">
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="lg:col-span-1">
                  <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden p-8">
                    <div className="flex items-center">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                      />
                      <div className="ml-4">
                        <div className="text-lg font-medium text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-base text-gray-500">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-gray-500">
                      {testimonial.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}