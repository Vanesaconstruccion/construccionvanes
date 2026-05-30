import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Conócenos", href: "#conocenos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    
    // Very basic in-page search implementation
    (window as Window & { find?: (text: string) => void }).find?.(searchQuery);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, "#inicio")}
            className={`font-display font-bold text-2xl tracking-tighter ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            CONSTRUYE
            <span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent ${
                      isScrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.form
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    onSubmit={handleSearch}
                    className="mr-2 overflow-hidden"
                  >
                    <Input
                      type="search"
                      placeholder="Buscar..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`h-9 border-none bg-background/20 backdrop-blur-sm focus-visible:ring-accent ${
                        isScrolled ? "text-foreground placeholder:text-muted-foreground" : "text-white placeholder:text-white/60"
                      }`}
                      autoFocus
                    />
                  </motion.form>
                )}
              </AnimatePresence>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-white/80 hover:bg-white/10"}
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? "text-foreground" : "text-white"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <form onSubmit={handleSearch} className="mb-4">
                <Input
                  type="search"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-muted border-none"
                />
              </form>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
