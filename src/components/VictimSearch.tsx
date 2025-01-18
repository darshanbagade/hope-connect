import React, { useState } from 'react';
import { Search, MapPin, Filter, RefreshCcw, Heart } from 'lucide-react';

interface Victim {
  id: string;
  name: string;
  photo?: string;
  skills: string[];
  location: string;
  jobReadiness: string;
  category: string;
  story: string;
  needs: string[];
}

const mockVictims: Victim[] = [
  {
    id: '1',
    name: 'Sarah M.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    skills: ['Teaching', 'Computer Skills'],
    location: 'New York',
    jobReadiness: 'Trained',
    category: 'Domestic Abuse Victim',
    story: 'Sarah is a resilient survivor seeking opportunities in education...',
    needs: ['Job Placement', 'Housing']
  },
  {
    id: '2',
    name: 'John D.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    skills: ['IT', 'Web Development'],
    location: 'Chicago',
    jobReadiness: 'Needs Training',
    category: 'Veteran',
    story: 'John served his country and is now looking to transition into tech...',
    needs: ['Training', 'Mental Health Support']
  }
];

const categories = [
  'Orphan',
  'Rape Survivor',
  'Veteran',
  'Domestic Abuse Victim',
  'Refugee',
  'Human Trafficking Survivor',
  'Other'
];

export function VictimSearch() {
  const [selectedVictim, setSelectedVictim] = useState<Victim | null>(null);
  const [filters, setFilters] = useState({
    location: '',
    ageRange: '',
    category: '',
    jobReadiness: '',
    skills: '',
    availability: ''
  });

  const resetFilters = () => {
    setFilters({
      location: '',
      ageRange: '',
      category: '',
      jobReadiness: '',
      skills: '',
      availability: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center">
            Find a Victim in Need of Help
          </h1>
          <p className="mt-4 text-xl text-center text-blue-100">
            Explore, filter, and connect with victims based on their skills, location, and needs.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Search Bar */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, skill, location, or category..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="border border-gray-300 rounded-lg p-2"
            >
              <option value="">Select Location</option>
              <option value="ny">New York</option>
              <option value="ch">Chicago</option>
              <option value="la">Los Angeles</option>
            </select>

            <select
              value={filters.ageRange}
              onChange={(e) => setFilters({ ...filters, ageRange: e.target.value })}
              className="border border-gray-300 rounded-lg p-2"
            >
              <option value="">Select Age Range</option>
              <option value="0-18">0-18</option>
              <option value="19-30">19-30</option>
              <option value="31-45">31-45</option>
              <option value="46+">46+</option>
            </select>

            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="border border-gray-300 rounded-lg p-2"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={filters.jobReadiness}
              onChange={(e) => setFilters({ ...filters, jobReadiness: e.target.value })}
              className="border border-gray-300 rounded-lg p-2"
            >
              <option value="">Job Readiness</option>
              <option value="trained">Trained</option>
              <option value="needs-training">Needs Training</option>
              <option value="seeking-support">Seeking Support</option>
            </select>

            <input
              type="text"
              placeholder="Skills (e.g., Teaching, IT)"
              value={filters.skills}
              onChange={(e) => setFilters({ ...filters, skills: e.target.value })}
              className="border border-gray-300 rounded-lg p-2"
            />

            <select
              value={filters.availability}
              onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
              className="border border-gray-300 rounded-lg p-2"
            >
              <option value="">Availability</option>
              <option value="remote">Remote</option>
              <option value="in-person">In-Person</option>
              <option value="both">Both</option>
            </select>
          </div>

          <button
            onClick={resetFilters}
            className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            <RefreshCcw className="h-4 w-4 mr-2" />
            Reset Filters
          </button>
        </div>
      </div>

      {/* Victim Listings */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Victims in Need of Support</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockVictims.map((victim) => (
            <div
              key={victim.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  {victim.photo ? (
                    <img
                      src={victim.photo}
                      alt={victim.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <Heart className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{victim.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {victim.location}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {victim.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-semibold">Status:</span> {victim.jobReadiness}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold">Category:</span> {victim.category}
                  </p>
                </div>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => setSelectedVictim(victim)}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    View Profile
                  </button>
                  <button className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                    Contact NGO
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Previous</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">2</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Next</button>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">
                "John was once an orphan, but with the help of our platform, he secured a job as a teacher!"
              </p>
              <p className="text-sm text-gray-500">- Success Story</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">
                "I volunteered as a mentor and helped a rape survivor learn new skills. It was life-changing."
              </p>
              <p className="text-sm text-gray-500">- Volunteer Testimonial</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Make a Difference?</h2>
          <p className="text-xl text-blue-100 mb-8">You can change a life today!</p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Become a Volunteer
            </button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Victim Profile Modal */}
      {selectedVictim && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  {selectedVictim.photo ? (
                    <img
                      src={selectedVictim.photo}
                      alt={selectedVictim.name}
                      className="h-20 w-20 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                      <Heart className="h-10 w-10 text-gray-400" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedVictim.name}</h3>
                    <p className="text-gray-500">{selectedVictim.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVictim(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Story</h4>
                  <p className="text-gray-600">{selectedVictim.story}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedVictim.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Current Needs</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedVictim.needs.map((need) => (
                      <span
                        key={need}
                        className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                      >
                        {need}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Contact NGO for Support
                  </button>
                  <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Offer Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}