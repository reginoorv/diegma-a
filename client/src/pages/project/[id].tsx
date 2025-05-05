import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

// Project types for filtering
type ProjectType = "all" | "residential" | "commercial" | "interior";

// Project data
interface Project {
  id: number;
  title: string;
  category: string;
  type: ProjectType;
  image: string;
  description: string;
  fullDescription: string;
  location: string;
  year: string;
  client: string;
  area: string;
  architect: string;
  gallery: string[];
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern House Project",
    category: "Residential Design",
    type: "residential",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    description: "Rumah modern dengan sentuhan minimalis yang menciptakan keseimbangan sempurna antara kenyamanan dan estetika.",
    fullDescription: "Proyek rumah modern ini dirancang untuk keluarga muda yang menginginkan ruang tinggal yang nyaman, fungsional, dan estetis. Desain minimalis dengan sentuhan kontemporer menciptakan suasana yang elegan namun tetap hangat. Penggunaan material alami seperti kayu dan batu alam memberikan kehangatan pada interior, sementara jendela besar memaksimalkan cahaya alami dan menciptakan koneksi dengan ruang luar.",
    location: "Jakarta Selatan",
    year: "2023",
    client: "Keluarga Santoso",
    area: "350 m²",
    architect: "Adi Nugroho",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      "https://images.unsplash.com/photo-1600607687644-c7f34b5063c7",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126"
    ],
    features: [
      "Konsep open-plan untuk area utama",
      "Sistem pencahayaan otomatis hemat energi",
      "Taman atap dengan area relaksasi",
      "Material ramah lingkungan",
      "Smart home system"
    ]
  },
  {
    id: 2,
    title: "Minimalist Interior",
    category: "Interior Design",
    type: "interior",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    description: "Desain interior minimalis dengan fokus pada fungsionalitas dan kenyamanan ruang tinggal.",
    fullDescription: "Proyek redesain interior ini bertujuan untuk mentransformasi apartemen 2-kamar menjadi ruang hidup yang minimalis namun fungsional. Dengan pemilihan furnitur multi-guna dan solusi penyimpanan terintegrasi, desain ini memaksimalkan setiap sudut ruangan tanpa mengorbankan estetika. Palet warna netral dengan aksen biru menciptakan suasana yang tenang dan menenangkan.",
    location: "Bandung",
    year: "2023",
    client: "Bpk. Reza Wijaya",
    area: "85 m²",
    architect: "Maya Putri",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a"
    ],
    features: [
      "Furnitur multi-fungsi untuk optimalisasi ruang",
      "Solusi penyimpanan terintegrasi",
      "Pencahayaan berlapis untuk menciptakan suasana berbeda",
      "Palet warna netral dengan aksen biru",
      "Material berkualitas tinggi dan tahan lama"
    ]
  },
  {
    id: 3,
    title: "Commercial Space",
    category: "Commercial Design",
    type: "commercial",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    description: "Ruang komersial inovatif yang menggabungkan unsur modern dengan kebutuhan fungsional bisnis.",
    fullDescription: "Proyek desain ruang komersial ini diciptakan untuk startup teknologi yang membutuhkan lingkungan kerja yang menginspirasi kreativitas dan kolaborasi. Desain open-plan dengan area kolaborasi fleksibel memungkinkan tim untuk bekerja secara efisien dalam berbagai konfigurasi. Sentuhan industrial dipadukan dengan elemen hangat menciptakan keseimbangan yang nyaman untuk lingkungan kerja.",
    location: "Jakarta Pusat",
    year: "2022",
    client: "TechNova Inc.",
    area: "450 m²",
    architect: "Adi Nugroho",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094"
    ],
    features: [
      "Layout open-plan dengan area kolaborasi fleksibel",
      "Ruang konferensi dengan teknologi terintegrasi",
      "Area istirahat dan rekreasi untuk karyawan",
      "Sistem akustik berkualitas tinggi",
      "Desain pencahayaan yang mendukung produktivitas"
    ]
  },
  {
    id: 4,
    title: "Villa Harmony",
    category: "Residential Design",
    type: "residential",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    description: "Villa mewah dengan konsep terbuka yang memaksimalkan pemandangan alam sekitar.",
    fullDescription: "Villa Harmony dirancang sebagai retreat mewah yang menyatu dengan lingkungan alamnya. Dengan konsep indoor-outdoor living, villa ini memaksimalkan pemandangan ke laut dan pegunungan. Desain arsitektur kontemporer dengan pengaruh tradisional Bali menciptakan pengalaman yang unik dan autentik bagi penghuninya.",
    location: "Bali",
    year: "2022",
    client: "Keluarga Wijaya",
    area: "580 m²",
    architect: "Adi Nugroho & Maya Putri",
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
    ],
    features: [
      "Infinity pool dengan pemandangan laut",
      "Area outdoor living dan dining",
      "Master suite dengan private garden",
      "Material lokal yang dipilih dengan cermat",
      "Sistem otomasi rumah pintar"
    ]
  },
  {
    id: 5,
    title: "Office Redesign",
    category: "Commercial Design",
    type: "commercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    description: "Redesain kantor yang menciptakan ruang kerja kolaboratif dan produktif untuk perusahaan teknologi.",
    fullDescription: "Proyek redesain kantor ini bertujuan untuk mentransformasi ruang kerja konvensional menjadi lingkungan yang mendorong inovasi dan kolaborasi. Dengan pengaturan ulang layout dan penambahan area diskusi informal, desain baru menciptakan alur kerja yang lebih efisien dan suasana yang lebih dinamis.",
    location: "Jakarta Selatan",
    year: "2023",
    client: "GlobalTech Solutions",
    area: "650 m²",
    architect: "Bimo Prasetyo",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
    ],
    features: [
      "Workstation ergonomis yang dapat disesuaikan",
      "Phone booth untuk panggilan pribadi",
      "Area brainstorming dengan peralatan interaktif",
      "Kafetaria dengan berbagai pilihan tempat duduk",
      "Sistem pencahayaan dinamis yang mengikuti ritme sirkadian"
    ]
  },
  {
    id: 6,
    title: "Apartment Makeover",
    category: "Interior Design",
    type: "interior",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    description: "Transformasi apartemen kecil menjadi ruang yang fungsional dan elegan dengan solusi penyimpanan cerdas.",
    fullDescription: "Proyek makeover apartemen ini mendemonstrasikan bagaimana ruang kecil dapat ditransformasikan menjadi hunian yang fungsional dan estetis. Dengan pendekatan desain yang cermat dan solusi penyimpanan custom, apartemen studio ini kini terasa lebih luas dan terorganisir dengan baik.",
    location: "Jakarta Barat",
    year: "2022",
    client: "Ibu Anita",
    area: "45 m²",
    architect: "Sari Dewi",
    gallery: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc"
    ],
    features: [
      "Furnitur modular yang dapat disesuaikan dengan kebutuhan",
      "Storage terintegrasi pada dinding dan lantai",
      "Partisi geser untuk fleksibilitas ruang",
      "Palet warna terang untuk kesan ruang lebih luas",
      "Pencahayaan yang dioptimalkan untuk berbagai aktivitas"
    ]
  }
];

