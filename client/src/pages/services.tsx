import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { 
  PencilRuler, HardHat, Sofa, ArrowRight, 
  Check, Clock, CheckSquare, Sparkles, 
  Phone, MapPin, Building
} from "lucide-react";

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  benefits: string[];
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
    icon: <PencilRuler className="w-6 h-6 text-white" />,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    benefits: [
      "Desain yang disesuaikan dengan kebutuhan dan gaya hidup Anda",
      "Pendekatan holistik yang menggabungkan estetika dan fungsionalitas",
      "Penggunaan material berkualitas tinggi dengan perhatian pada detail",
      "Proses kolaboratif yang melibatkan Anda dalam setiap tahapan"
    ],
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
    icon: <HardHat className="w-6 h-6 text-white" />,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    benefits: [
      "Manajemen proyek yang efisien dan tepat waktu",
      "Tim berpengalaman dengan keahlian teknis tinggi",
      "Kepatuhan terhadap standar keamanan dan kualitas",
      "Komunikasi transparan selama proses konstruksi"
    ],
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
    icon: <Sofa className="w-6 h-6 text-white" />,
    image: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b",
    benefits: [
      "Desain furniture yang sesuai dengan ruang dan kebutuhan spesifik",
      "Penggunaan material berkualitas tinggi dan tahan lama",
      "Keahlian craftsmanship dengan perhatian pada detail",
      "Kombinasi sempurna antara estetika dan fungsi"
    ],
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

