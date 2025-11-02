
import React, { useState } from 'react';
import { PROJECTS_DATA } from '../constants';

const PlatformPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('projects');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'projects':
                return <ProjectListings />;
            case 'register':
                return <RegistrationForm />;
            case 'dashboard':
                return <DashboardPreview />;
            default:
                return <ProjectListings />;
        }
    };

    return (
        <div className="bg-brand-light py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary tracking-tight">The EngiConnect Platform</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Your digital gateway to a world of engineering opportunities. Connect, collaborate, and build with the best in the industry.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="mb-8 border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            <button
                                onClick={() => setActiveTab('projects')}
                                className={`${activeTab === 'projects' ? 'border-brand-secondary text-brand-secondary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                            >
                                Project Marketplace
                            </button>
                            <button
                                onClick={() => setActiveTab('register')}
                                className={`${activeTab === 'register' ? 'border-brand-secondary text-brand-secondary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                            >
                                Register Your Firm
                            </button>
                             <button
                                onClick={() => setActiveTab('dashboard')}
                                className={`${activeTab === 'dashboard' ? 'border-brand-secondary text-brand-secondary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                            >
                                Dashboard Preview
                            </button>
                        </nav>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectListings: React.FC = () => (
    <div>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Available Projects</h2>
        <div className="space-y-4">
            {PROJECTS_DATA.slice(0,4).map(project => (
                <div key={project.id} className="p-4 border rounded-lg flex items-center justify-between hover:bg-gray-50">
                    <div>
                        <h3 className="font-bold text-brand-primary">{project.title}</h3>
                        <p className="text-sm text-gray-500">{project.category}</p>
                    </div>
                    <button className="bg-brand-secondary text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-600">View Details</button>
                </div>
            ))}
        </div>
    </div>
);

const RegistrationForm: React.FC = () => (
    <div>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Join Our Network of Professionals</h2>
        <form className="space-y-4">
            <input type="text" placeholder="Company / Individual Name" className="w-full p-3 border rounded-md focus:ring-brand-secondary focus:border-brand-secondary" />
            <select className="w-full p-3 border rounded-md focus:ring-brand-secondary focus:border-brand-secondary">
                <option>Select Specialization</option>
                <option>Architect</option>
                <option>Civil Engineer</option>
                <option>Contractor</option>
                <option>Project Manager</option>
            </select>
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-md focus:ring-brand-secondary focus:border-brand-secondary" />
            <input type="text" placeholder="Geographical Location (e.g., New York, NY)" className="w-full p-3 border rounded-md focus:ring-brand-secondary focus:border-brand-secondary" />
            <button type="submit" className="w-full bg-brand-accent text-brand-dark font-bold py-3 px-4 rounded-lg hover:bg-yellow-400">Register</button>
        </form>
    </div>
);

const DashboardPreview: React.FC = () => (
    <div>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Admin Control Panel (Preview)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-100 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-800">142</p>
                <p className="text-sm text-blue-600">Active Projects</p>
            </div>
             <div className="p-4 bg-green-100 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-800">89</p>
                <p className="text-sm text-green-600">New Messages</p>
            </div>
             <div className="p-4 bg-yellow-100 rounded-lg text-center">
                <p className="text-3xl font-bold text-yellow-800">12</p>
                <p className="text-sm text-yellow-600">Pending Approvals</p>
            </div>
        </div>
        <div className="mt-6 p-4 border rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Manage Ad Banners</h3>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <p>Homepage Banner - "Innovate & Build"</p>
                <button className="text-sm text-white bg-brand-primary px-3 py-1 rounded-md">Edit Schedule</button>
            </div>
        </div>
    </div>
);


export default PlatformPage;
