import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar 
      expand="lg" 
      className={`site-navbar ${scrolled ? 'scrolled' : ''}`} 
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="site-logo">
          <span className="logo-text">Resume</span>
          <span className="logo-accent">Builder</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={NavLink} 
              to="/" 
              onClick={() => setExpanded(false)}
              className="nav-link"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/templates" 
              onClick={() => setExpanded(false)}
              className="nav-link"
            >
              Templates
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/blog" 
              onClick={() => setExpanded(false)}
              className="nav-link"
            >
              Blog
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/faq" 
              onClick={() => setExpanded(false)}
              className="nav-link"
            >
              FAQ
            </Nav.Link>
          </Nav>
          <Button 
            as={Link} 
            to="/builder" 
            variant="primary" 
            className="ms-lg-3 mt-3 mt-lg-0 create-resume-btn"
            onClick={() => setExpanded(false)}
          >
            Create Resume
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
