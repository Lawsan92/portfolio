import { useState, useEffect } from 'react';

const useResize = () => {

  const [windowWidth, getWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    window.addEventListener('resize', () => {
      // console.log('componentWidth:', window.innerWidth);
      getWindowWidth(window.innerWidth);
    });
  };

  useEffect(() => {
    handleResize();
  }, [])

  return { windowWidth };

}

export default useResize;
