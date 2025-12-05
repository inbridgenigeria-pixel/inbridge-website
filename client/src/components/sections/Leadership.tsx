import { Quote } from "lucide-react";

export function Leadership() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Leadership Perspective</h2>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 relative">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-slate-100 rotate-180 -z-10 fill-slate-100" />
          
          <blockquote className="text-lg md:text-xl text-slate-600 italic leading-relaxed text-center mb-8 font-serif">
            "At Inbridge, we combine engineering discipline, commercial acumen and a deep understanding of
            Africa’s energy and mineral landscape. Our focus is on building long-term partnerships by
            delivering safe, efficient and bankable projects and supply chains."
          </blockquote>

          <div className="text-center border-t border-slate-100 pt-6">
            <strong className="block text-primary text-lg font-bold">Ikiomoworio Dienagha</strong>
            <span className="text-sm text-muted-foreground">Principal Project Engineer & Founder, Inbridge Nigeria Ltd</span>
          </div>
        </div>
      </div>
    </section>
  );
}
