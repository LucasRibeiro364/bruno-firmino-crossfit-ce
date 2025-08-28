import openEvent from "@/assets/open.png";

const CaseStudy = () => {
  return (
    <section className="py-20 bg-crossfit-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-black/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-crossfit-accent px-6 py-2 rounded-full text-sm font-bold mb-6">
              CASE DE SUCESSO
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Liderando o Maior Open do Ceará em 2024
            </h2>
            <div className="w-24 h-1 bg-crossfit-accent mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-crossfit-accent to-crossfit-warning rounded-2xl blur opacity-20"></div>
              <img 
                src={openEvent} 
                alt="Maior Open do CrossFit no Ceará 2024 - Bruno Firmino"
                className="relative rounded-2xl shadow-2xl w-full h-80 object-cover border-4 border-white/10"
              />
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              <blockquote className="text-xl italic text-white/90 border-l-4 border-crossfit-accent pl-6">
                "Em 2024, tive a honra de organizar e liderar o maior evento do CrossFit Open que o Ceará já viu, um marco que demonstrou o poder da nossa comunidade aqui em Fortaleza."
              </blockquote>
              
              {/* Results */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-crossfit-accent mb-4">Resultados Mensuráveis:</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-3xl font-black text-crossfit-accent mb-2">106</div>
                    <div className="text-sm text-white/80">Atletas Inscritos</div>
                    <div className="text-xs text-crossfit-accent font-medium">Recorde Estadual</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-3xl font-black text-crossfit-accent mb-2">89º</div>
                    <div className="text-sm text-white/80">Box Mundial</div>
                    <div className="text-xs text-crossfit-accent font-medium">Mais Inscrições</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-3xl font-black text-crossfit-accent mb-2">18º</div>
                    <div className="text-sm text-white/80">América do Sul</div>
                    <div className="text-xs text-crossfit-accent font-medium">Ranking Continental</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-3xl font-black text-crossfit-accent mb-2">1º</div>
                    <div className="text-sm text-white/80">No Ceará</div>
                    <div className="text-xs text-crossfit-accent font-medium">Liderança Estadual</div>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-lg text-white/90 border-l-4 border-crossfit-warning pl-6">
                "Este evento não foi apenas sobre competição, mas sobre unir pessoas em torno de um objetivo comum e celebrar a superação de cada um."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;