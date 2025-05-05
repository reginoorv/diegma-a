import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

interface NavChild {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { 
    label: "Tentang Kami", 
    href: "/about",
    children: [
      { label: "Tentang Kami", href: "/about" },
      { label: "Tim Kami", href: "/team" }
    ]
  },
  { label: "Proyek", href: "/projects" },
  { 
    label: "Layanan", 
    href: "/services",
    children: [
      { label: "Semua Layanan", href: "/services" },
      { label: "Desain Interior & Eksterior", href: "/service/interior-exterior" },
      { label: "Konstruksi", href: "/service/construction" },
      { label: "Furniture", href: "/service/furniture" }
    ]
  },
  { label: "Kontak", href: "/contact" }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [location] = useLocation();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle dropdown toggle
  const toggleDropdown = (label: string) => {
    if (dropdownOpen === label) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(label);
    }
  };

  // Close mobile menu after navigation
  const closeMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  // Check if a nav item or its children are active
  const isActive = (item: NavItem) => {
    if (location === item.href) return true;
    if (item.children) {
      return item.children.some(child => location === child.href);
    }
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md" : "bg-white/90"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold font-serif">
              DIEGMA
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <>
                      <button
                        className={`flex items-center font-medium transition-colors ${
                          isActive(item) ? "text-[#FFD700]" : "hover:text-[#FFD700]"
                        }`}
                        onClick={() => toggleDropdown(item.label)}
                        onMouseEnter={() => setDropdownOpen(item.label)}
                        onMouseLeave={() => setDropdownOpen(null)}
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                      
                      <div
                        className={`absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden z-20 transition-all duration-300 ${
                          dropdownOpen === item.label ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                        onMouseEnter={() => setDropdownOpen(item.label)}
                        onMouseLeave={() => setDropdownOpen(null)}
                      >
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={closeMenu}
                            >
                              <a className={`block px-4 py-2 hover:bg-gray-100 ${location === child.href ? "text-[#FFD700]" : ""}`}>
                                {child.label}
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={item.href}>
                      <a className={`font-medium transition-colors ${
                        location === item.href ? "text-[#FFD700]" : "hover:text-[#FFD700]"
                      }`}>
                        {item.label}
                      </a>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} bg-white border-t`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className={`flex items-center w-full text-left px-3 py-2 font-medium ${
                      isActive(item) ? "text-[#FFD700]" : "hover:text-[#FFD700]"
                    } transition-colors`}
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${
                      dropdownOpen === item.label ? "rotate-180" : ""
                    }`} />
                  </button>
                  
                  <div
                    className={`pl-4 space-y-1 overflow-hidden transition-all ${
                      dropdownOpen === item.label ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={closeMenu}
                      >
                        <a className={`block px-3 py-2 text-sm font-medium ${
                          location === child.href ? "text-[#FFD700]" : "hover:text-[#FFD700]"
                        } transition-colors`}>
                          {child.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={closeMenu}
                >
                  <a className={`block px-3 py-2 font-medium ${
                    location === item.href ? "text-[#FFD700]" : "hover:text-[#FFD700]"
                  } transition-colors`}>
                    {item.label}
                  </a>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
