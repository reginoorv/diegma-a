import { ArrowRight, PencilRuler, HardHat, Sofa } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#FFD700] hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="w-16 h-16 bg-[#F8F8F8] rounded-full flex items-center justify-center mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-serif text-center mb-4">{title}</h3>
      <p className="text-[#4A4A4A] text-center mb-6">
        {description}
      </p>
      <div className="text-center">
        <a href="#" className="inline-flex items-center text-dark font-medium hover:text-[#FFD700] transition-colors">
          Pelajari Lebih Lanjut
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="layanan" className="py-16 bg-white">
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
          <ServiceCard 
            icon={<PencilRuler className="text-2xl text-[#FFD700]" />}
            title="Desain Interior & Eksterior"
            description="Layanan desain komprehensif untuk menciptakan ruang yang fungsional, estetis, dan sesuai dengan kebutuhan Anda."
            delay={0}
          />
          
          <ServiceCard 
            icon={<HardHat className="text-2xl text-[#FFD700]" />}
            title="Konstruksi"
            description="Implementasi proyek yang profesional dengan fokus pada kualitas, efisiensi, dan kepatuhan terhadap standar keamanan."
            delay={0.2}
          />
          
          <ServiceCard 
            icon={<Sofa className="text-2xl text-[#FFD700]" />}
            title="Furniture"
            description="Desain dan produksi furniture custom yang menggabungkan estetika, fungsionalitas, dan kualitas terbaik."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
