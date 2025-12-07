import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                About Inbridge Nigeria Ltd
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a technology-driven EPC and energy services company focused on delivering critical 
                infrastructure and reliable mineral exports from Nigeria to the world. Our commitment is to 
                excellence, transparency, and sustainable value creation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Inbridge Nigeria Ltd combines deep engineering expertise with a strong commercial understanding 
                  of the African energy landscape. With over a decade of project delivery experience, we have established 
                  ourselves as a trusted partner for EPC projects, energy infrastructure solutions, and mineral exports.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Our team brings together seasoned project engineers, commercial strategists, and logistics specialists 
                  who are committed to delivering safe, efficient, and commercially attractive projects and supply chains.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We leverage proven project management practices, digital tools, and a strong vendor network to reduce 
                  risk and create sustainable value for our clients and partners.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-50 p-10 rounded-2xl border border-slate-100"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">Our Core Values</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Technical Rigor", desc: "Engineering excellence in every project" },
                    { title: "Commercial Acumen", desc: "Creating bankable and attractive solutions" },
                    { title: "Transparency", desc: "Clear communication with all stakeholders" },
                    { title: "Sustainability", desc: "Responsible development for lasting impact" }
                  ].map((value, i) => (
                    <li key={i} className="border-l-4 border-accent pl-4">
                      <strong className="block text-primary">{value.title}</strong>
                      <span className="text-sm text-muted-foreground">{value.desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To be a trusted partner for EPC, energy solutions and mineral exports from Nigeria by delivering 
                  safe, efficient and commercially attractive projects and supply chains that create lasting value.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To become the preferred integrated solution provider for critical infrastructure, energy, and 
                  mineral exports across Africa, known for excellence, innovation, and sustainable partnerships.
                </p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Ready to Partner with Inbridge?</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
              Explore our services or discuss your project requirements with our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services">
                <a>
                  <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                    View Our Services
                  </Button>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <Button variant="outline" className="rounded-full px-8 border-white/30 text-white hover:bg-white/10">
                    Get in Touch
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
