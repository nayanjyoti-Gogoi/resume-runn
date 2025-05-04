// Template images
import fresherTemplate from '../assets/fresher-template.jpg';
import professionalTemplate from '../assets/professional-template.jpg';
import mbaTemplate from '../assets/mba-template.jpg';
import designerTemplate from '../assets/designer-template.jpg';
import developerTemplate from '../assets/developer-template.jpg';
import creativeTemplate from '../assets/creative-template.jpg';
import modernTemplate from '../assets/modern-template.jpg';
import executiveTemplate from '../assets/executive-template.jpg';
import minimalTemplate from '../assets/minimal-template.jpg';
// Import new template images
import elegantTemplate from '../assets/elegant-template.jpg';
import corporateTemplate from '../assets/corporate-template.jpg';
import boldTemplate from '../assets/bold-template.jpg';
import techTemplate from '../assets/tech-template.jpg';
// Import new stylish templates
import modernPlusTemplate from '../assets/modern-plus-template.jpg';
import gradientTemplate from '../assets/gradient-template.jpg';
import darkModeTemplate from '../assets/dark-mode-template.jpg';
// Note: We're using external URLs for minimalist and creative-pro templates

export const templates = [
  {
    id: 'fresher',
    name: 'Fresher Resume',
    image: "https://static.vecteezy.com/system/resources/previews/000/497/579/original/male-student-icon-design-vector.jpg",
    category: 'fresher',
    categoryName: 'Fresher',
    rating: 4.8,
    description: 'Perfect for students and recent graduates with minimal work experience.',
    color: '#4a6cf7',
    font: 'Poppins',
    sections: ['personal', 'education', 'skills', 'projects', 'achievements', 'languages']
  },
  {
    id: 'professional',
    name: 'Professional Resume',
    image: "https://icon-library.com/images/professional-icon-png/professional-icon-png-26.jpg",
    category: 'professional',
    categoryName: 'Professional',
    rating: 4.9,
    description: 'A classic professional resume template suitable for most industries.',
    color: '#343a40',
    font: 'Roboto',
    sections: ['personal', 'experience', 'education', 'skills', 'certifications', 'languages']
  },
  {
    id: 'mba',
    name: 'MBA Resume',
    image: "https://as1.ftcdn.net/v2/jpg/01/23/35/42/1000_F_123354232_ohBIsq0ZICITdax18aRyNdmqeUcRSFK7.jpg",
    category: 'mba',
    categoryName: 'MBA',
    rating: 4.7,
    description: 'Designed for business professionals and MBA graduates.',
    color: '#28a745',
    font: 'Montserrat',
    sections: ['personal', 'experience', 'education', 'skills', 'achievements', 'certifications']
  },
  // New elegant template
  {
    id: 'elegant',
    name: 'Elegant Resume',
    image: "https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-star-symbol-with-elegant-and-premium-3d-shape-suitable-for-use-png-image_9947307.png",
    category: 'professional',
    categoryName: 'Elegant',
    rating: 4.9,
    description: 'Sophisticated and elegant design with a timeless appeal.',
    color: '#8e44ad',
    font: 'Playfair Display',
    sections: ['personal', 'experience', 'education', 'skills', 'achievements', 'languages']
  },
  // New corporate template
  {
    id: 'corporate',
    name: 'Corporate Resume',
    image: "https://img.freepik.com/free-vector/building-logo-icon-design-template-vector_67715-555.jpg?w=2000",
    category: 'professional',
    categoryName: 'Corporate',
    rating: 4.8,
    description: 'Polished and professional design for corporate environments.',
    color: '#16a085',
    font: 'Raleway',
    sections: ['personal', 'experience', 'education', 'skills', 'certifications', 'achievements']
  },
  {
    id: 'designer',
    name: 'Designer Resume',
    image: "https://static.vecteezy.com/system/resources/previews/000/617/161/original/s-logo-and-symbols-template-vector.jpg",
    category: 'designer',
    categoryName: 'Designer',
    rating: 4.8,
    description: 'Creative template for designers, artists, and creative professionals.',
    color: '#ff6b6b',
    font: 'Poppins',
    sections: ['personal', 'experience', 'education', 'skills', 'portfolio', 'languages']
  },
  {
    id: 'developer',
    name: 'Developer Resume',
    image: "https://static.vecteezy.com/system/resources/previews/002/363/105/original/developer-icon-free-vector.jpg",
    category: 'developer',
    categoryName: 'Developer',
    rating: 4.9,
    description: 'Technical resume template for software developers and engineers.',
    color: '#6c757d',
    font: 'Roboto',
    sections: ['personal', 'experience', 'education', 'skills', 'projects', 'certifications']
  },
  // New bold template
  {
    id: 'bold',
    name: 'Bold Resume',
    image: "https://img.freepik.com/premium-photo/ribbon-symbol-icon-outline-illustration-style-bold-outlines_921860-36703.jpg",
    category: 'designer',
    categoryName: 'Bold',
    rating: 4.8,
    description: 'Bold and impactful design that makes a strong first impression.',
    color: '#e74c3c',
    font: 'Montserrat',
    sections: ['personal', 'experience', 'education', 'skills', 'projects', 'achievements']
  },
  {
    id: 'creative',
    name: 'Creative Resume',
    image: "https://img.freepik.com/premium-vector/creative-idea-logo-symbol-creativity-half-light-bulb-brain-concept-innovation-solution-education-symbol-creativity-creative-idea-mind-thinking-vector-illustration_435184-1299.jpg?w=2000",
    category: 'designer',
    categoryName: 'Designer',
    rating: 4.6,
    description: 'A unique and creative resume template to stand out from the crowd.',
    color: '#fd7e14',
    font: 'Montserrat',
    sections: ['personal', 'experience', 'education', 'skills', 'portfolio', 'interests']
  },
  {
    id: 'modern',
    name: 'Modern Resume',
    image: "https://shmector.com/_ph/7/848395635.png",
    category: 'professional',
    categoryName: 'Modern',
    rating: 4.9,
    description: 'Clean, contemporary design with a focus on readability and visual appeal.',
    color: '#3498db',
    font: 'Inter',
    sections: ['personal', 'experience', 'education', 'skills', 'projects', 'certifications']
  },
  // New tech template
  {
    id: 'tech',
    name: 'Tech Resume',
    image: "https://static.vecteezy.com/system/resources/previews/000/600/113/original/technology-logo-icon-vectors.jpg",
    category: 'developer',
    categoryName: 'Tech',
    rating: 4.9,
    description: 'Modern tech-focused design with a sleek and innovative look.',
    color: '#1abc9c',
    font: 'Source Code Pro',
    sections: ['personal', 'experience', 'education', 'skills', 'projects', 'certifications']
  },
  {
    id: 'executive',
    name: 'Executive Resume',
    image: "https://cdn3.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-3-1/16/2049-1024.png",
    category: 'professional',
    categoryName: 'Executive',
    rating: 4.8,
    description: 'Sophisticated template for senior managers and executives.',
    color: '#2c3e50',
    font: 'Playfair Display',
    sections: ['personal', 'experience', 'education', 'skills', 'achievements', 'certifications']
  },
  {
    id: 'minimal',
    name: 'Minimal Resume',
    image: "https://webstockreview.net/images/clipart-phone-resume-3.png",
    category: 'professional',
    categoryName: 'Minimal',
    rating: 4.7,
    description: 'Clean and minimalist design that focuses on content.',
    color: '#34495e',
    font: 'Lato',
    sections: ['personal', 'experience', 'education', 'skills', 'certifications', 'languages']
  },
  // New stylish templates
  {
    id: 'modern-plus',
    name: 'Modern Plus',
    image: "https://png.pngtree.com/png-clipart/20230915/original/pngtree-globe-element-modern-symbol-vector-png-image_12192047.png",
    category: 'professional',
    categoryName: 'Modern Plus',
    rating: 4.9,
    description: 'Enhanced modern design with stylish accents and premium layout.',
    color: '#3498db',
    font: 'Montserrat',
    sections: ['personal', 'experience', 'education', 'skills', 'projects', 'achievements']
  },
  {
    id: 'gradient',
    name: 'Gradient Style',
    image: "https://static.vecteezy.com/system/resources/previews/030/912/798/non_2x/resume-icon-gradient-blue-business-symbol-illustration-free-vector.jpg",
    category: 'designer',
    categoryName: 'Gradient',
    rating: 4.8,
    description: 'Eye-catching gradient accents that make your resume stand out.',
    color: '#8e44ad',
    font: 'Poppins',
    sections: ['personal', 'experience', 'education', 'skills', 'portfolio', 'interests']
  },
  {
    id: 'dark-mode',
    name: 'Dark Mode',
    image: "https://cdn1.iconfinder.com/data/icons/web-interface-65/32/34_-_Light_Dark_Mode-1024.png",
    category: 'developer',
    categoryName: 'Dark Mode',
    rating: 4.9,
    description: 'Sleek dark theme perfect for tech professionals and night owls.',
    color: '#2ecc71',
    font: 'Roboto',
    sections: ['personal', 'experience', 'education', 'skills', 'projects', 'certifications']
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    image: "https://cdn-icons-png.flaticon.com/512/6295/6295417.png",
    category: 'professional',
    categoryName: 'Minimalist',
    rating: 4.9,
    description: 'Ultra-clean minimalist design with perfect whitespace and typography.',
    color: '#34495e',
    font: 'Inter',
    sections: ['personal', 'experience', 'education', 'skills', 'certifications', 'languages']
  },
  {
    id: 'creative-pro',
    name: 'Creative Pro',
    image: "https://static.vecteezy.com/system/resources/previews/009/399/398/original/creative-thinking-icon-logo-illustration-free-vector.jpg",
    category: 'designer',
    categoryName: 'Creative',
    rating: 4.8,
    description: 'Vibrant and artistic design for creative professionals that stands out.',
    color: '#e74c3c',
    font: 'Montserrat',
    sections: ['personal', 'experience', 'education', 'skills', 'portfolio', 'achievements']
  }
];

