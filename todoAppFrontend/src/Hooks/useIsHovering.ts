import { useState } from 'react';

const useIsHovering = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return { isHovering, handleMouseOver, handleMouseOut };
};

export default useIsHovering;
