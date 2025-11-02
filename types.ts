// Fix: Add import for React to use React.ComponentType
import React from 'react';

export enum Page {
  Home = 'Home',
  About = 'About Us',
  Services = 'Our Services',
  Projects = 'Our Projects',
  Platform = 'Our Platform',
  Contact = 'Contact Us',
}

export interface NavLink {
  name: Page;
  href: string;
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface ChatMessage {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    isLoading?: boolean;
}