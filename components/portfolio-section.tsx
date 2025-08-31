"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// The project data is defined directly in this file
const projects = [
  {
    id: "interior-designs",
    title: "Interior Designs",
    image: "https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room.jpg",
    designType: "Interior Design",
    description: "A complete interior overhaul for a modern family home, focusing on open spaces, natural light, and minimalist aesthetics.",
  },
  {
    id: "exterior-designs",
    title: "Exterior Designs",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/070266139515397.6230f095b1882.jpeg",
    designType: "Exterior Design",
    description: "A Complete designing a striking facade for a new urban villa, blending contemporary lines with durable, natural materials.",
  }
];


export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 mt-5 md:mt-20 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* ===== Section Header ===== */}
        <div className="text-left mb-20">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-t from-white via-white/50 to-white">
            Our Portfolio
          </h2>
          <p className="text-white/50 text-lg max-w-2xl">
            A curated selection of our most meaningful architectural projects,
            showcasing elegance and precision.
          </p>
        </div>

        {/* ===== Projects List ===== */}
        <div className="flex flex-col gap-28 md:gap-48">
          {projects.map((project, index) => (
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
                </div>
              </div>

              {/* ===== Text/Details Column ===== */}
              <div className="w-full md:w-[45%] flex flex-col items-start text-left mt-10 md:mt-0">
                <h3 className="text-4xl md:text-5xl font-serif mb-5">
                  {project.title}
                </h3>

                <div className="flex items-center gap-6 border-t border-b border-white/10 py-4 w-full">
                  <div>
                    <span className="text-xl block">{project.designType}</span>
                  </div>
                </div>
                <div>
                  <span className="text-sm mt-5 block text-white/70">
                    {project.description}
                  </span>
                </div>

                {/* ===== Action Link ===== */}
                <div className="mt-8">
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
      </div>
    </section>
  );
}