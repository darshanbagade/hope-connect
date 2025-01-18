import React, { useState } from 'react';
import { Heart, Users, Briefcase, TrendingUp, Shield, CreditCard, CheckCircle, Gift } from 'lucide-react';

interface DonationAmount {
  value: number;
  impact: string;
}

const donationAmounts: DonationAmount[] = [
  { value: 10, impact: 'Provides a day of training for one victim' },
  { value: 50, impact: 'Supports a week of rehabilitation services' },
  { value: 100, impact: 'Funds a month of skill development courses' },
];

const impactMetrics = [
  { icon: Users, label: 'Lives Changed', value: '1,000+' },
  { icon: Briefcase, label: 'Jobs Provided', value: '200+' },
  { icon: TrendingUp, label: 'Success Rate', value: '85%' },
];

const categories = [
  { name: 'Orphans', progress: 75, goal: 50000, raised: 37500 },
  { name: 'Rehabilitation', progress: 60, goal: 75000, raised: 45000 },
  { name: 'Job Training', progress: 85, goal: 30000, raised: 25500 },
  { name: 'Medical Aid', progress: 45, goal: 40000, raised: 18000 },
];

export function Donate() {
  const [amount, setAmount] = useState<number | string>('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-blue-600 text-white py-24"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Contribution Can Change Lives
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Every donation helps us empower victims and build a better future
          </p>
          <div className="flex justify-center space-x-4">
            <Shield className="h-12 w-12 text-white opacity-75" />
            <span className="text-lg">Secure & Tax-Deductible Donations</span>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactMetrics.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900">{value}</div>
                <div className="text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Make Your Donation</h2>
              
              <form onSubmit={handleDonate}>
                {/* Donation Amounts */}
                <div className="space-y-4 mb-8">
                  <div className="grid grid-cols-3 gap-4">
                    {donationAmounts.map(({ value, impact }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setAmount(value)}
                        className={`p-4 rounded-lg border ${
                          amount === value
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-gray-200 hover:border-blue-600'
                        }`}
                      >
                        <div className="text-xl font-bold">${value}</div>
                        <div className="text-sm text-gray-500 mt-1">{impact}</div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-gray-500">$</span>
                    <input
                      type="number"
                      value={typeof amount === 'string' ? amount : ''}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Custom Amount"
                      className="w-full pl-8 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Recurring Donation */}
                <div className="mb-8">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={isRecurring}
                      onChange={(e) => setIsRecurring(e.target.checked)}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>Make this a monthly donation</span>
                  </label>
                  {isRecurring && (
                    <p className="text-sm text-gray-500 mt-2">
                      Your recurring donation helps us plan and sustain our programs
                    </p>
                  )}
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Choose a Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">General Fund</option>
                    {categories.map(({ name }) => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                </div>

                {/* Payment Information */}
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Information
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Card number"
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Donate Now
                </button>
              </form>

              {/* Success Message */}
              {showSuccess && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-green-700">Thank you for your donation!</span>
                </div>
              )}
            </div>
          </div>

          {/* Progress and Impact */}
          <div className="space-y-8">
            {/* Category Progress */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Campaigns</h2>
              <div className="space-y-6">
                {categories.map(({ name, progress, goal, raised }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900">{name}</span>
                      <span className="text-gray-500">${raised.toLocaleString()} raised</span>
                    </div>
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                        <div
                          style={{ width: `${progress}%` }}
                          className="bg-blue-600 rounded"
                        />
                      </div>
                      <div className="text-right mt-1">
                        <span className="text-sm text-gray-500">
                          Goal: ${goal.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                    alt="Success Story"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Meera's Story</h3>
                    <p className="text-gray-600">
                      "Thanks to donors like you, I now have a stable job and can support my family."
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                    alt="Success Story"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">John's Journey</h3>
                    <p className="text-gray-600">
                      "The training program changed my life. I'm now working as a software developer."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Match */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-4">
                <Gift className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Double Your Impact</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Many companies match their employees' donations. Check if your company participates!
              </p>
              <input
                type="text"
                placeholder="Search your company..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}