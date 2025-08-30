"use client";
import { BsArrowDown } from "react-icons/bs";
import Image from "next/image";
import {
  motion,
  useTransform,
  useSpring,
  MotionValue,
  useMotionValue,
} from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

type IntroAnimationProps = {
  imageUrl: string;
  scrollYProgress: MotionValue<number>;
  children: React.ReactNode;
};

export default function IntroAnimation({
  imageUrl,
  scrollYProgress,
  children,
}: IntroAnimationProps) {
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 25]);
  const smoothScale = useSpring(scale, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 1, 0]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [0, 0, 1, 1]
  );

  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [1, 0]
  );

  // --- Mouse trailer logic ---
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 400, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const trailerOpacity = useTransform(
    scrollIndicatorOpacity,
    [0, 1],
    isHovered ? [0, 1] : [0, 0]
  );
  const trailerScale = useTransform(
    scrollIndicatorOpacity,
    [0, 1],
    isHovered ? [0.5, 1] : [0, 0]
  );
  const handleScroll = () => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    // 1. REMOVED `pointer-events-none` from the root container.
    // This allows its `onMouseEnter` and `onMouseLeave` events to fire.
    <div
      className="relative h-[200vh]" // <-- CHANGED
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="pointer-events-none hidden fixed left-0 top-0 z-50 md:flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white shadow-lg ring-1 ring-white/20 backdrop-blur-sm"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          opacity: trailerOpacity,
          scale: trailerScale,
        }}
      >
        <span>Scroll</span>
        <BsArrowDown />
      </motion.div>
      <motion.div className="pointer-events-none md:hidden fixed right-2 top-2 z-50 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white shadow-lg ring-1 ring-white/20 backdrop-blur-sm">
        <span>SparkVista</span>
      </motion.div>
      <motion.div
        style={{
          opacity: trailerOpacity,
        }}
        className="font-thin md:hidden flex-col fixed left-5 top-72 z-50 text-3xl text-center flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-t from-white via-white/50 to-white"
      >
      </motion.div>

      <div className="sticky top-0 h-screen overflow-hidden">
        {/* 2. ADDED `pointer-events-auto` to the content wrapper. */}
        {/* This ensures your hero section (`children`) is interactive. */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute inset-0 z-0 pointer-events-auto" // <-- CHANGED
        >
          {/* Decorative backgrounds remain non-interactive by default */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
          <div
            className="absolute inset-0
                       bg-[linear-gradient(to_right,rgba(0,191,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,191,255,0.1)_1px,transparent_1px)]
                       [background-size:80px_80px]
                       animate-[gridMove_5s_linear_infinite] pointer-events-none"
          />
          {children}
        </motion.div>

        {/* 3. ADDED `pointer-events-none` to the scaling image container. */}
        {/* This makes the entire scaling image element "invisible" to the mouse. */}
        <motion.div
          style={{ scale: smoothScale, opacity: imageOpacity }}
          className="relative z-10 flex h-full items-center justify-center pointer-events-none" // <-- CHANGED
        >
          <div className="relative h-[50vh] w-[50vw]">
            <Image
              src="/images/sparkvista-logo.png"
              alt="Abstract intro image"
              fill
              priority
              className="object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 pointer-events-none" // <-- CHANGED
        ></motion.div>
      </div>
    </div>
  );
}
