import React, { useState } from 'react';
import { Search, Building2, Filter, ChevronLeft, ChevronRight, ExternalLink, MapPin, Users, Briefcase, Heart } from 'lucide-react';

interface Partner {
  id: string;
  type: 'ngo' | 'corporate';
  name: string;
  logo: string;
  description: string;
  focusAreas?: string[];
  industry?: string;
  location: string;
  size?: string;
}

const mockPartners: Partner[] = [
  {
    id: '1',
    type: 'ngo',
    name: 'Hope Foundation',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop',
    description: 'Dedicated to providing education and healthcare to trafficking survivors.',
    focusAreas: ['Education', 'Healthcare', 'Rehabilitation'],
    location: 'New York, USA'
  },
  {
    id: '2',
    type: 'corporate',
    name: 'Tech Innovators Inc.',
    logo: 'https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=200&h=200&fit=crop',
    description: 'Providing job training and employment opportunities.',
    industry: 'Technology',
    location: 'San Francisco, USA',
    size: 'Large'
  },
  // Add more mock partners here
];

export function Partners() {
  const [activeTab, setActiveTab] = useState<'ngo' | 'corporate'>('ngo');
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [filters, setFilters] = useState({
    search: '',
    focusArea: '',
    industry: '',
    location: '',
    size: ''
  });

  const filteredPartners = mockPartners.filter(partner => 
    partner.type === activeTab &&
    (filters.search === '' || 
     partner.name.toLowerCase().includes(filters.search.toLowerCase()) ||
     partner.description.toLowerCase().includes(filters.search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-blue-600 text-white py-24"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Esteemed Partners
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Together, we create lasting change for victims in need
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Become a Partner
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            <button
              onClick={() => setActiveTab('ngo')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'ngo'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              NGO Partners
            </button>
            <button
              onClick={() => setActiveTab('corporate')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'corporate'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Corporate Partners
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search partners..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {activeTab === 'ngo' ? (
              <select
                value={filters.focusArea}
                onChange={(e) => setFilters({ ...filters, focusArea: e.target.value })}
                className="border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="">All Focus Areas</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="rehabilitation">Rehabilitation</option>
              </select>
            ) : (
              <select
                value={filters.industry}
                onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                className="border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="">All Industries</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
              </select>
            )}

            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">All Locations</option>
              <option value="usa">United States</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
            </select>

            {activeTab === 'corporate' && (
              <select
                value={filters.size}
                onChange={(e) => setFilters({ ...filters, size: e.target.value })}
                className="border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="">All Sizes</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            )}

            <button
              onClick={() => setFilters({ search: '', focusArea: '', industry: '', location: '', size: '' })}
              className="text-gray-600 hover:text-gray-900"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {partner.location}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{partner.description}</p>

                {partner.type === 'ngo' && partner.focusAreas && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {partner.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {partner.type === 'corporate' && partner.industry && (
                  <div className="mb-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      {partner.industry}
                    </span>
                  </div>
                )}

                <button
                  onClick={() => setSelectedPartner(partner)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Learn More
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">2</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">3</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Partner Details Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedPartner.logo}
                    alt={selectedPartner.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedPartner.name}
                    </h3>
                    <p className="text-gray-500">
                      {selectedPartner.type === 'ngo' ? 'NGO Partner' : 'Corporate Partner'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="text-gray-400 hover:text-gray-500 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                  <p className="text-gray-600">{selectedPartner.description}</p>
                </div>

                {selectedPartner.type === 'ngo' && selectedPartner.focusAreas && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedPartner.type === 'corporate' && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Industry & Size</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {selectedPartner.industry}
                      </span>
                      {selectedPartner.size && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {selectedPartner.size} Enterprise
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {selectedPartner.location}
                  </p>
                </div>

                <div className="flex gap-4 mt-8">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Contact Partner
                  </button>
                  <button className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our network of partners and help create lasting change
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Partner with Us
            </button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}