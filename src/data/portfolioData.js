import myPic from '../assets/Mypic.png';
import bizWeb from '../assets/biz01.png';
import propertyWeb from '../assets/property.png';
import coffeeWeb from '../assets/coffee01.png';
import propertyApp from '../assets/Pif.png';
import bizApp from '../assets/biz app.png';

import reactIcon from '../assets/skills/react.svg';
import reactNativeIcon from '../assets/skills/reactnative.svg';
import nodeIcon from '../assets/skills/nodedotjs.svg';
import expressIcon from '../assets/skills/express.svg';
import mysqlIcon from '../assets/skills/mysql.svg';
import mongoIcon from '../assets/skills/mongodb.svg';
import pythonIcon from '../assets/skills/python.svg';
import jsIcon from '../assets/skills/javascript.svg';
import htmlIcon from '../assets/skills/html5.svg';
import cssIcon from '../assets/skills/css3.svg';
import bootstrapIcon from '../assets/skills/bootstrap.svg';
import djangoIcon from '../assets/skills/django.svg';
import axiosIcon from '../assets/skills/axios.svg';
import awsIcon from '../assets/skills/amazonaws.svg';
import gitIcon from '../assets/skills/git.svg';
import githubIcon from '../assets/skills/github.svg';
import npmIcon from '../assets/skills/npm.svg';

export const personalInfo = {
  name: 'Samuvel Reegan',
  role: 'Full-Stack Developer',
  location: 'Dindigul, Tamil Nadu, India',
  email: 'samuelreegan372@gmail.com',
  phone: '+91 9345532741',
  website: 'Sam.',
  github: 'https://github.com/SAMUVELREEGAN/',
  photo: myPic,
  tagline: 'Building scalable web & mobile experiences with React, Node.js & React Native.',
  about: `I'm a full-stack developer who turns product ideas into polished web and mobile experiences. From B2B marketplaces and real-estate platforms to e-commerce brands, I work across the stack — React & React Native on the front, Node.js, Express, and Django on the back — with a focus on clean architecture, performance, and shipping features that users actually rely on.`,
  yearsExperience: '2+ Years',
  highlights: [
    {
      title: 'Full-Stack Product Delivery',
      text: 'End-to-end ownership from UI components and state management to REST APIs, auth flows, and database design.',
    },
    {
      title: 'Mobile-First Development',
      text: 'Building cross-platform Android & iOS apps with React Native — reusable components, API integration, and performance tuning.',
    },
    {
      title: 'Real-World Domains',
      text: 'Hands-on experience across fintech, real estate, e-commerce, SaaS, and marketplace products at scale.',
    },
    {
      title: 'Collaborative Engineering',
      text: 'Comfortable working with designers, backend teams, and stakeholders — Git workflows, code reviews, and iterative delivery.',
    },
  ],
  facts: [
    { icon: '📍', label: 'Based in', value: 'Dindigul, Tamil Nadu' },
    { icon: '💼', label: 'Focus', value: 'Web & Mobile Products' },
    { icon: '🎓', label: 'Education', value: 'B.Sc Computer Science' },
    { icon: '✉️', label: 'Contact', value: 'samuelreegan372@gmail.com' },
  ],
};

export const experienceIncludes = [
  'Fintech',
  'Real Estate',
  'E-Commerce',
  'SaaS',
  'Mobile Apps',
  'Marketplace',
];

export const expStats = [
  { num: '2+', label: 'Years' },
  { num: '2', label: 'Companies' },
  { num: '5', label: 'Live Products' },
];

export const whatIOffer = [
  'React & React Native frontends',
  'Node.js / Express REST APIs',
  'MySQL & MongoDB data layers',
  'Auth, payments & third-party integrations',
  'Performance tuning & responsive UI',
];

