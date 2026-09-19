import { Star } from 'lucide-react';
import { DEPOIMENTOS } from '../../constants/data';

export const Depoimentos = () => {
  return (
    <section className="py-24 bg-[#f5f4f0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-nude font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Reconhecimento</span>
          <h2 className="text-3xl md:text-5xl font-bold text-petroleum">Depoimentos dos Clientes</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {DEPOIMENTOS.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="flex gap-1 mb-4 text-nude" aria-hidden="true">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 italic mb-6">"{testimonial.text}"</p>
              <h4 className="font-bold text-petroleum">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
