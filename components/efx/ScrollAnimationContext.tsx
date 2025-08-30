"use client";

import { createContext, useContext } from "react";
import { motionValue, MotionValue } from "framer-motion";

type ScrollContextType = {
  scrollYProgress: MotionValue<number>;
};

// Create the context with a default motion value
export const ScrollAnimationContext = createContext<ScrollContextType>({
  scrollYProgress: motionValue(0),
});

// Create a custom hook for easy access to the context
export const useScrollAnimation = () => {
  return useContext(ScrollAnimationContext);
};