export default function ProjectDetailPage() {
  // Get the project ID from the URL
  const params = useParams();
  const projectId = parseInt(params.id as string);
  
  // Find the project by ID
  const project = projects.find(p => p.id === projectId);
  
  // If project not found, show error
  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold font-serif mb-4">Proyek Tidak Ditemukan</h1>
            <p className="mb-8">Maaf, proyek yang Anda cari tidak ditemukan.</p>
            <Link href="/projects">
              <Button>
                Kembali ke Daftar Proyek
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Find related projects (same type but different ID)
  const relatedProjects = projects
    .filter(p => p.type === project.type && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero section */}
        <section 
          className="relative h-[60vh] bg-cover bg-center" 
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link href="/projects">
                  <a className="inline-flex items-center text-white hover:text-[#FFD700] mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali ke Proyek
                  </a>
                </Link>
                <h1 className="text-5xl font-bold font-serif text-white mb-4">{project.title}</h1>
                <p className="text-xl text-white/90 mb-6">{project.description}</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Project details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold font-serif mb-6">Tentang Proyek</h2>
                <p className="text-[#4A4A4A] mb-8 leading-relaxed">
                  {project.fullDescription}
                </p>
                
                <h3 className="text-xl font-bold font-serif mb-4">Fitur Utama</h3>
                <ul className="space-y-3 mb-10">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-1 text-[#FFD700]">
                        <Check size={16} />
                      </span>
                      <span className="text-[#4A4A4A]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-bold font-serif mb-4">Galeri</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      className="rounded-lg overflow-hidden shadow-md"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} gallery ${index + 1}`} 
                        className="w-full h-60 object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-[#F8F8F8] p-8 rounded-lg">
                  <h3 className="text-xl font-bold font-serif mb-4">Tertarik dengan proyek ini?</h3>
                  <p className="text-[#4A4A4A] mb-6">
                    Konsultasikan kebutuhan Anda dengan tim kami dan temukan solusi desain yang sesuai dengan kebutuhan Anda.
                  </p>
                  <Link href="/contact">
                    <a className="inline-block bg-[#FFD700] text-[#333333] font-medium py-3 px-8 rounded hover:bg-[#FFD700]/90 transition-colors">
                      Hubungi Kami
                    </a>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-[#F8F8F8] p-8 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold font-serif mb-6">Informasi Proyek</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Kategori</p>
                      <p className="font-medium">{project.category}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Lokasi</p>
                      <p className="font-medium">{project.location}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Tahun</p>
                      <p className="font-medium">{project.year}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Klien</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Luas</p>
                      <p className="font-medium">{project.area}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Arsitek</p>
                      <p className="font-medium">{project.architect}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <section className="py-16 bg-[#F8F8F8]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold font-serif mb-10">Proyek Terkait</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedProjects.map((relatedProject, index) => (
                    <motion.div
                      key={relatedProject.id}
                      className="bg-white rounded-lg overflow-hidden shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link href={`/project/${relatedProject.id}`}>
                        <a className="block">
                          <div className="relative overflow-hidden">
                            <img 
                              src={relatedProject.image} 
                              alt={relatedProject.title} 
                              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="font-serif font-bold text-lg mb-2">{relatedProject.title}</h3>
                            <p className="text-sm text-[#FFD700] mb-3">{relatedProject.category}</p>
                            <p className="text-sm text-gray-500 line-clamp-2">{relatedProject.description}</p>
                          </div>
                        </a>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}