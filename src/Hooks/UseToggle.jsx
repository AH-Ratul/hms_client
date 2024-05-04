import { useEffect, useRef, useState } from "react";

const UseToggle = (value) => {
  const [isOpen, setIsOpen] = useState(value);
  const ref = useRef(null);

  useEffect(() => {
    const handleCLickOut = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("click", handleCLickOut);

    return window.removeEventListener("click", handleCLickOut);
  }, []);

  return [isOpen, setIsOpen, ref];
};

export default UseToggle;
