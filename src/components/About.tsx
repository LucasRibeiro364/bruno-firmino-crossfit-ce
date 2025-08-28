const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-crossfit-primary mb-6">
              Uma Década de Paixão pelo CrossFit em Fortaleza
            </h2>
            <div className="w-24 h-1 bg-crossfit-accent mx-auto mb-8"></div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-8 text-lg leading-relaxed text-foreground/90">
            <p className="text-xl font-medium text-crossfit-primary">
              Sou Bruno Firmino, Treinador de CrossFit <span className="text-crossfit-accent font-bold">Nível 2</span> com uma década de experiência prática e teórica dedicada a fortalecer o cenário do esporte em Fortaleza-CE.
            </p>
            
            <p>
              Minha <strong className="text-crossfit-accent">missão</strong> é ajudar pessoas a transcenderem seus limites físicos e mentais através de uma metodologia de treino segura, eficiente e motivadora.
            </p>
            
            <p>
              Especialista em desenvolvimento de atletas e na criação de <strong className="text-crossfit-primary">comunidades de treino engajadas</strong>.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-border mt-12">
              <p className="text-xl font-semibold text-crossfit-primary mb-4">
                🎯 Meu Maior Objetivo de Carreira
              </p>
              <p className="text-lg">
                Continuar <strong className="text-crossfit-accent">transformando vidas pelo esporte</strong>, mostrando que todos são capazes de atingir seus objetivos com a orientação correta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;