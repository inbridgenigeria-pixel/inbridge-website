import { Button } from "@/components/ui/button";

const EPCIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15"/>
  </svg>
);

const EnergyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const MineralIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M3 7l9-4 9 4-9 4-9-4z"/>
    <path d="M3 17l9 4 9-4"/>
  </svg>
);

export function Services() {
  return (
    <section id="what-we-do" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary mb-4">
              <EPCIcon />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">EPC Services</h3>
            <p className="text-sm text-slate-600">
              Engineering, procurement and construction for oil, gas and infrastructure assets.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary mb-4">
              <EnergyIcon />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Energy Solutions</h3>
            <p className="text-sm text-slate-600">
              Gas monetisation, power systems and industrial energy infrastructure.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary mb-4">
              <MineralIcon />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Mineral Exports</h3>
            <p className="text-sm text-slate-600">
              Ilmenite and strategic minerals (TiO₂ &gt;50%) with controlled quality and logistics.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 px-6">
            <a href="/services">View Full Service Offering</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
