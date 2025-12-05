import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section id="contact-cta" className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss a Project or Shipment?</h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Tell us about your EPC scope, energy challenge or mineral requirement and our team will respond
          with a tailored proposal or quotation.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" className="rounded-full px-8 text-primary font-bold">
            <a href="/contact">Contact / Request a Quote</a>
          </Button>
          <Button size="lg" className="rounded-full px-8 border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm">
            <a href="#what-we-do">Review Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
