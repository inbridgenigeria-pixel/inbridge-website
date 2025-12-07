import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EPCIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M14 2l-2 2-2-2M2 14l2-2-2-2M22 14l-2-2 2-2"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 15v6M12 3v6M3 12h6M15 12h6"/>
  </svg>
);

const EnergyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M13 2L3 14h9l-1 8 10-12h-9z"/>
  </svg>
);

const MineralIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M2 22l6-6M6 18l4 4M22 2l-6 6M18 6l4 4"/>
    <path d="M14 10l-4 4"/>
  </svg>
);

export function Services() {
  const pillars = [
    {
      icon: EPCIcon,
      title: "EPC Services",
      subtitle: "Engineering, Procurement & Construction",
      items: [
        "Brownfield & greenfield oil and gas projects",
        "Pipelines, terminals, utilities and process plants",
        "Project management, construction supervision & commissioning"
      ]
    },
    {
      icon: EnergyIcon,
      title: "Energy Solutions",
      subtitle: "Gas & Power Infrastructure",
      items: [
        "Gas monetization and midstream solutions",
        "Power and utilities systems for industrial sites",
        "Digital and efficiency upgrades for existing assets"
      ]
    },
    {
      icon: MineralIcon,
      title: "Mineral Exports",
      subtitle: "Ilmenite & Strategic Minerals",
      items: [
        "Ilmenite ore (TiO₂ 50%) from Nigerian sources",
        "Bulk and containerized shipments to major ports",
        "End-to-end export documentation and logistics"
      ]
    }
  ];

  return (
    <section id="what-we-do" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">What We Do</h2>
          <p className="text-muted-foreground text-lg">
            A clear focus on three pillars: EPC projects, energy infrastructure solutions and mineral exports.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-slate-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-4">
                    <pillar.icon />
                  </div>
                  <CardTitle className="text-xl text-primary">{pillar.title}</CardTitle>
                  <p className="text-sm font-semibold text-slate-700">{pillar.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-accent">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="/services">
            <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">
              View Full Service Offering
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
