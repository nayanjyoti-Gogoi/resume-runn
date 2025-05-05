import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ResumeBuilder from './pages/ResumeBuilder';
import Templates from './pages/Templates';
import TemplatePreview from './pages/TemplatePreview';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builder" element={<ResumeBuilder />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/preview" element={<TemplatePreview />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
