"use client";

import { Button } from "@/components/ui/button";
import ShinyText from "@/components/efx/ShinyText";
import DecryptText from "./efx/Decrypt";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 text-white"
    >
      {" "}
      <div className="absolute top-15 md:hidden bottom-25 opacity-35">
        <img src="./images/building1.png" alt="" />
      </div>
      <div className="container mx-auto text-center z-30">
        <div className="md:relative absolute top-20">
        {/* Main Headline */}
        <h1 className="text-2xl md:relative mb-3 md:mb-3 sm:text-4xl md:text-8xl lg:text-7xl xl:text-8xl text-left mt-0 md:-mt-0 md:text-center font-extralight leading-tight animate-fade-in-up drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-t from-white via-white/10 to-white">
          Elevating Spaces
          <br />
          <span className="block text-3xl sm:text-6xl md:text-9xl lg:text-8xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-t from-white via-white/5 to-white">
            Crafting Dreams
          </span>
        </h1>

        {/* 👇 Mobile-only paragraphs */}
        <div className="block md:hidden mt-4 mb-10 px-2 text-left">
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-2">
            We don’t just design spaces. We shape experiences.
          </p>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            Discover how SparkVista transforms everyday places into living,
            breathing works of art.
          </p>
        </div>
        </div>

        {/* Subtext with Shiny Effect */}
        <ShinyText
          text="Pure Design. Purposeful Space."
          disabled={false}
          speed={5}
          className="text-xs sm:text-sm md:text-lg bg-white/5 border border-white/10 px-6 py-1 inline-block rounded-full mt-[20rem] md:mt-20 animate-fade-in-up animation-delay-200"
        />

        {/* Buttons */}
        <div className="flex flex-row mt-2 md:mt-10 md:m-0 sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-400">
          <DecryptText
            text="Explore Our Work"
            trigger="onHover"
            className="bg-white text-black px-4 py-2 text-[10px] sm:text-sm md:text-xl rounded-full shadow hover:bg-gray-100 transition whitespace-nowrap w-full sm:w-auto"
          />

          <DecryptText
            text="Book Consultation"
            trigger="onHover"
            className="bg-transparent text-white px-4 py-2 text-xs sm:text-sm md:text-xl border border-white rounded-full shadow hover:text-black hover:bg-gray-100 transition whitespace-nowrap w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
