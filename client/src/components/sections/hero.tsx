import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export function Hero() {
  return (
    <section id="beranda" className="bg-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section - Text and Button */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Left column - H1 Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pr-0 md:pr-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
              Menciptakan desain,<br />
              yang berbicara tentang<br />
              dan untuk Anda
            </h1>
          </motion.div>
          
          {/* Right column - Paragraph and Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#4A4A4A] text-base md:text-lg mb-6 max-w-lg">
              Kami percaya bahwa dengan berkomunikasi dengan Anda, kami dapat menghasilkan solusi khusus yang dibuat secara profesional yang akan menyenangkan dan memuaskan Anda, sehingga Anda dapat menjalankan pekerjaan Anda dengan lebih efektif.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black text-white rounded-full py-3.5 px-8 flex items-center transition-all shadow-md"
              >
                <span className="mr-2.5">Konsultasi Sekarang</span>
                <ArrowRight size={16} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Image section below */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6"
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
            alt="Desain interior modern" 
            className="w-full h-auto object-cover rounded-md shadow-xl"
          />
        </motion.div>
        
        {/* Bottom description text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-4">
              Desain interior - ini bukan hanya estetika, tetapi juga menciptakan ruang yang fungsional dan nyaman
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#4A4A4A]">
              Setiap proyek dikembangkan secara individual dan profesional dengan mempertimbangkan semua kebutuhan klien. Tim kami tahu bagaimana menciptakan ruang yang nyaman, fungsional, dan ergonomis tanpa mengorbankan keindahan.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