// Features list
const serviceFeatures = [
  {
    icon: <Check className="w-5 h-5 text-[#FFD700]" />,
    title: "Kualitas Premium",
    description: "Setiap layanan kami dilaksanakan dengan standar kualitas tertinggi untuk memastikan hasil yang memuaskan."
  },
  {
    icon: <Clock className="w-5 h-5 text-[#FFD700]" />,
    title: "Tepat Waktu",
    description: "Kami berkomitmen untuk menyelesaikan setiap proyek sesuai dengan timeline yang telah disepakati."
  },
  {
    icon: <CheckSquare className="w-5 h-5 text-[#FFD700]" />,
    title: "Hasil Terjamin",
    description: "Kami menjamin kepuasan klien dengan hasil yang sesuai dengan ekspektasi dan spesifikasi proyek."
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#FFD700]" />,
    title: "Inovasi",
    description: "Pendekatan inovatif dalam setiap proyek untuk memberikan solusi desain yang segar dan kreatif."
  }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const toggleCategory = (id: string) => {
    setSelectedCategory(selectedCategory === id ? null : id);
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
                Layanan Kami
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
                Kami menawarkan berbagai layanan desain dan konstruksi untuk memenuhi kebutuhan proyek Anda, 
                dari konsep awal hingga implementasi akhir.
              </motion.p>
            </motion.div>
          </div>
        </section>
        
        {/* Service Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#FFF8E0] flex items-center justify-center mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-[#4A4A4A] text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Main Services Section */}
        <section className="relative py-24">
          {/* Background decorative elements */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {serviceCategories.map((category, index) => (
                <div key={category.id} id={category.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                    {/* Content column */}
                    <motion.div
                      className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <div className="inline-block bg-[#FFF8E0] rounded-2xl p-3 mb-6">
                        <div className="w-14 h-14 bg-[#FFD700] rounded-xl flex items-center justify-center">
                          {category.icon}
                        </div>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">{category.title}</h2>
                      
                      <p className="text-[#4A4A4A] mb-8 text-lg">
                        {category.description}
                      </p>
                      
                      {/* Benefits */}
                      <div className="space-y-4 mb-8">
                        <h3 className="font-bold text-xl">Keuntungan</h3>
                        <div className="space-y-3">
                          {category.benefits.map((benefit, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-start bg-gray-50 p-3 rounded-lg"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.1 * idx }}
                              whileHover={{ x: 5, backgroundColor: "#FFFBEA" }}
                            >
                              <div className="w-6 h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                                <Check className="w-3.5 h-3.5 text-[#FFD700]" />
                              </div>
                              <span className="text-[#4A4A4A]">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Link href={`/service/${category.id}`}>
                          <div className="inline-flex items-center gap-2 px-8 py-3 bg-[#FFD700] text-[#333333] font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                            Lihat Selengkapnya
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </Link>
                      </motion.div>
                    </motion.div>
                    
                    {/* Image column */}
                    <motion.div
                      className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-2xl z-0"></div>
                      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-2xl z-0"></div>
                      
                      <motion.div
                        className="relative z-10 rounded-xl overflow-hidden shadow-2xl"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-auto object-cover aspect-[4/3]"
                        />
                        {/* Overlay with texture */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-50 z-10"></div>
                        
                        {/* Category title overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                          <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                          <div className="w-12 h-0.5 bg-[#FFD700]"></div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Services grid */}
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-2xl font-bold">Layanan {category.title}</h3>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-[#FFD700] font-medium"
                        onClick={() => toggleCategory(category.id)}
                      >
                        {selectedCategory === category.id ? "Sembunyikan" : "Lihat Semua"}
                        <ArrowRight className={`w-4 h-4 transform transition-transform ${selectedCategory === category.id ? "rotate-90" : ""}`} />
                      </motion.button>
                    </div>
                    
                    <AnimatePresence>
                      {(selectedCategory === category.id || index === 0) && (
                        <motion.div 
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {category.services.map((service, serviceIndex) => (
                            <motion.div
                              key={service.id}
                              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                              whileHover={{ y: -5 }}
                            >
                              <div className="relative h-48 overflow-hidden">
                                <img 
                                  src={service.image} 
                                  alt={service.title} 
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
                                
                                {/* Hover overlay with icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                                  <Link href={`/service/${category.id}`}>
                                    <motion.div
                                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.9 }}
                                    >
                                      <ArrowRight className="w-5 h-5 text-gray-900" />
                                    </motion.div>
                                  </Link>
                                </div>
                                
                                {/* Title overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                                  <h4 className="text-white font-bold text-lg">{service.title}</h4>
                                </div>
                              </div>
                              
                              <div className="p-5">
                                <p className="text-[#4A4A4A] text-sm line-clamp-3">{service.description}</p>
                                <Link href={`/service/${category.id}`}>
                                  <div className="mt-4 pt-3 border-t border-gray-100 text-sm font-medium text-[#FFD700] flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Pelajari Lebih Lanjut
                                    <ArrowRight className="w-3 h-3" />
                                  </div>
                                </Link>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Separator */}
                  {index < serviceCategories.length - 1 && (
                    <div className="mt-20 w-full h-px bg-gray-100"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact CTA Section */}
        <section className="py-24 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72" 
              alt="Office environment" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-10 shadow-xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-10"
                >
                  <h2 className="text-3xl font-bold mb-4">Butuh Konsultasi?</h2>
                  <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
                  <p className="text-[#4A4A4A] text-lg">
                    Tim profesional kami siap membantu Anda menemukan solusi desain yang sesuai dengan kebutuhan dan anggaran Anda.
                    Jadwalkan konsultasi gratis dengan kami hari ini.
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  {[
                    { icon: <Phone className="w-5 h-5 text-[#FFD700]" />, text: "+62 123 4567 890", label: "Telepon" },
                    { icon: <MapPin className="w-5 h-5 text-[#FFD700]" />, text: "Jakarta, Indonesia", label: "Lokasi" },
                    { icon: <Building className="w-5 h-5 text-[#FFD700]" />, text: "Senin - Jumat: 09:00 - 17:00", label: "Jam Kerja" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">{item.label}</h3>
                      <p className="font-medium">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="bg-[#FFD700] text-[#333333] font-medium py-4 px-10 rounded-lg shadow-md hover:bg-[#FFD700]/90 transition-colors"
                    >
                      Hubungi Kami
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}