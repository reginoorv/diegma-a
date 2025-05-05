import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  // Handle smooth scrolling for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith("#")) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer id="kontak" className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-6">DIEGMA</h3>
            <p className="text-gray-300 mb-6">
              Studio arsitektur dan desain interior yang menciptakan ruang fungsional, estetis, dan bermakna.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-6">Navigasi</h3>
            <ul className="space-y-3">
              {[
                { label: "Beranda", href: "#beranda" },
                { label: "Tentang Kami", href: "#tentang-kami" },
                { label: "Proyek", href: "#proyek" },
                { label: "Layanan", href: "#layanan" },
                { label: "Kontak", href: "#kontak" }
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-[#FFD700] transition-colors"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Layanan</h3>
            <ul className="space-y-3">
              {[
                { label: "Desain Interior", href: "#" },
                { label: "Desain Eksterior", href: "#" },
                { label: "Konstruksi", href: "#" },
                { label: "Desain Furniture", href: "#" },
                { label: "Konsultasi", href: "#" }
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-[#FFD700] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-[#FFD700]" size={18} />
                <span className="text-gray-300">Jl. Arsitektur No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-[#FFD700]" size={18} />
                <span className="text-gray-300">+62 123 4567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-[#FFD700]" size={18} />
                <span className="text-gray-300">info@diegma.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 text-[#FFD700]" size={18} />
                <span className="text-gray-300">Senin - Jumat: 9:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DIEGMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
