import { ServiceCard } from '../ui/ServiceCard';
import { SERVICOS } from '../../constants/data';

export const AreasDeAtuacao = () => {
  return (
    <section id="atuacao" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-nude font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Especialidades</span>
          <h2 className="text-3xl md:text-5xl font-bold text-petroleum mb-6">Nossas Áreas de Atuação</h2>
          <div className="w-20 h-1 bg-nude mx-auto mb-8" />
          <p className="text-lg text-slate-600 leading-relaxed">
            Oferecemos assessoria jurídica completa em diversas frentes, garantindo suporte especializado para pessoas físicas e jurídicas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICOS.map((servico, idx) => (
            <ServiceCard 
              key={idx}
              icon={servico.icon}
              title={servico.title}
              description={servico.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
