import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Project types for filtering
type ProjectType = "all" | "residential" | "commercial" | "interior";

// Project data
interface Project {
  id: number;
  title: string;
  category: string;
  type: ProjectType;
  image: string;
  description: string;
  location: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern House Project",
    category: "Residential Design",
    type: "residential",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    description: "Rumah modern dengan sentuhan minimalis yang menciptakan keseimbangan sempurna antara kenyamanan dan estetika.",
    location: "Jakarta Selatan",
    year: "2023"
  },
  {
    id: 2,
    title: "Minimalist Interior",
    category: "Interior Design",
    type: "interior",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    description: "Desain interior minimalis dengan fokus pada fungsionalitas dan kenyamanan ruang tinggal.",
    location: "Bandung",
    year: "2023"
  },
  {
    id: 3,
    title: "Commercial Space",
    category: "Commercial Design",
    type: "commercial",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    description: "Ruang komersial inovatif yang menggabungkan unsur modern dengan kebutuhan fungsional bisnis.",
    location: "Jakarta Pusat",
    year: "2022"
  },
  {
    id: 4,
    title: "Villa Harmony",
    category: "Residential Design",
    type: "residential",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    description: "Villa mewah dengan konsep terbuka yang memaksimalkan pemandangan alam sekitar.",
    location: "Bali",
    year: "2022"
  },
  {
    id: 5,
    title: "Office Redesign",
    category: "Commercial Design",
    type: "commercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    description: "Redesain kantor yang menciptakan ruang kerja kolaboratif dan produktif untuk perusahaan teknologi.",
    location: "Jakarta Selatan",
    year: "2023"
  },
  {
    id: 6,
    title: "Apartment Makeover",
    category: "Interior Design",
    type: "interior",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    description: "Transformasi apartemen kecil menjadi ruang yang fungsional dan elegan dengan solusi penyimpanan cerdas.",
    location: "Jakarta Barat",
    year: "2022"
  }
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all");
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="py-20 bg-[#F4F4F4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold font-serif mb-4">Proyek Kami</h1>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-6"></div>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                Temukan beragam karya dan proyek yang telah kami selesaikan, dari residensial hingga komersial, 
                dengan berbagai gaya dan pendekatan desain.
              </p>
            </motion.div>
          </div>
        </div>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="mb-12 flex justify-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { type: "all", label: "Semua" },
                { type: "residential", label: "Residensial" },
                { type: "commercial", label: "Komersial" },
                { type: "interior", label: "Interior" }
              ].map((filter) => (
                <button
                  key={filter.type}
                  className={`px-6 py-2 rounded-full shadow-sm hover:bg-[#FFD700] transition-colors ${
                    activeFilter === filter.type ? "bg-[#FFD700]" : "bg-white"
                  }`}
                  onClick={() => setActiveFilter(filter.type as ProjectType)}
                >
                  {filter.label}
                </button>
              ))}
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/project/${project.id}`}>
                    <div className="cursor-pointer">
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                          <div className="text-center text-white p-4">
                            <span className="font-medium">Lihat Detail</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif font-bold text-xl mb-2">{project.title}</h3>
                        <p className="text-sm text-[#FFD700] mb-3">{project.category}</p>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{project.location}</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}