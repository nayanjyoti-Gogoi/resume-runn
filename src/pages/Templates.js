import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Templates.css';

// Import template data
import { templates } from '../data/templates';

const Templates = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'all';

  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'fresher', name: 'Fresher' },
    { id: 'professional', name: 'Professional' },
    { id: 'mba', name: 'MBA' },
    { id: 'designer', name: 'Designer' },
    { id: 'developer', name: 'Developer' }
  ];

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredTemplates(templates);
    } else {
      setFilteredTemplates(templates.filter(template => template.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="templates-page section-padding">
      <Container>
        <div className="text-center mb-5">
          <h1 className="section-title">Resume Templates</h1>
          <p className="section-subtitle">
            Choose from our collection of professionally designed templates
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter mb-5">
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="filter-buttons">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? 'primary' : 'outline-primary'}
                    onClick={() => setActiveCategory(category.id)}
                    className="filter-btn"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        {/* Templates Grid */}
        <Row>
          {filteredTemplates.map(template => (
            <Col lg={4} md={6} className="mb-4" key={template.id}>
              <Card className="template-card">
                <div className="template-preview">
                  <Card.Img variant="top" src={template.image} />
                  <div className="template-overlay">
                    <Button 
                      as={Link} 
                      to={`/builder?template=${template.id}`} 
                      variant="primary"
                      className="use-template-btn"
                    >
                      Use This Template
                    </Button>
                    <Button 
                      as={Link}
                      to={`/preview?template=${template.id}`}
                      variant="outline-light"
                      className="preview-btn"
                    >
                      Preview
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{template.name}</Card.Title>
                  <div className="template-meta">
                    <span className="template-category">{template.categoryName}</span>
                    <span className="template-rating">
                      <i className="fas fa-star"></i> {template.rating}
                    </span>
                  </div>
                  <Card.Text>{template.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-5">
            <h3>No templates found for this category.</h3>
            <Button 
              variant="primary" 
              onClick={() => setActiveCategory('all')}
              className="mt-3"
            >
              View All Templates
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Templates;
