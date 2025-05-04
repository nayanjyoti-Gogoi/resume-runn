import React from 'react';
import { Form } from 'react-bootstrap';
import './FontSelector.css';

const FontSelector = ({ currentFont, onFontChange }) => {
  const fonts = [
    { name: 'Poppins', value: 'Poppins, sans-serif' },
    { name: 'Roboto', value: 'Roboto, sans-serif' },
    { name: 'Montserrat', value: 'Montserrat, sans-serif' },
    { name: 'Open Sans', value: 'Open Sans, sans-serif' },
    { name: 'Lato', value: 'Lato, sans-serif' },
    { name: 'Raleway', value: 'Raleway, sans-serif' },
    { name: 'Playfair Display', value: 'Playfair Display, serif' },
    { name: 'Merriweather', value: 'Merriweather, serif' }
  ];

  const handleFontChange = (e) => {
    const selectedFont = e.target.value;
    onFontChange(selectedFont);
  };

  return (
    <div className="font-selector">
      <Form.Select 
        value={currentFont} 
        onChange={handleFontChange}
        className="font-select"
      >
        {fonts.map((font) => (
          <option 
            key={font.value} 
            value={font.value}
            style={{ fontFamily: font.value }}
          >
            {font.name}
          </option>
        ))}
      </Form.Select>
      
      <div className="font-preview" style={{ fontFamily: currentFont }}>
        <p className="preview-title">Font Preview</p>
        <p className="preview-heading">This is a heading</p>
        <p className="preview-text">This is what your text will look like with the selected font. The quick brown fox jumps over the lazy dog.</p>
      </div>
    </div>
  );
};

export default FontSelector;
