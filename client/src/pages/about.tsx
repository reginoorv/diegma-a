import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { About as AboutSection } from "@/components/sections/about";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Award, Users, Clock, GraduationCap } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Adi Nugroho",
    role: "Principal Architect",
    bio: "Adi memiliki pengalaman lebih dari 15 tahun dalam bidang arsitektur dan telah menangani berbagai proyek prestisius baik di dalam maupun luar negeri. Keahliannya dalam menggabungkan unsur modern dengan sentuhan lokal menjadikan desainnya unik dan berbeda.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    social: {
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    id: 2,
    name: "Maya Putri",
    role: "Interior Design Director",
    bio: "Maya adalah spesialis dalam menciptakan ruang interior yang harmonis dengan latar belakang pendidikan dari Parsons School of Design. Pendekatannya fokus pada menciptakan ruang yang tidak hanya estetis tetapi juga nyaman dan fungsional.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    social: {
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Bimo Prasetyo",
    role: "Project Manager",
    bio: "Dengan lebih dari 10 tahun pengalaman dalam manajemen proyek konstruksi, Bimo memastikan setiap proyek berjalan sesuai jadwal dan anggaran. Keahliannya dalam koordinasi tim dan komunikasi dengan klien menjadi kunci keberhasilan setiap proyek.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    social: {
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    id: 4,
    name: "Sari Dewi",
    role: "Furniture Designer",
    bio: "Sari adalah spesialis dalam desain furnitur custom dengan pengalaman lebih dari 8 tahun. Karya-karyanya menggabungkan keindahan estetika dengan fungsionalitas, menggunakan material berkualitas tinggi dan teknik produksi yang berkelanjutan.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    social: {
      instagram: "#",
      linkedin: "#"
    }
  }
];

// Company values data
const companyValues = [
  {
    id: 1,
    icon: <Award className="w-10 h-10 text-[#FFD700]" />,
    title: "Kualitas Premium",
    description: "Kami berkomitmen untuk memberikan hasil dengan standar tertinggi dalam setiap aspek pekerjaan"
  },
  {
    id: 2,
    icon: <Users className="w-10 h-10 text-[#FFD700]" />,
    title: "Kolaborasi",
    description: "Kami percaya pada kekuatan kolaborasi antara tim dan klien untuk mencapai hasil terbaik"
  },
  {
    id: 3,
    icon: <Clock className="w-10 h-10 text-[#FFD700]" />,
    title: "Ketepatan Waktu",
    description: "Menghargai waktu Anda dengan menyelesaikan proyek sesuai jadwal yang telah disepakati"
  },
  {
    id: 4,
    icon: <GraduationCap className="w-10 h-10 text-[#FFD700]" />,
    title: "Inovasi",
    description: "Terus berinovasi dan mengembangkan solusi desain terkini untuk setiap tantangan"
  }
];

