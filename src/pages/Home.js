import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

// Import template images
import fresherTemplate from '../assets/fresher-template.jpg';
import mbaTemplate from '../assets/mba-template.jpg';
import designerTemplate from '../assets/designer-template.jpg';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="hero-content">
              <h1 className="hero-title">Create Your Professional Resume in Minutes</h1>
              <p className="hero-description">
                Stand out from the crowd with a professionally designed resume. 
                Choose from multiple templates and customize them to match your style.
              </p>
              <div className="hero-buttons">
                <Button as={Link} to="/builder" variant="primary" size="lg" className="get-started-btn">
                  Get Started
                </Button>
                <Button as={Link} to="/templates" variant="outline-primary" size="lg" className="view-templates-btn">
                  View Templates
                </Button>
              </div>
            </Col>
            <Col lg={6} className="hero-image">
              <img src="https://media.istockphoto.com/id/1560652578/photo/businessmen-reading-resumes-for-a-new-job-use-laptops-and-cvs-in-the-office-applicant.webp?b=1&s=612x612&w=0&k=20&c=qzl1Cse6lzesDoFXgc71lQN8xW660AZexW6lObH_Cac=" alt="Resume Builder" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section section-padding">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Why Choose Our Resume Builder?</h2>
            <p className="section-subtitle">
              Our resume builder offers everything you need to create a stunning resume
            </p>
          </div>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3 className="feature-title">Professional Templates</h3>
                <p className="feature-description">
                  Choose from a variety of professionally designed templates
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="feature-title">Fully Responsive</h3>
                <p className="feature-description">
                  Our resume builder works perfectly on all devices
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3 className="feature-title">Instant Preview</h3>
                <p className="feature-description">
                  See changes in real-time with our instant preview feature
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-download"></i>
                </div>
                <h3 className="feature-title">Easy Download</h3>
                <p className="feature-description">
                  Download your resume as PDF with just one click
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Templates Section */}
      <section className="templates-section section-padding bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Resume Templates</h2>
            <p className="section-subtitle">
              Choose from our collection of professionally designed templates
            </p>
          </div>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card className="template-card">
                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/000/497/579/original/male-student-icon-design-vector.jpg"/>
                <Card.Body>
                  <Card.Title>Fresher Template</Card.Title>
                  <Card.Text>
                    Perfect for students and recent graduates with minimal work experience.
                  </Card.Text>
                  <Button as={Link} to="/builder?template=fresher" variant="primary">Use This Template</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="template-card">
                <Card.Img variant="top" src="https://as1.ftcdn.net/v2/jpg/01/23/35/42/1000_F_123354232_ohBIsq0ZICITdax18aRyNdmqeUcRSFK7.jpg" />
                <Card.Body>
                  <Card.Title>MBA Template</Card.Title>
                  <Card.Text>
                    Designed for business professionals and MBA graduates.
                  </Card.Text>
                  <Button as={Link} to="/builder?template=mba" variant="primary">Use This Template</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="template-card">
                <Card.Img variant="top" src="https://www.pngitem.com/pimgs/m/19-195601_clip-art-fashion-designer-logos-images-free-logo.png" />
                <Card.Body>
                  <Card.Title>Designer Template</Card.Title>
                  <Card.Text>
                    Creative template for designers, artists, and creative professionals.
                  </Card.Text>
                  <Button as={Link} to="/builder?template=designer" variant="primary">Use This Template</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button as={Link} to="/templates" variant="outline-primary" size="lg">
              View All Templates
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section-padding">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">What Our Users Say</h2>
            <p className="section-subtitle">
              Hear from people who have successfully created resumes using our builder
            </p>
          </div>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    "I was able to create a professional resume in just 15 minutes. The templates are beautiful and easy to customize."
                  </p>
                </div>
                <div className="testimonial-author">
                  <img src="https://via.placeholder.com/60x60" alt="User" className="testimonial-avatar" />
                  <div className="testimonial-info">
                    <h4>Johnson</h4>
                    <p>student</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    "The instant preview feature was a game-changer. I could see how my resume looked in real-time as I made changes."
                  </p>
                </div>
                <div className="testimonial-author">
                  <img src="https://via.placeholder.com/60x60" alt="User" className="testimonial-avatar" />
                  <div className="testimonial-info">
                    <h4>Jane Smith</h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    "I landed my dream job with the resume I created using this builder. The design was professional and stood out from other applicants."
                  </p>
                </div>
                <div className="testimonial-author">
                  <img src="https://via.placeholder.com/60x60" alt="User" className="testimonial-avatar" />
                  <div className="testimonial-info">
                    <h4>Ankur Agarwal</h4>
                    <p>Graphic designer</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <div className="cta-content text-center">
            <h2>Ready to Create Your Professional Resume?</h2>
            <p>
              Get started with our easy-to-use resume builder and land your dream job.
            </p>
            <Button as={Link} to="/builder" variant="primary" size="lg">
              Create Your Resume Now
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
