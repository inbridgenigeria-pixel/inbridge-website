import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirement: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! Our team will contact you shortly.");
    setFormData({ name: "", email: "", requirement: "" });
  };

  return (
    <section id="contact-cta" className="py-24 bg-gradient-to-br from-slate-800 via-slate-750 to-slate-700 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss a Project or Shipment?</h2>
        <p className="text-slate-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Tell us about your EPC scope, energy challenge or mineral requirement and our team will respond
          with a tailored proposal or quotation.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button size="lg" variant="secondary" className="rounded-full px-8 text-primary font-bold">
            <a href="#contact-form" onClick={(e) => {
                if (typeof window !== 'undefined' && window.location.pathname !== '/') {
                  window.location.href = '/contact';
                }
              }}>Contact / Request a Quote</a>
          </Button>
        </div>

        <form 
          id="contact-form"
          onSubmit={handleSubmit}
          className="max-w-[540px] mx-auto text-left bg-slate-700/40 backdrop-blur-md rounded-2xl p-8 border border-slate-600/50"
        >
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-8">
            <label className="block text-white font-semibold mb-2">Project / Mineral Requirement</label>
            <textarea
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
              placeholder="Describe your project scope or mineral requirement..."
            />
          </div>

          <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
            Submit Inquiry
          </Button>
        </form>
      </div>
    </section>
  );
}
