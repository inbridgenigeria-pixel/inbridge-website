import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
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
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <Link href="/">
              <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </a>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Contact Us / Request a Quote
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Tell us about your EPC scope, energy challenge or mineral requirement and our team will respond
                with a tailored proposal or quotation within 2-3 business days.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-50 p-10 rounded-2xl border border-slate-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Project / Mineral Requirement *</label>
                  <textarea
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                    placeholder="Describe your EPC project scope, energy challenge, or mineral requirement in detail. Include timeline, budget, and any specific requirements..."
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="text-sm text-slate-600">
                    <strong>Note:</strong> Fields marked with * are required. Our team will review your inquiry and contact you within 2-3 business days.
                  </p>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg text-base">
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid md:grid-cols-3 gap-8"
            >
              {[
                { title: "Email", value: "info@inbridgenigeria.com" },
                { title: "Office Hours", value: "Monday - Friday, 9AM - 5PM WAT" },
                { title: "Response Time", value: "2-3 business days" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
