import React, { useState, useEffect } from 'react';

const useClickOutSide = (ref: any) => {
  const [showContainer, setShowContainer] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowContainer(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return { showContainer, setShowContainer };
};

export default useClickOutSide;
