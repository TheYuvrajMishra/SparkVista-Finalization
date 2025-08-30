"use client"; // This page now uses hooks, so it must be a client component

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { ScrollAnimationContext } from "@/components/efx/ScrollAnimationContext";

// Import your components
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PortfolioSection from "@/components/portfolio-section";
import TeamSection from "@/components/team-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import NoiseOverlay from "@/components/efx/NoiseOverlay";
import ScrollVelocity from "@/components/efx/AdvancedMarquee";
import IntroAnimation from "@/components/efx/IntroAnimation";

export default function Home() {
  // 1. Create the ref for the scroll track container
  const containerRef = useRef<HTMLDivElement>(null);

  // 2. Create the scrollYProgress tracker here
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    // 3. Provide the scrollYProgress value to all children
    <ScrollAnimationContext.Provider value={{ scrollYProgress }}>
      <main className="h-full bg-gradient-to-br from-black to-black/95">
        <NoiseOverlay />
        
        {/* The Header now lives outside but will react to the scroll progress */}
        <Header />

        {/* The IntroAnimation and its content are wrapped in the ref'd div */}
        <div ref={containerRef}>
          <IntroAnimation
            imageUrl="/abstract.png"
            scrollYProgress={scrollYProgress} // Pass the progress down
          >
            {/* The HeroSection doesn't need its own Header,
                as the main Header is already handled above */}
            <HeroSection />
          </IntroAnimation>
        </div>

        {/* The rest of your page content */}
        <ScrollVelocity
          texts={["Explore Our Designs", "Modern Architecture"]}
          velocity={50}
          className="custom-scroll-text"
        />
        <PortfolioSection />
        <TeamSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </ScrollAnimationContext.Provider>
  );
}