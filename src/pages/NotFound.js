import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="text-center">
            <div className="error-content">
              <h1 className="error-code">404</h1>
              <h2 className="error-title">Page Not Found</h2>
              <p className="error-message">
                The page you are looking for might have been removed, had its name changed,
                or is temporarily unavailable.
              </p>
              <div className="error-actions">
                <Button as={Link} to="/" variant="primary" size="lg" className="home-btn">
                  Go to Homepage
                </Button>
                <Button as={Link} to="/templates" variant="outline-primary" size="lg" className="templates-btn">
                  Browse Templates
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
