import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function EPCServices() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
                EPC Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Engineering, Procurement & Construction services for complex oil and gas infrastructure projects. 
                From concept to commissioning, we deliver on time and within budget.
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
                <h2 className="text-3xl font-bold text-primary mb-6">What We Deliver</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Our EPC team manages every phase of your infrastructure project with precision, from initial engineering 
                  and design through procurement, construction, and commissioning. We specialize in brownfield and greenfield 
                  projects across the oil & gas sector.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 rounded-2xl border border-slate-100"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">Project Scope</h3>
                <ul className="space-y-4">
                  {[
                    "Pipelines & pipeline infrastructure",
                    "Terminals & loading facilities",
                    "Utilities & process plants",
                    "Brownfield upgrades & debottlenecking",
                    "Subsea & offshore infrastructure",
                    "Mechanical completion & testing"
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

        {/* Process */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary text-center mb-16">Our EPC Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: 1, title: "Design & Engineering", desc: "Detailed FEED and engineering design" },
                { num: 2, title: "Procurement", desc: "Equipment sourcing & vendor management" },
                { num: 3, title: "Construction", desc: "On-site execution & project management" },
                { num: 4, title: "Commissioning", desc: "Testing, handover & documentation" }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-slate-100 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-primary font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why EPC with Inbridge */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary text-center mb-16">Why EPC with Inbridge</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { title: "Proven Track Record", desc: "10+ years delivering major EPC projects across West Africa" },
                { title: "Expert Team", desc: "Seasoned engineers with deep experience in oil & gas infrastructure" },
                { title: "Cost Efficiency", desc: "Rigorous cost control and value engineering throughout execution" },
                { title: "On-Time Delivery", desc: "Robust planning and execution discipline ensures schedule compliance" }
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
        <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Discuss Your EPC Project</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
              Contact our EPC team to discuss your project scope, timeline, and budget requirements.
            </p>
            <Link href="/">
              <a>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                  Request a Quote
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
