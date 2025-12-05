import { ShieldCheck, Globe2, FileCheck, Database } from "lucide-react";

export function Trust() {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Proven Experience",
      desc: "10+ years delivering complex projects within major oil & gas portfolios."
    },
    {
      icon: Globe2,
      title: "Global Export Capability",
      desc: "Established logistics from Nigerian ports to Europe, Asia and beyond."
    },
    {
      icon: FileCheck,
      title: "Quality & Compliance",
      desc: "Third-party inspection, regulatory compliance and robust HSE culture."
    },
    {
      icon: Database,
      title: "Technology-Driven",
      desc: "Use of data, digital tools and structured processes for better outcomes."
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Why Clients Trust Inbridge</h2>
          <p className="text-muted-foreground">
            We bring together technical rigor, execution discipline and a global outlook on energy and minerals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-primary opacity-80">
                <badge.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-primary mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
