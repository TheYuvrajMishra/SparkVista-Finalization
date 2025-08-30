"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link"; // Import the Link component
import { ArrowRight } from "lucide-react";

// Import the data from your new file
import { projects } from "./data/projects";

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Filter projects into two categories
  const interiorProjects = projects.filter(
    (project) => project.designType === "Interior Design"
  );
  const exteriorProjects = projects.filter(
    (project) => project.designType === "Exterior Design"
  );

  // A helper function to render a list of projects to avoid code repetition
  const renderProjectList = (projectList: typeof projects) => {
    return (
      <div className="flex flex-col gap-28 md:gap-48">
        {projectList.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* ===== Image Column ===== */}
            <div className="w-full md:w-[55%] h-[400px] flex-shrink-0">
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-md"
                />
                <h3
                  className="absolute opacity-0 md:opacity-100 -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 text-5xl md:text-7xl font-thin whitespace-nowrap text-white/80"
                  style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}
                >
                  {project.title}
                </h3>
              </div>
            </div>

            {/* ===== Text/Details Column ===== */}
            <div className="w-full md:w-[45%] flex flex-col items-start text-left mt-10 md:mt-0">
              <h3 className="text-4xl md:text-5xl font-serif mb-5">
                {project.title}
              </h3>
              {/* <p className="text-white/60 mb-8">{project.location}</p> */}

              <div className="flex items-center gap-6 border-t border-b border-white/10 py-4 w-full md:w-auto">
                {/* <div className="text-center">
                    <span className="text-xs text-white/50 block">Type</span>
                    <p className="font-medium">{project.type}</p>
                  </div>
                  <div className="border-l border-white/10 h-8"></div>
                  <div className="text-center">
                    <span className="text-xs text-white/50 block">Size</span>
                    <p className="font-medium">{project.size}</p>
                  </div>
                  <div className="border-l border-white/10 h-8"></div>
                  <div className="text-center">
                    <span className="text-xs text-white/50 block">Status</span>
                    <p className="font-medium">{project.status}</p>
                  </div> */}
                <div className="">
                  <span className="text-xl  block">{project.designType}</span>
                  {/* <p className="font-thin text-white/50">Status: {project.status}</p> */}
                </div>
              </div>
              <div className="">
                <span className="text-xs mt-5 block">
                  {project.description}
                </span>
                {/* <p className="font-medium text-white/50">{project.status}</p> */}
              </div>

              {/* ===== Action Link (Updated) ===== */}
              <div className="mt-8">
                {/* Wrap the button content with a Link component */}
                <Link
                  href={`/portfolio/${project.id}`} // Dynamic link to the detail page
                  className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 mt-5 md:mt-20 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-left mb-20">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-t from-white via-white/50 to-white">
            Our Portfolio
          </h2>
          <p className="text-white/50 text-lg max-w-2xl">
            A curated selection of our most meaningful architectural projects,
            showcasing elegance and precision.
          </p>
        </div>

        {/* ===== Interior Design Section ===== */}
        {interiorProjects.length > 0 && (
          <div className="mb-28 md:mb-48">
            <div className="flex items-center gap-6 my-16">
              {/* Left line */}
              <div className="flex-grow h-px bg-white/10"></div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-white via-white/50 to-white">
                Interior Design
              </h3>

              {/* Right line */}
              <div className="flex-grow h-px bg-white/10"></div>
            </div>
            {renderProjectList(interiorProjects)}
          </div>
        )}

        {/* ===== Exterior Design Section ===== */}
        {exteriorProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-6 my-16">
              {/* Left line */}
              <div className="flex-grow h-px bg-white/10"></div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-white via-white/50 to-white">
                Exterior Design
              </h3>

              {/* Right line */}
              <div className="flex-grow h-px bg-white/10"></div>
            </div>
            {renderProjectList(exteriorProjects)}
          </div>
        )}
      </div>
    </section>
  );
}
