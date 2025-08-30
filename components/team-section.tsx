"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HoverCard from "./efx/HoverCard";

const teamMembers = [
  {
    name: "Nazamdeep Gujral",
    title: "Principal Architect",
    bio: "With over 15 years of experience in sustainable design, NazamDeep leads our architectural vision with a focus on innovative and environmental solutions.",
    image:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iI9P8WSPdt48/v1/-1x-1.webp",
    overlay: "https://jooinn.com/images/blueprint-7.jpg",
    linkedin: "https://www.linkedin.com/in/averio/",
  },
  {
    name: "Nischal Dangi",
    title: "Design Director",
    bio: "Nischal brings creative excellence to every project, specializing in contemporary residential and commercial spaces that blend functionality with aesthetic appeal.",
    image:
      "/nishchal.jpg",
    overlay: "https://cdn.goskills.com/blobs/blogs/209/4.jpg",
    linkedin: "#",
  },
];

export default function TeamSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="team" className="relative py-24 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-t from-white via-white/50 to-white">
            Meet The Visionaries
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Creative minds behind SparkVista – merging design with
            future-thinking aesthetics.
          </p>
        </div>

        <div className="flex flex-col gap-14">
          {teamMembers.map((member, index) => {
            const showOverlay = isMobile || hoveredCard === index;
            const cardRef = useRef<HTMLDivElement>(null);

            return (
              <motion.div
                key={index}
                ref={cardRef}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 cursor-pointer hover:-translate-x-2 rounded-2xl overflow-hidden shadow-[0_0_30px_#ffffff1a] flex flex-col md:flex-row items-center md:items-stretch w-full"
                onMouseEnter={() => !isMobile && setHoveredCard(index)}
                onMouseLeave={() => !isMobile && setHoveredCard(null)}
              >
                {/* Left Image Section */}
                <div className="relative w-full md:w-1/2 h-72 md:h-[300px]">
                  {showOverlay && (
                    <motion.img
                      src={member.overlay}
                      alt="Overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.08 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-1/2 h-1/2 object-cover z-0"
                    />
                  )}
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover z-10 grayscale md:group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-20" />
                </div>

                {/* Right Section with HoverCard */}
                <div className="w-full md:w-1/2 p-6 md:p-10 relative z-30 h-full flex items-center justify-center">
                  <HoverCard
                    icon={Linkedin}
                    title={member.name}
                    content={
                      <>
                        <a
                          href={member.linkedin}
                          className="absolute top-5 right-5 rounded-full hover:bg-white/20 transition-all duration-150 bg-white/10 p-2"
                        >
                          <Linkedin />
                        </a>
                        <span className="inline-block px-4 py-2 mb-3 text-xs font-semibold poppins-light text-purple-300 border border-purple-500/30 rounded-full uppercase tracking-widest">
                          {member.title}
                        </span>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {member.bio}
                        </p>
                      </>
                    }
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Linkedin } from "lucide-react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const teamMembers = [
//   {
//     name: "NazamDeep Kaur",
//     title: "Principal Architect",
//     bio: "With over 15 years of experience in sustainable design, NazamDeep leads our architectural vision with a focus on innovative and environmental solutions.",
//     image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iI9P8WSPdt48/v1/-1x-1.webp",
//     overlay: "https://jooinn.com/images/blueprint-7.jpg",
//     linkedin: "#",
//   },
//   {
//     name: "Nischal Dangi",
//     title: "Design Director",
//     bio: "Nischal brings creative excellence to every project, specializing in contemporary residential and commercial spaces that blend functionality with aesthetic appeal.",
//     image: "https://tse1.mm.bing.net/th/id/OIP.2uwj8JTfd6T4YsCsCdzpTwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
//     overlay: "https://cdn.goskills.com/blobs/blogs/209/4.jpg",
//     linkedin: "#",
//   },
// ];

// export default function TeamSection() {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 640);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   return (
//     <section id="team" className="relative py-24 text-white overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-right mb-10">
//           <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-t from-white via-white/50 to-white">
//             Meet The Team Spark Vista
//           </h2>
//           <p className="text-white/50 text-lg">
//             Creative minds behind SparkVista Design Studio - where innovation meets architecture.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
//           {teamMembers.map((member, index) => {
//             const showOverlay = isMobile || hoveredCard === index;
//             const cardRef = useRef<HTMLDivElement>(null);

//             const handleMouseMove = (e: React.MouseEvent) => {
//               if (!cardRef.current) return;
//               const card = cardRef.current;
//               const rect = card.getBoundingClientRect();
//               const x = e.clientX - rect.left;
//               const y = e.clientY - rect.top;
//               const centerX = rect.width / 2;
//               const centerY = rect.height / 2;

//               const rotateX = ((y - centerY) / centerY) * 10;
//               const rotateY = ((x - centerX) / centerX) * -10;

//               card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//             };

//             const handleMouseLeave = () => {
//               if (cardRef.current) {
//                 cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
//               }
//             };

//             return (
//               <div
//                 key={index}
//                 className="perspective-1000"
//                 onMouseMove={(e) => !isMobile && handleMouseMove(e)}
//                 onMouseEnter={() => !isMobile && setHoveredCard(index)}
//                 onMouseLeave={() => {
//                   if (!isMobile) {
//                     setHoveredCard(null);
//                     handleMouseLeave();
//                   }
//                 }}
//               >
//                 <motion.div
//                   ref={cardRef}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   className="transform-gpu transition-transform duration-100"
//                   style={{
//                     transformStyle: "preserve-3d",
//                     willChange: "transform",
//                   }}
//                 >
//                   <Card className="relative bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden group shadow-[0_0_30px_#ffffff1a]">
//                     {/* Dotted background */}
//                     <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:20px_20px]"></div>

//                     {/* Overlay image */}
//                     {showOverlay && (
//                       <motion.img
//                         src={member.overlay}
//                         alt="Overlay"
//                         width={500}
//                         height={500}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0.1 }}
//                         transition={{ duration: 0.5 }}
//                         className="absolute inset-0 w-full h-full object-cover z-10"
//                       />
//                     )}

//                     {/* Profile image */}
//                     <div className="relative z-20">
//                       <Image
//                         src={member.image}
//                         alt={member.name}
//                         width={400}
//                         height={400}
//                         className={`w-full h-64 object-cover transition-all duration-500 ${
//                           isMobile ? "" : "grayscale group-hover:grayscale-0"
//                         }`}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
//                     </div>

//                     {/* Card content */}
//                     <CardContent className="p-6 text-center relative z-30">
//                       <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-purple-300 border border-purple-500/30 rounded-full uppercase tracking-wide">
//                         {member.title}
//                       </span>
//                       <h3 className="text-2xl font-semibold text-white mb-1">
//                         {member.name}
//                       </h3>
//                       <p className="text-gray-400 text-sm leading-relaxed mb-4">
//                         {member.bio}
//                       </p>
//                       <div className="w-12 mx-auto border-t border-dotted border-white/20 mb-4"></div>

//                       {member.linkedin && (
//                         <a
//                           href={member.linkedin}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-200"
//                           aria-label={`${member.name} LinkedIn profile`}
//                         >
//                           <Linkedin className="w-4 h-4 text-white" />
//                         </a>
//                       )}
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
