import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-slate-300 py-12 text-sm border-t-2 border-amber-600">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400">
          &copy; {new Date().getFullYear()} Inbridge Nigeria Ltd. All rights reserved.
        </div>
        <div className="flex gap-8 flex-wrap justify-center">
          <Link href="/"><a className="hover:text-amber-400 transition-colors duration-300">Home</a></Link>
          <a href="#who-we-are" className="hover:text-amber-400 transition-colors duration-300">About Us</a>
          <a href="#what-we-do" className="hover:text-amber-400 transition-colors duration-300">Our Services</a>
          <a href="#contact-cta" className="hover:text-amber-400 transition-colors duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}
