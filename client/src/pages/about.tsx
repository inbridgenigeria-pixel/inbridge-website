import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
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
          <h1 className="text-3xl font-bold text-primary mb-6">About Inbridge Nigeria Ltd</h1>
          <p className="text-slate-600 mb-4">
            Inbridge Nigeria Ltd is a technology-driven Engineering, Procurement and Construction (EPC),
            energy solutions and mineral export company focused on delivering critical infrastructure
            and reliable supply chains from Nigeria to global markets.
          </p>
          <p className="text-slate-600">
            We combine deep technical expertise with strong commercial understanding of the African
            energy landscape to execute projects safely, efficiently and in line with international standards.
          </p>
        </div>
      </section>

      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
          <p className="text-slate-600 mb-8">
            To be a trusted EPC and energy partner delivering safe, efficient and commercially attractive
            projects while supporting reliable exports of strategic minerals.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
          <p className="text-slate-600">
            To build a leading African engineering and energy services platform recognised globally
            for execution excellence, integrity and innovation.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-4">What Differentiates Us</h2>
          <ul className="space-y-2 text-slate-600 mb-8">
            <li>• Strong EPC project execution discipline</li>
            <li>• Deep understanding of Nigeria's energy and regulatory environment</li>
            <li>• Integrated energy and mineral export capabilities</li>
            <li>• Technology and data-driven project delivery approach</li>
            <li>• Commitment to safety, quality and compliance</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">Leadership</h2>
          <p className="text-slate-600 mb-2">
            Inbridge is led by engineers and project professionals with over a decade of experience
            delivering complex oil & gas, energy and infrastructure projects across Africa.
          </p>
          <p className="text-slate-600">
            <strong>Ikiomoworio Dienagha</strong><br />
            Founder & Principal Project Engineer
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
