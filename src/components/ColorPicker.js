import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './ColorPicker.css';

const ColorPicker = ({ currentColor, onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState(currentColor || '#4a6cf7');
  
  const predefinedColors = [
    { name: 'Blue', value: '#4a6cf7' },
    { name: 'Green', value: '#28a745' },
    { name: 'Red', value: '#dc3545' },
    { name: 'Orange', value: '#fd7e14' },
    { name: 'Purple', value: '#6f42c1' },
    { name: 'Teal', value: '#20c997' },
    { name: 'Gray', value: '#6c757d' },
    { name: 'Dark', value: '#343a40' }
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onColorChange(color);
  };

  const handleCustomColorChange = (e) => {
    const color = e.target.value;
    setSelectedColor(color);
    onColorChange(color);
  };

  return (
    <div className="color-picker">
      <div className="color-options">
        {predefinedColors.map((color) => (
          <div 
            key={color.value}
            className={`color-option ${selectedColor === color.value ? 'selected' : ''}`}
            style={{ backgroundColor: color.value }}
            onClick={() => handleColorSelect(color.value)}
            title={color.name}
          />
        ))}
      </div>
      
      <div className="custom-color-input">
        <Form.Label>Custom Color</Form.Label>
        <div className="color-input-container">
          <div 
            className="color-preview" 
            style={{ backgroundColor: selectedColor }}
          />
          <Form.Control
            type="color"
            value={selectedColor}
            onChange={handleCustomColorChange}
            title="Choose your color"
          />
          <Form.Control
            type="text"
            value={selectedColor}
            onChange={handleCustomColorChange}
            placeholder="Color hex code"
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
