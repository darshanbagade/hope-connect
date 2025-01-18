import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white">HopeConnect</h3>
            <p className="mt-4 text-base text-gray-300">
              Empowering lives and building futures through meaningful connections
              between victims, NGOs, and companies.
            </p>
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/about" className="text-base text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/victims" className="text-base text-gray-300 hover:text-white">
                  Find Help
                </a>
              </li>
              <li>
                <a href="/ngo" className="text-base text-gray-300 hover:text-white">
                  NGO Portal
                </a>
              </li>
              <li>
                <a href="/companies" className="text-base text-gray-300 hover:text-white">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <a href="mailto:support@hopeconnect.org" className="text-base text-gray-300 hover:text-white">
                  support@hopeconnect.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-base text-gray-300">
                  +1 (555) 123-4567
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} HopeConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}