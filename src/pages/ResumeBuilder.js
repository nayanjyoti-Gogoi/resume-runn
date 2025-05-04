import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button, Nav, Tab, Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { templates, resumeSections } from '../data/templates';
import ResumePreview from '../components/ResumePreview';
import ResumeForm from '../components/ResumeForm';
import ColorPicker from '../components/ColorPicker';
import FontSelector from '../components/FontSelector';
import FontCustomizer from '../components/FontCustomizer';
import LayoutCustomizer from '../components/LayoutCustomizer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const templateId = queryParams.get('template') || 'fresher';

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [resumeData, setResumeData] = useState({});
  const [activeSection, setActiveSection] = useState('personal');
  const [customColor, setCustomColor] = useState('');
  const [customFont, setCustomFont] = useState('');
  const [fontSize, setFontSize] = useState('14px');
  const [headingFontSize, setHeadingFontSize] = useState('22px');
  const [fontColor, setFontColor] = useState('#333333');
  const [spacing, setSpacing] = useState('normal');
  const [alignment, setAlignment] = useState('left');
  const [margins, setMargins] = useState({ top: 20, right: 20, bottom: 20, left: 20 });
  const [resumeSize, setResumeSize] = useState('default');
  const [resumeScale, setResumeScale] = useState('fit');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const resumeRef = useRef(null);
  const pdfRef = useRef(null);

  // Initialize resume data from localStorage or with empty values
  useEffect(() => {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      setResumeData(JSON.parse(savedData));
    } else {
      initializeResumeData();
    }
  }, []);

  // Set selected template when templateId changes
  useEffect(() => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setSelectedTemplate(template);
      setCustomColor(template.color);
      setCustomFont(template.font);
    } else {
      navigate('/templates');
    }
  }, [templateId, navigate]);

  // Initialize empty resume data based on template sections
  const initializeResumeData = () => {
    const template = templates.find(t => t.id === templateId);
    if (!template) return;

    const initialData = {};
    template.sections.forEach(sectionId => {
      const section = resumeSections[sectionId];
      if (section) {
        if (section.multiple) {
          initialData[sectionId] = [createEmptyItem(section)];
        } else {
          initialData[sectionId] = createEmptyItem(section);
        }
      }
    });

    setResumeData(initialData);
  };

  // Create an empty item for a section
  const createEmptyItem = (section) => {
    const item = {};
    section.fields.forEach(field => {
      if (field.type === 'checkbox') {
        item[field.id] = false;
      } else if (field.type === 'tags') {
        item[field.id] = [];
      } else {
        item[field.id] = '';
      }
    });
    return item;
  };

  // Handle form input changes
  const handleInputChange = (sectionId, field, value, index = null) => {
    setResumeData(prevData => {
      const newData = { ...prevData };
      
      if (index !== null) {
        // For multiple items (like experience, education)
        newData[sectionId] = [...newData[sectionId]];
        newData[sectionId][index] = {
          ...newData[sectionId][index],
          [field]: value
        };
      } else {
        // For single items (like personal info)
        newData[sectionId] = {
          ...newData[sectionId],
          [field]: value
        };
      }
      
      // Save to localStorage
      localStorage.setItem('resumeData', JSON.stringify(newData));
      return newData;
    });
  };

  // Add a new item to a multiple section
  const addSectionItem = (sectionId) => {
    const section = resumeSections[sectionId];
    if (!section || !section.multiple) return;

    setResumeData(prevData => {
      const newData = { ...prevData };
      newData[sectionId] = [...(newData[sectionId] || []), createEmptyItem(section)];
      
      // Save to localStorage
      localStorage.setItem('resumeData', JSON.stringify(newData));
      return newData;
    });
  };

  // Remove an item from a multiple section
  const removeSectionItem = (sectionId, index) => {
    setResumeData(prevData => {
      const newData = { ...prevData };
      newData[sectionId] = newData[sectionId].filter((_, i) => i !== index);
      
      // Save to localStorage
      localStorage.setItem('resumeData', JSON.stringify(newData));
      return newData;
    });
  };

  // Handle color change
  const handleColorChange = (color) => {
    setCustomColor(color);
  };

  // Handle font change
  const handleFontChange = (font) => {
    setCustomFont(font);
  };

  // Handle font size change
  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  // Handle heading font size change
  const handleHeadingFontSizeChange = (size) => {
    setHeadingFontSize(size);
  };

  // Handle font color change
  const handleFontColorChange = (color) => {
    setFontColor(color);
  };

  // Handle spacing change
  const handleSpacingChange = (value) => {
    setSpacing(value);
  };

  // Handle alignment change
  const handleAlignmentChange = (value) => {
    setAlignment(value);
  };

  // Handle margins change
  const handleMarginsChange = (newMargins) => {
    setMargins(newMargins);
  };

  // Handle resume size change
  const handleResumeSizeChange = (size) => {
    setResumeSize(size);
    
    const resumePreview = document.querySelector('.resume-preview');
    if (resumePreview) {
      // Remove all size classes first
      resumePreview.classList.remove('size-a4', 'size-letter', 'size-legal', 'size-default');
      // Add the selected size class
      if (size !== 'default') {
        resumePreview.classList.add(`size-${size}`);
      }
    }
  };

  // Handle resume scale change
  const handleResumeScaleChange = (scale) => {
    setResumeScale(scale);
    
    const resumePreview = document.querySelector('.resume-preview');
    if (resumePreview) {
      // Remove all scale classes first
      resumePreview.classList.remove('size-compact', 'size-full', 'size-fit');
      // Add the selected scale class
      resumePreview.classList.add(`size-${scale}`);
    }
  };

  // Download resume as PDF
  const downloadResume = () => {
    try {
      // Create a temporary container for the PDF content
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '-9999px';
      document.body.appendChild(tempContainer);
      
      // Clone the resume content
      const resumePreview = document.querySelector('.resume-preview');
      const resumeClone = resumePreview.cloneNode(true);
      
      // Reset any transformations and set appropriate size
      resumeClone.style.transform = 'none';
      resumeClone.style.width = '100%';
      resumeClone.style.height = 'auto';
      resumeClone.style.overflow = 'visible';
      
      // Remove any scaling classes
      resumeClone.classList.remove('size-compact', 'size-full', 'size-fit');
      
      // Add print-specific class
      resumeClone.classList.add('for-print');
      
      // Get the resume document element
      const resumeDocument = resumeClone.querySelector('.resume-document');
      if (resumeDocument) {
        // Set explicit dimensions based on the selected size
        if (resumeSize === 'a4') {
          resumeDocument.style.width = '210mm';
          resumeDocument.style.minHeight = '297mm';
        } else if (resumeSize === 'letter') {
          resumeDocument.style.width = '216mm';
          resumeDocument.style.minHeight = '279mm';
        } else if (resumeSize === 'legal') {
          resumeDocument.style.width = '216mm';
          resumeDocument.style.minHeight = '356mm';
        }
        
        // Ensure content fits within the page
        resumeDocument.style.boxSizing = 'border-box';
        resumeDocument.style.overflow = 'hidden';
      }
      
      // Ensure paragraphs have proper formatting for PDF
      const paragraphs = resumeClone.querySelectorAll('.resume-summary p, .item-description p, [class*="-description"] p');
      paragraphs.forEach(p => {
        p.style.whiteSpace = 'pre-wrap';
        p.style.wordWrap = 'break-word';
        p.style.overflowWrap = 'break-word';
        p.style.width = '100%';
        p.style.maxWidth = '100%';
        
        // Replace \n with <br> to ensure line breaks are preserved in PDF
        if (p.textContent) {
          const content = p.textContent;
          p.innerHTML = content.replace(/\n/g, '<br>');
        }
      });
      
      // Append to temp container
      tempContainer.appendChild(resumeClone);
      
      // Create a new reference for the PDF
      pdfRef.current = tempContainer;
      
      // Set appropriate page size based on selected size
      let pdfOptions = {
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      };
      
      if (resumeSize === 'a4') {
        pdfOptions.format = 'a4';
      } else if (resumeSize === 'letter') {
        pdfOptions.format = 'letter';
      } else if (resumeSize === 'legal') {
        pdfOptions.format = 'legal';
      }
      
      // Generate PDF with the correct size
      setTimeout(() => {
        html2canvas(resumeClone, {
          scale: 2, // Higher scale for better quality
          useCORS: true,
          logging: false,
          letterRendering: true,
          allowTaint: true,
          windowWidth: resumeClone.scrollWidth,
          windowHeight: resumeClone.scrollHeight
        }).then(canvas => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF(pdfOptions);
          
          // Calculate dimensions
          const imgWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          
          // If the image is taller than the page, create multiple pages
          let heightLeft = imgHeight;
          let position = 0;
          let page = 1;
          
          // Add first page
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
          
          // Add subsequent pages if needed
          while (heightLeft > 0) {
            position = -pageHeight * page;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            page++;
          }
          
          pdf.save('resume.pdf');
          
          // Clean up
          document.body.removeChild(tempContainer);
          
          setAlertVariant('success');
          setAlertMessage('Your resume has been downloaded successfully!');
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 3000);
        });
      }, 100);
    } catch (error) {
      console.error('Error generating PDF:', error);
      setAlertVariant('danger');
      setAlertMessage('Failed to download resume. Please try again.');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  if (!selectedTemplate) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="resume-builder-page">
      <Container fluid>
        {showAlert && (
          <Alert 
            variant={alertVariant}
            className="download-alert"
            onClose={() => setShowAlert(false)} 
            dismissible
          >
            {alertMessage}
          </Alert>
        )}
        
        <Row>
          {/* Left Side - Form */}
          <Col lg={6} className="form-column">
            <div className="form-container">
              <h1 className="builder-title">Resume Builder</h1>
              <p className="builder-subtitle">
                Fill in your details to create a professional resume
              </p>
              
              <Tab.Container id="resume-builder-tabs" defaultActiveKey="content">
                <Row>
                  <Col sm={12}>
                    <Nav variant="tabs" className="resume-builder-tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="content">Content</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="customize">Customize</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content>
                      <Tab.Pane eventKey="content">
                        <Tab.Container id="resume-sections" activeKey={activeSection}>
                          <Row>
                            <Col md={3}>
                              <Nav variant="pills" className="flex-column section-nav">
                                {selectedTemplate.sections.map(sectionId => {
                                  const section = resumeSections[sectionId];
                                  return (
                                    <Nav.Item key={sectionId}>
                                      <Nav.Link 
                                        eventKey={sectionId}
                                        onClick={() => setActiveSection(sectionId)}
                                      >
                                        <i className={`fas fa-${section.icon}`}></i>
                                        {section.title}
                                      </Nav.Link>
                                    </Nav.Item>
                                  );
                                })}
                                <Nav.Item>
                                  <Nav.Link 
                                    eventKey="customize"
                                    onClick={() => setActiveSection('customize')}
                                  >
                                    <i className="fas fa-paint-brush"></i>
                                    Customize
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </Col>
                            <Col md={9}>
                              <Tab.Content>
                                {selectedTemplate.sections.map(sectionId => {
                                  const section = resumeSections[sectionId];
                                  return (
                                    <Tab.Pane key={sectionId} eventKey={sectionId}>
                                      <h3 className="section-title">{section.title}</h3>
                                      <ResumeForm
                                        section={section}
                                        data={resumeData[sectionId]}
                                        onChange={handleInputChange}
                                        onAdd={() => addSectionItem(sectionId)}
                                        onRemove={(index) => removeSectionItem(sectionId, index)}
                                      />
                                    </Tab.Pane>
                                  );
                                })}
                                <Tab.Pane eventKey="customize">
                                  <h3 className="section-title">Customize Your Resume</h3>
                                  <div className="customize-options">
                                    <div className="customize-section">
                                      <h4>Theme Color</h4>
                                      <ColorPicker 
                                        currentColor={customColor} 
                                        onColorChange={handleColorChange} 
                                      />
                                    </div>
                                    <div className="customize-section">
                                      <h4>Font Style</h4>
                                      <FontSelector 
                                        currentFont={customFont} 
                                        onFontChange={handleFontChange} 
                                      />
                                    </div>
                                    <div className="customize-section">
                                      <h4>Font Customization</h4>
                                      <FontCustomizer
                                        fontSize={fontSize}
                                        onFontSizeChange={handleFontSizeChange}
                                        fontColor={fontColor}
                                        onFontColorChange={handleFontColorChange}
                                        headingFontSize={headingFontSize}
                                        onHeadingFontSizeChange={handleHeadingFontSizeChange}
                                      />
                                    </div>
                                    <div className="customize-section">
                                      <h4>Layout Customization</h4>
                                      <LayoutCustomizer
                                        spacing={spacing}
                                        onSpacingChange={handleSpacingChange}
                                        alignment={alignment}
                                        onAlignmentChange={handleAlignmentChange}
                                        margins={margins}
                                        onMarginsChange={handleMarginsChange}
                                        fontSize={fontSize}
                                        onFontSizeChange={handleFontSizeChange}
                                      />
                                    </div>
                                    <div className="customize-section">
                                      <h4>Layout Options</h4>
                                      <Form.Group className="mb-3">
                                        <Form.Check 
                                          type="switch"
                                          id="compact-layout"
                                          label="Compact Layout"
                                          onChange={(e) => {
                                            const resumePreview = document.querySelector('.resume-preview');
                                            if (resumePreview) {
                                              if (e.target.checked) {
                                                resumePreview.classList.add('compact-layout');
                                              } else {
                                                resumePreview.classList.remove('compact-layout');
                                              }
                                            }
                                          }}
                                        />
                                      </Form.Group>
                                      <Form.Group className="mb-3">
                                        <Form.Check 
                                          type="switch"
                                          id="show-borders"
                                          label="Show Section Borders"
                                          defaultChecked
                                          onChange={(e) => {
                                            const resumePreview = document.querySelector('.resume-preview');
                                            if (resumePreview) {
                                              if (e.target.checked) {
                                                resumePreview.classList.remove('no-borders');
                                              } else {
                                                resumePreview.classList.add('no-borders');
                                              }
                                            }
                                          }}
                                        />
                                      </Form.Group>
                                      <h4>Resume Size</h4>
                                      <Form.Group className="mb-3">
                                        <Form.Label>Paper Size</Form.Label>
                                        <Form.Select 
                                          value={resumeSize}
                                          onChange={(e) => handleResumeSizeChange(e.target.value)}
                                        >
                                          <option value="default">Default</option>
                                          <option value="a4">A4</option>
                                          <option value="letter">Letter</option>
                                          <option value="legal">Legal</option>
                                        </Form.Select>
                                      </Form.Group>
                                      <Form.Group className="mb-3">
                                        <Form.Label>Preview Scale</Form.Label>
                                        <Form.Select 
                                          value={resumeScale}
                                          onChange={(e) => handleResumeScaleChange(e.target.value)}
                                        >
                                          <option value="fit">Fit to Screen</option>
                                          <option value="full">Full Size (100%)</option>
                                          <option value="compact">Compact (80%)</option>
                                        </Form.Select>
                                      </Form.Group>
                                    </div>
                                  </div>
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="customize">
                        <div className="customize-tab-content">
                          <div className="customize-section">
                            <h4>Theme Color</h4>
                            <ColorPicker 
                              currentColor={customColor} 
                              onColorChange={handleColorChange} 
                            />
                          </div>
                          <div className="customize-section">
                            <h4>Font Style</h4>
                            <FontSelector 
                              currentFont={customFont} 
                              onFontChange={handleFontChange} 
                            />
                          </div>
                          <div className="customize-section">
                            <h4>Font Customization</h4>
                            <FontCustomizer
                              fontSize={fontSize}
                              onFontSizeChange={handleFontSizeChange}
                              fontColor={fontColor}
                              onFontColorChange={handleFontColorChange}
                              headingFontSize={headingFontSize}
                              onHeadingFontSizeChange={handleHeadingFontSizeChange}
                            />
                          </div>
                          <div className="customize-section">
                            <h4>Layout Customization</h4>
                            <LayoutCustomizer
                              spacing={spacing}
                              onSpacingChange={handleSpacingChange}
                              alignment={alignment}
                              onAlignmentChange={handleAlignmentChange}
                              margins={margins}
                              onMarginsChange={handleMarginsChange}
                              fontSize={fontSize}
                              onFontSizeChange={handleFontSizeChange}
                            />
                          </div>
                          <div className="customize-section">
                            <h4>Layout Options</h4>
                            <Form.Group className="mb-3">
                              <Form.Check 
                                type="switch"
                                id="compact-layout"
                                label="Compact Layout"
                                onChange={(e) => {
                                  const resumePreview = document.querySelector('.resume-preview');
                                  if (resumePreview) {
                                    if (e.target.checked) {
                                      resumePreview.classList.add('compact-layout');
                                    } else {
                                      resumePreview.classList.remove('compact-layout');
                                    }
                                  }
                                }}
                              />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Check 
                                type="switch"
                                id="show-borders"
                                label="Show Section Borders"
                                defaultChecked
                                onChange={(e) => {
                                  const resumePreview = document.querySelector('.resume-preview');
                                  if (resumePreview) {
                                    if (e.target.checked) {
                                      resumePreview.classList.remove('no-borders');
                                    } else {
                                      resumePreview.classList.add('no-borders');
                                    }
                                  }
                                }}
                              />
                            </Form.Group>
                            <h4>Resume Size</h4>
                            <Form.Group className="mb-3">
                              <Form.Label>Paper Size</Form.Label>
                              <Form.Select 
                                value={resumeSize}
                                onChange={(e) => handleResumeSizeChange(e.target.value)}
                              >
                                <option value="default">Default</option>
                                <option value="a4">A4</option>
                                <option value="letter">Letter</option>
                                <option value="legal">Legal</option>
                              </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Preview Scale</Form.Label>
                              <Form.Select 
                                value={resumeScale}
                                onChange={(e) => handleResumeScaleChange(e.target.value)}
                              >
                                <option value="fit">Fit to Screen</option>
                                <option value="full">Full Size (100%)</option>
                                <option value="compact">Compact (80%)</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
              
              <div className="form-actions">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="download-btn"
                  onClick={downloadResume}
                >
                  <i className="fas fa-download"></i> Download Resume
                </Button>
              </div>
            </div>
          </Col>
          
          {/* Right Side - Preview */}
          <Col lg={6} className="preview-column">
            <div className="preview-container">
              <div className="preview-header">
                <h3>Resume Preview</h3>
                <div className="preview-actions">
                  <Button variant="outline-primary" size="sm" onClick={downloadResume}>
                    <i className="fas fa-download"></i> Download
                  </Button>
                </div>
              </div>
              <div className="resume-preview-wrapper" ref={resumeRef}>
                <ResumePreview 
                  template={selectedTemplate}
                  data={resumeData}
                  color={customColor}
                  font={customFont}
                  fontSize={fontSize}
                  headingFontSize={headingFontSize}
                  fontColor={fontColor}
                  spacing={spacing}
                  alignment={alignment}
                  margins={margins}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResumeBuilder;
