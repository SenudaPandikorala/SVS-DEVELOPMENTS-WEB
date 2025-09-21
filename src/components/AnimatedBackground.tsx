import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main animated background */}
      <div className="animated-bg">
        {/* Floating geometric shapes */}
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        {/* Particle system */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{ '--delay': `${i * 0.5}s` } as React.CSSProperties}></div>
          ))}
        </div>

        {/* Grid pattern */}
        <div className="grid-pattern"></div>

        {/* Interactive cursor glow */}
        <div 
          className="cursor-glow" 
          style={{
            left: mousePos.x - 100,
            top: mousePos.y - 100,
          }}
        ></div>

        {/* Animated lines */}
        <div className="animated-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>
    </>
  );
};

export default AnimatedBackground;