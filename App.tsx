
import React, { useState } from 'react';
import { Page } from './types';
import { NAV_LINKS } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import PlatformPage from './components/PlatformPage';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (activePage) {
      case Page.Home:
        return <HomePage setActivePage={setActivePage} />;
      case Page.About:
        return <AboutPage />;
      case Page.Services:
        return <ServicesPage />;
      case Page.Projects:
        return <ProjectsPage />;
      case Page.Platform:
        return <PlatformPage />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="bg-brand-light min-h-screen flex flex-col font-sans text-brand-dark">
      <Header activePage={activePage} setActivePage={setActivePage} navLinks={NAV_LINKS} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setActivePage={setActivePage} />
      <Chatbot />
    </div>
  );
};

export default App;
