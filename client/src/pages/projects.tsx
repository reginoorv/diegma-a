import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin, Calendar, Eye } from "lucide-react";

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

// Filter categories with count
const filterCategories = [
  { type: "all", label: "Semua", icon: "🏠" },
  { type: "residential", label: "Residensial", icon: "🏡" },
  { type: "commercial", label: "Komersial", icon: "🏢" },
  { type: "interior", label: "Interior", icon: "🪑" }
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all");
  const [isAnimating, setIsAnimating] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  // Handle filter change with smooth scroll
  const handleFilterChange = (type: ProjectType) => {
    setIsAnimating(true);
    setActiveFilter(type);
    
    // Scroll to projects section after filtering
    setTimeout(() => {
      projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setIsAnimating(false);
    }, 500);
  };

  // Get count for each category
  const getCategoryCount = (type: ProjectType) => {
    if (type === "all") return projects.length;
    return projects.filter(project => project.type === type).length;
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#FFD700]/10 rounded-full blur-3xl z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Proyek Kami
              </motion.h1>
              <motion.div 
                className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
              <motion.p 
                className="text-[#4A4A4A] max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Temukan beragam karya dan proyek yang telah kami selesaikan, dari residensial hingga komersial, 
                dengan berbagai gaya dan pendekatan desain.
              </motion.p>
            </motion.div>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="relative py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="flex flex-wrap justify-center gap-4 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {filterCategories.map((filter, index) => (
                <motion.button
                  key={filter.type}
                  className={`relative group px-6 py-3 rounded-xl shadow-sm border flex items-center space-x-3 transition-all duration-300 ${
                    activeFilter === filter.type 
                      ? "bg-[#FFD700] border-[#FFD700] text-gray-900 shadow-md" 
                      : "bg-white border-gray-100 hover:border-[#FFD700]/50 text-gray-700"
                  }`}
                  onClick={() => handleFilterChange(filter.type as ProjectType)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
                >
                  <span className="text-xl">{filter.icon}</span>
                  <span className="font-medium">{filter.label}</span>
                  <span className={`ml-1 inline-flex items-center justify-center w-6 h-6 text-xs rounded-full ${
                    activeFilter === filter.type
                      ? "bg-white text-gray-900"
                      : "bg-gray-100 text-gray-700"
                  }`}>
                    {getCategoryCount(filter.type as ProjectType)}
                  </span>
                  
                  {/* Active indicator dot */}
                  {activeFilter === filter.type && (
                    <motion.span 
                      className="absolute -bottom-1 left-1/2 w-2 h-2 bg-[#FFD700] rounded-full"
                      layoutId="activeFilterDot"
                      initial={{ x: '-50%' }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section ref={projectsRef} className="relative py-16 bg-gray-50/50 overflow-hidden">
          <div className="absolute -top-40 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-0"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
        
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-10"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <Link href={`/project/${project.id}`}>
                      <div className="cursor-pointer h-full flex flex-col">
                        {/* Image container with effects */}
                        <div className="relative overflow-hidden h-[250px]">
                          {/* Gradient overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 opacity-60 z-10"></div>
                          
                          {/* Image with zoom effect */}
                          <motion.img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          
                          {/* Category badge */}
                          <div className="absolute top-4 left-4 z-20">
                            <motion.span 
                              className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm text-sm font-medium rounded-full"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            >
                              {project.type === "residential" ? "Residensial" : 
                               project.type === "commercial" ? "Komersial" : "Interior"}
                            </motion.span>
                          </div>
                          
                          {/* View project overlay */}
                          <div className="absolute inset-0 bg-[#FFD700]/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                            <motion.div 
                              className="bg-white/90 backdrop-blur-md rounded-full p-3 transition-transform"
                              whileHover={{ scale: 1.1 }}
                            >
                              <Eye className="w-6 h-6 text-gray-800" />
                            </motion.div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 flex-grow flex flex-col">
                          <h3 className="font-bold text-xl mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-[#4A4A4A] mb-5 line-clamp-2 flex-grow">
                            {project.description}
                          </p>
                          
                          {/* Project details */}
                          <div className="flex flex-col space-y-3 mt-auto pt-4 border-t border-gray-100">
                            <div className="flex justify-between items-center text-sm text-gray-600">
                              <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1 text-[#FFD700]" />
                                {project.location}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1 text-[#FFD700]" />
                                {project.year}
                              </span>
                            </div>
                            
                            {/* Action link */}
                            <motion.div
                              className="flex items-center justify-between mt-2"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <span className="font-medium">Lihat Detail Proyek</span>
                              <div className="w-8 h-8 bg-[#f8f8f8] rounded-full flex items-center justify-center group-hover:bg-[#FFD700] transition-colors duration-300">
                                <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-[#111] transition-colors duration-300" />
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            
            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <motion.div 
                className="text-center py-16" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mx-auto w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Tidak Ada Proyek</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Tidak ditemukan proyek untuk kategori yang dipilih. Silakan pilih kategori lain.
                </p>
                <button 
                  onClick={() => setActiveFilter("all")}
                  className="mt-6 px-6 py-2 bg-[#FFD700] rounded-lg shadow-md hover:bg-[#FFD700]/90 transition-colors"
                >
                  Lihat Semua Proyek
                </button>
              </motion.div>
            )}
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}