export const experience = [
  {
    id: 1,
    company: 'Basicsbytes Infotech Private Limited',
    role: 'Full-Stack Developer',
    period: '2025 — Present',
    type: 'work',
    description:
      'Leading mobile development with React Native for production Android and iOS apps. Building reusable UI systems, integrating REST APIs, and collaborating closely with backend teams to ship stable, user-friendly releases.',
    highlights: [
      'Shipped cross-platform mobile features with reusable component libraries',
      'Integrated REST APIs with robust error handling and loading states',
      'Optimized app performance through profiling, debugging, and iteration',
    ],
    tags: ['React Native', 'REST APIs', 'Mobile', 'TypeScript'],
  },
  {
    id: 2,
    company: 'Phoenix',
    role: 'Full-Stack Developer',
    period: '2023 — 2025',
    type: 'work',
    description:
      'Contributed to template-based and custom web projects using React.js, Node.js, and Django. Delivered reusable UI components, REST API integrations, and client-specific adaptations across multiple live products.',
    highlights: [
      'Built and maintained React.js frontends for marketplace and real-estate platforms',
      'Developed Node.js & Django backends with MySQL and MongoDB',
      'Adapted designs and features to meet evolving client requirements',
    ],
    tags: ['React.js', 'Node.js', 'Django', 'MySQL'],
  },
];

export const education = [
  {
    id: 1,
    institution: 'Parvathy S Arts and Science College',
    location: 'Dindigul',
    degree: 'Bachelor of Computer Science',
    period: '2020 — 2023',
    type: 'education',
  },
];

export const primarySkills = [
  { name: 'React', icon: reactIcon, level: 'Expert' },
  { name: 'React Native', icon: reactNativeIcon, level: 'Advanced' },
  { name: 'Node.js', icon: nodeIcon, level: 'Advanced' },
  { name: 'Express.js', icon: expressIcon, level: 'Advanced' },
  { name: 'MySQL', icon: mysqlIcon, level: 'Advanced' },
  { name: 'MongoDB', icon: mongoIcon, level: 'Advanced' },
];

export const skillCategories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: jsIcon },
      { name: 'HTML5', icon: htmlIcon },
      { name: 'CSS3', icon: cssIcon },
      { name: 'Bootstrap', icon: bootstrapIcon },
      { name: 'Axios', icon: axiosIcon },
    ],
  },
  {
    label: 'Backend & Data',
    skills: [
      { name: 'Python', icon: pythonIcon },
      { name: 'Django', icon: djangoIcon },
      { name: 'REST APIs', icon: nodeIcon },
    ],
  },
  {
    label: 'DevOps & Tools',
    skills: [
      { name: 'AWS EC2', icon: awsIcon },
      { name: 'Git', icon: gitIcon },
      { name: 'GitHub', icon: githubIcon },
      { name: 'npm', icon: npmIcon },
    ],
  },
];

export const otherSkills = [
  { name: 'JavaScript', icon: jsIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'Django', icon: djangoIcon },
  { name: 'HTML5', icon: htmlIcon },
  { name: 'CSS3', icon: cssIcon },
  { name: 'Bootstrap', icon: bootstrapIcon },
  { name: 'Axios', icon: axiosIcon },
  { name: 'AWS EC2', icon: awsIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'npm', icon: npmIcon },
];

