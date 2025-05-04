import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './LayoutCustomizer.css';

const LayoutCustomizer = ({ 
  spacing, 
  onSpacingChange, 
  alignment, 
  onAlignmentChange,
  margins,
  onMarginsChange,
  fontSize,
  onFontSizeChange
}) => {
  const spacingOptions = [
    { label: 'Compact', value: 'compact' },
    { label: 'Normal', value: 'normal' },
    { label: 'Relaxed', value: 'relaxed' }
  ];

  const alignmentOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' }
  ];

  const fontSizeOptions = [
    { label: '1. Very Small (10px)', value: '10px' },
    { label: '2. Small (12px)', value: '12px' },
    { label: '3. Medium (14px)', value: '14px' },
    { label: '4. Large (16px)', value: '16px' },
    { label: '5. Very Large (18px)', value: '18px' },
    { label: '6. Extra Large (20px)', value: '20px' }
  ];

  const handleMarginChange = (position, value) => {
    const newMargins = { ...margins, [position]: value };
    onMarginsChange(newMargins);
  };

  return (
    <div className="layout-customizer">
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Section Spacing</Form.Label>
            <Form.Select
              value={spacing}
              onChange={(e) => onSpacingChange(e.target.value)}
            >
              {spacingOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Text Alignment</Form.Label>
            <Form.Select
              value={alignment}
              onChange={(e) => onAlignmentChange(e.target.value)}
            >
              {alignmentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={12}>
          <Form.Group>
            <Form.Label>Font Size</Form.Label>
            <Form.Select
              value={fontSize}
              onChange={(e) => onFontSizeChange(e.target.value)}
            >
              {fontSizeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <div className="margins-control">
        <Form.Label>Page Margins</Form.Label>
        <div className="margin-sliders">
          <div className="margin-slider-row">
            <span>Top:</span>
            <Form.Range
              min={0}
              max={50}
              value={margins.top}
              onChange={(e) => handleMarginChange('top', parseInt(e.target.value))}
            />
            <span className="margin-value">{margins.top}px</span>
          </div>
          <div className="margin-slider-row">
            <span>Right:</span>
            <Form.Range
              min={0}
              max={50}
              value={margins.right}
              onChange={(e) => handleMarginChange('right', parseInt(e.target.value))}
            />
            <span className="margin-value">{margins.right}px</span>
          </div>
          <div className="margin-slider-row">
            <span>Bottom:</span>
            <Form.Range
              min={0}
              max={50}
              value={margins.bottom}
              onChange={(e) => handleMarginChange('bottom', parseInt(e.target.value))}
            />
            <span className="margin-value">{margins.bottom}px</span>
          </div>
          <div className="margin-slider-row">
            <span>Left:</span>
            <Form.Range
              min={0}
              max={50}
              value={margins.left}
              onChange={(e) => handleMarginChange('left', parseInt(e.target.value))}
            />
            <span className="margin-value">{margins.left}px</span>
          </div>
        </div>
        <Button 
          variant="outline-secondary" 
          size="sm" 
          className="mt-2"
          onClick={() => onMarginsChange({ top: 20, right: 20, bottom: 20, left: 20 })}
        >
          Reset to Default
        </Button>
      </div>
    </div>
  );
};

export default LayoutCustomizer;
