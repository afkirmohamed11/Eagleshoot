import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Logo3DProps {
  className?: string;
}

const Logo3D: React.FC<Logo3DProps> = ({ className = '' }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = logo.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateY = ((x - centerX) / centerX) * 15;
      const rotateX = ((centerY - y) / centerY) * 15;
      
      logo.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      logo.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };
    
    logo.addEventListener('mousemove', handleMouseMove);
    logo.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      logo.removeEventListener('mousemove', handleMouseMove);
      logo.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <motion.div 
      ref={logoRef}
      className={`logo-3d transition-transform duration-200 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="https://i.ibb.co/Jt2xF1B/eagle-shot-logo.jpg" 
        alt="Eagle Shoot Photography Logo" 
        className="w-full h-full object-contain drop-shadow-xl"
      />
    </motion.div>
  );
};

export default Logo3D;