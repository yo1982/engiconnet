
import React, { useState, useMemo } from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => ['All', ...new Set(PROJECTS_DATA.map(p => p.category))], []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary tracking-tight">Our Projects</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            A portfolio of excellence, showcasing our commitment to quality, innovation, and client satisfaction across diverse sectors.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <div key={project.id} className="group bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-brand-secondary uppercase tracking-wider">{project.category}</p>
                <h3 className="mt-1 text-xl font-bold text-brand-dark">{project.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
