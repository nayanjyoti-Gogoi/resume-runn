import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import './Templates.css';

// Import components and data
import ResumePreview from '../components/ResumePreview';
import { templates } from '../data/templates';

const TemplatePreview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const templateId = queryParams.get('template');
  
  const [template, setTemplate] = useState(null);
  
  // Sample data for preview
  const sampleData = {
    personal: {
      fullName: 'Alex Johnson',
      jobTitle: 'Senior Software Engineer',
      email: 'alex.johnson@example.com',
      phone: '(555) 123-4567',
      address: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/alexjohnson',
      github: 'github.com/alexjohnson',
      summary: 'Experienced software engineer with 8+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Passionate about creating scalable and user-friendly applications.'
    },
    experience: [
      {
        company: 'Tech Innovations Inc.',
        position: 'Senior Software Engineer',
        startDate: '2020-03-01',
        endDate: '',
        current: true,
        location: 'San Francisco, CA',
        description: 'Lead developer for the company\'s flagship product, managing a team of 5 engineers. Implemented microservices architecture that improved system reliability by 35%. Reduced API response times by 40% through optimization techniques.'
      },
      {
        company: 'Digital Solutions LLC',
        position: 'Software Developer',
        startDate: '2017-06-01',
        endDate: '2020-02-28',
        current: false,
        location: 'Boston, MA',
        description: 'Developed and maintained web applications using React and Node.js. Collaborated with UX designers to implement responsive interfaces. Participated in code reviews and mentored junior developers.'
      }
    ],
    education: [
      {
        institution: 'Massachusetts Institute of Technology',
        degree: 'Master of Science in Computer Science',
        startDate: '2015-09-01',
        endDate: '2017-05-30',
        location: 'Cambridge, MA',
        description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on "Neural Networks for Natural Language Processing".'
      },
      {
        institution: 'University of California, Berkeley',
        degree: 'Bachelor of Science in Computer Science',
        startDate: '2011-09-01',
        endDate: '2015-05-30',
        location: 'Berkeley, CA',
        description: 'Graduated with honors. Active member of the Computer Science Club and Hackathon team.'
      }
    ],
    skills: {
      technical: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'MongoDB', 'PostgreSQL'],
      soft: ['Leadership', 'Problem Solving', 'Communication', 'Team Collaboration', 'Agile Methodologies']
    },
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'Developed a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented features like user authentication, product catalog, shopping cart, and payment processing.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
        link: 'https://github.com/alexjohnson/ecommerce-platform'
      },
      {
        title: 'AI-Powered Task Manager',
        description: 'Created a task management application that uses machine learning to prioritize tasks and suggest optimal scheduling. Integrated with Google Calendar API for seamless synchronization.',
        technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'Google Calendar API'],
        link: 'https://github.com/alexjohnson/ai-task-manager'
      }
    ],
    certifications: [
      {
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: '2022-01-15',
        description: 'Professional certification validating expertise in designing distributed systems on AWS.'
      },
      {
        name: 'Professional Scrum Master I',
        issuer: 'Scrum.org',
        date: '2021-06-10',
        description: 'Certification demonstrating knowledge of Scrum framework and its application.'
      }
    ],
    achievements: [
      {
        title: 'Patent: Distributed System for Real-time Data Processing',
        description: 'Co-inventor of a patented technology for efficient real-time data processing in distributed systems.'
      },
      {
        title: 'Speaker at ReactConf 2022',
        description: 'Presented on "Optimizing React Applications for Performance" at the international React conference.'
      }
    ],
    languages: [
      {
        language: 'English',
        proficiency: 'native'
      },
      {
        language: 'Spanish',
        proficiency: 'professional'
      },
      {
        language: 'French',
        proficiency: 'intermediate'
      }
    ],
    interests: {
      interestList: ['Open Source Contributing', 'Hiking', 'Photography', 'Chess']
    }
  };
  
  useEffect(() => {
    // Find the template by ID
    const foundTemplate = templates.find(t => t.id === templateId);
    if (foundTemplate) {
      setTemplate(foundTemplate);
    } else {
      // Redirect to templates page if template not found
      navigate('/templates');
    }
  }, [templateId, navigate]);
  
  if (!template) {
    return (
      <div className="template-preview-page section-padding">
        <Container className="text-center">
          <h2>Loading template preview...</h2>
        </Container>
      </div>
    );
  }
  
  return (
    <div className="template-preview-page section-padding">
      <Container>
        <div className="preview-header">
          <Button 
            variant="outline-primary" 
            onClick={() => navigate('/templates')}
            className="back-button mb-4"
          >
            <i className="fas fa-arrow-left"></i> Back to Templates
          </Button>
          
          <div className="text-center mb-4">
            <h1 className="preview-title">{template.name} Template</h1>
            <p className="preview-description">{template.description}</p>
            
            <Button 
              variant="primary" 
              onClick={() => navigate(`/builder?template=${template.id}`)}
              className="use-template-btn mt-3"
            >
              Use This Template
            </Button>
          </div>
        </div>
        
        <div className="resume-preview-container">
          <ResumePreview 
            template={template}
            data={sampleData}
            color={template.defaultColor || '#2c3e50'}
            font={template.defaultFont || 'Roboto, sans-serif'}
            fontSize="14px"
            headingFontSize="22px"
            fontColor="#333"
            spacing="normal"
            alignment="left"
            margins={{ top: 20, right: 20, bottom: 20, left: 20 }}
          />
        </div>
      </Container>
    </div>
  );
};

export default TemplatePreview;
