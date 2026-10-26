import marcusPortrait from "@/assets/marcus-portrait.jpg";

const About = () => {
  return (
    <section className="section-padding" id="sobre">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <img
          src={marcusPortrait}
          alt="Marcus Freitas - Psicólogo"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-top mx-auto shadow-lg border-4 border-primary/20"
        />
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
          Quem sou eu?
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed">
          Sou psicólogo (CRP 06/225405) formado pela Universidade Federal Fluminense (UFF), servidor público atuando no Poder Judiciário do Estado do Rio de Janeiro (TJRJ). Sou Especialista em Terapia Cognitivo-Comportamental (TCC), capacitado em Técnicas de Entrevista Investigativa com Vítimas e Testemunhas pela Escola de Administração Judiciária (ESAJ-TJRJ) e em formação no Master ESEPAS (Educação Sexual, Educação Emocional e Prevenção ao Abuso Sexual). Com experiência prévia na proteção social básica da assistência social, meu trabalho é traduzir conhecimentos científicos complexos em uma linguagem acessível e lúdica para as crianças, e prática para os adultos. Acredito que a informação qualificada é a maior ferramenta de proteção e garantia de direitos que podemos oferecer às novas gerações.
        </p>
      </div>
    </section>
  );
};

export default About;
