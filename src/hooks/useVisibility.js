import { useState } from 'react';

const useVisibility = (initial = false) => {
  const [isVisible, setIsVisible] = useState(initial);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  const toggle = () => setIsVisible(prev => !prev);

  return { isVisible, show, hide, toggle };
};

export default useVisibility;
// This custom hook manages visibility state, providing methods to show, hide, and toggle visibility.