const Skills = () => {
  const technicalSkills = [
    "Programação de Treinos Individual e em Grupo",
    "Levantamento de Peso Olímpico (Técnica e Ensino)",
    "Movimentos Ginásticos do CrossFit",
    "Análise e Correção de Movimento",
    "Nutrição Esportiva Básica",
    "Gestão de Eventos Esportivos"
  ];

  const behavioralSkills = [
    "Comunicação Efetiva e Didática",
    "Liderança e Motivação de Equipes",
    "Empatia e Escuta Ativa",
    "Resolução de Problemas",
    "Gestão de Tempo e Organização",
    "Desenvolvimento de Comunidades"
  ];

  return (
    <section className="py-20 bg-crossfit-primary text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-crossfit-primary via-crossfit-primary/95 to-crossfit-primary/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Competências e Habilidades
            </h2>
            <div className="w-24 h-1 bg-crossfit-accent mx-auto mb-8"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Uma combinação de conhecimento técnico e habilidades interpessoais para oferecer o melhor acompanhamento
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-crossfit-accent mb-6 flex items-center justify-center lg:justify-start">
                  <span className="bg-crossfit-accent text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    ⚙️
                  </span>
                  Habilidades Técnicas
                </h3>
              </div>
              
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-colors">
                    <div className="bg-crossfit-accent w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-white/90">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Behavioral Skills */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-crossfit-accent mb-6 flex items-center justify-center lg:justify-start">
                  <span className="bg-crossfit-accent text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    🤝
                  </span>
                  Habilidades Comportamentais
                </h3>
              </div>
              
              <div className="space-y-4">
                {behavioralSkills.map((skill, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-colors">
                    <div className="bg-crossfit-warning w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">★</span>
                    </div>
                    <span className="text-white/90">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold text-crossfit-accent mb-4">
                Pronto para Aplicar Essas Habilidades no Seu Treino?
              </h4>
              <p className="text-white/90 mb-6">
                Cada habilidade que desenvolvi ao longo dos anos está a serviço do seu crescimento e dos seus resultados.
              </p>
              <div className="flex justify-center">
                <div className="bg-crossfit-accent px-6 py-3 rounded-full text-white font-semibold">
                  Vamos começar sua jornada! 🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;