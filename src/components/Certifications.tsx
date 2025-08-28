import certificationsImg from "@/assets/certifications-display.jpg";

const Certifications = () => {
  const certifications = [
    {
      title: "CrossFit® Level 2 Trainer",
      focus: "Aprofundamento nas metodologias de ensino, correção de movimentos complexos e gestão de aulas em grupo de forma eficaz e segura.",
      application: "Garanto um ambiente de treino de alta qualidade, com feedback preciso para acelerar seu desenvolvimento técnico e prevenir lesões.",
      badge: "CF-L2"
    },
    {
      title: "Lift Like a Russian",
      focus: "Imersão em técnicas de levantamento de peso com base na renomada escola russa, focando em força, precisão e eficiência.",
      application: "Traduzo esses princípios avançados em ajustes práticos para seu LPO (Levantamento de Peso Olímpico), melhorando suas cargas e sua técnica.",
      badge: "LLR"
    },
    {
      title: "CAT - Curso de Aperfeiçoamento de Treinadores",
      focus: "Mentoria avançada sobre programação de treinos, periodização e desenvolvimento de atletas de alto rendimento com Sergio Landim.",
      application: "Crio planilhas de treino inteligentes e individualizadas que respeitam seus objetivos e sua fase de treinamento, seja você iniciante ou competidor.",
      badge: "CAT"
    },
    {
      title: "OgreBarbellClub",
      focus: "Especialização em programas de força e powerlifting, visando o aumento da força bruta e o domínio dos levantamentos básicos.",
      application: "Construo uma base de força sólida que serve como alicerce para todos os outros movimentos do CrossFit, tornando você um atleta mais completo.",
      badge: "OBC"
    },
    {
      title: "Coaching Connection",
      focus: "Desenvolvimento de habilidades de comunicação, conexão e liderança para criar uma comunidade forte e um ambiente de treino positivo.",
      application: "Entendo suas metas e medos, oferecendo não apenas instrução técnica, mas também o apoio e a motivação necessários para você seguir em frente.",
      badge: "CC"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-crossfit-primary mb-6">
              Certificações e Experiências
            </h2>
            <div className="w-24 h-1 bg-crossfit-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada curso representou um passo importante na minha jornada para oferecer o melhor treinamento possível
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-16 text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-crossfit-accent to-crossfit-warning rounded-2xl blur opacity-20"></div>
              <img 
                src={certificationsImg} 
                alt="Certificações CrossFit Bruno Firmino Fortaleza"
                className="relative rounded-2xl shadow-2xl max-w-2xl w-full h-80 object-cover border-4 border-white"
              />
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Badge and Title */}
                  <div className="lg:w-1/4 flex flex-col items-center lg:items-start">
                    <div className="bg-crossfit-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mb-4">
                      {cert.badge}
                    </div>
                    <h3 className="text-xl font-bold text-crossfit-primary text-center lg:text-left">
                      {cert.title}
                    </h3>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-3/4 space-y-4">
                    <div>
                      <h4 className="font-semibold text-crossfit-accent mb-2">Foco:</h4>
                      <p className="text-foreground/80 leading-relaxed">{cert.focus}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-crossfit-accent mb-2">Como aplico com meus alunos:</h4>
                      <p className="text-foreground/80 leading-relaxed">{cert.application}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;