
import { Page, NavLink, Service, Project } from './types';
import { BuildingOffice2Icon, WrenchScrewdriverIcon, ChartBarIcon, ShieldCheckIcon, LightBulbIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export const NAV_LINKS: NavLink[] = [
  { name: Page.Home, href: '#home' },
  { name: Page.About, href: '#about' },
  { name: Page.Services, href: '#services' },
  { name: Page.Projects, href: '#projects' },
  { name: Page.Platform, href: '#platform' },
  { name: Page.Contact, href: '#contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    icon: BuildingOffice2Icon,
    title: 'Architectural Design',
    description: 'Innovative and sustainable architectural solutions from concept to completion for residential, commercial, and public spaces.',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Civil & Structural Engineering',
    description: 'Comprehensive engineering services ensuring the structural integrity and longevity of your projects.',
  },
  {
    icon: ChartBarIcon,
    title: 'Project Management',
    description: 'Expert project management to deliver your projects on time, within budget, and to the highest quality standards.',
  },
  {
    icon: LightBulbIcon,
    title: 'Engineering Consulting',
    description: 'Strategic consulting to help you navigate complex engineering challenges and optimize project outcomes.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality Assurance & Control',
    description: 'Rigorous testing and inspection services to ensure compliance with industry standards and project specifications.',
  },
  {
    icon: UserGroupIcon,
    title: 'Contractor Sourcing',
    description: 'Connecting you with a network of vetted, reliable contractors tailored to your project\'s specific needs through our platform.',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Azure Tower Downtown',
    category: 'Commercial High-Rise',
    description: 'A 50-story mixed-use skyscraper featuring state-of-the-art sustainable design and smart building technology.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
  },
  {
    id: 2,
    title: 'Metropolis Suspension Bridge',
    category: 'Infrastructure',
    description: 'A landmark suspension bridge connecting two major city districts, designed for high traffic volume and seismic resilience.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
  },
  {
    id: 3,
    title: 'Greenwood Community Center',
    category: 'Public & Community',
    description: 'An eco-friendly community hub with recreational facilities, a library, and green spaces, built using recycled materials.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
  },
  {
    id: 4,
    title: 'Oasis Luxury Villas',
    category: 'Residential',
    description: 'An exclusive gated community of 50 luxury villas, each featuring modern architecture and private amenities.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
  },
    {
    id: 5,
    title: 'Quantum Data Center',
    category: 'Industrial & Tech',
    description: 'A Tier IV data center with redundant power and cooling systems, designed for maximum uptime and security.',
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
  },
  {
    id: 6,
    title: 'Historic District Renovation',
    category: 'Urban Renewal',
    description: 'The meticulous restoration and modernization of a historic city block, preserving its architectural heritage.',
    imageUrl: 'https://picsum.photos/seed/project6/600/400',
  },
];
