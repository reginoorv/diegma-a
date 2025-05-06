import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme/theme-provider";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Proyek", href: "/projects" },
  { label: "Layanan", href: "/services" },
  { label: "Kontak", href: "/contact" }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { theme } = useTheme();

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

  // Close mobile menu after navigation
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? theme === "dark"
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg" 
            : "bg-white/95 backdrop-blur-md shadow-lg"
          : theme === "dark"
            ? "bg-gray-900/80 backdrop-blur-sm" 
            : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-2xl font-bold tracking-tighter dark:text-white"
              >
                DIEGMA
              </motion.div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center">
            <div className="mr-4 flex items-center space-x-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    className={`relative font-medium tracking-wide transition-colors ${
                      location === item.href 
                        ? "text-[#FFD700]" 
                        : theme === "dark"
                          ? "text-gray-200 hover:text-[#FFD700]"
                          : "text-gray-800 hover:text-[#FFD700]"
                    }`}
                  >
                    <span className="block py-2 px-1">{item.label}</span>
                    {location === item.href && (
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFD700]"
                        layoutId="navbar-underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Theme Switcher - Desktop */}
            <ThemeSwitcher />
          </div>
          
          {/* Mobile controls */}
          <div className="flex items-center md:hidden">
            {/* Theme Switcher - Mobile */}
            <ThemeSwitcher />
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
              className={`rounded-full w-10 h-10 ml-2 ${
                theme === "dark" 
                  ? "hover:bg-gray-800" 
                  : "hover:bg-gray-100"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden border-t overflow-hidden ${
              theme === "dark" 
                ? "bg-gray-900 border-gray-800" 
                : "bg-white border-gray-100"
            }`}
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-3 py-3 rounded-md font-medium transition-colors ${
                      location === item.href 
                        ? theme === "dark"
                          ? "bg-gray-800 text-[#FFD700]"
                          : "bg-gray-50 text-[#FFD700]"
                        : theme === "dark"
                          ? "hover:bg-gray-800 hover:text-[#FFD700] text-gray-300"
                          : "hover:bg-gray-50 hover:text-[#FFD700] text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
