import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './FontCustomizer.css';

const FontCustomizer = ({ 
  fontSize, 
  onFontSizeChange, 
  fontColor, 
  onFontColorChange, 
  headingFontSize, 
  onHeadingFontSizeChange 
}) => {
  const fontSizes = [
    { label: 'Small', value: '12px' },
    { label: 'Medium', value: '14px' },
    { label: 'Large', value: '16px' },
    { label: 'Extra Large', value: '18px' }
  ];

  const headingSizes = [
    { label: 'Small', value: '18px' },
    { label: 'Medium', value: '22px' },
    { label: 'Large', value: '26px' },
    { label: 'Extra Large', value: '30px' }
  ];

  return (
    <div className="font-customizer">
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Text Size</Form.Label>
            <Form.Select
              value={fontSize}
              onChange={(e) => onFontSizeChange(e.target.value)}
            >
              {fontSizes.map((size) => (
                <option key={size.value} value={size.value}>
                  {size.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Heading Size</Form.Label>
            <Form.Select
              value={headingFontSize}
              onChange={(e) => onHeadingFontSizeChange(e.target.value)}
            >
              {headingSizes.map((size) => (
                <option key={size.value} value={size.value}>
                  {size.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Text Color</Form.Label>
        <div className="color-input-container">
          <div 
            className="color-preview" 
            style={{ backgroundColor: fontColor }}
          />
          <Form.Control
            type="color"
            value={fontColor}
            onChange={(e) => onFontColorChange(e.target.value)}
            title="Choose text color"
          />
          <Form.Control
            type="text"
            value={fontColor}
            onChange={(e) => onFontColorChange(e.target.value)}
            placeholder="Color hex code"
          />
        </div>
      </Form.Group>

      <div className="font-preview-customizer">
        <p className="preview-title">Text Customization Preview</p>
        <p className="preview-heading" style={{ fontSize: headingFontSize }}>This is a heading</p>
        <p className="preview-text" style={{ fontSize: fontSize, color: fontColor }}>
          This is what your text will look like with the selected customizations.
        </p>
      </div>
    </div>
  );
};

export default FontCustomizer;
