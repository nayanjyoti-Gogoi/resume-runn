import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Form, Button } from 'react-bootstrap';
import './FAQ.css';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const faqItems = [
    {
      id: '1',
      question: 'How do I create a resume using this builder?',
      answer: 'Creating a resume is simple! First, select a template that suits your style. Then, fill in your information in the form fields provided. You can see a real-time preview of your resume as you make changes. Once you\'re satisfied with your resume, click the "Download" button to save it as a PDF.'
    },
    {
      id: '2',
      question: 'Is this resume builder free to use?',
      answer: 'Yes, our resume builder is completely free to use. You can create, edit, and download as many resumes as you want without any cost.'
    },
    {
      id: '3',
      question: 'Can I customize the colors and fonts of my resume?',
      answer: 'Absolutely! Our resume builder offers customization options for colors and fonts. In the builder interface, navigate to the "Customize" tab where you can select from various color themes and font styles to personalize your resume.'
    },
    {
      id: '4',
      question: 'What resume template should I choose?',
      answer: 'The best template depends on your industry and experience level. For traditional industries like finance or law, choose a classic template. For creative fields, consider a more unique design. Freshers might prefer templates that emphasize education and skills, while experienced professionals should select templates that highlight work experience.'
    },
    {
      id: '5',
      question: 'How long should my resume be?',
      answer: 'Ideally, your resume should be one page if you have less than 10 years of experience. For more experienced professionals, two pages may be appropriate. Remember that recruiters often spend only 6-7 seconds scanning a resume, so being concise is important.'
    },
    {
      id: '6',
      question: 'What sections should I include in my resume?',
      answer: 'Essential sections include: Contact Information, Professional Summary or Objective, Work Experience, Education, and Skills. Depending on your background, you might also include: Projects, Certifications, Achievements, Languages, or Interests.'
    },
    {
      id: '7',
      question: 'How can I make my resume stand out?',
      answer: 'To make your resume stand out: 1) Tailor it to each job application, 2) Quantify your achievements with numbers when possible, 3) Use action verbs, 4) Keep the design clean and professional, 5) Proofread carefully to eliminate errors, and 6) Focus on relevant skills and experiences.'
    },
    {
      id: '8',
      question: 'Can I save my resume and edit it later?',
      answer: 'Yes, your resume data is automatically saved in your browser\'s local storage. As long as you use the same device and browser, you can return to the resume builder and continue editing where you left off.'
    },
    {
      id: '9',
      question: 'What file format will my resume be downloaded in?',
      answer: 'Your resume will be downloaded as a PDF file, which is the industry standard for resumes. PDF files maintain your formatting across different devices and are generally preferred by employers and applicant tracking systems.'
    },
    {
      id: '10',
      question: 'Should I include a photo on my resume?',
      answer: 'This depends on your location and industry. In the US, UK, and Canada, photos are generally not recommended as they can lead to unconscious bias. However, in some European countries and certain industries like modeling or acting, photos may be expected. When in doubt, it\'s safer to omit the photo.'
    }
  ];
  
  const filteredFAQs = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-page section-padding">
      <Container>
        <div className="text-center mb-5">
          <h1 className="section-title">Frequently Asked Questions</h1>
          <p className="section-subtitle">
            Find answers to common questions about our resume builder
          </p>
        </div>
        
        <Row className="justify-content-center mb-5">
          <Col lg={6}>
            <div className="faq-search">
              <Form.Control
                type="text"
                placeholder="Search for questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <i className="fas fa-search search-icon"></i>
            </div>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            {filteredFAQs.length > 0 ? (
              <Accordion defaultActiveKey="0" className="faq-accordion">
                {filteredFAQs.map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={item.id}>
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body>{item.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-5">
                <h3>No results found</h3>
                <p>Try a different search term or browse all FAQs</p>
                <Button 
                  variant="primary" 
                  onClick={() => setSearchTerm('')}
                  className="mt-3"
                >
                  Show All FAQs
                </Button>
              </div>
            )}
          </Col>
        </Row>
        
        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <div className="faq-contact">
              <h3>Still have questions?</h3>
              <p>If you couldn't find the answer to your question, feel free to contact us.</p>
              <Button variant="outline-primary" size="lg" href="mailto:gogoinayan73@gmail.com">
                Contact Support
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
