
import React from 'react';
import { SERVICES_DATA } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-brand-light py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary tracking-tight">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Comprehensive solutions tailored to meet the demands of modern engineering and construction projects. We are your end-to-end partner for success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start"
            >
              <div className="bg-brand-secondary/10 p-4 rounded-full mb-6">
                <service.icon className="h-10 w-10 text-brand-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-white p-12 rounded-lg shadow-xl border border-gray-200">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-primary">Have a Custom Project?</h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">We excel at tackling unique challenges. Contact us to discuss your specific requirements, and let's build something extraordinary together.</p>
            <button className="mt-6 bg-brand-accent text-brand-dark font-bold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-400 transition-transform transform hover:scale-105">
              Request a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
