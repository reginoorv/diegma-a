import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, Check, ArrowRight, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PencilRuler, HardHat, Sofa } from "lucide-react";
import { useState } from "react";

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

// Untuk halaman furniture, tambahkan data furniture products
interface FurnitureProduct {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  dimensions: string;
  material: string;
  colors: string[];
}

const furnitureProducts: FurnitureProduct[] = [
  {
    id: 1,
    name: "Kursi Santai Modern",
    category: "Kursi",
    description: "Kursi santai dengan desain modern yang menawarkan kenyamanan maksimal dan tampilan elegan untuk ruang tamu Anda.",
    price: "Rp 3.500.000",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91",
    dimensions: "80 x 75 x 90 cm",
    material: "Kayu jati solid dan kain beludru",
    colors: ["Abu-abu", "Biru Navy", "Hijau Olive"]
  },
  {
    id: 2,
    name: "Meja Makan Minimalis",
    category: "Meja",
    description: "Meja makan minimalis dengan desain yang bersih dan elegan, cocok untuk ruang makan modern.",
    price: "Rp 7.200.000",
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7",
    dimensions: "180 x 90 x 75 cm",
    material: "Kayu oak solid dengan finishing natural",
    colors: ["Natural Oak", "Walnut", "Ebony"]
  },
  {
    id: 3,
    name: "Sofa Sectional",
    category: "Sofa",
    description: "Sofa sectional yang nyaman dan luas, sempurna untuk keluarga atau untuk menerima tamu.",
    price: "Rp 15.800.000",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25",
    dimensions: "300 x 180 x 85 cm",
    material: "Rangka kayu dengan busa berkualitas tinggi dan kain linen",
    colors: ["Krem", "Abu-abu Muda", "Biru Dusty"]
  },
  {
    id: 4,
    name: "Rak Buku Modular",
    category: "Penyimpanan",
    description: "Rak buku modular yang dapat disesuaikan dengan kebutuhan dan ruang Anda, dengan desain kontemporer.",
    price: "Rp 4.900.000",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156",
    dimensions: "120 x 35 x 180 cm",
    material: "Kayu oak dan besi tempa",
    colors: ["Hitam & Oak", "Putih & Oak", "Seluruhnya Hitam"]
  },
  {
    id: 5,
    name: "Tempat Tidur Platform",
    category: "Kamar Tidur",
    description: "Tempat tidur platform dengan desain rendah dan modern, termasuk headboard dengan lampu terintegrasi.",
    price: "Rp 8.500.000",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    dimensions: "Queen: 160 x 200 cm, King: 180 x 200 cm",
    material: "Kayu mahoni solid dengan finishing premium",
    colors: ["Cokelat Tua", "Hitam", "Putih"]
  },
  {
    id: 6,
    name: "Kabinet TV Minimalis",
    category: "Penyimpanan",
    description: "Kabinet TV minimalis dengan ruang penyimpanan yang cerdas dan manajemen kabel yang rapi.",
    price: "Rp 5.200.000",
    image: "https://images.unsplash.com/photo-1606679596345-d48495c95b1d",
    dimensions: "180 x 45 x 50 cm",
    material: "MDF berkualitas tinggi dengan veneer kayu oak",
    colors: ["Putih & Oak", "Hitam & Walnut", "Abu-abu & Oak"]
  },
  {
    id: 7,
    name: "Set Meja Kerja Home Office",
    category: "Meja",
    description: "Set meja kerja home office yang ergonomis dengan penyimpanan terintegrasi untuk ruang kerja produktif.",
    price: "Rp 6.800.000",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd",
    dimensions: "Meja: 140 x 70 x 75 cm, Laci: 45 x 45 x 60 cm",
    material: "Kayu ash dengan aksen besi powder-coated",
    colors: ["Ash & Hitam", "Ash & Putih", "Walnut & Hitam"]
  },
  {
    id: 8,
    name: "Kursi Makan Set (6)",
    category: "Kursi",
    description: "Set 6 kursi makan dengan desain Skandinavia yang timeless dan nyaman untuk penggunaan sehari-hari.",
    price: "Rp 9.600.000",
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc",
    dimensions: "45 x 50 x 85 cm (per kursi)",
    material: "Kayu oak dengan dudukan berlapis kain poliester",
    colors: ["Oak & Krem", "Oak & Abu-abu", "Oak & Hijau Sage"]
  }
];

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
        description: "Menyajikan visualisasi desain dan sampel material untuk persetujuan."
      },
      {
        title: "Produksi",
        description: "Memproduksi furniture dengan tingkat presisi dan kualitas tinggi."
      },
      {
        title: "Pengiriman & Instalasi",
        description: "Mengirim dan memasang furniture di lokasi dengan pelayanan profesional."
      }
    ],
    services: [
      {
        id: 9,
        title: "Furniture Custom",
        description: "Desain dan produksi furniture yang sepenuhnya disesuaikan dengan kebutuhan, gaya, dan ruang spesifik Anda.",
        fullDescription: "Layanan Furniture Custom kami menawarkan solusi desain dan produksi yang sepenuhnya dipersonalisasi untuk memenuhi kebutuhan unik Anda. Kami memahami bahwa setiap ruang memiliki karakteristik dan tantangan tersendiri, dan furniture standar tidak selalu menjadi pilihan optimal. Tim desain dan produksi kami bekerja sama dengan Anda untuk menciptakan furniture yang sempurna untuk ruang Anda, baik dalam hal dimensi, fungsi, estetika, maupun material.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        features: [
          "Desain sesuai kebutuhan spesifik dan dimensi ruang",
          "Pilihan material dan finishing premium",
          "Solusi untuk ruang dengan konfigurasi unik",
          "Integrasi fungsi khusus sesuai kebutuhan",
          "Kualitas konstruksi dan detail pengerjaan tinggi"
        ],
        priceRange: "Sesuai dengan spesifikasi dan kompleksitas"
      },
      {
        id: 10,
        title: "Koleksi Siap Pakai",
        description: "Koleksi furniture pre-designed dengan kualitas premium dan desain estetik yang siap untuk melengkapi ruang Anda.",
        fullDescription: "Koleksi Siap Pakai kami menawarkan furniture berkualitas tinggi dengan desain timeless yang telah dikurasi dengan cermat oleh tim desainer kami. Setiap piece dalam koleksi ini mencerminkan komitmen kami terhadap estetika, fungsionalitas, dan kualitas. Meskipun merupakan desain yang sudah jadi, koleksi ini tetap memberikan pilihan kustomisasi terbatas dalam hal finishing, material, dan dimensi untuk memastikan kecocokan dengan ruang dan preferensi Anda.",
        image: "https://images.unsplash.com/photo-1567016432779-094069958ea5",
        features: [
          "Desain yang sudah teruji dan dikurasi",
          "Waktu produksi dan pengiriman yang lebih cepat",
          "Opsi kustomisasi terbatas (finishing, material)",
          "Kualitas pengerjaan yang konsisten",
          "Nilai estetika dan fungsionalitas yang seimbang"
        ],
        priceRange: "Bervariasi tergantung pada jenis furniture"
      },
      {
        id: 11,
        title: "Restorasi & Refinishing",
        description: "Mengembalikan keindahan dan fungsionalitas furniture antik atau bersejarah dengan teknik restorasi profesional.",
        fullDescription: "Layanan Restorasi & Refinishing kami dirancang untuk menghidupkan kembali furniture antik, bersejarah, atau sentimental dengan tetap menghormati karakter dan nilai sejarahnya. Tim ahli restorasi kami menggabungkan teknik tradisional dengan metode modern untuk memperbaiki kerusakan struktural, menyegarkan finishing, dan memastikan furniture Anda tetap berfungsi dengan baik untuk tahun-tahun mendatang. Layanan ini ideal untuk piece-piece berharga yang membutuhkan perbaikan profesional dan perhatian terhadap detail.",
        image: "https://images.unsplash.com/photo-1577128687481-1b0936abfddb",
        features: [
          "Penilaian dan dokumentasi kondisi awal",
          "Perbaikan struktural dengan teknik yang sesuai",
          "Pemulihan atau penggantian elemen yang rusak",
          "Refinishing dengan metode dan material yang tepat",
          "Perawatan dan saran untuk pemeliharaan jangka panjang"
        ],
        priceRange: "Tergantung pada kondisi, ukuran, dan kompleksitas pekerjaan"
      },
      {
        id: 12,
        title: "Konsultasi Furniture",
        description: "Bimbingan profesional dalam pemilihan, penempatan, dan perencanaan furniture untuk memaksimalkan ruang dan estetika.",
        fullDescription: "Layanan Konsultasi Furniture kami menyediakan bimbingan ahli untuk membantu Anda membuat keputusan yang tepat tentang pemilihan, penempatan, dan perencanaan furniture. Konsultan kami akan membantu Anda mengidentifikasi kebutuhan fungsional, menganalisis ruang, dan merekomendasikan solusi furniture yang optimal. Layanan ini sangat berharga baik untuk proyek baru maupun untuk memaksimalkan ruang yang ada, memastikan bahwa investasi furniture Anda memberikan nilai dan kepuasan maksimal.",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        features: [
          "Analisis kebutuhan dan fungsi ruang",
          "Rekomendasi style, material, dan dimensi",
          "Space planning dan layout furniture optimal",
          "Perencanaan anggaran dan prioritas",
          "Saran pemeliharaan dan perawatan"
        ],
        priceRange: "Rp 1.500.000 - Rp 3.500.000 per sesi"
      }
    ]
  }
];

