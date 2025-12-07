import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Featured() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "ilmenite",
      title: "Featured: Ilmenite Supply & Export",
      subtitle: "Reliable ilmenite ore (TiO₂ >50%) exports with controlled quality and logistics from Nigerian ports.",
      heading: "Ilmenite (TiO₂ >50%)",
      items: [
        "Minimum TiO₂ content: >50%",
        "Bulk or containerized shipments from Onne / Lagos ports",
        "SGS or equivalent inspection for quality & quantity",
        "CIF delivery to major ports worldwide"
      ],
      description: "We work closely with buyers to structure commercially attractive offtake arrangements, supported by transparent sampling, testing and documentation.",
      image: "https://images.pexels.com/photos/48882/coal-briquettes-black-pile-48882.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Ilmenite ore pile",
      cta: "Request Ilmenite Quote"
    },
    {
      id: "flexpipe",
      title: "Featured: Flexpipe Systems",
      subtitle: "Reinforced thermoplastic pipe (RTP) solutions engineered for Nigeria's challenging oil and gas applications.",
      heading: "Flexpipe RTP Technology",
      items: [
        "High-pressure, corrosion-resistant piping systems",
        "Suitable for onshore and subsea oil & gas applications",
        "Reduced installation time vs. steel pipelines",
        "Full design, supply, and installation support"
      ],
      description: "Flexpipe systems deliver cost-effective, durable solutions for Nigeria's complex oil & gas infrastructure requirements with reduced downtime and lower lifecycle costs.",
      image: "https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Industrial piping systems",
      cta: "Request Flexpipe Quote"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Slide Navigation */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-primary mb-2">{slide.title}</h2>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2 mx-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentSlide ? "bg-primary w-8" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <p className="text-muted-foreground text-lg">
                  {slide.subtitle}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">{slide.heading}</h3>
                <ul className="space-y-3 mb-6">
                  {slide.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground italic border-t border-slate-200 pt-4">
                  {slide.description}
                </p>
              </div>

              <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">
                <a href="#contact-cta">{slide.cta}</a>
              </Button>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
                <motion.img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.alt}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
