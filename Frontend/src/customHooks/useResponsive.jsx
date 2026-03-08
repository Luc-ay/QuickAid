import React, { useEffect, useState } from 'react'

const useResponsive = () => {
      const [windowSize, setWindowSize] = useState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
         const [scrollY, setScrollY] = useState(0);
        
          useEffect(() => {
            const handleScroll = () => {
              setScrollY(window.scrollY || document.documentElement.scrollTop);
            };
        
            window.addEventListener('scroll', handleScroll);
        
            // Initial scroll value
            handleScroll();
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
      
        useEffect(() => {
          const handleResize = () => {
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          };
      
          window.addEventListener('resize', handleResize);
      
          // Cleanup on component unmount
          return () => window.removeEventListener('resize', handleResize);
        }, []);
  return {
    windowSize,
    scrollY
  }
}

export default useResponsive