'use client';

import Image from 'next/image';
// NEW: Import useRouter
import { usePathname, useRouter } from 'next/navigation';
import { Home, Image as ImageIcon, Mail, Users } from 'lucide-react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useScrollAnimation } from '@/components/efx/ScrollAnimationContext';
import Link from 'next/link';

export default function Header() {
  // NEW: Get the router instance
  const router = useRouter();
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  const { scrollYProgress } = useScrollAnimation();

  // --- Animation Logic (remains the same) ---
  const introHeaderOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const mainHeaderOpacity = useTransform(scrollYProgress, [0.25, 0.35, 1], [0, 1, 1]);
  const headerWidth = useTransform(scrollYProgress, [0.25, 0.45], ["100%", "50%"]);
  const headerBorderRadius = useTransform(scrollYProgress, [0.25, 0.45], ["0px", "9999px"]);
  const headerTop = useTransform(scrollYProgress, [0.25, 0.45], ["0px", "20px"]);

  const smoothWidth = useSpring(headerWidth, { stiffness: 200, damping: 30, mass: 0.5 });
  const smoothBorderRadius = useSpring(headerBorderRadius, { stiffness: 200, damping: 30, mass: 0.5 });
  const smoothTop = useSpring(headerTop, { stiffness: 200, damping: 30, mass: 0.5 });
  
  const introPointerEvents = useTransform(scrollYProgress, (latest) => (latest > 0.35 ? 'none' : 'auto'));
  const mainPointerEvents = useTransform(scrollYProgress, (latest) => (latest < 0.35 ? 'none' : 'auto'));

  // NEW: Create a unified navigation handler
  const handleNavClick = (sectionId: string) => {
    if (isLandingPage) {
      // If we are on the home page, just scroll smoothly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we are on another page, navigate to the home page with the section hash
      // The browser will handle scrolling to the section after navigation
      router.push(`/#${sectionId}`);
    }
  };

  // --- Conditional styles (remain the same) ---
  const staticPointerEvents = useMotionValue<'auto' | 'none'>('auto');
  const defaultHeaderStyle = isLandingPage
    ? {
        opacity: mainHeaderOpacity,
        pointerEvents: mainPointerEvents,
        width: smoothWidth,
        borderRadius: smoothBorderRadius,
        top: smoothTop,
      }
    : { 
        opacity: 1,
        pointerEvents: staticPointerEvents,
        width: '50%',
        borderRadius: '9999px',
        top: '20px',
      };

  const mobileNavStyle = isLandingPage
    ? { opacity: mainHeaderOpacity, pointerEvents: mainPointerEvents }
    : { opacity: 1, pointerEvents: staticPointerEvents };

  return (
    <>
      {/* 1. INTRO HEADER */}
      {isLandingPage && (
        <motion.header
          style={{ opacity: introHeaderOpacity, pointerEvents: introPointerEvents }}
          className="fixed top-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/">
              <Image
                src="/images/sparkvista-logo.png"
                alt="SparkVista Design Studio"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {["home", "portfolio", "team", "contact"].map((section) => (
                <button
                  key={section}
                  // UPDATED: Use the new handler
                  onClick={() => handleNavClick(section)}
                  className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </motion.header>
      )}

      {/* 2. DEFAULT HEADER */}
      <motion.header
        style={defaultHeaderStyle}
        className="hidden md:block fixed left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl shadow-black"
      >
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
                <div className="flex items-center space-x-2">
                    <Link href="/">
                      <Image
                        src="/images/sparkvista-logo.png"
                        alt="SparkVista Design Studio"
                        width={160}
                        height={48}
                        className="h-12 w-auto object-contain"
                      />
                    </Link>
                </div>
                <nav className="flex items-center gap-6">
                    {["home", "portfolio", "team", "contact"].map((section) => (
                        <button
                            key={section}
                            // UPDATED: Use the new handler
                            onClick={() => handleNavClick(section)}
                            className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
      </motion.header>

      {/* 3. DEFAULT MOBILE NAV */}
      <motion.nav
        style={mobileNavStyle}
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-2"
      >
        <div className="flex justify-between items-center text-white">
            {/* UPDATED: Use the new handler for all mobile buttons */}
            <button onClick={() => handleNavClick('home')} className="flex flex-col items-center text-xs"><Home className="h-6 w-6" /><span>Home</span></button>
            <button onClick={() => handleNavClick('portfolio')} className="flex flex-col items-center text-xs"><ImageIcon className="h-6 w-6" /><span>Work</span></button>
            <button onClick={() => handleNavClick('team')} className="flex flex-col items-center text-xs"><Users className="h-6 w-6" /><span>Team</span></button>
            <button onClick={() => handleNavClick('contact')} className="flex flex-col items-center text-xs"><Mail className="h-6 w-6" /><span>Contact</span></button>
        </div>
      </motion.nav>
    </>
  );
}

// 'use client';



// import Image from 'next/image';

// import { useState } from 'react';

// import { Menu, X, Home, User, Image as ImageIcon, Mail, Users } from 'lucide-react';

// import { Button } from '@/components/ui/button';



// export default function Header() {

//   const [isMenuOpen, setIsMenuOpen] = useState(false);



//   const scrollToSection = (id: string) => {

//     const element = document.getElementById(id);

//     if (element) element.scrollIntoView({ behavior: 'smooth' });

//   };



//   return (

//     <>

//       {/* Desktop Header */}

//       <header className="hidden md:block fixed top-5 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl shadow-black rounded-full w-[50%] max-w-screen-xl">

//         <div className="px-4 sm:px-6 lg:px-8">

//           <div className="flex items-center justify-between h-14">

//             {/* Logo */}

//             <div className="flex items-center space-x-2">

//               <Image

//                 src="/images/sparkvista-logo.png"

//                 alt="SparkVista Design Studio"

//                 width={160}

//                 height={48}

//                 className="h-12 w-auto object-contain"

//               />

//             </div>



//             {/* Desktop Navigation */}

//             <nav className="flex items-center gap-6">

//   {["home", "portfolio", "team", "contact"].map((section) => (

//     <button

//       key={section}

//       onClick={() => scrollToSection(section)}

//       className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"

//     >

//       {section.charAt(0).toUpperCase() + section.slice(1)}

//     </button>

//   ))}

// </nav>



//           </div>

//         </div>

//       </header>



//       {/* Mobile Bottom Navbar (like Instagram) */}

//       <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-2">

//         <div className="flex justify-between items-center text-white">

//           <button onClick={() => scrollToSection('home')} className="flex flex-col items-center text-xs">

//             <Home className="h-6 w-6" />

//             <span>Home</span>

//           </button>

//           <button onClick={() => scrollToSection('portfolio')} className="flex flex-col items-center text-xs">

//             <ImageIcon className="h-6 w-6" />

//             <span>Work</span>

//           </button>

//           <button onClick={() => scrollToSection('team')} className="flex flex-col items-center text-xs">

//             <Users className="h-6 w-6" />

//             <span>Team</span>

//           </button>

//           <button onClick={() => scrollToSection('contact')} className="flex flex-col items-center text-xs">

//             <Mail className="h-6 w-6" />

//             <span>Contact</span>

//           </button>

//         </div>

//       </nav>

//     </>

//   );

// }