'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, className = '' }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  // Create a portal that renders directly to document.body
  return createPortal(
    <div 
      className={`portal-container ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        background: '#fff'
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default Portal;