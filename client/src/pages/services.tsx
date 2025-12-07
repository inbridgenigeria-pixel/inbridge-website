import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <header className="bg-slate-900 text-white py-6 mt-16">
        <div className="container mx-auto px-6">
          <strong>INBRIDGE NIGERIA LTD</strong>
        </div>
      </header>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-slate-600">
            Inbridge provides integrated EPC, energy infrastructure solutions and strategic mineral
            export services to industrial and commercial clients.
          </p>
        </div>
      </section>

      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-6 space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">EPC – Engineering, Procurement & Construction</h2>
            <ul className="space-y-2 text-slate-700">
              <li>• Brownfield and greenfield oil & gas projects</li>
              <li>• Pipelines, terminals and processing facilities</li>
              <li>• Utilities and infrastructure systems</li>
              <li>• Project management, construction supervision and commissioning</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Energy Solutions</h2>
            <ul className="space-y-2 text-slate-700">
              <li>• Gas monetisation and midstream infrastructure</li>
              <li>• Power generation and industrial energy systems</li>
              <li>• Efficiency improvement and debottlenecking projects</li>
              <li>• Digital and technology-enabled asset optimisation</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Mineral Exports</h2>
            <ul className="space-y-2 text-slate-700">
              <li>• Ilmenite (TiO₂ &gt;50%) from Nigerian sources</li>
              <li>• Bulk and containerised shipment solutions</li>
              <li>• Quality inspection (SGS or equivalent)</li>
              <li>• CIF delivery to major ports worldwide</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
