import React from 'react';
import { Form, Button, Row, Col, Accordion } from 'react-bootstrap';
import './ResumeForm.css';

const ResumeForm = ({ section, data, onChange, onAdd, onRemove }) => {
  // Handle input change for non-multiple sections
  const handleChange = (fieldId, value) => {
    onChange(section.id, fieldId, value);
  };

  // Handle input change for multiple sections
  const handleMultipleChange = (fieldId, value, index) => {
    onChange(section.id, fieldId, value, index);
  };

  // Handle file upload for photo
  const handleFileUpload = (e, index = null) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const photoData = event.target.result;
      if (index !== null) {
        handleMultipleChange('photo', photoData, index);
      } else {
        handleChange('photo', photoData);
      }
    };
    reader.readAsDataURL(file);
  };

  // Render form fields based on field type
  const renderField = (field, value, index = null) => {
    const handleFieldChange = (e) => {
      const fieldValue = field.type === 'checkbox' ? e.target.checked : e.target.value;
      if (index !== null) {
        handleMultipleChange(field.id, fieldValue, index);
      } else {
        handleChange(field.id, fieldValue);
      }
    };

    switch (field.type) {
      case 'text':
      case 'email':
      case 'tel':
      case 'url':
        return (
          <Form.Control
            type={field.type}
            placeholder={`Enter ${field.label}`}
            value={value || ''}
            onChange={handleFieldChange}
            required={field.required}
          />
        );
      case 'textarea':
        return (
          <Form.Control
            as="textarea"
            rows={4}
            placeholder={`Enter ${field.label}`}
            value={value || ''}
            onChange={handleFieldChange}
            required={field.required}
          />
        );
      case 'date':
        return (
          <Form.Control
            type="date"
            value={value || ''}
            onChange={handleFieldChange}
            required={field.required}
          />
        );
      case 'checkbox':
        return (
          <Form.Check
            type="checkbox"
            label={field.label}
            checked={value || false}
            onChange={handleFieldChange}
          />
        );
      case 'select':
        return (
          <Form.Select
            value={value || ''}
            onChange={handleFieldChange}
            required={field.required}
          >
            <option value="">Select {field.label}</option>
            {field.options && field.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        );
      case 'file':
        return (
          <div>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, index)}
              required={field.required}
            />
            {value && (
              <div className="mt-2 photo-preview">
                <img 
                  src={value} 
                  alt="Profile Preview" 
                  className="img-thumbnail" 
                  style={{ maxWidth: '150px', maxHeight: '150px' }} 
                />
              </div>
            )}
          </div>
        );
      case 'tags':
        return (
          <div className="tags-input-container">
            <div className="tags-input">
              {Array.isArray(value) && value.map((tag, i) => (
                <div key={i} className="tag">
                  {tag}
                  <button
                    type="button"
                    className="tag-remove"
                    onClick={() => {
                      const newTags = [...value];
                      newTags.splice(i, 1);
                      if (index !== null) {
                        handleMultipleChange(field.id, newTags, index);
                      } else {
                        handleChange(field.id, newTags);
                      }
                    }}
                  >
                    &times;
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder={`Add ${field.label} (press Enter)`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim()) {
                    e.preventDefault();
                    const newTag = e.target.value.trim();
                    const newTags = Array.isArray(value) ? [...value, newTag] : [newTag];
                    if (index !== null) {
                      handleMultipleChange(field.id, newTags, index);
                    } else {
                      handleChange(field.id, newTags);
                    }
                    e.target.value = '';
                  }
                }}
              />
              <Button 
                variant="outline-secondary" 
                size="sm" 
                className="ms-2 add-tag-btn"
                onClick={(e) => {
                  const input = e.target.closest('.tags-input').querySelector('input');
                  if (input.value.trim()) {
                    const newTag = input.value.trim();
                    const newTags = Array.isArray(value) ? [...value, newTag] : [newTag];
                    if (index !== null) {
                      handleMultipleChange(field.id, newTags, index);
                    } else {
                      handleChange(field.id, newTags);
                    }
                    input.value = '';
                  }
                }}
              >
                Add
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Render single section form
  const renderSingleForm = () => {
    return (
      <Form className="resume-section-form">
        <Row>
          {section.fields.map(field => (
            <Col md={field.type === 'textarea' ? 12 : 6} key={field.id} className="mb-3">
              <Form.Group controlId={`form-${section.id}-${field.id}`}>
                {field.type !== 'checkbox' && (
                  <Form.Label>{field.label}{field.required && <span className="required">*</span>}</Form.Label>
                )}
                {renderField(field, data ? data[field.id] : '')}
              </Form.Group>
            </Col>
          ))}
        </Row>
      </Form>
    );
  };

  // Render multiple section form (like experience, education)
  const renderMultipleForm = () => {
    if (!Array.isArray(data) || data.length === 0) {
      return (
        <div className="text-center py-4">
          <p>No {section.title.toLowerCase()} added yet.</p>
          <Button variant="primary" onClick={onAdd}>
            <i className="fas fa-plus"></i> Add {section.title}
          </Button>
        </div>
      );
    }

    return (
      <div className="multiple-section-form">
        <Accordion defaultActiveKey="0">
          {data.map((item, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>
                {getItemTitle(item, index)}
              </Accordion.Header>
              <Accordion.Body>
                <Form className="resume-section-form">
                  <Row>
                    {section.fields.map(field => (
                      <Col md={field.type === 'textarea' ? 12 : 6} key={field.id} className="mb-3">
                        <Form.Group controlId={`form-${section.id}-${index}-${field.id}`}>
                          {field.type !== 'checkbox' && (
                            <Form.Label>{field.label}{field.required && <span className="required">*</span>}</Form.Label>
                          )}
                          {renderField(field, item[field.id], index)}
                        </Form.Group>
                      </Col>
                    ))}
                  </Row>
                  <div className="text-end mt-3">
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      onClick={() => onRemove(index)}
                    >
                      <i className="fas fa-trash"></i> Remove
                    </Button>
                  </div>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        
        <div className="text-center mt-4">
          <Button variant="primary" onClick={onAdd}>
            <i className="fas fa-plus"></i> Add Another {section.title}
          </Button>
        </div>
      </div>
    );
  };

  // Get title for accordion items
  const getItemTitle = (item, index) => {
    switch (section.id) {
      case 'experience':
        return item.jobTitle ? `${item.jobTitle} at ${item.company || 'Company'}` : `Experience ${index + 1}`;
      case 'education':
        return item.degree ? `${item.degree} at ${item.institution || 'Institution'}` : `Education ${index + 1}`;
      case 'projects':
        return item.title || `Project ${index + 1}`;
      case 'certifications':
        return item.title || `Certification ${index + 1}`;
      case 'achievements':
        return item.title || `Achievement ${index + 1}`;
      case 'languages':
        return item.language || `Language ${index + 1}`;
      case 'portfolio':
        return item.title || `Portfolio Item ${index + 1}`;
      default:
        return `Item ${index + 1}`;
    }
  };

  return section.multiple ? renderMultipleForm() : renderSingleForm();
};

export default ResumeForm;
