import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="who-we-are" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Inbridge Nigeria Ltd is a technology-driven EPC and energy services company focused on
              delivering critical infrastructure and reliable mineral exports. We combine deep
              engineering expertise with strong commercial understanding of the African energy landscape.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="pl-4 border-l-4 border-accent">
                <strong className="block text-primary text-lg">End-to-end delivery</strong>
                <span className="text-muted-foreground">From concept to handover</span>
              </div>
              <div className="pl-4 border-l-4 border-accent">
                <strong className="block text-primary text-lg">Energy & Exports</strong>
                <span className="text-muted-foreground">Gas, power & minerals</span>
              </div>
            </div>

            <a href="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Learn more about Inbridge
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              To be a trusted partner for EPC, energy solutions and mineral exports from Nigeria by
              delivering safe, efficient and commercially attractive projects and supply chains.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We leverage proven project management practices, digital tools and a strong vendor network
              to reduce risk and create value for our clients and partners.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
