
import React from 'react';
import { UserGroupIcon, GlobeAltIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary tracking-tight">About EngiConnect</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Building the foundations of tomorrow. We are more than an engineering firm; we are a community of innovators, thinkers, and builders dedicated to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/about/800/600" 
              alt="Our Team"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <div>
              <RocketLaunchIcon className="h-10 w-10 text-brand-secondary mb-3"/>
              <h2 className="text-3xl font-bold text-brand-dark">Our Mission</h2>
              <p className="mt-2 text-gray-600">
                To deliver superior engineering and construction solutions through innovation, integrity, and collaboration. We aim to create lasting value for our clients, partners, and the communities we serve.
              </p>
            </div>
            <div>
              <GlobeAltIcon className="h-10 w-10 text-brand-secondary mb-3"/>
              <h2 className="text-3xl font-bold text-brand-dark">Our Vision</h2>
              <p className="mt-2 text-gray-600">
                To be the leading digital ecosystem for the engineering and construction industry, fostering a transparent and efficient environment where professionals connect, projects thrive, and innovation flourishes.
              </p>
            </div>
            <div>
              <UserGroupIcon className="h-10 w-10 text-brand-secondary mb-3"/>
              <h2 className="text-3xl font-bold text-brand-dark">Our Values</h2>
              <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                <li><span className="font-semibold">Quality:</span> Uncompromising standards in every detail.</li>
                <li><span className="font-semibold">Integrity:</span> Ethical and transparent in all our dealings.</li>
                <li><span className="font-semibold">Innovation:</span> Pushing boundaries to find better solutions.</li>
                <li><span className="font-semibold">Collaboration:</span> Achieving more together through our platform.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary text-center mb-12">Meet Our Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'John Doe', title: 'CEO & Founder', image: 'https://picsum.photos/seed/leader1/300/300' },
              { name: 'Jane Smith', title: 'Chief Engineer', image: 'https://picsum.photos/seed/leader2/300/300' },
              { name: 'Peter Jones', title: 'Head of Projects', image: 'https://picsum.photos/seed/leader3/300/300' },
              { name: 'Mary Johnson', title: 'Platform Director', image: 'https://picsum.photos/seed/leader4/300/300' },
            ].map((leader, index) => (
              <div key={index} className="text-center">
                <img src={leader.image} alt={leader.name} className="w-40 h-40 rounded-full mx-auto shadow-lg mb-4" />
                <h3 className="text-xl font-bold text-brand-dark">{leader.name}</h3>
                <p className="text-brand-secondary">{leader.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
