import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <div className="footer-about">
              <h3 className="footer-title">
                <span className="logo-text">Resume</span>
                <span className="logo-accent">Builder</span>
              </h3>
              <p>
                Create professional resumes in minutes with our easy-to-use resume builder. 
                Choose from various templates and customize them to match your style.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/templates">Templates</Link>
              </li>
              <li>
                <Link to="/builder">Resume Builder</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h4 className="footer-heading">Templates</h4>
            <ul className="footer-links">
              <li>
                <Link to="/templates?category=fresher">Fresher Resume</Link>
              </li>
              <li>
                <Link to="/templates?category=professional">Professional</Link>
              </li>
              <li>
                <Link to="/templates?category=mba">MBA Resume</Link>
              </li>
              <li>
                <Link to="/templates?category=designer">Designer Resume</Link>
              </li>
              <li>
                <Link to="/templates?category=developer">Developer Resume</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Sivasagar,Assam,Bharat </span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>gogoinayan73@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>6901977121</span>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row>
          <Col className="text-center">
            <p className="copyright">
              &copy; {currentYear} ResumeBuilder. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
