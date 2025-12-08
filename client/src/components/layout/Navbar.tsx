import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@assets/cropped-logo-scaled-1_(1)_1765151836080.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On home page, show anchor links. On other pages, show regular links
  const isHomePage = location === "/";
  
  const navLinks = isHomePage ? [
    { name: "About", href: "#who-we-are" },
    { name: "Our Services", href: "#what-we-do" },
  ] : [
    { name: "About", href: "/about" },
    { name: "Our Services", href: "/services" },
  ];

  const contactHref = isHomePage ? "#contact-cta" : "/contact";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-amber-950/95 backdrop-blur-md shadow-md border-white/10 py-2"
          : "bg-amber-950/90 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="h-12 flex items-center">
            <img src={logo} alt="Inbridge Nigeria Ltd" className="h-full object-contain" />
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-200 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/90 text-white hover:bg-white hover:text-primary transition-all"
          >
            <a href={contactHref}>Contact / Quote</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900 border-t border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-200 hover:text-white text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={contactHref}
            className="text-primary bg-white py-2 px-4 rounded-full text-center font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact / Quote
          </a>
        </div>
      )}
    </header>
  );
}
