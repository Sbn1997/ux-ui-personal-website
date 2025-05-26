// IconBox.js
import React from 'react';

const IconBox = ({ src, alt }) => {
  return (
    <div className="iconBox">
      <img src={src} alt={alt} className="iconImg" />
    </div>
  );
};

export default IconBox;
