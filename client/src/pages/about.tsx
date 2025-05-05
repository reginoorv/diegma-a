import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { About as AboutSection } from "@/components/sections/about";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutPage() {
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
              <h1 className="text-4xl font-bold font-serif mb-4">Tentang Kami</h1>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-6"></div>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                Mengenal lebih dekat filosofi, visi, dan perjalanan kami dalam dunia arsitektur dan desain interior.
              </p>
            </motion.div>
          </div>
        </div>
        
        <AboutSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold font-serif mb-6">Filosofi Desain Kami</h2>
                <p className="text-[#4A4A4A] mb-4">
                  Di DIEGMA, kami percaya bahwa arsitektur dan desain interior yang baik harus melampaui estetika semata. 
                  Setiap proyek yang kami kerjakan mencerminkan pendekatan holistik yang menyeimbangkan tiga aspek penting:
                </p>
                <ul className="space-y-3 mb-6 text-[#4A4A4A]">
                  <li className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-2">•</span>
                    <span><strong>Fungsi:</strong> Ruang yang kami ciptakan tidak hanya indah, tetapi juga fungsional dan sesuai dengan kebutuhan penghuni.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-2">•</span>
                    <span><strong>Estetika:</strong> Kami mengutamakan keindahan visual dan harmoni dalam setiap elemen desain.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-2">•</span>
                    <span><strong>Keberlanjutan:</strong> Kami berkomitmen untuk mengintegrasikan prinsip-prinsip desain berkelanjutan dan ramah lingkungan.</span>
                  </li>
                </ul>
                <p className="text-[#4A4A4A] mb-8">
                  Dengan pendekatan ini, kami menciptakan lingkungan yang tidak hanya merefleksikan kepribadian dan nilai klien kami, 
                  tetapi juga mendukung gaya hidup dan kesejahteraan mereka.
                </p>
                <Link href="/team">
                  <Button className="bg-[#FFD700] text-[#333333] font-medium py-3 px-8 rounded hover:bg-[#FFD700]/90 transition-colors">
                    Kenali Tim Kami
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
                  alt="Interior design concept" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}