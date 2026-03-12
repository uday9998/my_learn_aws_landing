import React from 'react';

const GradientText = ({ text, className = '', fontSize = 'text-base', fontWeight = 'font-normal' }) => {
  return (
    <span 
      className={`bg-clip-text text-transparent ${fontSize} ${fontWeight} ${className}`}
      style={{ 
        backgroundImage: 'linear-gradient(to right, #006838, #96CF24)',
        backgroundSize: '100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        paddingTop: '15px',
        fontSize: '32px',
        fontWeight: '500',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '10px'
      }}
    >
      {text}
    </span>
  );
};

export default GradientText;