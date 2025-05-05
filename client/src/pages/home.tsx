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
        <section className="py-16 bg-[#F8F8F8]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold font-serif mb-4">Proyek Kami</h2>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                Temukan beragam karya dan proyek yang telah kami selesaikan, dari residensial hingga komersial, 
                dengan berbagai gaya dan pendekatan desain.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {[
                {
                  id: 1,
                  title: "Modern House Project",
                  category: "Residential Design",
                  image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                },
                {
                  id: 2,
                  title: "Minimalist Interior",
                  category: "Interior Design",
                  image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
                },
                {
                  id: 3,
                  title: "Commercial Space",
                  category: "Commercial Design",
                  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                }
              ].map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="group rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/project/${project.id}`}>
                    <div className="cursor-pointer">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="font-serif font-bold text-xl mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-500">{project.category}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/projects">
                <Button className="bg-[#FFD700] text-[#333333] font-medium py-3 px-8 rounded hover:bg-[#FFD700]/90 transition-colors">
                  Lihat Semua Proyek
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Services preview section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold font-serif mb-4">Layanan Kami</h2>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                Kami menawarkan berbagai layanan desain dan konstruksi untuk memenuhi kebutuhan proyek Anda, 
                dari konsep awal hingga implementasi akhir.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  id: "interior-exterior",
                  title: "Desain Interior & Eksterior",
                  description: "Layanan desain komprehensif untuk menciptakan ruang yang fungsional, estetis, dan sesuai dengan kebutuhan Anda.",
                  icon: <div className="w-16 h-16 bg-[#F8F8F8] rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFD700]"><path d="m5 3 4 2 3-2 4 2 4-2v14l-4 2-4-2-3 2-4-2-4 2V3l4 2"></path><path d="M5 13v-1a2 2 0 0 1 4 0v1"></path></svg>
                  </div>,
                },
                {
                  id: "construction",
                  title: "Konstruksi",
                  description: "Implementasi proyek yang profesional dengan fokus pada kualitas, efisiensi, dan kepatuhan terhadap standar keamanan.",
                  icon: <div className="w-16 h-16 bg-[#F8F8F8] rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFD700]"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M4 15v-3a6 6 0 0 1 6-6h0"></path><path d="M14 6h0a6 6 0 0 1 6 6v3"></path></svg>
                  </div>,
                },
                {
                  id: "furniture",
                  title: "Furniture",
                  description: "Desain dan produksi furniture custom yang menggabungkan estetika, fungsionalitas, dan kualitas terbaik.",
                  icon: <div className="w-16 h-16 bg-[#F8F8F8] rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFD700]"><path d="M20 10V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path><path d="M20 14v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3"></path><path d="M4 10h16"></path><path d="M4 14h16"></path></svg>
                  </div>,
                }
              ].map((service, index) => (
                <motion.div 
                  key={service.id}
                  className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#FFD700] hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {service.icon}
                  <h3 className="text-xl font-bold font-serif text-center mb-4">{service.title}</h3>
                  <p className="text-[#4A4A4A] text-center mb-6">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <Link href={`/service/${service.id}`}>
                      <Button variant="link" className="p-0 h-auto font-medium text-black hover:text-[#FFD700] transition-colors">
                        Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
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
