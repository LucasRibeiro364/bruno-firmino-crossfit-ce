const Philosophy = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-crossfit-primary mb-6">
              Mais que Treino, Um Estilo de Vida
            </h2>
            <div className="w-24 h-1 bg-crossfit-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Minha filosofia após 10 anos de jornada no CrossFit
            </p>
          </div>
          
          <div className="space-y-12">
            {/* First Philosophy Block */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-crossfit-accent to-crossfit-warning"></div>
              <div className="relative">
                <div className="text-6xl text-crossfit-accent/20 font-black mb-4">"</div>
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                  Às vezes, a frustração por não conseguir um movimento ou levantar uma carga nos cega para o <strong className="text-crossfit-accent">progresso que já fizemos</strong>. 
                </p>
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                  Eu te convido a pensar: <em className="text-crossfit-primary font-semibold">onde você começou?</em> Valorize cada pequena vitória. <strong className="text-crossfit-accent">Olhe para o copo metade cheio</strong>.
                </p>
              </div>
            </div>
            
            {/* Second Philosophy Block */}
            <div className="bg-gradient-to-r from-crossfit-primary to-crossfit-primary/90 rounded-2xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="bg-crossfit-accent w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-white">10</span>
                  </div>
                  <span className="text-crossfit-accent font-semibold">Anos de Experiência</span>
                </div>
                
                <p className="text-xl leading-relaxed mb-6">
                  Com 10 anos de jornada no CrossFit, aprendi que a <strong className="text-crossfit-accent">verdadeira evolução está no processo</strong>.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Meu papel como coach é guiar você não apenas na técnica, mas em como aplicar os ensinamentos e as experiências do CrossFit na sua vida.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <p className="text-xl font-semibold text-crossfit-accent">
                    ✨ Viva o processo, celebre sua jornada e descubra a força que você nem sabia que possuía.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center pt-8">
              <div className="inline-flex items-center space-x-4 bg-crossfit-accent/10 rounded-full px-8 py-4">
                <span className="text-2xl">💪</span>
                <span className="text-lg font-semibold text-crossfit-primary">
                  Pronto para começar sua jornada de transformação?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;