import React, { useState } from 'react';
import { 
  Building2, 
  Upload, 
  Target, 
  Users, 
  MapPin, 
  FileText, 
  Phone, 
  Mail,
  Heart,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  Save
} from 'lucide-react';

interface FormData {
  // Basic Details
  name: string;
  registrationNumber: string;
  email: string;
  phone: string;
  logo: File | null;
  
  // Mission
  missionStatement: string;
  focusAreas: string[];
  
  // Services
  services: string[];
  beneficiaryTypes: string[];
  
  // Operations
  locations: string[];
  teamSize: string;
  ongoingProjects: string;
  
  // Impact
  peopleHelped: string;
  achievements: string[];
  
  // Documents
  registrationCertificate: File | null;
  taxExemption: File | null;
  
  // Contact
  pocName: string;
  pocEmail: string;
  pocPhone: string;
  pocRole: string;
  
  // Consent
  termsAccepted: boolean;
}

const initialFormData: FormData = {
  name: '',
  registrationNumber: '',
  email: '',
  phone: '',
  logo: null,
  missionStatement: '',
  focusAreas: [],
  services: [],
  beneficiaryTypes: [],
  locations: [],
  teamSize: '',
  ongoingProjects: '',
  peopleHelped: '',
  achievements: [],
  registrationCertificate: null,
  taxExemption: null,
  pocName: '',
  pocEmail: '',
  pocPhone: '',
  pocRole: '',
  termsAccepted: false
};

const steps = [
  'Basic Details',
  'Mission',
  'Services',
  'Operations',
  'Impact',
  'Documents',
  'Contact',
  'Review'
];

const focusAreaOptions = [
  'Education',
  'Healthcare',
  'Poverty Alleviation',
  'Women Empowerment',
  'Child Welfare',
  'Elderly Care',
  'Disability Support',
  'Mental Health',
  'Skill Development',
  'Rural Development'
];

const serviceOptions = [
  'Training Programs',
  'Healthcare Services',
  'Counseling',
  'Education Support',
  'Financial Aid',
  'Legal Assistance',
  'Shelter Services',
  'Food Support',
  'Job Placement',
  'Rehabilitation'
];

