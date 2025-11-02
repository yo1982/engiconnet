
import React from 'react';
import { Page } from '../types';
import { SERVICES_DATA, PROJECTS_DATA } from '../constants';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

interface HomePageProps {
  setActivePage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActivePage }) => {
    
    const handleNavClick = (page: Page) => {
        setActivePage(page);
        window.scrollTo(0, 0);
    }
    
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center text-white py-32 md:py-48" 
        style={{backgroundImage: "linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 21, 41, 0.7)), url(https://picsum.photos/seed/hero/1920/1080)"}}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Engineering the Future, Together.</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            EngiConnect is your premier partner for contracting and engineering consulting, and an interactive platform to connect professionals with projects.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => handleNavClick(Page.Services)}
              className="bg-brand-accent text-brand-dark font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => handleNavClick(Page.Platform)}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-brand-primary transition-colors"
            >
              Join The Platform
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Our Core Competencies</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We provide a full spectrum of engineering services to bring your vision to life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 3).map((service, index) => (
              <div key={index} className="bg-brand-light p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <service.icon className="h-12 w-12 text-brand-secondary mb-4" />
                <h3 className="text-xl font-bold text-brand-dark mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <button 
                onClick={() => handleNavClick(Page.Services)}
                className="text-brand-secondary font-semibold hover:text-brand-primary transition-colors flex items-center justify-center mx-auto"
            >
                View All Services <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
           </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Landmark Projects</h2>
            <p className="mt-4 text-lg text-gray-600">A glimpse into our portfolio of success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
            <div className="text-center mt-12">
                <button 
                    onClick={() => handleNavClick(Page.Projects)}
                    className="bg-brand-secondary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
                >
                    Discover More Projects
                </button>
            </div>
        </div>
      </section>

      {/* Platform CTA */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">The Hub for Engineering Excellence</h2>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                Join our digital platform to find projects, collaborate with peers, and access a network of industry-leading professionals.
            </p>
            <button
                onClick={() => handleNavClick(Page.Platform)}
                className="mt-8 bg-brand-accent text-brand-dark font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
            >
              Get Started on the Platform
            </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
