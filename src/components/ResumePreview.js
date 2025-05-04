import React from 'react';
import './ResumePreview.css';

const ResumePreview = ({ template, data, color, font, fontSize, headingFontSize, fontColor, spacing, alignment, margins }) => {
  // Check if data exists for a section
  const hasData = (sectionId) => {
    if (!data || !data[sectionId]) return false;
    
    // For multiple sections, check if there's at least one item with content
    if (Array.isArray(data[sectionId])) {
      return data[sectionId].length > 0 && data[sectionId].some(item => hasContent(item));
    }
    
    // For single sections, check if there's any content
    return hasContent(data[sectionId]);
  };
  
  // Check if an object has any non-empty values
  const hasContent = (obj) => {
    if (!obj) return false;
    return Object.values(obj).some(value => {
      if (Array.isArray(value)) return value.length > 0;
      if (typeof value === 'boolean') return value;
      return value && value.trim() !== '';
    });
  };

  // Format date (YYYY-MM-DD to Month Year)
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  // Apply custom styles based on props
  const getCustomStyles = () => {
    return {
      fontFamily: font,
      fontSize: fontSize || '14px',
      color: fontColor || '#333',
      textAlign: alignment || 'left',
      padding: `${margins?.top || 20}px ${margins?.right || 20}px ${margins?.bottom || 20}px ${margins?.left || 20}px`
    };
  };

  const getHeadingStyles = () => {
    return {
      fontSize: headingFontSize || '22px',
      color: color
    };
  };

  const getSectionSpacing = () => {
    switch(spacing) {
      case 'compact':
        return '10px';
      case 'relaxed':
        return '30px';
      default:
        return '20px';
    }
  };

  // Render personal information section
  const renderPersonalSection = () => {
    if (!hasData('personal')) return null;
    
    const personal = data.personal;
    
    return (
      <div className="resume-header" style={{ borderBottomColor: color, marginBottom: getSectionSpacing() }}>
        <div className="resume-header-content">
          {personal.photo && (
            <div className="resume-photo">
              <img src={personal.photo} alt="Profile" />
            </div>
          )}
          <div className="resume-header-text">
            <div className="resume-name">{personal.fullName || 'Your Name'}</div>
            <div className="resume-title">{personal.jobTitle || 'Job Title'}</div>
            
            <div className="resume-contact">
              {personal.email && (
                <div className="contact-item">
                  <i className="fas fa-envelope"></i> {personal.email}
                </div>
              )}
              {personal.phone && (
                <div className="contact-item">
                  <i className="fas fa-phone"></i> {personal.phone}
                </div>
              )}
              {personal.address && (
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i> {personal.address}
                </div>
              )}
              {personal.website && (
                <div className="contact-item">
                  <i className="fas fa-globe"></i> {personal.website}
                </div>
              )}
              {personal.linkedin && (
                <div className="contact-item">
                  <i className="fab fa-linkedin"></i> {personal.linkedin}
                </div>
              )}
              {personal.github && (
                <div className="contact-item">
                  <i className="fab fa-github"></i> {personal.github}
                </div>
              )}
            </div>
            
            {personal.summary && (
              <div className="resume-summary">
                <p>{personal.summary}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render experience section
  const renderExperienceSection = () => {
    if (!hasData('experience')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-briefcase"></i>
          <h2 style={getHeadingStyles()}>Work Experience</h2>
        </div>
        <div className="section-content">
          {data.experience.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="item-header">
                <div className="item-title">{exp.jobTitle || 'Job Title'}</div>
                <div className="item-subtitle">
                  {exp.company && <span className="company">{exp.company}</span>}
                  {exp.location && <span className="location">{exp.location}</span>}
                </div>
                <div className="item-date">
                  {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                </div>
              </div>
              {exp.description && (
                <div className="item-description">
                  <p>{exp.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render education section
  const renderEducationSection = () => {
    if (!hasData('education')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-graduation-cap"></i>
          <h2 style={getHeadingStyles()}>Education</h2>
        </div>
        <div className="section-content">
          {data.education.map((edu, index) => (
            <div className="education-item" key={index}>
              <div className="item-header">
                <div className="item-title">{edu.degree || 'Degree'}</div>
                <div className="item-subtitle">
                  {edu.institution && <span className="institution">{edu.institution}</span>}
                  {edu.location && <span className="location">{edu.location}</span>}
                </div>
                <div className="item-date">
                  {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                </div>
              </div>
              {edu.description && (
                <div className="item-description">
                  <p>{edu.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render skills section
  const renderSkillsSection = () => {
    if (!hasData('skills') || !data.skills.skillList || data.skills.skillList.length === 0) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-tools"></i>
          <h2 style={getHeadingStyles()}>Skills</h2>
        </div>
        <div className="section-content">
          <div className="skills-list">
            {data.skills.skillList.map((skill, index) => (
              <div className="skill-item" key={index} style={{ backgroundColor: `${color}20`, color }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Render projects section
  const renderProjectsSection = () => {
    if (!hasData('projects')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-project-diagram"></i>
          <h2 style={getHeadingStyles()}>Projects</h2>
        </div>
        <div className="section-content">
          {data.projects.map((project, index) => (
            <div className="project-item" key={index}>
              <div className="item-header">
                <div className="item-title">
                  {project.title || 'Project Title'}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
                {(project.startDate || project.endDate) && (
                  <div className="item-date">
                    {formatDate(project.startDate)} {project.endDate && `- ${formatDate(project.endDate)}`}
                  </div>
                )}
              </div>
              {project.description && (
                <div className="item-description">
                  <p>{project.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render certifications section
  const renderCertificationsSection = () => {
    if (!hasData('certifications')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-certificate"></i>
          <h2 style={getHeadingStyles()}>Certifications</h2>
        </div>
        <div className="section-content">
          {data.certifications.map((cert, index) => (
            <div className="certification-item" key={index}>
              <div className="item-header">
                <div className="item-title">
                  {cert.title || 'Certification Name'}
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
                <div className="item-subtitle">{cert.issuer || 'Issuing Organization'}</div>
                {cert.date && <div className="item-date">{formatDate(cert.date)}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render achievements section
  const renderAchievementsSection = () => {
    if (!hasData('achievements')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-trophy"></i>
          <h2 style={getHeadingStyles()}>Achievements</h2>
        </div>
        <div className="section-content">
          {data.achievements.map((achievement, index) => (
            <div className="achievement-item" key={index}>
              <div className="item-header">
                <div className="item-title">{achievement.title || 'Achievement Title'}</div>
                {achievement.date && <div className="item-date">{formatDate(achievement.date)}</div>}
              </div>
              {achievement.description && (
                <div className="item-description">
                  <p>{achievement.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render languages section
  const renderLanguagesSection = () => {
    if (!hasData('languages')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-language"></i>
          <h2 style={getHeadingStyles()}>Languages</h2>
        </div>
        <div className="section-content">
          <div className="languages-list">
            {data.languages.map((lang, index) => (
              <div className="language-item" key={index}>
                <span className="language-name">{lang.language || 'Language'}</span>
                <span className="language-proficiency" style={{ color }}>
                  {lang.proficiency ? lang.proficiency.charAt(0).toUpperCase() + lang.proficiency.slice(1) : 'Proficiency'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Render portfolio section
  const renderPortfolioSection = () => {
    if (!hasData('portfolio')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-images"></i>
          <h2 style={getHeadingStyles()}>Portfolio</h2>
        </div>
        <div className="section-content">
          {data.portfolio.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="item-header">
                <div className="item-title">
                  {item.title || 'Project Title'}
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
                {item.category && <div className="item-category">{item.category}</div>}
              </div>
              {item.description && (
                <div className="item-description">
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render interests section
  const renderInterestsSection = () => {
    if (!hasData('interests') || !data.interests.interestList || data.interests.interestList.length === 0) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-heart"></i>
          <h2 style={getHeadingStyles()}>Interests</h2>
        </div>
        <div className="section-content">
          <div className="interests-list">
            {data.interests.interestList.map((interest, index) => (
              <div className="interest-item" key={index} style={{ backgroundColor: `${color}20`, color }}>
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Map section IDs to their render functions
  const sectionRenderers = {
    personal: renderPersonalSection,
    experience: renderExperienceSection,
    education: renderEducationSection,
    skills: renderSkillsSection,
    projects: renderProjectsSection,
    certifications: renderCertificationsSection,
    achievements: renderAchievementsSection,
    languages: renderLanguagesSection,
    portfolio: renderPortfolioSection,
    interests: renderInterestsSection
  };

  return (
    <div className="resume-preview" style={getCustomStyles()} data-template={template.id}>
      <div className="resume-document" style={{ '--section-spacing': getSectionSpacing() }}>
        {/* Render sections in the order specified by the template */}
        {template.sections.map(sectionId => {
          const renderSection = sectionRenderers[sectionId];
          return renderSection ? renderSection() : null;
        })}
      </div>
    </div>
  );
};

export default ResumePreview;
