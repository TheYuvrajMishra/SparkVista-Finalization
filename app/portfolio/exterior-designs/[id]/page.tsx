import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/components/data/projects"; // Adjust path as needed
import NoiseOverlay from "@/components/efx/NoiseOverlay";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  /*
  // Helper array for the bordered list at the bottom
  const projectDetails = [
    { label: "PROJECT", value: project.title },
    { label: "LOCATION", value: project.location },
    { label: "AREA", value: project.size },
    { label: "YEAR", value: project.status === "Ongoing" ? project.status : project.year },
  ];
  */

  return (
    // Main container with a dark theme
    <main className="bg-[#0D0D0D] text-white/90 min-h-screen">
      <NoiseOverlay />
      <Header />
      <div className="container pt-20 mb-10 mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={"/portfolio/exterior-designs"}>
          <ArrowLeft className="text-white fixed top-3 bg-white/20 cursor-pointer p-2 hover:bg-white/50 left-10 h-10 w-10 mt-5" />
        </Link>
        <div
          style={{ backgroundImage: `url(${project.image})` }}
          className="h-96 bg-cover bg-center bg-fixed mt-5"
        >
          {/* You can place content inside this div if you want text over the image */}
        </div>
        {/* --- Section 1: Centered Title, Location, and Design Type --- */}
        <section className="text-center max-w-4xl mx-auto">
          {/* New Design Type Badge */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-4 w-full max-w-xs">
              <div className="flex-grow h-px bg-white/10"></div>
              <div className="border border-zinc-700/80 rounded-full px-5 py-1 hover:bg-zinc-800/50 transition-colors duration-300">
                <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">
                  {project.designType}{" "}
                  {/* Make sure 'designType' exists in your project data */}
                </span>
              </div>
              <div className="flex-grow h-px bg-white/10"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif tracking-widest mt-5 uppercase text-white">
            {project.title}
          </h1>

          {/*
           <p className="mt-2 text-base text-zinc-400">{project.location}</p>
           
           <div className="mt-12 flex justify-center items-center gap-12 text-sm">
             <div>
               <span className="text-zinc-500">Type</span>
               <p className="mt-1 text-zinc-200">{project.type}</p>
             </div>
             <div>
               <span className="text-zinc-500">Size</span>
               <p className="mt-1 text-zinc-200">{project.size}</p>
             </div>
             <div>
               <span className="text-zinc-500">Status</span>
               <p className="mt-1 text-zinc-200">{project.status}</p>
             </div>
           </div>
           */}
        </section>

        {/* --- Section 2: Centered Description --- */}
        <section className="text-center max-w-3xl mx-auto mt-10">
          <p className="leading-relaxed text-zinc-300">{project.description}</p>
        </section>

        {/* --- Section 3: Alternating Gallery Layout --- */}
        <section className="mt-24 space-y-16 md:space-y-24">
          {project.gallery.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "" // This line creates the alternating effect
              }`}
            >
              {/* Image Column */}
              <div className="w-full md:w-1/2">
                <div className="relative h-80 w-full shadow-lg">
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-serif text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/*
        // --- Section 4: Bordered Project Details Table --- 
        <section className="max-w-4xl mb-24 mx-auto mt-24">
           <div className="border-t border-zinc-800">
             {projectDetails.map((detail, index) => (
               <div 
                 key={index} 
                 className="flex justify-between items-center py-4 border-b border-zinc-800 text-sm"
               >
                 <span className="text-zinc-400">{detail.label}</span>
                 <span className="font-medium text-right text-zinc-100">{detail.value}</span>
               </div>
             ))}
           </div>
        </section>
        */}
      </div>
      <div className="bg-red-800 text-white/70 w-[80vw] md:text-lg text-xs mb-10 mt-20 px-5 py-5 mx-auto">
        Liked Our Work?{" "}
        <Link href="/#contact" className="text-white underline">
          Contact Us
        </Link>{" "}
        for Your Own Space Transformation!
      </div>
      <Footer />
    </main>
  );
}
