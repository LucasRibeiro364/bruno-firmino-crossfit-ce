import { Button } from "@/components/ui/button";
import brunoPic from "@/assets/bruno-personal-photo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-crossfit-primary via-primary to-crossfit-primary/90" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img 
              src={brunoPic} 
              alt="Bruno Firmino - Personal Trainer CrossFit Fortaleza-CE" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            BRUNO FIRMINO
          </h1>
          
          {/* Subtitle */}
          <div className="text-xl md:text-2xl mb-4 text-crossfit-accent font-semibold">
            Personal Trainer • CrossFit Level 2 • Fortaleza-CE
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Uma Década de Paixão pelo CrossFit em Fortaleza. 
            <span className="block mt-2 font-medium">
              Transformando vidas através do esporte com metodologia segura, eficiente e motivadora.
            </span>
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
              <div className="text-3xl font-bold text-crossfit-accent">10+</div>
              <div className="text-sm text-white/80">Anos de Experiência</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
              <div className="text-3xl font-bold text-crossfit-accent">CF-L2</div>
              <div className="text-sm text-white/80">Certificação</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
              <div className="text-3xl font-bold text-crossfit-accent">106</div>
              <div className="text-sm text-white/80">Atletas no Open 2024</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-crossfit-accent hover:bg-crossfit-accent/90 text-white px-8 py-4 text-lg font-semibold shadow-xl"
              onClick={scrollToContact}
            >
              Iniciar Minha Jornada
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-black hover:bg-white/10 hover:text-black px-8 py-4 text-lg font-semibold bg-white/90"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Minha História
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;