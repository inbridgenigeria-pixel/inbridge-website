import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function MineralExports() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-50">
          <div className="container mx-auto px-6">
            <Link href="/services">
              <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
                <ArrowLeft className="w-4 h-4" /> Back to Services
              </a>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Mineral Exports
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Reliable, high-quality mineral supply and export logistics from Nigeria to global markets. 
                Specializing in ilmenite ore with transparent documentation and quality assurance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-primary mb-6">Ilmenite Supply</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We supply premium-grade ilmenite ore (TiO₂ 50%+) from carefully managed Nigerian sources. 
                  Our integrated supply chain ensures consistent quality, transparent documentation, and 
                  reliable delivery to buyers across Europe, Asia, and beyond.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 rounded-2xl border border-slate-100"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">Product Specs</h3>
                <ul className="space-y-4">
                  {[
                    "TiO₂ content: Minimum >50%",
                    "Quality: SGS certified",
                    "Volume: Bulk shipments (5,000+ MT)",
                    "Loading: Onne & Lagos ports",
                    "Terms: CIF to major ports worldwide",
                    "Documentation: Full transparency"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Supply Chain */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary text-center mb-16">Our Supply Chain</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: 1, title: "Sourcing", desc: "Secure supplies from vetted Nigerian sources" },
                { num: 2, title: "Processing", desc: "Quality control & processing to spec" },
                { num: 3, title: "Logistics", desc: "Efficient transportation to port of loading" },
                { num: 4, title: "Export", desc: "Documentation, inspection & shipment to buyer" }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-slate-100 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-primary font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Inbridge Minerals */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary text-center mb-16">Why Choose Inbridge for Minerals</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { title: "Quality Assurance", desc: "SGS and third-party inspection protocols ensure consistent quality" },
                { title: "Transparent Pricing", desc: "Fair market-based pricing with clear commercial terms" },
                { title: "Global Logistics", desc: "Established shipping networks to all major ports worldwide" },
                { title: "Reliable Supply", desc: "Consistent availability and predictable delivery schedules" }
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l-4 border-accent pl-6"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">{point.title}</h3>
                  <p className="text-slate-600">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-800 to-amber-900 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Request Ilmenite Quote</h2>
            <p className="text-amber-100 mb-10 max-w-2xl mx-auto">
              Contact us for current pricing, availability, and commercial terms for ilmenite shipments.
            </p>
            <Link href="/contact">
              <a>
                <Button className="bg-amber-600 hover:bg-amber-700 rounded-full px-8">
                  Get a Quote
                </Button>
              </a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
