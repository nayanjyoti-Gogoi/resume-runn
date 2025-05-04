import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

// Import blog data
import { blogPosts, categories } from '../data/blogData';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Filter blog posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog-page section-padding">
      <Container>
        <div className="text-center mb-5">
          <h1 className="section-title">Resume Building Tips & Advice</h1>
          <p className="section-subtitle">
            Expert advice to help you create the perfect resume and land your dream job
          </p>
        </div>
        
        <Row className="mb-5">
          <Col lg={8}>
            <div className="blog-search">
              <Form.Control
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <i className="fas fa-search search-icon"></i>
            </div>
          </Col>
          <Col lg={4}>
            <Form.Select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
        
        {/* Featured Post */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <div className="featured-post mb-5">
            <Row className="align-items-center">
              <Col lg={6} className="featured-image">
                <img src={blogPosts[0].image} alt={blogPosts[0].title} className="img-fluid" />
              </Col>
              <Col lg={6} className="featured-content">
                <Badge bg="primary" className="featured-badge">Featured</Badge>
                <h2 className="featured-title">{blogPosts[0].title}</h2>
                <p className="featured-excerpt">{blogPosts[0].excerpt}</p>
                <div className="featured-meta">
                  <span className="post-date">
                    <i className="far fa-calendar-alt"></i> {blogPosts[0].date}
                  </span>
                  <span className="post-author">
                    <i className="far fa-user"></i> {blogPosts[0].author}
                  </span>
                </div>
                <Button as={Link} to={`/blog/${blogPosts[0].id}`} variant="primary" className="read-more-btn">
                  Read More
                </Button>
              </Col>
            </Row>
          </div>
        )}
        
        {/* Blog Posts Grid */}
        <Row>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => {
              // Skip the first post if it's already shown as featured
              if (index === 0 && selectedCategory === 'all' && searchTerm === '') {
                return null;
              }
              
              return (
                <Col lg={4} md={6} className="mb-4" key={post.id}>
                  <Card className="blog-card">
                    <div className="card-img-container">
                      <Card.Img variant="top" src={post.image} />
                      <div className="card-category">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <div className="card-meta">
                        <span className="post-date">
                          <i className="far fa-calendar-alt"></i> {post.date}
                        </span>
                        <span className="post-author">
                          <i className="far fa-user"></i> {post.author}
                        </span>
                      </div>
                      <Card.Text>{post.excerpt}</Card.Text>
                      <Button 
                        as={Link} 
                        to={`/blog/${post.id}`} 
                        variant="outline-primary" 
                        className="read-more-link"
                      >
                        Read More <i className="fas fa-arrow-right"></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <Col className="text-center py-5">
              <h3>No articles found</h3>
              <p>Try a different search term or category</p>
              <Button 
                variant="primary" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-3"
              >
                Show All Articles
              </Button>
            </Col>
          )}
        </Row>
        
        {/* Newsletter Subscription */}
        <Row className="justify-content-center mt-5">
          <Col lg={8}>
            <div className="newsletter-box">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get the latest resume tips and career advice delivered to your inbox</p>
              <Form className="newsletter-form">
                <Row>
                  <Col md={8}>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                      className="newsletter-input"
                    />
                  </Col>
                  <Col md={4}>
                    <Button variant="primary" type="submit" className="newsletter-btn">
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
