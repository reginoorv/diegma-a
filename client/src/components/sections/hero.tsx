import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

export function Hero() {
  return (
    <section id="beranda" className="relative h-screen bg-gray-900 overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
          alt="Modern architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-tight mb-6">
            Menciptakan Desain yang Menginspirasi Anda dan untuk Anda
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Kami menghadirkan desain yang tidak hanya artistik, tapi mencerminkan nilai dan gaya hidup unik Anda
          </p>
          <Link href="/contact">
            <Button 
              className="bg-[#FFD700] text-dark hover:bg-[#FFD700]/90 font-medium py-3 px-8 rounded"
            >
              Konsultasi Sekarang
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