export function NGORegistration() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof FormData) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, [fieldName]: file }));
  };

  const handleCheckboxChange = (value: string, field: keyof FormData) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
      setError(null);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
    setError(null);
  };

  const validateCurrentStep = () => {
    // Add validation logic based on currentStep
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateCurrentStep()) {
      // Simulate API call
      setSuccess('Registration successful! We will review your application and contact you soon.');
    }
  };

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex-1 text-center ${
              index === currentStep
                ? 'text-blue-600 font-semibold'
                : index < currentStep
                ? 'text-green-600'
                : 'text-gray-400'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>
    </div>
  );

  const renderBasicDetails = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          NGO Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter NGO name"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Registration Number
        </label>
        <input
          type="text"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter registration number"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email address"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter phone number"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Logo
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue-600 rounded-lg shadow-lg tracking-wide border border-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white">
            <Upload className="w-8 h-8" />
            <span className="mt-2 text-base leading-normal">
              {formData.logo ? formData.logo.name : 'Select a file'}
            </span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleFileChange(e, 'logo')}
            />
          </label>
        </div>
      </div>
    </div>
  );

  const renderMission = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mission Statement
        </label>
        <textarea
          name="missionStatement"
          value={formData.missionStatement}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Enter your organization's mission statement"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Focus Areas
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {focusAreaOptions.map(area => (
            <label
              key={area}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.focusAreas.includes(area)}
                onChange={() => handleCheckboxChange(area, 'focusAreas')}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{area}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Services Offered
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {serviceOptions.map(service => (
            <label
              key={service}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleCheckboxChange(service, 'services')}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Beneficiary Types
        </label>
        <input
          type="text"
          name="beneficiaryTypes"
          value={formData.beneficiaryTypes}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="E.g., Children, Elderly, Women, etc."
        />
      </div>
    </div>
  );

  const renderOperations = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Operational Locations
        </label>
        <input
          type="text"
          name="locations"
          value={formData.locations}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter cities or regions"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Team Size
        </label>
        <select
          name="teamSize"
          value={formData.teamSize}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select team size</option>
          <option value="1-10">1-10 members</option>
          <option value="11-50">11-50 members</option>
          <option value="51-200">51-200 members</option>
          <option value="201+">201+ members</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ongoing Projects
        </label>
        <textarea
          name="ongoingProjects"
          value={formData.ongoingProjects}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Describe your current projects"
        />
      </div>
    </div>
  );

  const renderImpact = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Number of People Helped
        </label>
        <input
          type="number"
          name="peopleHelped"
          value={formData.peopleHelped}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter number"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Major Achievements
        </label>
        <textarea
          name="achievements"
          value={formData.achievements}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="List your major achievements"
        />
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Registration Certificate
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue-600 rounded-lg shadow-lg tracking-wide border border-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white">
            <Upload className="w-8 h-8" />
            <span className="mt-2 text-base leading-normal">
              {formData.registrationCertificate
                ? formData.registrationCertificate.name
                : 'Upload Registration Certificate'}
            </span>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, 'registrationCertificate')}
            />
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tax Exemption Certificate
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue-600 rounded-lg shadow-lg tracking-wide border border-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white">
            <Upload className="w-8 h-8" />
            <span className="mt-2 text-base leading-normal">
              {formData.taxExemption
                ? formData.taxExemption.name
                : 'Upload Tax Exemption Certificate'}
            </span>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, 'taxExemption')}
            />
          </label>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Point of Contact Name
        </label>
        <input
          type="text"
          name="pocName"
          value={formData.pocName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter full name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="pocEmail"
            value={formData.pocEmail}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="pocPhone"
            value={formData.pocPhone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter phone number"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Role
        </label>
        <input
          type="text"
          name="pocRole"
          value={formData.pocRole}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter role in organization"
        />
      </div>
    </div>
  );

  const renderReview = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Your Information</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700">Basic Details</h4>
            <p className="text-sm text-gray-600">
              Name: {formData.name}<br />
              Registration: {formData.registrationNumber}<br />
              Email: {formData.email}<br />
              Phone: {formData.phone}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-700">Mission & Services</h4>
            <p className="text-sm text-gray-600">
              Focus Areas: {formData.focusAreas.join(', ')}<br />
              Services: {formData.services.join(', ')}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-700">Operations</h4>
            <p className="text-sm text-gray-600">
              Locations: {formData.locations.join(', ')}<br />
              Team Size: {formData.teamSize}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-700">Point of Contact</h4>
            <p className="text-sm text-gray-600">
              Name: {formData.pocName}<br />
              Role: {formData.pocRole}<br />
              Email: {formData.pocEmail}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="terms"
          checked={formData.termsAccepted}
          onChange={(e) => setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }))}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
          I agree to the terms and conditions and consent to sharing NGO details
        </label>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return renderBasicDetails();
      case 1:
        return renderMission();
      case 2:
        return renderServices();
      case 3:
        return renderOperations();
      case 4:
        return renderImpact();
      case 5:
        return renderDocuments();
      case 6:
        return renderContact();
      case 7:
        return renderReview();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Join as an NGO Partner</h1>
          <p className="mt-2 text-gray-600">
            Complete the registration process to join our network of NGOs making a difference
          </p>
        </div>

        {/* Progress Bar */}
        {renderProgressBar()}

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            {/* Error Alert */}
            {error && (
              <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-400 text-red-700">
                <div className="flex">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <p>{error}</p>
                </div>
              </div>
            )}

            {/* Success Alert */}
            {success && (
              <div className="mb-4 p-4 bg-green-50 border-l-4 border-green-400 text-green-700">
                <div className="flex">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <p>{success}</p>
                </div>
              </div>
            )}

            {/* Step Content */}
            {renderCurrentStep()}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                  currentStep === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Previous
              </button>

              <button
                type="button"
                onClick={handleNext}
                className={`flex items-center px-6 py-2 text-sm font-medium rounded-lg ${
                  currentStep === steps.length - 1
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {currentStep === steps.length - 1 ? (
                  <>
                    Submit
                    <CheckCircle className="h-5 w-5 ml-1" />
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="h-5 w-5 ml-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Save Progress */}
        <div className="mt-4 text-center">
          <button
            type="button"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <Save className="h-4 w-4 mr-1" />
            Save Progress
          </button>
        </div>
      </div>
    </div>
  );
}