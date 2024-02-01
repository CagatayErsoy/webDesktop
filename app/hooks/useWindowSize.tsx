import { useState, useEffect } from 'react';

// Custom Hook for Window Size with a default mobile width threshold of 798
function useWindowSize(mobileWidthThreshold: number = 798): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileWidthThreshold);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileWidthThreshold]);

  return isMobile;
}

export default useWindowSize;
