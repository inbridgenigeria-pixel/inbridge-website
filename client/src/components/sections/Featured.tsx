import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

export function Featured() {
  const [featured, setFeatured] = useState<"ilmenite" | "flexpipe">("ilmenite");

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Toggle Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setFeatured("ilmenite")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              featured === "ilmenite"
                ? "bg-primary text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Ilmenite Supply
          </button>
          <button
            onClick={() => setFeatured("flexpipe")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              featured === "flexpipe"
                ? "bg-primary text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Re-inforce Thermo Plastic Pipes
          </button>
        </div>

        {/* Ilmenite Content */}
        {featured === "ilmenite" && (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Featured: Ilmenite Supply & Export</h2>
                <p className="text-muted-foreground text-lg">
                  Reliable ilmenite ore (TiO₂ &gt;50%) exports with controlled quality and logistics from Nigerian ports.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Ilmenite (TiO₂ &gt;50%)</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Minimum TiO₂ content: >50%",
                    "Bulk or containerized shipments from Onne / Lagos ports",
                    "SGS or equivalent inspection for quality & quantity",
                    "CIF delivery to major ports worldwide"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground italic border-t border-slate-200 pt-4">
                  We work closely with buyers to structure commercially attractive offtake arrangements,
                  supported by transparent sampling, testing and documentation.
                </p>
              </div>

              <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">
                <a href="#contact-cta">Request Ilmenite Quote</a>
              </Button>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
                <img
                  src="https://images.pexels.com/photos/48882/coal-briquettes-black-pile-48882.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Ilmenite ore pile"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        )}

        {/* Flexpipe Content */}
        {featured === "flexpipe" && (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Featured: Flexpipe Systems</h2>
                <p className="text-muted-foreground text-lg">
                  Inbridge Nigeria Ltd is pioneering the introduction of reinforced thermoplastic pipe (RTP) solutions into Nigeria's oil and gas operating environments through the deployment of Flexpipe® systems.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Flexpipe RTP Technology</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "High-pressure, corrosion-resistant piping systems",
                    "Suitable for onshore and subsea oil & gas applications",
                    "Reduced installation time vs. steel pipelines",
                    "Full design, supply, and installation support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground italic border-t border-slate-200 pt-4">
                  Flexpipe systems deliver cost-effective, durable solutions for Nigeria's complex oil & gas 
                  infrastructure requirements with reduced downtime and lower lifecycle costs.
                </p>
              </div>

              <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">
                <a href="#contact-cta">Request Flexpipe Quote</a>
              </Button>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
                <img
                  src="https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Industrial piping systems"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
