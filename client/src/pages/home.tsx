import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Trust } from "@/components/sections/Trust";
import { Featured } from "@/components/sections/Featured";
import { Process } from "@/components/sections/Process";
import { Leadership } from "@/components/sections/Leadership";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Trust />
        <Featured />
        <Process />
        <Leadership />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
