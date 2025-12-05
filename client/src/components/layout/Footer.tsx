import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 text-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          &copy; {new Date().getFullYear()} Inbridge Nigeria Ltd. All rights reserved.
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <Link href="/"><a className="hover:text-white transition-colors">Home</a></Link>
          <a href="#who-we-are" className="hover:text-white transition-colors">About Us</a>
          <a href="#what-we-do" className="hover:text-white transition-colors">Our Services</a>
          <a href="#contact-cta" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
