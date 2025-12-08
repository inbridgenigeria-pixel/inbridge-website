import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function EnergySolutions() {
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
                Energy Solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Comprehensive gas and power infrastructure solutions designed to optimize energy production, 
                reduce costs, and improve operational efficiency.
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
                <h2 className="text-3xl font-bold text-primary mb-6">Energy Infrastructure</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  From gas monetization and midstream solutions to power generation and utilities infrastructure, 
                  we provide integrated energy solutions that unlock value and drive efficiency across your operations.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 rounded-2xl border border-slate-100"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">Solution Areas</h3>
                <ul className="space-y-4">
                  {[
                    "Gas monetization & processing",
                    "Midstream infrastructure",
                    "Power generation systems",
                    "Utilities infrastructure",
                    "Digital efficiency upgrades",
                    "Renewable energy integration"
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

        {/* Services */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary text-center mb-16">Our Energy Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Gas Monetization",
                  desc: "End-to-end gas processing and commercialization solutions",
                  points: ["Processing systems", "Distribution infrastructure", "LNG solutions"]
                },
                {
                  title: "Power Solutions",
                  desc: "Reliable power generation and distribution infrastructure",
                  points: ["Power plants", "Grid infrastructure", "Backup systems"]
                },
                {
                  title: "Efficiency Upgrades",
                  desc: "Modernize and optimize existing energy infrastructure",
                  points: ["Digital monitoring", "Performance optimization", "Cost reduction"]
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-xl border border-slate-100"
                >
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.points.map((point, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="text-accent">•</span> {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Energy with Inbridge */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary text-center mb-16">Why Energy with Inbridge</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { title: "Deep Expertise", desc: "Extensive experience in African energy landscape and market dynamics" },
                { title: "Integrated Solutions", desc: "End-to-end approach from design through operation and optimization" },
                { title: "Sustainable Development", desc: "Focus on environmentally responsible and efficient solutions" },
                { title: "Proven Results", desc: "Track record of successful projects that generate measurable value" }
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
            <h2 className="text-3xl font-bold mb-6">Discuss Your Energy Challenge</h2>
            <p className="text-amber-100 mb-10 max-w-2xl mx-auto">
              Contact our energy solutions team to explore how we can optimize your infrastructure.
            </p>
            <Link href="/contact">
              <a>
                <Button className="bg-amber-600 hover:bg-amber-700 rounded-full px-8">
                  Request a Consultation
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
