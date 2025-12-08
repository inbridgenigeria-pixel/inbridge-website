import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Industrial Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-amber-900/70 to-amber-800/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          className="lg:col-span-7 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            EPC, Energy Solutions & <span className="text-amber-200">Mineral Exports</span>
          </h1>
          <p className="text-lg text-slate-200 mb-8 max-w-xl leading-relaxed">
            We design and deliver engineering projects, energy infrastructure and reliable mineral
            supply from Nigeria to clients across the globe.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {["EPC & Project Delivery", "Gas & Power Solutions", "Ilmenite & Mineral Exports"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm text-amber-100">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button size="lg" className="rounded-full text-base px-8 bg-amber-700 hover:bg-amber-800 shadow-lg shadow-amber-900/20">
              <a href="#contact-cta">Request a Quote</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base px-8 border-white/30 text-white hover:bg-white/10 bg-transparent">
              <a href="#what-we-do">Explore Our Services</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-amber-100 border-t border-white/10 pt-8">
            <div>
              <strong className="block text-white text-lg mb-1">10+ years</strong>
              project delivery experience
            </div>
            <div>
              <strong className="block text-white text-lg mb-1">Global reach</strong>
              exports to key ports worldwide
            </div>
            <div>
              <strong className="block text-white text-lg mb-1">Tech-driven</strong>
              data & digital tools for reliability
            </div>
          </div>
        </motion.div>

        {/* Floating Card */}
        <motion.div 
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-slate-900/95 border-slate-700/50 backdrop-blur-xl shadow-2xl shadow-black/50 text-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-3 text-white">Fast Project & Shipment Inquiry</h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Tell us briefly what you need and we’ll respond with a tailored proposal.
              </p>
              <ul className="space-y-3 mb-6 text-sm text-slate-300">
                {[
                  "EPC scopes: pipelines, terminals, utilities",
                  "Energy solutions: gas monetization, power systems",
                  "Minerals: ilmenite (TiO₂ >50%) and exports"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Next step:</strong> Share your requirements on our Contact / Quote page to get started.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
