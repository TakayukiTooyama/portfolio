import { useCallback, useEffect, useState } from 'react';

const useScroll = (): { height: string } => {
  const [slide, setSlide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setSlide(true);
    } else {
      setSlide(false);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const height = slide ? '-100%' : '0px';

  return { height };
};

export default useScroll;
