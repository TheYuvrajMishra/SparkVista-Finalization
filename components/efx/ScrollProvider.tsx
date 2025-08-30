"use client";

import { useEffect, useRef, createContext, useContext } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { usePathname } from "next/navigation"; // ✅ import this

const ScrollContext = createContext(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef(null);
  const pathname = usePathname(); // ✅ get current route

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      // @ts-expect-error: 'el' is required by LocomotiveScroll but missing in type definitions
      el: containerRef.current,
      smooth: true,
    });

    scroll.scrollTo(0, { duration: 0 });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [pathname]); // ✅ use `pathname` instead of `location.pathname`

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
};

export const useScroll = () => useContext(ScrollContext);