// Resume sections data
export const resumeSections = {
  personal: {
    id: 'personal',
    title: 'Personal Information',
    icon: 'user',
    fields: [
      { id: 'fullName', label: 'Full Name', type: 'text', required: true },
      { id: 'jobTitle', label: 'Job Title', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'tel', required: true },
      { id: 'address', label: 'Address', type: 'text', required: false },
      { id: 'website', label: 'Website', type: 'url', required: false },
      { id: 'linkedin', label: 'LinkedIn', type: 'url', required: false },
      { id: 'github', label: 'GitHub', type: 'url', required: false },
      { id: 'photo', label: 'Profile Photo', type: 'file', required: false },
      { id: 'summary', label: 'Professional Summary', type: 'textarea', required: false }
    ]
  },
  experience: {
    id: 'experience',
    title: 'Work Experience',
    icon: 'briefcase',
    multiple: true,
    fields: [
      { id: 'jobTitle', label: 'Job Title', type: 'text', required: true },
      { id: 'company', label: 'Company', type: 'text', required: true },
      { id: 'location', label: 'Location', type: 'text', required: false },
      { id: 'startDate', label: 'Start Date', type: 'date', required: true },
      { id: 'endDate', label: 'End Date', type: 'date', required: false },
      { id: 'current', label: 'Current Job', type: 'checkbox', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: false }
    ]
  },
  education: {
    id: 'education',
    title: 'Education',
    icon: 'graduation-cap',
    multiple: true,
    fields: [
      { id: 'degree', label: 'Degree', type: 'text', required: true },
      { id: 'institution', label: 'Institution', type: 'text', required: true },
      { id: 'location', label: 'Location', type: 'text', required: false },
      { id: 'startDate', label: 'Start Date', type: 'date', required: true },
      { id: 'endDate', label: 'End Date', type: 'date', required: false },
      { id: 'current', label: 'Currently Studying', type: 'checkbox', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: false }
    ]
  },
  skills: {
    id: 'skills',
    title: 'Skills',
    icon: 'tools',
    fields: [
      { id: 'skillList', label: 'Skills', type: 'tags', required: true },
      { id: 'showLevel', label: 'Show Skill Level', type: 'checkbox', required: false }
    ]
  },
  projects: {
    id: 'projects',
    title: 'Projects',
    icon: 'project-diagram',
    multiple: true,
    fields: [
      { id: 'title', label: 'Project Title', type: 'text', required: true },
      { id: 'link', label: 'Project Link', type: 'url', required: false },
      { id: 'startDate', label: 'Start Date', type: 'date', required: false },
      { id: 'endDate', label: 'End Date', type: 'date', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: true }
    ]
  },
  certifications: {
    id: 'certifications',
    title: 'Certifications',
    icon: 'certificate',
    multiple: true,
    fields: [
      { id: 'title', label: 'Certification Name', type: 'text', required: true },
      { id: 'issuer', label: 'Issuing Organization', type: 'text', required: true },
      { id: 'date', label: 'Date', type: 'date', required: false },
      { id: 'link', label: 'Certificate Link', type: 'url', required: false }
    ]
  },
  achievements: {
    id: 'achievements',
    title: 'Achievements',
    icon: 'trophy',
    multiple: true,
    fields: [
      { id: 'title', label: 'Achievement Title', type: 'text', required: true },
      { id: 'date', label: 'Date', type: 'date', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: false }
    ]
  },
  languages: {
    id: 'languages',
    title: 'Languages',
    icon: 'language',
    multiple: true,
    fields: [
      { id: 'language', label: 'Language', type: 'text', required: true },
      { id: 'proficiency', label: 'Proficiency', type: 'select', required: true, options: [
        { value: 'native', label: 'Native' },
        { value: 'fluent', label: 'Fluent' },
        { value: 'advanced', label: 'Advanced' },
        { value: 'intermediate', label: 'Intermediate' },
        { value: 'basic', label: 'Basic' }
      ]}
    ]
  },
  portfolio: {
    id: 'portfolio',
    title: 'Portfolio',
    icon: 'images',
    multiple: true,
    fields: [
      { id: 'title', label: 'Project Title', type: 'text', required: true },
      { id: 'category', label: 'Category', type: 'text', required: false },
      { id: 'link', label: 'Project Link', type: 'url', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: true }
    ]
  },
  interests: {
    id: 'interests',
    title: 'Interests',
    icon: 'heart',
    fields: [
      { id: 'interestList', label: 'Interests', type: 'tags', required: true }
    ]
  }
};