export default function AboutPage() {
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
                Tentang Kami
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
                Mengenal lebih dekat filosofi, visi, dan perjalanan kami dalam dunia arsitektur dan desain interior.
              </motion.p>
            </motion.div>
          </div>
        </section>
        
        <AboutSection />
        
        {/* Philosophy Section with Animated Cards */}
        <section className="relative py-24 overflow-hidden bg-white">
          <div className="absolute -left-40 top-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Filosofi Desain Kami</h2>
                <div className="w-16 h-1 bg-[#FFD700] mb-8"></div>
                <p className="text-[#4A4A4A] mb-6 text-lg">
                  Di DIEGMA, kami percaya bahwa arsitektur dan desain interior yang baik harus melampaui estetika semata. 
                  Setiap proyek yang kami kerjakan mencerminkan pendekatan holistik yang menyeimbangkan tiga aspek penting:
                </p>
                <ul className="space-y-5 mb-8">
                  {["Fungsi", "Estetika", "Keberlanjutan"].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ x: 5, backgroundColor: "#FFFBEA" }}
                    >
                      <span className="flex items-center justify-center w-8 h-8 bg-[#FFD700] rounded-full mr-4 text-white font-bold">
                        {index + 1}
                      </span>
                      <span className="font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="text-[#4A4A4A] text-lg">
                  Dengan pendekatan ini, kami menciptakan lingkungan yang tidak hanya merefleksikan kepribadian dan nilai klien kami, 
                  tetapi juga mendukung gaya hidup dan kesejahteraan mereka.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-2xl z-0"></div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-2xl z-0"></div>
                
                <motion.div
                  className="relative z-10 rounded-xl overflow-hidden shadow-2xl"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
                    alt="Interior design concept" 
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">Desain Holistik</h3>
                      <p className="text-white/80">Menciptakan ruang yang menyatu dengan lingkungan dan penggunanya</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Company Values Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nilai Perusahaan Kami</h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
                Nilai-nilai yang kami pegang teguh dalam setiap aspek pekerjaan untuk memberikan layanan terbaik.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div 
                  key={value.id}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-6 bg-gray-50 p-4 rounded-full group-hover:bg-[#FFF8E0] transition-colors duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-[#4A4A4A]">{value.description}</p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-1 bg-[#FFD700] transform rotate-45 translate-y-2 translate-x-1"></div>
                    <div className="absolute top-0 right-0 w-1 h-12 bg-[#FFD700] transform rotate-45 translate-y-1 translate-x-2"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team section */}
        <section className="relative py-24 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50 z-0"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tim Kami</h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
                Kenali para profesional berbakat yang membentuk DIEGMA dan membawa visi menjadi kenyataan.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image container with overlay */}
                    <div className="md:w-2/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 md:z-20"></div>
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Social icons on hover overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 hidden md:flex justify-center space-x-4">
                        {member.social.instagram && (
                          <a href={member.social.instagram} className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:bg-[#FFD700] hover:text-white transition-colors duration-300" aria-label="Instagram">
                            <Instagram size={18} />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:bg-[#FFD700] hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                            <Linkedin size={18} />
                          </a>
                        )}
                        {member.social.facebook && (
                          <a href={member.social.facebook} className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:bg-[#FFD700] hover:text-white transition-colors duration-300" aria-label="Facebook">
                            <Facebook size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    {/* Content section */}
                    <div className="md:w-3/5 p-8 flex flex-col justify-between">
                      <div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                          <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                          <p className="text-[#FFD700] font-medium mb-4">{member.role}</p>
                          <div className="w-12 h-0.5 bg-gray-200 mb-4"></div>
                        </motion.div>
                        
                        <p className="text-[#4A4A4A] mb-6">{member.bio}</p>
                      </div>
                      
                      {/* Mobile-only social links */}
                      <div className="flex space-x-4 md:hidden">
                        {member.social.instagram && (
                          <a href={member.social.instagram} className="text-gray-600 hover:text-[#FFD700]" aria-label="Instagram">
                            <Instagram size={20} />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="text-gray-600 hover:text-[#FFD700]" aria-label="LinkedIn">
                            <Linkedin size={20} />
                          </a>
                        )}
                        {member.social.facebook && (
                          <a href={member.social.facebook} className="text-gray-600 hover:text-[#FFD700]" aria-label="Facebook">
                            <Facebook size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Join Team Section with background image */}
        <section className="py-28 relative">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72" 
              alt="Office environment" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Bergabung dengan Tim Kami
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ></motion.div>
              <motion.p 
                className="text-white/80 mb-10 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Kami selalu mencari talenta kreatif dan berdedikasi untuk memperkuat tim kami. Jika Anda memiliki
                passion dalam arsitektur, desain interior, atau konstruksi, kami ingin mendengar dari Anda.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="inline-block bg-[#FFD700] text-[#333333] font-medium py-4 px-10 rounded-md shadow-md hover:bg-[#FFD700]/90 transition-colors"
                >
                  Lihat Karir
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}