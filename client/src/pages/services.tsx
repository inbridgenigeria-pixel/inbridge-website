import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EPCIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M14 2l-2 2-2-2M2 14l2-2-2-2M22 14l-2-2 2-2"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 15v6M12 3v6M3 12h6M15 12h6"/>
  </svg>
);

const EnergyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M13 2L3 14h9l-1 8 10-12h-9z"/>
  </svg>
);

const MineralIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M2 22l6-6M6 18l4 4M22 2l-6 6M18 6l4 4"/>
    <path d="M14 10l-4 4"/>
  </svg>
);

export default function Services() {
  const services = [
    {
      icon: EPCIcon,
      title: "EPC Services",
      subtitle: "Engineering, Procurement & Construction",
      href: "/services/epc",
      description: "End-to-end project delivery for oil & gas infrastructure, pipelines, terminals, and utilities",
      features: [
        "Brownfield & greenfield oil and gas projects",
        "Pipelines, terminals, utilities and process plants",
        "Project management & construction supervision"
      ]
    },
    {
      icon: EnergyIcon,
      title: "Energy Solutions",
      subtitle: "Gas & Power Infrastructure",
      href: "/services/energy",
      description: "Comprehensive energy infrastructure solutions for power generation and gas monetization",
      features: [
        "Gas monetization and midstream solutions",
        "Power and utilities systems for industrial sites",
        "Digital and efficiency upgrades"
      ]
    },
    {
      icon: MineralIcon,
      title: "Mineral Exports",
      subtitle: "Ilmenite & Strategic Minerals",
      href: "/services/minerals",
      description: "Reliable mineral supply and export logistics from Nigerian ports to global markets",
      features: [
        "Ilmenite ore (TiO₂ 50%) from Nigerian sources",
        "Bulk and containerized shipments",
        "End-to-end export documentation"
      ]
    }
  ];

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
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive solutions for EPC projects, energy infrastructure, and mineral exports. 
                Choose a service below to learn more about how we can support your needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border-slate-200">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-4">
                        <service.icon />
                      </div>
                      <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                      <p className="text-sm font-semibold text-slate-700 mt-2">{service.subtitle}</p>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-slate-600 mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-8 flex-grow">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-accent font-bold">✓</span>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={service.href}>
                        <a>
                          <Button className="w-full bg-primary hover:bg-primary/90 rounded-full">
                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary text-center mb-16">Why Choose Inbridge</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "10+ Years Experience", desc: "Proven track record in complex project delivery" },
                { title: "Global Reach", desc: "Established logistics to ports worldwide" },
                { title: "Quality & Compliance", desc: "Third-party inspection and HSE standards" },
                { title: "Technology-Driven", desc: "Digital tools for transparency and efficiency" }
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-slate-100"
                >
                  <h3 className="font-bold text-primary mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
              Contact our team to discuss your project requirements or request a detailed proposal.
            </p>
            <Link href="/">
              <a>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                  Contact Us
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
