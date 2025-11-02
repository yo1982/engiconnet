
import React, { useState } from 'react';
import { Page, NavLink } from '../types';
import { Bars3Icon, XMarkIcon, BuildingStorefrontIcon } from '@heroicons/react/24/solid';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage, navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    setIsOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick(Page.Home)}
          >
            <BuildingStorefrontIcon className="h-8 w-8 text-brand-primary" />
            <span className="ml-2 text-2xl font-bold text-brand-primary">EngiConnect</span>
          </div>
          <nav className="hidden md:flex space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.name);
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  activePage === link.name
                    ? 'bg-brand-primary text-white'
                    : 'text-brand-dark hover:bg-brand-primary/10 hover:text-brand-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-dark hover:text-white hover:bg-brand-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.name);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activePage === link.name
                    ? 'bg-brand-primary text-white'
                    : 'text-brand-dark hover:bg-gray-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
