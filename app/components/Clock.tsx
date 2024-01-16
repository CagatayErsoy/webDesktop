import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    // Delay rendering until client-side hydration is complete
    setCurrentTime(new Date());
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  // Render nothing until the component mounts on the client
  if (!currentTime) {
    return null;
  }

  return (
    <div className='text-[#093973]'>
      {currentTime.toLocaleTimeString()} Formats time as a string
    </div>
  );
};

export default Clock;
