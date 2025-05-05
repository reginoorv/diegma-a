import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { PencilRuler, HardHat, Sofa, ArrowRight } from "lucide-react";

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  services: Service[];
}

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "interior-exterior",
    title: "Desain Interior & Eksterior",
    description: "Layanan desain komprehensif untuk menciptakan ruang yang fungsional, estetis, dan sesuai dengan kebutuhan Anda.",
    icon: <PencilRuler className="text-2xl text-[#FFD700]" />,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    services: [
      {
        id: 1,
        title: "Konsultasi Desain",
        description: "Sesi konsultasi mendalam untuk memahami kebutuhan, preferensi, dan anggaran Anda, serta memberikan arah desain yang sesuai.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
      },
      {
        id: 2,
        title: "Desain Interior Residensial",
        description: "Menciptakan ruang tinggal yang nyaman, fungsional, dan mencerminkan kepribadian serta gaya hidup Anda.",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea"
      },
      {
        id: 3,
        title: "Desain Interior Komersial",
        description: "Solusi desain untuk ruang bisnis yang mendukung produktivitas, branding, dan pengalaman pelanggan.",
        image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76"
      },
      {
        id: 4,
        title: "Desain Eksterior",
        description: "Menciptakan fasad yang menarik dan fungsional yang meningkatkan nilai estetika dan properti Anda.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
      }
    ]
  },
  {
    id: "construction",
    title: "Konstruksi",
    description: "Implementasi proyek yang profesional dengan fokus pada kualitas, efisiensi, dan kepatuhan terhadap standar keamanan.",
    icon: <HardHat className="text-2xl text-[#FFD700]" />,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    services: [
      {
        id: 5,
        title: "Manajemen Proyek",
        description: "Koordinasi komprehensif dari awal hingga akhir proyek, memastikan pelaksanaan tepat waktu dan sesuai anggaran.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
      },
      {
        id: 6,
        title: "Renovasi",
        description: "Transformasi ruang yang sudah ada menjadi lebih fungsional, modern, dan sesuai dengan kebutuhan terkini.",
        image: "https://images.unsplash.com/photo-1574739782594-db4ead022697"
      },
      {
        id: 7,
        title: "Pembangunan Baru",
        description: "Implementasi proyek dari awal, mulai dari persiapan lahan hingga finishing akhir dengan standar kualitas tinggi.",
        image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4"
      },
      {
        id: 8,
        title: "Konsultasi Teknis",
        description: "Evaluasi dan rekomendasi teknis untuk memastikan keamanan, efisiensi, dan keberlanjutan struktur bangunan.",
        image: "https://images.unsplash.com/photo-1553697388-94e804e2f0f6"
      }
    ]
  },
  {
    id: "furniture",
    title: "Furniture",
    description: "Desain dan produksi furniture custom yang menggabungkan estetika, fungsionalitas, dan kualitas terbaik.",
    icon: <Sofa className="text-2xl text-[#FFD700]" />,
    image: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b",
    services: [
      {
        id: 9,
        title: "Furniture Custom",
        description: "Desain dan produksi furniture yang dibuat khusus sesuai kebutuhan dan spesifikasi ruang Anda.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
      },
      {
        id: 10,
        title: "Restorasi Furniture",
        description: "Mengembalikan keindahan dan fungsionalitas furniture lama atau bersejarah dengan tetap mempertahankan karakternya.",
        image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f"
      },
      {
        id: 11,
        title: "Konsultasi Furniture",
        description: "Saran profesional untuk pemilihan dan penempatan furniture yang optimal untuk ruang dan kebutuhan Anda.",
        image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7"
      },
      {
        id: 12,
        title: "Produksi Massal",
        description: "Produksi furniture dalam jumlah besar untuk proyek komersial dengan tetap menjaga kualitas dan konsistensi.",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e"
      }
    ]
  }
];

export default function ServicesPage() {
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
              <h1 className="text-4xl font-bold font-serif mb-4">Layanan Kami</h1>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-6"></div>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                Kami menawarkan berbagai layanan desain dan konstruksi untuk memenuhi kebutuhan proyek Anda, 
                dari konsep awal hingga implementasi akhir.
              </p>
            </motion.div>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-20">
              {serviceCategories.map((category, index) => (
                <div key={category.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#F8F8F8] rounded-full flex items-center justify-center mr-4">
                        {category.icon}
                      </div>
                      <h2 className="text-3xl font-bold font-serif">{category.title}</h2>
                    </div>
                    
                    <p className="text-[#4A4A4A] mb-8">
                      {category.description}
                    </p>
                    
                    <div className="space-y-6 mb-8">
                      {category.services.map((service) => (
                        <div key={service.id} className="flex items-start">
                          <span className="text-[#FFD700] mr-3 mt-1">•</span>
                          <div>
                            <h3 className="font-bold mb-1">{service.title}</h3>
                            <p className="text-sm text-[#4A4A4A]">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={`/service/${category.id}`}>
                      <a className="inline-flex items-center text-dark font-medium hover:text-[#FFD700] transition-colors">
                        Lihat Detail Layanan
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    className={`rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-[#F8F8F8]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold font-serif mb-6">Butuh Konsultasi?</h2>
              <p className="text-[#4A4A4A] mb-8">
                Tim profesional kami siap membantu Anda menemukan solusi desain yang sesuai dengan kebutuhan dan anggaran Anda.
                Jadwalkan konsultasi gratis dengan kami hari ini.
              </p>
              <Link href="/contact">
                <a className="inline-block bg-[#FFD700] text-[#333333] font-medium py-3 px-8 rounded hover:bg-[#FFD700]/90 transition-colors">
                  Hubungi Kami
                </a>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}