export const featuredProjects = [
  {
    id: 1,
    title: 'Biz Catalyst Marketplace',
    category: 'Web Application',
    image: bizWeb,
    link: 'https://bizaltar.com/',
    description:
      'A full-featured B2B marketplace platform enabling businesses to discover, connect, and transact seamlessly — with vendor dashboards, search, and secure workflows.',
    highlights: ['B2B vendor onboarding', 'Advanced search & filters', 'Scalable React frontend'],
    tags: ['React', 'Node.js', 'MySQL'],
    status: 'Live',
  },
  {
    id: 2,
    title: 'Properties Infinite',
    category: 'Real Estate Platform',
    image: propertyWeb,
    link: 'https://propertiesinfinite.com/',
    description:
      'Buy, sell & rent property across Tamil Nadu with verified listings, smart filters, map views, and transparent documentation.',
    highlights: ['50+ cities coverage', 'Verified listings', 'Smart property filters'],
    tags: ['React', 'Express', 'MongoDB'],
    status: 'Live',
  },
  {
    id: 3,
    title: 'Arugan Coffee',
    category: 'E-Commerce Website',
    image: coffeeWeb,
    link: 'https://arugancoffee.com',
    description:
      'Premium coffee brand website with product showcase, brand storytelling, and a polished shopping experience.',
    highlights: ['Product catalog', 'Brand storytelling', 'Responsive checkout flow'],
    tags: ['React', 'Node.js', 'REST API'],
    status: 'Live',
  },
  {
    id: 4,
    title: 'Properties Infinite App',
    category: 'Mobile Application',
    image: propertyApp,
    link: 'https://play.google.com/store/apps/details?id=com.phoneix.pif&hl=en_IN',
    description:
      'Android app for exploring thousands of verified property listings across 50+ cities in India with saved searches and alerts.',
    highlights: ['Play Store live', '50+ cities', 'Push notifications'],
    tags: ['React Native', 'REST APIs'],
    status: 'Live',
  },
  {
    id: 5,
    title: 'Biz Catalyst App',
    category: 'Mobile Application',
    image: bizApp,
    link: null,
    description:
      'Companion mobile app for the Biz Catalyst marketplace — bringing B2B discovery and transactions to Android and iOS.',
    highlights: ['Cross-platform', 'Marketplace sync', 'In active development'],
    tags: ['React Native', 'Node.js'],
    status: 'Coming Soon',
  },
];

