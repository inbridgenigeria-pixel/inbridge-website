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
    <section id="contact-cta" className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Discuss a Project or Shipment?</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Submit your requirements and our team will respond with a tailored proposal.
        </p>

        <form 
          onSubmit={handleSubmit}
          className="max-w-[520px] mx-auto text-left"
        >
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg bg-white text-slate-900 border-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg bg-white text-slate-900 border-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">Project / Mineral Requirement</label>
            <textarea
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 rounded-lg bg-white text-slate-900 border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2">
            Submit Inquiry
          </Button>
        </form>
      </div>
    </section>
  );
}