export default function ServiceDetailPage() {
  // Get the service category ID from the URL
  const params = useParams();
  const categoryId = params.id as string;
  
  // Find the service category by ID
  const category = serviceCategories.find(cat => cat.id === categoryId);
  
  // For furniture catalog page, state untuk modal detail produk
  const [selectedProduct, setSelectedProduct] = useState<FurnitureProduct | null>(null);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  
  // Jika tidak ditemukan layanan
  if (!category) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 z-0"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#FFD700]/10 rounded-full blur-3xl z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-xl shadow-xl max-w-lg mx-auto"
            >
              <h1 className="text-3xl font-bold mb-4">Layanan Tidak Ditemukan</h1>
              <p className="mb-8 text-[#4A4A4A]">Maaf, layanan yang Anda cari tidak tersedia.</p>
              <Link href="/services">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-[#FFD700] text-[#333333] hover:bg-[#FFD700]/90">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali ke Daftar Layanan
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Jika halaman furniture, tampilkan katalog furniture
  if (categoryId === "furniture") {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          {/* Hero section */}
          <section className="relative h-[60vh] md:h-[70vh] bg-cover bg-center overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-black/40 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            ></motion.div>
            
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <img 
                src={category.coverImage} 
                alt={category.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div className="container mx-auto px-4 h-full flex items-center relative z-20">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Link href="/services">
                    <motion.div 
                      className="inline-flex items-center text-white hover:text-[#FFD700] mb-6 transition-colors cursor-pointer"
                      whileHover={{ x: -5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Kembali ke Layanan
                    </motion.div>
                  </Link>
                  
                  <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    {category.title}
                  </motion.h1>
                  
                  <motion.p 
                    className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    {category.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    <Button
                      className="bg-[#FFD700] text-[#333333] hover:bg-[#FFD700]/90 rounded-md px-6 py-2.5"
                    >
                      Lihat Katalog
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
            >
              <ChevronRight className="w-8 h-8 text-white transform rotate-90" />
            </motion.div>
          </section>
          
          {/* About Furniture Service */}
          <section className="py-20 relative overflow-hidden bg-white">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
            
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FFD700]/20 rounded-full z-0"></div>
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-auto rounded-xl shadow-lg relative z-10"
                    />
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFD700]/10 rounded-full z-0"></div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold mb-4">Tentang Layanan Furniture Kami</h2>
                  <div className="w-16 h-1 bg-[#FFD700] mb-8"></div>
                  <p className="text-[#4A4A4A] text-lg mb-8 leading-relaxed">
                    {category.fullDescription}
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4">Keunggulan Kami</h3>
                  <div className="space-y-3 mb-8">
                    {category.benefits.map((benefit, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <div className="w-6 h-6 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-[#4A4A4A]">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Furniture Catalog */}
          <section className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
            
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">Katalog Produk Furniture</h2>
                <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
                <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                  Jelajahi koleksi furniture eksklusif kami dengan desain yang elegan dan fungsional untuk melengkapi ruang Anda.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {furnitureProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative overflow-hidden h-[250px] cursor-pointer">
                      {/* Category badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <motion.span 
                          className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm text-sm font-medium rounded-full"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {product.category}
                        </motion.span>
                      </div>
                      
                      {/* Image with zoom effect */}
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay effect on hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                        <motion.div 
                          className="px-6 py-3 border border-white rounded-full text-white"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          Lihat Detail
                        </motion.div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-[#FFD700] font-semibold mb-3">{product.price}</p>
                      <p className="text-[#4A4A4A] text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{product.material}</span>
                        <ArrowRight className="w-5 h-5 text-[#FFD700]" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Process Steps */}
          <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
            
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">Proses Pengerjaan</h2>
                <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
                <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                  Kami menerapkan proses pengerjaan yang terstruktur untuk memastikan hasil akhir yang memuaskan.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute -top-5 left-8 w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                    <p className="text-[#4A4A4A]">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567016432779-094069958ea5')] bg-cover bg-center opacity-10 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/80 z-[1]"></div>
            
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Butuh Furnitur Khusus?</h2>
                  <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                    Konsultasikan kebutuhan furniture khusus Anda dengan tim kami. Kami siap membantu mewujudkan furniture impian yang sesuai dengan kebutuhan dan gaya Anda.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/contact">
                      <motion.button
                        className="bg-[#FFD700] text-[#333333] font-medium py-3 px-8 rounded-lg hover:bg-[#FFD700]/90 transition-colors shadow-lg w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Hubungi Kami
                      </motion.button>
                    </Link>
                    
                    <a 
                      href="https://wa.me/+6281234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        className="bg-white text-gray-900 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Phone className="w-5 h-5" />
                        Chat WhatsApp
                      </motion.button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Furniture Product Detail Modal */}
          {selectedProduct && (
            <motion.div 
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedProduct(null);
                setShowWhatsApp(false);
              }}
            >
              <motion.div 
                className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-[300px] md:h-full">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
                        {selectedProduct.category}
                      </span>
                    </div>
                    
                    <button 
                      className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                      onClick={() => {
                        setSelectedProduct(null);
                        setShowWhatsApp(false);
                      }}
                    >
                      &times;
                    </button>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
                    <p className="text-[#FFD700] font-semibold text-xl mb-4">{selectedProduct.price}</p>
                    
                    <div className="mb-6">
                      <p className="text-[#4A4A4A] mb-4">{selectedProduct.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div>
                          <span className="text-sm text-gray-500">Dimensi:</span>
                          <p className="font-medium">{selectedProduct.dimensions}</p>
                        </div>
                        
                        <div>
                          <span className="text-sm text-gray-500">Material:</span>
                          <p className="font-medium">{selectedProduct.material}</p>
                        </div>
                        
                        <div>
                          <span className="text-sm text-gray-500">Warna Tersedia:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {selectedProduct.colors.map((color, index) => (
                              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                {color}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {showWhatsApp ? (
                        <div className="bg-green-50 p-4 rounded-lg mb-6">
                          <h4 className="font-bold text-green-800 mb-2">Pesan via WhatsApp</h4>
                          <p className="text-green-700 text-sm mb-4">
                            Silakan kirim pesan ke nomor WhatsApp kami untuk menanyakan tentang {selectedProduct.name}.
                          </p>
                          
                          <a 
                            href={`https://wa.me/+6281234567890?text=Halo,%20saya%20tertarik%20dengan%20produk%20${selectedProduct.name}%20dengan%20harga%20${selectedProduct.price}.%20Mohon%20informasi%20lebih%20lanjut.`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                          >
                            <Phone className="w-5 h-5 mr-2" />
                            Chat WhatsApp Sekarang
                          </a>
                        </div>
                      ) : (
                        <motion.button
                          className="inline-flex items-center justify-center w-full bg-[#FFD700] text-[#333333] font-medium py-3 px-4 rounded-lg hover:bg-[#FFD700]/90 transition-colors mb-6"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setShowWhatsApp(true)}
                        >
                          Tanyakan Produk Ini
                        </motion.button>
                      )}
                      
                      <p className="text-sm text-gray-500 text-center">
                        Anda juga dapat mengunjungi showroom kami untuk melihat produk ini secara langsung.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </main>
        <Footer />
      </div>
    );
  }

  // Untuk kategori layanan lainnya
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero section with parallax effect */}
        <section className="relative h-[70vh] md:h-[80vh] bg-cover bg-center bg-fixed overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-black/40 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
          
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img 
              src={category.coverImage} 
              alt={category.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link href="/services">
                  <motion.div 
                    className="inline-flex items-center text-white hover:text-[#FFD700] mb-6 transition-colors cursor-pointer"
                    whileHover={{ x: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Kembali ke Layanan
                  </motion.div>
                </Link>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  {category.title}
                </motion.h1>
                
                <motion.p 
                  className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  {category.description}
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <Button
                    className="bg-[#FFD700] text-[#333333] hover:bg-[#FFD700]/90 rounded-md px-6 py-2.5"
                  >
                    Konsultasi Sekarang
                  </Button>
                  
                  <Button
                    className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-md px-6 py-2.5"
                  >
                    Lihat Portofolio
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
          >
            <ChevronRight className="w-8 h-8 text-white transform rotate-90" />
          </motion.div>
        </section>
        
        {/* About service */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/20 to-transparent z-0"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FFD700]/20 rounded-full z-0"></div>
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-auto rounded-xl shadow-lg relative z-10"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFD700]/10 rounded-full z-0"></div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-4">Tentang Layanan {category.title} Kami</h2>
                <div className="w-16 h-1 bg-[#FFD700] mb-8"></div>
                <p className="text-[#4A4A4A] text-lg mb-8 leading-relaxed">
                  {category.fullDescription}
                </p>
                
                <h3 className="text-xl font-bold mb-4">Keunggulan Kami</h3>
                <div className="space-y-3 mb-8">
                  {category.benefits.map((benefit, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="w-6 h-6 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-[#4A4A4A]">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                
                <Link href="/contact">
                  <motion.button
                    className="bg-[#FFD700] text-[#333333] font-medium py-3 px-8 rounded-lg hover:bg-[#FFD700]/90 transition-colors shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Konsultasi Gratis
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Process Steps */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Proses Pengerjaan</h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                Kami menerapkan proses pengerjaan yang terstruktur untuk memastikan hasil akhir yang memuaskan.
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-gray-200 hidden md:block"></div>
              
              <div className="space-y-12 relative">
                {category.processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`relative md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Step indicator for mobile */}
                    <div className="absolute left-0 top-0 w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-white font-bold md:hidden">
                      {index + 1}
                    </div>
                    
                    {/* Step content */}
                    <div className="md:w-1/2 pl-16 md:pl-0 md:px-8">
                      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-[#4A4A4A]">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Step indicator for desktop */}
                    <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-12 h-12 bg-[#FFD700] rounded-full items-center justify-center text-white font-bold z-10">
                      {index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Services List */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Layanan Kami</h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
              <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                Kami menawarkan berbagai layanan {category.title} yang komprehensif untuk memenuhi kebutuhan Anda.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {category.services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2 h-full">
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10 group-hover:opacity-70 transition-opacity"></div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-3 p-6">
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-[#4A4A4A] mb-4">{service.description}</p>
                      
                      <h4 className="text-sm font-bold text-gray-500 mb-3">FITUR UTAMA</h4>
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-5 h-5 bg-[#FFD700]/20 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                              <Check className="w-3 h-3 text-[#FFD700]" />
                            </div>
                            <span className="text-sm text-[#4A4A4A]">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-[#FFD700]">{service.priceRange}</span>
                        <motion.div
                          className="flex items-center text-sm font-medium text-gray-800 group-hover:text-[#FFD700] transition-colors"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          Lihat Detail
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link href="/contact">
                <motion.button
                  className="bg-[#FFD700] text-[#333333] font-medium py-3 px-8 rounded-lg hover:bg-[#FFD700]/90 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Dapatkan Penawaran
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c')] bg-cover bg-center opacity-10 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/80 z-[1]"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Siap Mewujudkan Proyek Anda?</h2>
                <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                  Konsultasikan kebutuhan {category.title.toLowerCase()} Anda dengan tim profesional kami. Kami siap memberikan solusi terbaik sesuai kebutuhan dan anggaran Anda.
                </p>
                
                <Link href="/contact">
                  <motion.button
                    className="bg-[#FFD700] text-[#333333] font-medium py-3 px-8 rounded-lg hover:bg-[#FFD700]/90 transition-colors shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Mulai Proyek Anda
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}