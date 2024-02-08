import { RefObject, useEffect, useState } from "react";

const useClickOutside = (ref: RefObject<HTMLElement>) => {
  const [isOutside, setIsOutside] = useState<boolean>(false);

  useEffect(() => {

    const handleClick = (e: MouseEvent) => {
      if (ref && ref.current?.contains(e.target as Node)) {
        setIsOutside(true);
      } else {
        setIsOutside(false);
      }
    };
    
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return isOutside;
};

export default useClickOutside;
