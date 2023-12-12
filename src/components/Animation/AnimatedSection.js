import React, { useState, useEffect, useRef } from 'react';
import 'animate.css';

const AnimatedSection = ({ animationClass, children }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      });
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className={isVisible ? `animate__animated ${animationClass}` : ''}>
      {children}
    </div>
  );
};

export default AnimatedSection;
