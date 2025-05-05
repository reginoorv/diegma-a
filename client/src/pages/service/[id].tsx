import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PencilRuler, HardHat, Sofa } from "lucide-react";

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: React.ReactNode;
  image: string;
  coverImage: string;
  benefits: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  services: Service[];
}

interface Service {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
  priceRange: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "interior-exterior",
    title: "Desain Interior & Eksterior",
    description: "Layanan desain komprehensif untuk menciptakan ruang yang fungsional, estetis, dan sesuai dengan kebutuhan Anda.",
    fullDescription: "Layanan Desain Interior & Eksterior kami menawarkan solusi komprehensif yang menggabungkan estetika, fungsionalitas, dan inovasi. Tim desainer berpengalaman kami bekerja sama dengan Anda untuk menciptakan ruang yang tidak hanya indah secara visual tetapi juga mencerminkan gaya hidup, kebutuhan, dan aspirasi Anda. Dari konsep awal hingga implementasi akhir, kami berkomitmen untuk memberikan hasil yang melebihi harapan Anda.",
    icon: <PencilRuler className="text-2xl text-[#FFD700]" />,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    coverImage: "https://images.unsplash.com/photo-1545213673-e2917e1c0e80",
    benefits: [
      "Desain yang dipersonalisasi sesuai kebutuhan spesifik Anda",
      "Tim desainer profesional berpengalaman",
      "Pendekatan kolaboratif sepanjang proses desain",
      "Solusi desain yang memaksimalkan ruang dan fungsionalitas",
      "Hasil akhir yang memadukan estetika dan kepraktisan"
    ],
    processSteps: [
      {
        title: "Konsultasi Awal",
        description: "Pertemuan untuk memahami visi, kebutuhan, dan anggaran Anda, serta memberikan gambaran umum tentang layanan kami."
      },
      {
        title: "Pengukuran & Analisis Ruang",
        description: "Kunjungan lokasi untuk mengambil pengukuran tepat dan menganalisis kondisi yang ada."
      },
      {
        title: "Pengembangan Konsep",
        description: "Menciptakan konsep desain awal berdasarkan diskusi dan kebutuhan Anda."
      },
      {
        title: "Presentasi Desain",
        description: "Menyajikan konsep desain melalui rendering 3D, material board, dan sampel."
      },
      {
        title: "Revisi & Finalisasi",
        description: "Menyempurnakan desain berdasarkan umpan balik Anda hingga mencapai hasil yang diinginkan."
      },
      {
        title: "Implementasi",
        description: "Mengawasi pelaksanaan proyek untuk memastikan desain diimplementasikan dengan tepat."
      }
    ],
    services: [
      {
        id: 1,
        title: "Konsultasi Desain",
        description: "Sesi konsultasi mendalam untuk memahami kebutuhan, preferensi, dan anggaran Anda, serta memberikan arah desain yang sesuai.",
        fullDescription: "Sesi konsultasi desain kami dirancang untuk memahami secara mendalam tentang visi, kebutuhan, dan anggaran Anda. Dalam sesi ini, desainer senior kami akan mendengarkan aspirasi Anda, mendiskusikan gaya desain yang Anda sukai, dan mengidentifikasi tantangan serta peluang dalam proyek Anda. Berdasarkan diskusi ini, kami akan menyediakan panduan awal dan rekomendasi untuk membantu Anda membuat keputusan yang tepat untuk proyek Anda.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
        features: [
          "Evaluasi kebutuhan dan aspirasi desain",
          "Analisis ruang dan fungsionalitas",
          "Diskusi tentang gaya, warna, dan material",
          "Estimasi anggaran dan jadwal",
          "Rekomendasi awal dan saran profesional"
        ],
        priceRange: "Rp 1.000.000 - Rp 3.000.000"
      },
      {
        id: 2,
        title: "Desain Interior Residensial",
        description: "Menciptakan ruang tinggal yang nyaman, fungsional, dan mencerminkan kepribadian serta gaya hidup Anda.",
        fullDescription: "Layanan Desain Interior Residensial kami berfokus pada menciptakan rumah yang benar-benar mencerminkan kepribadian dan gaya hidup Anda. Kami memahami bahwa rumah adalah tempat yang sangat personal, dan kami berkomitmen untuk mendesain ruang yang tidak hanya indah secara estetika tetapi juga nyaman dan fungsional. Tim kami bekerja dengan cermat untuk memilih skema warna, furnitur, perlengkapan, dan aksesoris yang harmonis dan menciptakan suasana yang Anda inginkan di setiap ruangan.",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
        features: [
          "Perencanaan ruang dan layout yang optimal",
          "Pemilihan furnitur dan aksesoris yang sesuai",
          "Desain pencahayaan sesuai fungsi ruang",
          "Pemilihan material dan finishing",
          "Penyelesaian detail hingga elemen dekoratif"
        ],
        priceRange: "Rp 150.000 - Rp 300.000 per m²"
      },
      {
        id: 3,
        title: "Desain Interior Komersial",
        description: "Solusi desain untuk ruang bisnis yang mendukung produktivitas, branding, dan pengalaman pelanggan.",
        fullDescription: "Layanan Desain Interior Komersial kami memahami bahwa ruang bisnis yang dirancang dengan baik dapat berdampak signifikan terhadap kesuksesan bisnis Anda. Kami menciptakan lingkungan yang mencerminkan identitas merek, mendukung operasional, dan meningkatkan pengalaman pelanggan. Dari kantor hingga restoran, toko retail hingga hotel, kami merancang ruang komersial yang fungsional, menginspirasi, dan membuat kesan yang tak terlupakan pada klien dan karyawan Anda.",
        image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76",
        features: [
          "Desain yang mendukung branding dan identitas perusahaan",
          "Layout yang mengoptimalkan alur kerja dan produktivitas",
          "Solusi akustik dan pencahayaan untuk kenyamanan",
          "Material yang tahan lama dan mudah dirawat",
          "Desain yang memenuhi standar keselamatan dan aksesibilitas"
        ],
        priceRange: "Rp 200.000 - Rp 400.000 per m²"
      },
      {
        id: 4,
        title: "Desain Eksterior",
        description: "Menciptakan fasad yang menarik dan fungsional yang meningkatkan nilai estetika dan properti Anda.",
        fullDescription: "Layanan Desain Eksterior kami fokus pada menciptakan tampilan luar bangunan yang memukau dan fungsional. Fasad adalah wajah dari properti Anda, dan kami merancangnya untuk menciptakan kesan pertama yang tak terlupakan. Dari pemilihan material hingga desain lansekap, kami memastikan bahwa eksterior bangunan Anda tidak hanya estetis tetapi juga tahan lama, ramah lingkungan, dan meningkatkan nilai properti Anda.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        features: [
          "Desain fasad yang menarik dan unik",
          "Pemilihan material eksterior yang tahan lama",
          "Perencanaan lansekap dan area outdoor",
          "Solusi pencahayaan eksterior",
          "Integrasi desain dengan lingkungan sekitar"
        ],
        priceRange: "Rp 100.000 - Rp 250.000 per m²"
      }
    ]
  },
  {
    id: "construction",
    title: "Konstruksi",
    description: "Implementasi proyek yang profesional dengan fokus pada kualitas, efisiensi, dan kepatuhan terhadap standar keamanan.",
    fullDescription: "Layanan Konstruksi kami menawarkan implementasi proyek yang komprehensif dengan standar profesional tertinggi. Dengan tim yang terdiri dari manajer proyek berpengalaman, kontraktor berkualitas, dan tukang ahli, kami memastikan bahwa setiap aspek konstruksi dilaksanakan dengan presisi dan perhatian terhadap detail. Fokus kami pada kualitas, efisiensi waktu, dan manajemen anggaran yang tepat menjamin hasil akhir yang sesuai dengan visi desain dan kebutuhan fungsional Anda.",
    icon: <HardHat className="text-2xl text-[#FFD700]" />,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    coverImage: "https://images.unsplash.com/photo-1599707254554-027aeb4deacd",
    benefits: [
      "Tim konstruksi yang berpengalaman dan terampil",
      "Manajemen proyek yang efisien dan tepat waktu",
      "Standar kualitas dan keamanan yang tinggi",
      "Transparansi dalam proses dan biaya",
      "Garansi untuk pekerjaan konstruksi"
    ],
    processSteps: [
      {
        title: "Perencanaan Proyek",
        description: "Mengembangkan rencana proyek terperinci termasuk jadwal, anggaran, dan kebutuhan material."
      },
      {
        title: "Perizinan & Dokumentasi",
        description: "Mengurus semua persyaratan legal dan izin yang dibutuhkan untuk proyek konstruksi."
      },
      {
        title: "Pekerjaan Awal & Fondasi",
        description: "Melaksanakan pekerjaan persiapan lahan dan pembangunan fondasi yang kokoh."
      },
      {
        title: "Konstruksi Struktural",
        description: "Membangun struktur utama sesuai dengan spesifikasi desain dan standar konstruksi."
      },
      {
        title: "Instalasi MEP",
        description: "Memasang sistem mekanikal, elektrikal, dan perpipaan dengan standar kualitas tinggi."
      },
      {
        title: "Finishing & Penyelesaian",
        description: "Melaksanakan pekerjaan finishing interior dan eksterior hingga detail terkecil."
      }
    ],
    services: [
      {
        id: 5,
        title: "Manajemen Proyek",
        description: "Koordinasi komprehensif dari awal hingga akhir proyek, memastikan pelaksanaan tepat waktu dan sesuai anggaran.",
        fullDescription: "Layanan Manajemen Proyek kami menyediakan koordinasi komprehensif dan pengawasan pada setiap tahap proyek konstruksi. Manajer proyek berpengalaman kami bertindak sebagai penghubung utama antara Anda, tim desain, dan kontraktor, memastikan komunikasi yang lancar dan penyelesaian yang efisien. Dari perencanaan awal hingga penyelesaian akhir, kami mengelola jadwal, anggaran, kualitas, dan semua aspek teknis untuk memastikan proyek Anda terlaksana dengan sukses dan sesuai dengan visi desain.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
        features: [
          "Perencanaan dan penjadwalan proyek",
          "Koordinasi dengan semua pihak terkait",
          "Pengawasan kualitas dan standar keamanan",
          "Manajemen anggaran dan kontrol biaya",
          "Pelaporan reguler tentang kemajuan proyek"
        ],
        priceRange: "5-10% dari total biaya proyek"
      },
      {
        id: 6,
        title: "Renovasi",
        description: "Transformasi ruang yang sudah ada menjadi lebih fungsional, modern, dan sesuai dengan kebutuhan terkini.",
        fullDescription: "Layanan Renovasi kami mengkhususkan diri dalam mentransformasi ruang yang sudah ada menjadi lingkungan yang lebih fungsional, estetis, dan sesuai dengan kebutuhan terkini. Kami memahami tantangan unik dalam proyek renovasi dan bekerja dengan hati-hati untuk meminimalkan gangguan sambil memaksimalkan potensi ruang. Dari penyegaran sederhana hingga renovasi total, tim kami memiliki keahlian dan pengalaman untuk memberikan hasil yang memuaskan, tepat waktu, dan sesuai anggaran.",
        image: "https://images.unsplash.com/photo-1574739782594-db4ead022697",
        features: [
          "Evaluasi kondisi bangunan yang ada",
          "Solusi untuk mengatasi masalah struktural",
          "Modernisasi sistem utilitas (listrik, pipa, dll)",
          "Pembaruan tampilan dan fungsi ruang",
          "Minimalisasi gangguan selama proses renovasi"
        ],
        priceRange: "Rp 2.500.000 - Rp 5.000.000 per m²"
      },
      {
        id: 7,
        title: "Pembangunan Baru",
        description: "Implementasi proyek dari awal, mulai dari persiapan lahan hingga finishing akhir dengan standar kualitas tinggi.",
        fullDescription: "Layanan Pembangunan Baru kami meliputi implementasi proyek dari awal hingga akhir dengan standar kualitas tertinggi. Mulai dari persiapan lahan dan fondasi hingga struktur dan finishing akhir, kami menangani setiap aspek konstruksi dengan presisi dan perhatian terhadap detail. Tim kami yang berpengalaman bekerja sama dengan arsitek dan desainer untuk memastikan bahwa visi desain direalisasikan dengan sempurna, sekaligus memenuhi semua standar keamanan dan peraturan bangunan.",
        image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4",
        features: [
          "Persiapan lahan dan pekerjaan fondasi",
          "Konstruksi struktural yang kokoh",
          "Instalasi sistem mekanikal, elektrikal, dan plumbing",
          "Pekerjaan finishing interior dan eksterior",
          "Quality control yang ketat di setiap tahap"
        ],
        priceRange: "Rp 4.000.000 - Rp 8.000.000 per m²"
      },
      {
        id: 8,
        title: "Konsultasi Teknis",
        description: "Evaluasi dan rekomendasi teknis untuk memastikan keamanan, efisiensi, dan keberlanjutan struktur bangunan.",
        fullDescription: "Layanan Konsultasi Teknis kami menyediakan evaluasi dan rekomendasi profesional untuk berbagai aspek teknis proyek konstruksi. Tim ahli teknik kami melakukan penilaian terhadap struktur, sistem, dan komponen bangunan untuk memastikan keamanan, efisiensi, dan keberlanjutan. Layanan ini sangat berharga baik untuk proyek baru maupun bangunan yang sudah ada, membantu Anda membuat keputusan yang tepat dan mengoptimalkan investasi Anda.",
        image: "https://images.unsplash.com/photo-1553697388-94e804e2f0f6",
        features: [
          "Evaluasi kondisi struktural bangunan",
          "Analisis keamanan dan kepatuhan terhadap peraturan",
          "Penilaian efisiensi energi dan keberlanjutan",
          "Rekomendasi untuk perbaikan dan optimalisasi",
          "Dokumentasi teknis dan laporan profesional"
        ],
        priceRange: "Rp 5.000.000 - Rp 15.000.000 per proyek"
      }
    ]
  },
  {
    id: "furniture",
    title: "Furniture",
    description: "Desain dan produksi furniture custom yang menggabungkan estetika, fungsionalitas, dan kualitas terbaik.",
    fullDescription: "Layanan Furniture kami menawarkan solusi desain dan produksi furniture yang menggabungkan nilai estetika, fungsionalitas, dan kualitas terbaik. Kami percaya bahwa furniture tidak hanya sekadar pengisi ruang, tetapi juga elemen penting yang menentukan atmosfer dan kenyamanan ruangan. Dari konsep hingga produksi, tim kami bekerja sama dengan Anda untuk menciptakan piece-piece furniture yang unik, fungsional, dan mencerminkan gaya personal Anda, semua dengan kualitas dan keahlian terbaik.",
    icon: <Sofa className="text-2xl text-[#FFD700]" />,
    image: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b",
    coverImage: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
    benefits: [
      "Desain furniture yang unik dan sesuai kebutuhan",
      "Penggunaan material berkualitas tinggi",
      "Keahlian dan presisi dalam produksi",
      "Furniture yang ergonomis dan fungsional",
      "Sustainability dalam desain dan material"
    ],
    processSteps: [
      {
        title: "Konsultasi & Briefing",
        description: "Memahami kebutuhan, preferensi, dan fungsi furniture yang diinginkan."
      },
      {
        title: "Konsep Desain",
        description: "Mengembangkan konsep awal berdasarkan diskusi dan kebutuhan fungsional."
      },
      {
        title: "Pengembangan Desain",
        description: "Merinci desain dengan spesifikasi teknis, material, dan finishing."
      },
      {
        title: "Presentasi & Persetujuan",
        description: "Menyajikan visualisasi 3D dan sampel material untuk persetujuan."
      },
      {
        title: "Produksi",
        description: "Membuat furniture dengan standar kualitas tinggi dan perhatian pada detail."
      },
      {
        title: "Pengiriman & Instalasi",
        description: "Mengatur pengiriman dan pemasangan furniture di lokasi yang ditentukan."
      }
    ],
    services: [
      {
        id: 9,
        title: "Furniture Custom",
        description: "Desain dan produksi furniture yang dibuat khusus sesuai kebutuhan dan spesifikasi ruang Anda.",
        fullDescription: "Layanan Furniture Custom kami menawarkan solusi desain dan produksi yang sepenuhnya dipersonalisasi untuk memenuhi kebutuhan spesifik Anda. Kami memahami bahwa setiap ruang dan kebutuhan adalah unik, dan furniture standar tidak selalu sesuai dengan dimensi, fungsi, atau estetika yang Anda inginkan. Tim desainer dan craftsmen kami bekerja sama dengan Anda dari konsep hingga penyelesaian untuk menciptakan piece-piece furniture yang benar-benar mencerminkan visi dan kebutuhan Anda.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
        features: [
          "Desain yang sepenuhnya dipersonalisasi",
          "Penyesuaian dengan dimensi dan fungsi ruang",
          "Pemilihan material dan finishing sesuai preferensi",
          "Keahlian craftmanship dalam produksi",
          "Instalasi profesional dan quality control"
        ],
        priceRange: "Bervariasi berdasarkan kompleksitas dan material"
      },
      {
        id: 10,
        title: "Restorasi Furniture",
        description: "Mengembalikan keindahan dan fungsionalitas furniture lama atau bersejarah dengan tetap mempertahankan karakternya.",
        fullDescription: "Layanan Restorasi Furniture kami berfokus pada mengembalikan keindahan dan fungsionalitas furniture lama atau bersejarah dengan tetap mempertahankan karakter dan nilai historisnya. Tim restorasi kami yang terampil memiliki pengalaman dalam menangani berbagai jenis furniture dari berbagai era, menggunakan teknik tradisional dan modern untuk memperbaiki kerusakan, mengembalikan finishing, dan memastikan bahwa piece tersebut dapat bertahan untuk generasi mendatang.",
        image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f",
        features: [
          "Penilaian dan evaluasi kondisi furniture",
          "Perbaikan struktural dan kayu",
          "Restorasi finishing dan dekoratif",
          "Penggantian komponen dengan material yang sesuai",
          "Preservasi nilai historis dan karakter asli"
        ],
        priceRange: "Rp 3.000.000 - Rp 20.000.000 per item"
      },
      {
        id: 11,
        title: "Konsultasi Furniture",
        description: "Saran profesional untuk pemilihan dan penempatan furniture yang optimal untuk ruang dan kebutuhan Anda.",
        fullDescription: "Layanan Konsultasi Furniture kami menyediakan saran dan rekomendasi profesional untuk membantu Anda membuat keputusan yang tepat tentang pemilihan dan penempatan furniture. Konsultan kami yang berpengalaman akan memahami kebutuhan, gaya, dan anggaran Anda, kemudian menyediakan solusi yang akan mengoptimalkan ruang, fungsionalitas, dan estetika rumah atau bisnis Anda. Layanan ini sangat berharga baik untuk ruang baru maupun ruang yang ingin di-refresh tanpa renovasi besar.",
        image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7",
        features: [
          "Analisis kebutuhan dan gaya furniture",
          "Rekomendasi untuk pemilihan dan penempatan furniture",
          "Saran untuk skema warna dan material",
          "Panduan untuk pembelian furniture berkualitas",
          "Space planning untuk optimalisasi ruang"
        ],
        priceRange: "Rp 2.000.000 - Rp 5.000.000 per sesi"
      },
      {
        id: 12,
        title: "Produksi Massal",
        description: "Produksi furniture dalam jumlah besar untuk proyek komersial dengan tetap menjaga kualitas dan konsistensi.",
        fullDescription: "Layanan Produksi Massal kami dirancang untuk memenuhi kebutuhan proyek komersial yang memerlukan furniture dalam jumlah besar seperti hotel, kantor, atau restoran. Kami menggabungkan teknologi produksi modern dengan keahlian tradisional untuk menghasilkan furniture yang konsisten dalam kualitas dan penampilan, sambil tetap efisien dalam biaya dan waktu produksi. Tim kami bekerja sama dengan Anda untuk mengembangkan desain yang sesuai dengan identitas merek dan kebutuhan fungsional proyek Anda.",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
        features: [
          "Desain furniture sesuai brand identity",
          "Produksi dengan standar kualitas yang konsisten",
          "Efisiensi biaya untuk produksi jumlah besar",
          "Quality control untuk setiap item",
          "Logistik dan instalasi terkoordinasi"
        ],
        priceRange: "Penawaran khusus berdasarkan volume dan spesifikasi"
      }
    ]
  }
];

