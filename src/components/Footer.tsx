const Footer = () => {
  return (
    <footer className="bg-crossfit-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black mb-4">BRUNO FIRMINO</h3>
              <p className="text-white/80 mb-4">
                Personal Trainer & CrossFit Level 2 Coach
              </p>
              <p className="text-white/60 text-sm">
                Transformando vidas através do CrossFit em Fortaleza-CE há mais de uma década.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-bold mb-4 text-crossfit-accent">Navegação</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block mx-auto text-white/80 hover:text-crossfit-accent transition-colors"
                >
                  Sobre Mim
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block mx-auto text-white/80 hover:text-crossfit-accent transition-colors"
                >
                  Contato
                </button>
                <a 
                  href="#"
                  className="block text-white/80 hover:text-crossfit-accent transition-colors"
                >
                  Certificações
                </a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-bold mb-4 text-crossfit-accent">Contato</h4>
              <div className="space-y-2 text-white/80">
                <p>📍 Fortaleza-CE</p>
                <p>🏋️ CrossFit Level 2 Trainer</p>
                <p>⏰ Seg-Sex: 6h às 21h</p>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 text-sm mb-4 md:mb-0">
                © 2024 Bruno Firmino. Todos os direitos reservados.
              </div>
              
              <div className="flex space-x-6">
                <a 
                  href="https://instagram.com/brunofirmino" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-crossfit-accent w-10 h-10 rounded-full flex items-center justify-center transition-colors group"
                >
                  <span className="text-lg group-hover:text-white">📷</span>
                </a>
                <a 
                  href="https://linkedin.com/in/brunofirmino" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-crossfit-accent w-10 h-10 rounded-full flex items-center justify-center transition-colors group"
                >
                  <span className="text-lg group-hover:text-white">💼</span>
                </a>
                <a 
                  href="https://wa.me/5585999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-crossfit-success w-10 h-10 rounded-full flex items-center justify-center transition-colors group"
                >
                  <span className="text-lg group-hover:text-white">💬</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* SEO Footer */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="text-center text-white/40 text-xs">
              <p className="mb-2">
                <strong>Bruno Firmino - Personal Trainer CrossFit Fortaleza-CE</strong> | Coach de CrossFit Level 2 | Treinamento Personalizado
              </p>
              <p>
                CrossFit Fortaleza • Personal Training • Aulas de CrossFit • Preparação para Competições • Fortaleza-CE
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;