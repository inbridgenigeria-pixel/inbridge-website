import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section 
      className="relative min-h-[72vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(12,60,120,0.82), rgba(15,23,42,0.82)), url("https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EPC, Energy Solutions & Mineral Exports
            </h1>
            <p className="text-base md:text-lg text-slate-200 mb-6 max-w-xl">
              Engineering, procurement and construction services alongside energy infrastructure
              and dependable mineral exports from Nigeria.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6">
                <a href="#contact-cta">Request a Quote</a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent font-semibold px-6">
                <a href="#what-we-do">Explore Services</a>
              </Button>
            </div>
          </div>

          <div className="bg-slate-900/95 backdrop-blur p-6 rounded-2xl text-white">
            <strong className="block text-lg">Fast Project & Shipment Inquiry</strong>
            <p className="text-slate-300 text-sm mt-2">
              EPC scopes, energy solutions, and ilmenite supply handled end-to-end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
