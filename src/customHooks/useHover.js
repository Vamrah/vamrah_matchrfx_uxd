import { useRef, useEffect } from 'react';

const useHover = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      ref.current.classList.add('hover');
    };

    const handleMouseLeave = () => {
      ref.current.classList.remove('hover');
    };

    const element = ref.current;
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};

export default useHover;
