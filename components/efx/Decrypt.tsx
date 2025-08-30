"use client";

import { JSX, useEffect, useRef, useState } from "react";

interface DecryptTextProps {
  text: string;
  trigger?: "onMount" | "onHover" | "manual";
  duration?: number; // in ms
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function DecryptText({
  text,
  trigger = "onMount",
  duration = 2000,
  className = "",
  as = "button",
}: DecryptTextProps) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  const totalFrames = Math.ceil(duration / 50);

  const [displayedText, setDisplayedText] = useState(text);
  const frameRef = useRef(0);
  const animationId = useRef<number | null>(null);

  const getRandomChar = (char: string) =>
    char === " " ? " " : chars[Math.floor(Math.random() * chars.length)];

  const animate = () => {
    if (animationId.current) cancelAnimationFrame(animationId.current);
    frameRef.current = 0;

    const step = () => {
      const progress = frameRef.current / totalFrames;
      let newText = "";

      for (let i = 0; i < text.length; i++) {
        if (i < Math.floor(progress * text.length)) {
          newText += text[i];
        } else {
          newText += getRandomChar(text[i]);
        }
      }

      setDisplayedText(newText);
      frameRef.current++;

      if (frameRef.current <= totalFrames) {
        animationId.current = requestAnimationFrame(step);
      } else {
        setDisplayedText(text); // ensure final state is correct
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    if (trigger === "onMount") {
      animate();
    } else {
      setDisplayedText(text); // always show clean text if not mounted
    }

    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [trigger, text]);

  const Element = as;

  return (
    <Element
      className={`font-mono tracking-wide ${className}`}
      onMouseEnter={() => {
        if (trigger === "onHover") {
          animate();
        }
      }}
    >
      {displayedText}
    </Element>
  );
}
