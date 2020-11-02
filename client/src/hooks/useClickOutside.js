import { useRef, useState, useEffect } from 'react';

const useClickOutside = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    };
    if (visible) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [visible]);

  return { visible, setVisible, ref };
};

export default useClickOutside;
