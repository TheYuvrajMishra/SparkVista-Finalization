// Define the structure for a single gallery item
export interface GalleryItem {
  url: string;
  title: string;
  description: string;
}

// Define the structure for a single project
export interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  type: string;
  size: string;
  status: string;
  designType: string;
  year: number;
  description: string;
  gallery: GalleryItem[]; // Updated to use the new GalleryItem interface
}

// Export the array of project data
export const projects: Project[] = [
  {
    id: 1,
    title: "Villa Morena",
    location: "Mullanpur, New Chandigarh",
    image: "https://amazingarchitecture.com/storage/3820/london_timber_concert_pavilion_exploration_study_as_architects.jpg",
    type: "Residential",
    size: "35,000 Sq Ft",
    status: "Ongoing",
    designType: "Interior Design",
    year: 2024,
    description: "Villa Morena is a landmark residential project that blends modern aesthetics with functional living. Designed to maximize natural light and ventilation, this project sets a new standard for luxury in New Chandigarh.",
    gallery: [
      {
        url: "https://th.bing.com/th/id/R.3cb2a3de838fa0d29852b660d23e4e8e?rik=Tfa9DiOEFlFsBg&riu=http%3a%2f%2fcdn.home-designing.com%2fwp-content%2fuploads%2f2017%2f05%2fcharcoal-and-wood-home-design-exterior.jpg&ehk=QULa5bcSMvILoO8Qde0eAQZEXFQ30FW7nvxwB2P%2bZEg%3d&risl=&pid=ImgRaw&r=0",
        title: "Modern Facade",
        description: "The villa's facade combines charcoal tones and natural wood for a contemporary yet warm aesthetic."
      },
      {
        url: "https://img.freepik.com/premium-photo/modern-home-exterior-design_841014-4126.jpg",
        title: "Evening Ambiance",
        description: "Exterior lighting highlights the architectural features, creating a striking presence after sunset."
      },
      {
        url: "https://png.pngtree.com/thumb_back/fh260/background/20230625/pngtree-modern-house-exterior-architecture-in-3d-rendering-image_3682070.jpg",
        title: "Poolside View",
        description: "A 3D rendering showcasing the seamless integration of the living space with the outdoor pool area."
      }
    ]
  },
  {
    id: 2,
    title: "Villa Montelagoon",
    location: "Rajasthan",
    image: "https://img.freepik.com/premium-photo/contemporary-architect-designed-modern-house-flowing-curved-structure-generative-ai_601748-45391.jpg",
    type: "Residential",
    size: "24,000 Sq Ft",
    status: "Ongoing",
    designType: "Exterior Design",
    year: 2025,
    description: "Located in the serene landscapes of Rajasthan, Villa Montelagoon is an oasis of tranquility. The design incorporates traditional Rajasthani architectural elements with contemporary needs, creating a space that is both grand and intimate.",
    gallery: [
      {
        url: "https://th.bing.com/th/id/R.dc9a9f1077eb96cbc13db9d86ef591eb?rik=B6VjVSlKFeG1Eg&riu=http%3a%2f%2fwww.thewowdecor.com%2fwp-content%2fuploads%2f2015%2f06%2fexterior-modern-homes-exterior-designs-ideas-with-white-wall-color-combine-with-stone-wall-layer-also-minimalist-style.jpg&ehk=FnYbAEU9PdsS0%2bji1G0YfHGPqbXD5wwYqAAhahgCYvw%3d&risl=&pid=ImgRaw&r=0",
        title: "Courtyard Perspective",
        description: "The central courtyard acts as the heart of the home, designed for natural ventilation and light."
      },
      {
        url: "https://tse1.mm.bing.net/th/id/OIP.PnlOSsrpwglIY-z4I-veFwHaE8?w=1200&h=800&rs=1&pid=ImgDetMain&o=7&rm=3",
        title: "Architectural Lines",
        description: "Clean lines and geometric shapes define the villa's modern structure against the Rajasthani landscape."
      },
      {
        url: "https://tse1.mm.bing.net/th/id/OIP.C3oMmProjNQQg2Ql2-XsZQHaFj?w=1024&h=768&rs=1&pid=ImgDetMain&o=7&rm=3",
        title: "Minimalist Interior",
        description: "The interior spaces are designed with minimalism in mind, emphasizing space and tranquility."
      }
    ]
  },
  {
    id: 3,
    title: "The Glass House",
    location: "Asheville, North Carolina",
    image: "https://img.freepik.com/premium-photo/contemporary-architect-designed-modern-house-flowing-curved-structure-generative-ai_601748-44564.jpg",
    type: "Residential",
    size: "15,000 Sq Ft",
    status: "Completed",
    designType: "Interior Design",
    year: 2022,
    description: "A marvel of modern engineering, The Glass House is designed to offer panoramic views of the Blue Ridge Mountains. Its minimalist design emphasizes transparency and a seamless connection with the surrounding nature.",
    gallery: [
      {
        url: "https://mydesignagenda.com/wp-content/uploads/2017/02/best-interior-design-projects-by-kelly-hoppen-hong-kong.jpg",
        title: "Harmony with Nature",
        description: "The structure is carefully situated to blend in with the natural topography and surrounding forest."
      },
      {
        url: "https://en.idei.club/uploads/posts/2023-03/1678944743_en-idei-club-p-kelly-hoppen-interior-design-dizain-krasiv-33.jpg",
        title: "Expansive Views",
        description: "Floor-to-ceiling glass walls in the living room frame breathtaking views of the mountains."
      },
      {
        url: "https://th.bing.com/th/id/R.8311e5fba5e4f0bd0ea5de4b62e44d35?rik=MRUGEG7CYy4bEA&riu=http%3a%2f%2fmodernchairs.eu%2fwp-content%2fuploads%2f2018%2f01%2fofoe_sinatra_a_007.jpg&ehk=12QxYStMGrZl83VrDZFyPjgi1amVU1NPmvYFAapWHIc%3d&risl=&pid=ImgRaw&r=0",
        title: "Seamless Transition",
        description: "The design emphasizes the flow between indoor and outdoor living spaces, blurring the boundaries."
      }
    ]
  },
  {
    id: 4,
    title: "Aethelred Tower",
    location: "London, UK",
    image: "https://img.freepik.com/premium-photo/luxury-home-exterior-design-art-deco-architecture-style-modern-house-front-design-concept_1115748-613.jpg?w=740",
    type: "Commercial",
    size: "450,000 Sq Ft",
    status: "Completed",
    designType: "Exterior Design",
    year: 2023,
    description: "The Aethelred Tower is a cutting-edge commercial skyscraper redefining London's skyline. It features a unique helical design that incorporates green terraces on every floor, promoting a sustainable and collaborative work environment.",
    gallery: [
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/79fb5c126532381.612f5d0103fd5.jpg",
        title: "Lobby Interior",
        description: "The grand lobby features double-height ceilings and luxurious finishes, creating an impressive entrance."
      },
      {
        url: "https://antonovich-design.com/uploads/page/2023/8/thumb2023FqMSfPiJFngf.jpg",
        title: "Modern Office Space",
        description: "An example of a modern, open-plan office space within the tower, designed for collaboration."
      },
      {
        url: "https://tse4.mm.bing.net/th/id/OIP.wTRFqGEuvHWXafa886PjiwHaDt?rs=1&pid=ImgDetMain&o=7&rm=3",
        title: "Conference Room",
        description: "State-of-the-art conference facilities with panoramic views of the city of London."
      }
    ]
  },
  {
    id: 5,
    title: "Kyoto Serenity Hub",
    location: "Kyoto, Japan",
    image: "https://cdn.emrbz.com/d/0f520fbe9fee23bd5ea6b7df4f85d836fe658b8b/70/1360x906%5E/image",
    type: "Cultural Center",
    size: "50,000 Sq Ft",
    status: "Concept",
    designType: "Interior Design",
    year: 2026,
    description: "A cultural center designed to harmonize with its natural surroundings. The project blends traditional Japanese aesthetics with modern minimalism, creating a tranquil space for art, meditation, and community gatherings.",
    gallery: [
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2641c6180791719.6511385edef12.jpg",
        title: "Central Atrium",
        description: "The light-filled central atrium serves as a gathering space and connects the different wings of the center."
      },
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/882a1c180791719.6511385ee1540.jpg",
        title: "Exhibition Hall",
        description: "A flexible exhibition hall designed with minimalist principles to showcase cultural artifacts and art."
      },
      {
        url: "https://www.puntacanarealestateproperties.com/wp-content/uploads/2023/08/Z-VILLAS-A-OUT01-scaled.jpg",
        title: "Exterior Concept",
        description: "A conceptual rendering of the building's exterior, showing its integration with a traditional Japanese garden."
      }
    ]
  }
];