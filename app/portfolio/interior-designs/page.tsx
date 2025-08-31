// /app/interior-design/page.tsx

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/components/data/projects";
import NoiseOverlay from "@/components/efx/NoiseOverlay";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ArrowLeft } from "lucide-react";

export default function InteriorDesignPage() {
  const interiorProjects = projects.filter(
    (project) => project.designType === "Interior Design"
  );

  return (
    <main className="bg-[#0D0D0D] text-white/90 min-h-screen">
      <NoiseOverlay />
      <Header />
      <div className="container pt-20 mb-10 mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={'/#home'}>
          <ArrowLeft className="text-white fixed z-100 top-3 bg-white/20 cursor-pointer p-2 hover:bg-white/50 left-10 h-10 w-10 mt-5" />
          </Link>
        <div
          style={{
            backgroundImage: `url("https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room.jpg")`
          }}
          className="h-96 bg-contain bg-center bg-fixed mt-5"
        >
        </div>
      <div className="container pt-32 mb-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Page Header --- */}
        <section className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase text-white">
            Interior Design
          </h1>
          <p className="mt-4 text-zinc-400">
            A curated collection of our finest interior design projects.
          </p>
        </section>

        {/* --- Section for Listing Projects with Alternating Layout --- */}
        <section className="space-y-16 md:space-y-24 mb-40">
          {interiorProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                // This is the logic for the alternating effect
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Column */}
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

              {/* Text Column */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-serif text-white mt-2 mb-4">
                  {project.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                <Link
                  href={`/portfolio/interior-designs/${project.id}`} // Links to the detail page
                  className="inline-block text-sm font-semibold text-white border-b-2 border-white/50 hover:border-white transition-colors duration-300"
                >
                  VIEW DETAILS →
                </Link>
              </div>
            </div>
          ))}
        </section>
        <div className="bg-red-800 text-white/70 w-[80vw] md:text-lg text-xs mt-20 px-5 py-5 mx-auto">
            Liked Our Work?{" "}
            <Link href="/#contact" className="text-white underline">
              Contact Us
            </Link>{" "}
            for Your Own Space Transformation!
          </div>
        {/* Optional: Show a message if no projects are found */}
        {interiorProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-400">No interior design projects found.</p>
          </div>
        )}
      </div>
      </div>
      <Footer />
    </main>
  );
}
