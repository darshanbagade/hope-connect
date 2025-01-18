import React from 'react';
import { Heart, Users, Building2, TrendingUp } from 'lucide-react';

const impactMetrics = [
  { icon: Users, label: 'Lives Impacted', value: '10,000+' },
  { icon: Building2, label: 'Partner NGOs', value: '150+' },
  { icon: TrendingUp, label: 'Success Rate', value: '85%' },
];

export function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Empowering Lives</span>
                <span className="block text-blue-600">Building Futures</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Connecting vulnerable individuals with organizations and companies
                that can help them achieve financial and social stability.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="/victims"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Find Help
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/ngo"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    Join as NGO
                  </a>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {impactMetrics.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="text-center"
                  >
                    <div className="flex justify-center">
                      <Icon className="h-10 w-10 text-blue-600" />
                    </div>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900">
                      {value}
                    </p>
                    <p className="mt-1 text-lg text-gray-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}