import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './Blog.css';

// Import blog data
import { blogPosts, categories } from '../data/blogData';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the blog post with the matching ID
  const post = blogPosts.find(post => post.id === id);
  
  // If no post is found, redirect to the blog page
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);
  
  // If post is undefined (still loading or not found), show a loading state
  if (!post) {
    return (
      <div className="blog-post-page section-padding">
        <Container>
          <div className="text-center">
            <h2>Loading...</h2>
          </div>
        </Container>
      </div>
    );
  }
  
  // Get the category name
  const category = categories.find(cat => cat.id === post.category);
  
  return (
    <div className="blog-post-page section-padding">
      <Container>
        <div className="blog-post-header">
          <Button 
            as={Link} 
            to="/blog" 
            variant="outline-primary" 
            className="back-button mb-4"
          >
            <i className="fas fa-arrow-left"></i> Back to Blog
          </Button>
          
          <Badge bg="primary" className="category-badge">
            {category ? category.name : 'Uncategorized'}
          </Badge>
          
          <h1 className="blog-post-title">{post.title}</h1>
          
          <div className="blog-post-meta">
            <span className="post-date">
              <i className="far fa-calendar-alt"></i> {post.date}
            </span>
            <span className="post-author">
              <i className="far fa-user"></i> {post.author}
            </span>
          </div>
        </div>
        
        <div className="blog-post-featured-image">
          <img src={post.image} alt={post.title} className="img-fluid" />
        </div>
        
        <Row className="justify-content-center">
          <Col lg={10} className="blog-post-content">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Col>
        </Row>
        
        <div className="blog-post-navigation">
          <h3 className="related-posts-title">You might also like</h3>
          <Row>
            {blogPosts
              .filter(relatedPost => relatedPost.id !== post.id && relatedPost.category === post.category)
              .slice(0, 3)
              .map(relatedPost => (
                <Col lg={4} md={6} className="mb-4" key={relatedPost.id}>
                  <div className="related-post-card">
                    <div className="related-post-image">
                      <img src={relatedPost.image} alt={relatedPost.title} className="img-fluid" />
                    </div>
                    <div className="related-post-content">
                      <h4>{relatedPost.title}</h4>
                      <p>{relatedPost.excerpt}</p>
                      <Button 
                        as={Link} 
                        to={`/blog/${relatedPost.id}`} 
                        variant="outline-primary" 
                        className="read-more-link"
                      >
                        Read More <i className="fas fa-arrow-right"></i>
                      </Button>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BlogPost;