export const githubProjects = [
  {
    id: 1,
    title: 'Real Estate Management System',
    repo: 'Real_Estate_Management_System',
    link: 'https://github.com/SAMUVELREEGAN/Real_Estate_Management_System',
    description: 'Property management system with Laravel backend and Flutter mobile app.',
    tags: ['Laravel', 'Flutter', 'JavaScript'],
    lang: 'JavaScript',
  },
  {
    id: 2,
    title: 'Retail & Resell Pricing Platform',
    repo: 'Retail-Resell-Pricing-portfolio',
    link: 'https://github.com/SAMUVELREEGAN/Retail-Resell-Pricing-portfolio',
    description: 'Retail pricing platform with separate views for customers and dealers.',
    tags: ['React', 'Django', 'MySQL'],
    lang: 'JavaScript',
  },
  {
    id: 3,
    title: 'Full-Stack E-Commerce',
    repo: 'Full_Stack',
    link: 'https://github.com/SAMUVELREEGAN/Full_Stack',
    description: 'Complete e-commerce stack with admin panel, JWT auth, and MongoDB backend.',
    tags: ['React', 'Node.js', 'MongoDB'],
    lang: 'JavaScript',
  },
  {
    id: 4,
    title: 'Student Course Management',
    repo: 'Student_CourseManagement',
    link: 'https://github.com/SAMUVELREEGAN/Student_CourseManagement',
    description: 'Full-stack course management API with Django REST Framework and React frontend.',
    tags: ['Django REST', 'React', 'API'],
    lang: 'Python',
  },
  {
    id: 5,
    title: 'Token Authentication',
    repo: 'Token_auth',
    link: 'https://github.com/SAMUVELREEGAN/Token_auth',
    description: 'Secure token-based authentication flow with React frontend and Django backend.',
    tags: ['Django', 'React', 'JWT'],
    lang: 'Python',
  },
  {
    id: 6,
    title: 'E-Commerce with Payments',
    repo: 'e_commerce_website_node_and_react',
    link: 'https://github.com/SAMUVELREEGAN/e_commerce_website_node_and_react',
    description: 'React storefront with Node.js backend and payment transaction processing.',
    tags: ['React', 'Node.js', 'Payments'],
    lang: 'JavaScript',
  },
  {
    id: 7,
    title: 'Fake API E-Commerce Demo',
    repo: 'Fetch_data_from_Fake_API_to_Website',
    link: 'https://github.com/SAMUVELREEGAN/Fetch_data_from_Fake_API_to_Website',
    description: 'React e-commerce flow with mock auth, product list, and cart functionality.',
    tags: ['React', 'REST API'],
    lang: 'JavaScript',
  },
  {
    id: 8,
    title: 'Bus Ticket Booking System',
    repo: 'bus_ticket_booking_system',
    link: 'https://github.com/SAMUVELREEGAN/bus_ticket_booking_system',
    description: 'Ticket booking application with seat selection and reservation management.',
    tags: ['JavaScript', 'Node.js'],
    lang: 'JavaScript',
  },
  {
    id: 9,
    title: 'Library Management System',
    repo: 'Library_Management',
    link: 'https://github.com/SAMUVELREEGAN/Library_Management',
    description: 'Django app for managing books, members, issue/return, and search.',
    tags: ['Django', 'MySQL', 'Bootstrap'],
    lang: 'Python',
  },
  {
    id: 10,
    title: 'JWT Authentication Model',
    repo: 'Model',
    link: 'https://github.com/SAMUVELREEGAN/Model',
    description: 'Secure JWT authentication — token generation, validation, and protected routes.',
    tags: ['Node.js', 'JWT', 'Express'],
    lang: 'JavaScript',
  },
  {
    id: 11,
    title: 'Redux State Management',
    repo: 'Redux-example',
    link: 'https://github.com/SAMUVELREEGAN/Redux-example',
    description: 'React app demonstrating Redux patterns for global state and async actions.',
    tags: ['React', 'Redux'],
    lang: 'JavaScript',
  },
  {
    id: 12,
    title: 'React Blog Website',
    repo: 'Blog_WebSite',
    link: 'https://github.com/SAMUVELREEGAN/Blog_WebSite',
    description: 'Blog platform built with React and pure CSS — posts, routing, and responsive layout.',
    tags: ['React', 'CSS3'],
    lang: 'JavaScript',
  },
  {
    id: 13,
    title: 'Portfolio Frontend',
    repo: 'Portfolio_new_frontend',
    link: 'https://github.com/SAMUVELREEGAN/Portfolio_new_frontend',
    description: 'Modern React portfolio with animated sections and responsive design.',
    tags: ['React', 'CSS3'],
    lang: 'JavaScript',
  },
  {
    id: 14,
    title: 'Personal Portfolio',
    repo: 'My_profile',
    link: 'https://github.com/SAMUVELREEGAN/My_profile',
    description: 'React portfolio with skill visualization, projects, and work experience.',
    tags: ['React', 'CSS3'],
    lang: 'JavaScript',
  },
  {
    id: 15,
    title: 'Task Management CLI',
    repo: 'task-cli',
    link: 'https://github.com/SAMUVELREEGAN/task-cli',
    description: 'Command-line tool for managing tasks locally using Node.js.',
    tags: ['Node.js', 'CLI'],
    lang: 'JavaScript',
  },
  {
    id: 16,
    title: 'Weather App React Native',
    repo: 'weather-rn',
    link: 'https://github.com/SAMUVELREEGAN/weather-rn',
    description: 'Cross-platform mobile app displaying real-time weather using OpenWeather API.',
    tags: ['React Native', 'API'],
    lang: 'JavaScript',
  },
  {
    id: 17,
    title: 'Minimalist Blog Engine',
    repo: 'mini-blog',
    link: 'https://github.com/SAMUVELREEGAN/mini-blog',
    description: 'Markdown-based static blog generator built with Express.js.',
    tags: ['Express', 'Markdown'],
    lang: 'JavaScript',
  },
  {
    id: 18,
    title: 'Chatbot UI Clone',
    repo: 'chat-ui-clone',
    link: 'https://github.com/SAMUVELREEGAN/chat-ui-clone',
    description: 'Responsive chat interface clone using React and Tailwind CSS.',
    tags: ['React', 'Tailwind'],
    lang: 'JavaScript',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];
