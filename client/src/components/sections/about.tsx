import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="tentang-kami" className="py-16 bg-[#F8F8F8]">
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
              dari konsep awal hingga implementasi akhir. Setiap proyek kami ditangani dengan perhatian penuh pada detail, 
              kualitas, dan keberlanjutan.
            </p>
            <a 
              href="#tim-kami" 
              className="inline-flex items-center text-dark font-medium hover:text-[#FFD700] transition-colors"
            >
              Kenali Tim Kami
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
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
  );
}
