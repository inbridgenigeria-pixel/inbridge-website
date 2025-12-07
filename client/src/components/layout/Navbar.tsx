import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md py-2" : "bg-slate-900/90 py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/">
          <a className="text-xl font-bold text-white uppercase tracking-wider">Inbridge</a>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#what-we-do" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
            Services
          </a>
          <a href="#contact-cta" className="border border-white px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-colors">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900 border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl">
          <a
            href="#what-we-do"
            className="text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact-cta"
            className="text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
