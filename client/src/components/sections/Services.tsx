import { motion } from "framer-motion";
import { Settings, Zap, Pickaxe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Services() {
  const pillars = [
    {
      icon: Settings,
      title: "EPC Services",
      subtitle: "Engineering, Procurement & Construction",
      items: [
        "Brownfield & greenfield oil and gas projects",
        "Pipelines, terminals, utilities and process plants",
        "Project management, construction supervision"
      ]
    },
    {
      icon: Zap,
      title: "Energy Solutions",
      subtitle: "Gas & Power Infrastructure",
      items: [
        "Gas monetization and midstream solutions",
        "Power and utilities systems for industrial sites",
        "Digital and efficiency upgrades for existing assets"
      ]
    },
    {
      icon: Pickaxe,
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
                    <pillar.icon className="w-6 h-6" />
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
          <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">
            View Full Service Offering
          </Button>
        </div>
      </div>
    </section>
  );
}
