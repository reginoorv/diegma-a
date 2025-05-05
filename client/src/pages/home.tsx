import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Clients } from "@/components/sections/clients";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        
        {/* About preview section */}
        <section className="py-16 bg-[#F8F8F8]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold font-serif mb-6">Tentang Studio Kami</h2>
                <p className="text-[#4A4A4A] mb-6">
                  DIEGMA adalah studio arsitektur dan desain interior yang berdedikasi untuk menciptakan ruang yang fungsional, 
                  estetis, dan bermakna. Kami percaya bahwa desain yang baik harus mencerminkan kebutuhan dan kepribadian klien 
                  kami, sambil tetap memperhatikan konteks lingkungan dan budaya.
                </p>
                <p className="text-[#4A4A4A] mb-8">
                  Dengan tim yang terdiri dari para profesional berpengalaman, kami menawarkan solusi desain komprehensif mulai 
                  dari konsep awal hingga implementasi akhir.
                </p>
                <Link href="/about">
                  <Button variant="link" className="p-0 h-auto font-medium text-black hover:text-[#FFD700] transition-colors">
                    Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div 
                className="rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0" 
                  alt="Interior design workspace" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        <Clients />
        
        {/* Projects preview section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background gradients and decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 z-0"></div>
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-0"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#FFD700]/10 rounded-full blur-3xl z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Proyek Kami</h2>
                <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
              </motion.div>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
                Temukan beragam karya dan proyek yang telah kami selesaikan, dari residensial hingga komersial, 
                dengan berbagai gaya dan pendekatan desain.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
              {[
                {
                  id: 1,
                  title: "Modern House Project",
                  category: "Residensial",
                  description: "Desain rumah modern dengan fokus pada pencahayaan alami dan ruang terbuka",
                  image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                },
                {
                  id: 2,
                  title: "Minimalist Interior",
                  category: "Desain Interior",
                  description: "Pendekatan minimalis dengan palet warna netral dan furnitur fungsional",
                  image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
                },
                {
                  id: 3,
                  title: "Commercial Space",
                  category: "Komersial",
                  description: "Ruang komersial dengan desain yang mengutamakan produktivitas dan branding",
                  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                }
              ].map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="group project-card rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 50
                  }}
                  whileHover={{ y: -10 }}
                >
                  <Link href={`/project/${project.id}`}>
                    <div className="cursor-pointer relative h-full flex flex-col">
                      <div className="relative overflow-hidden h-[300px]">
                        {/* Main image with overlay */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        <motion.img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.7 }}
                        />
                        
                        {/* Hover overlay with category tag */}
                        <div className="absolute top-6 left-6 z-20">
                          <motion.span 
                            className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm text-sm font-medium rounded-full"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          >
                            {project.category}
                          </motion.span>
                        </div>
                        
                        {/* Call to action on hover */}
                        <motion.div 
                          className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 translate-y-6 group-hover:translate-y-0 transition-transform duration-500"
                        >
                          <p className="text-lg font-medium">Lihat Detail</p>
                        </motion.div>
                      </div>
                      
                      {/* Content below image */}
                      <div className="p-6 bg-white flex-grow flex flex-col">
                        <h3 className="font-bold text-xl mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-[#4A4A4A] mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="mt-auto pt-4 flex items-center border-t border-gray-100">
                          <span className="text-sm font-medium text-[#4A4A4A] mr-2">Lihat Detail</span>
                          <motion.div
                            className="text-[#FFD700]"
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight size={16} />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center relative z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-[#FFD700] text-[#333333] font-medium py-4 px-10 rounded-md shadow-md hover:bg-[#FFD700]/90 transition-colors"
                >
                  Lihat Semua Proyek
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Services preview section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background gradients and decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"></div>
          <div className="absolute -left-40 top-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute -right-40 bottom-0 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Layanan Kami</h2>
                <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
              </motion.div>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
                Kami menawarkan berbagai layanan desain dan konstruksi untuk memenuhi kebutuhan proyek Anda, 
                dari konsep awal hingga implementasi akhir.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  id: "interior-exterior",
                  title: "Desain Interior & Eksterior",
                  description: "Layanan desain komprehensif untuk menciptakan ruang yang fungsional, estetis, dan sesuai dengan kebutuhan Anda.",
                  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m5 3 4 2 3-2 4 2 4-2v14l-4 2-4-2-3 2-4-2-4 2V3l4 2"></path><path d="M5 13v-1a2 2 0 0 1 4 0v1"></path></svg>,
                  features: ["Desain Interior", "Desain Eksterior", "Space Planning", "Konsultasi Desain"]
                },
                {
                  id: "construction",
                  title: "Konstruksi",
                  description: "Implementasi proyek yang profesional dengan fokus pada kualitas, efisiensi, dan kepatuhan terhadap standar keamanan.",
                  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M4 15v-3a6 6 0 0 1 6-6h0"></path><path d="M14 6h0a6 6 0 0 1 6 6v3"></path></svg>,
                  features: ["Renovasi", "Pembangunan Baru", "Manajemen Proyek", "Konsultasi Teknis"]
                },
                {
                  id: "furniture",
                  title: "Furniture",
                  description: "Desain dan produksi furniture custom yang menggabungkan estetika, fungsionalitas, dan kualitas terbaik.",
                  image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 10V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path><path d="M20 14v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3"></path><path d="M4 10h16"></path><path d="M4 14h16"></path></svg>,
                  features: ["Furniture Custom", "Restorasi", "Konsultasi Furniture", "Produksi"]
                }
              ].map((service, index) => (
                <motion.div 
                  key={service.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Image section with overlay and icon */}
                  <div className="relative h-52 overflow-hidden">
                    {/* Image with overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 opacity-60 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                    <motion.img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Icon positioned on the image */}
                    <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg"
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                      <h3 className="text-xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="p-6">
                    <p className="text-[#4A4A4A] mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-center text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                        >
                          <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* Action button */}
                    <Link href={`/service/${service.id}`}>
                      <motion.div
                        className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="font-medium">Lihat Selengkapnya</span>
                        <div className="w-8 h-8 bg-[#f8f8f8] rounded-full flex items-center justify-center group-hover:bg-[#FFD700] transition-colors duration-300">
                          <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-[#111] transition-colors duration-300" />
                        </div>
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* View all services button */}
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-[#FFD700] text-[#333333] font-medium py-4 px-10 rounded-md shadow-md hover:bg-[#FFD700]/90 transition-colors"
                >
                  Lihat Semua Layanan
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Contact preview section */}
        <section className="py-16 bg-[#F8F8F8]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold font-serif mb-6">Siap Untuk Mewujudkan Proyek Anda?</h2>
              <p className="text-[#4A4A4A] mb-8">
                Konsultasikan kebutuhan proyek Anda dengan tim profesional kami. Kami siap membantu Anda
                mewujudkan visi desain Anda menjadi kenyataan.
              </p>
              <Link href="/contact">
                <Button className="bg-[#FFD700] text-[#333333] font-medium py-3 px-8 rounded hover:bg-[#FFD700]/90 transition-colors">
                  Hubungi Kami
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
