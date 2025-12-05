export function Process() {
  const steps = [
    {
      number: 1,
      title: "Discuss Requirements",
      desc: "Share project scope or mineral needs, timelines and target locations."
    },
    {
      number: 2,
      title: "Technical & Commercial Proposal",
      desc: "We prepare a clear scope, schedule and commercial structure."
    },
    {
      number: 3,
      title: "Execution & Monitoring",
      desc: "Our team manages delivery end-to-end with regular progress updates."
    },
    {
      number: 4,
      title: "Handover & Support",
      desc: "Final documentation, close-out and ongoing technical/commercial support."
    }
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">How We Work With You</h2>
          <p className="text-muted-foreground">
            Whether it’s an EPC project or a mineral shipment, our process is structured, transparent and collaborative.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4 shadow-lg shadow-primary/20">
                {step.number}
              </div>
              <h3 className="font-bold text-primary mb-2 text-lg">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
