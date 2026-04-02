import { ShieldCheck } from "lucide-react";

const Services = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="w-16 h-16 rounded-full gradient-green flex items-center justify-center mx-auto">
          <ShieldCheck className="w-8 h-8 text-primary-foreground" />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight">
          Falar sobre prevenção e emoções não precisa ser um tabu.
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed">
          Sabemos que educar emocionalmente e proteger crianças e adolescentes são os maiores desafios da atualidade. Muitas vezes, o silêncio ou a falta de informação adequada deixam os jovens vulneráveis. Com a abordagem correta, baseada na psicologia e no respeito ao desenvolvimento de cada faixa etária, é possível construir um ambiente seguro, onde crianças aprendem a se proteger e adultos aprendem a acolher.
        </p>
      </div>
    </section>
  );
};

export default Services;