export default function ServiceDetailPage() {
  // Get the service category ID from the URL
  const params = useParams();
  const categoryId = params.id as string;
  
  // Find the service category by ID
  const serviceCategory = serviceCategories.find(cat => cat.id === categoryId);
  
  // If category not found, show error
  if (!serviceCategory) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold font-serif mb-4">Layanan Tidak Ditemukan</h1>
            <p className="mb-8">Maaf, kategori layanan yang Anda cari tidak ditemukan.</p>
            <Link href="/services">
              <Button>
                Kembali ke Daftar Layanan
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero section */}
        <section 
          className="relative h-[60vh] bg-cover bg-center" 
          style={{ backgroundImage: `url(${serviceCategory.coverImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link href="/services">
                  <a className="inline-flex items-center text-white hover:text-[#FFD700] mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali ke Layanan
                  </a>
                </Link>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                    {serviceCategory.icon}
                  </div>
                  <h1 className="text-5xl font-bold font-serif text-white">{serviceCategory.title}</h1>
                </div>
                <p className="text-xl text-white/90 mb-6">{serviceCategory.description}</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Category overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold font-serif mb-6">Tentang Layanan Ini</h2>
                <p className="text-[#4A4A4A] mb-8 leading-relaxed">
                  {serviceCategory.fullDescription}
                </p>
                
                <h3 className="text-xl font-bold font-serif mb-4">Keunggulan Kami</h3>
                <ul className="space-y-3 mb-8">
                  {serviceCategory.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-1 text-[#FFD700]">
                        <Check size={16} />
                      </span>
                      <span className="text-[#4A4A4A]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <img
                  src={serviceCategory.image}
                  alt={serviceCategory.title}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Process steps */}
        <section className="py-16 bg-[#F8F8F8]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-serif mb-6">Proses Kerja Kami</h2>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                Pendekatan terstruktur kami memastikan bahwa setiap proyek berjalan lancar dan memberikan hasil yang memuaskan.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategory.processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-[#333333] font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-3">{step.title}</h3>
                  <p className="text-[#4A4A4A]">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services offered */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-serif mb-6">Layanan yang Kami Tawarkan</h2>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                Jelajahi berbagai layanan spesifik yang tersedia dalam kategori ini untuk memenuhi kebutuhan proyek Anda.
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {serviceCategory.services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <h3 className="text-2xl font-bold font-serif mb-4">{service.title}</h3>
                    <p className="text-[#4A4A4A] mb-6">{service.fullDescription}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold mb-3">Fitur:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-3 mt-1 text-[#FFD700]">
                              <Check size={16} />
                            </span>
                            <span className="text-[#4A4A4A]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold mb-1">Kisaran Harga:</h4>
                      <p className="text-[#4A4A4A]">{service.priceRange}</p>
                      <p className="text-sm text-gray-500 mt-1">*Harga dapat bervariasi tergantung kebutuhan spesifik proyek</p>
                    </div>
                    
                    <Link href="/contact">
                      <a className="inline-block bg-[#FFD700] text-[#333333] font-medium py-2 px-6 rounded hover:bg-[#FFD700]/90 transition-colors">
                        Konsultasikan Proyek Anda
                      </a>
                    </Link>
                  </div>
                  
                  <div className={`rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-[#F8F8F8]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10">
                  <h2 className="text-3xl font-bold font-serif mb-6">Siap Untuk Memulai Proyek?</h2>
                  <p className="text-[#4A4A4A] mb-8">
                    Konsultasikan kebutuhan proyek Anda dengan tim kami dan temukan solusi yang tepat untuk mewujudkan visi Anda.
                    Kami siap membantu Anda di setiap tahap, dari konsep awal hingga implementasi akhir.
                  </p>
                  <Link href="/contact">
                    <a className="inline-block bg-[#FFD700] text-[#333333] font-medium py-3 px-8 rounded hover:bg-[#FFD700]/90 transition-colors">
                      Hubungi Kami Sekarang
                    </a>
                  </Link>
                </div>
                <div className="relative hidden lg:block">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
                    alt="Contact us" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}