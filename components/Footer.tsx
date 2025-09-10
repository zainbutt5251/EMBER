'use client';

import { Flame, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/footerlogo.png';

const navigation = {
  services: [
    { name: 'Strategic Planning', href: '#' },
    { name: 'Operations Excellence', href: '#' },
    { name: 'Change Management', href: '#' },
    { name: 'Performance Analytics', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Case Studies', href: '#' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Whitepapers', href: '#' },
    { name: 'Webinars', href: '#' },
    { name: 'Newsletter', href: '#' },
  ],
  support: [
    { name: 'Contact', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <img src={logo.src} alt="Company Logo" className="h-8 w-auto" />
            </div>
            
            <p className="text-sm leading-6 text-gray-300">
              Igniting business transformation through strategic consulting excellence. 
              We partner with organizations to unlock their full potential and drive sustainable growth.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                <MapPin className="h-5 w-5 mr-3 text-orange-500" />
                <span className="text-sm">123 Business District, Innovation City, IC 12345</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5 mr-3 text-orange-500" />
                <span className="text-sm">+1 (555) 123-EMBER</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-3 text-orange-500" />
                <span className="text-sm">contact@emberconsulting.com</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white p-2"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white p-2"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white p-2"
                aria-label="Contact us via email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2025 EMBER Consulting Group. All rights reserved.
            </p>
            <p className="mt-4 text-xs leading-5 text-gray-400 md:mt-0">
              Transforming businesses since 2009
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}