"use client";

import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed z-[99999] bottom-8 end-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/70 transition-all cursor-pointer"
        >
          <MdKeyboardDoubleArrowUp size={24}/>
        </button>
      )}
    </>
  );
}