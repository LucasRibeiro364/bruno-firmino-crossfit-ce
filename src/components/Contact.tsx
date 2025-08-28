import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo seu interesse. Entrarei em contato em breve.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-crossfit-primary mb-6">
              Inicie Sua Transformação Agora
            </h2>
            <div className="w-24 h-1 bg-crossfit-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Se você mora em <strong className="text-crossfit-accent">Fortaleza ou região</strong> e busca um acompanhamento personalizado, quer levar seu treino para o próximo nível ou tem uma proposta de projeto, preencha o formulário abaixo. Terei o prazer de responder.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-border">
                <h3 className="text-2xl font-bold text-crossfit-primary mb-6">Vamos Conversar?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-crossfit-accent text-white w-12 h-12 rounded-full flex items-center justify-center">
                      📍
                    </div>
                    <div>
                      <h4 className="font-semibold text-crossfit-primary">Localização</h4>
                      <p className="text-muted-foreground">Fortaleza-CE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-crossfit-accent text-white w-12 h-12 rounded-full flex items-center justify-center">
                      🏋️
                    </div>
                    <div>
                      <h4 className="font-semibold text-crossfit-primary">Especialidades</h4>
                      <p className="text-muted-foreground">CrossFit • Personal Training • Coaching</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-crossfit-accent text-white w-12 h-12 rounded-full flex items-center justify-center">
                      ⏰
                    </div>
                    <div>
                      <h4 className="font-semibold text-crossfit-primary">Disponibilidade</h4>
                      <p className="text-muted-foreground">Segunda a Sexta, 6h às 21h</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-crossfit-accent/10 rounded-lg border border-crossfit-accent/20">
                  <p className="font-semibold text-crossfit-primary mb-2">💪 Pronto para sua transformação?</p>
                  <p className="text-sm text-muted-foreground">
                    Com 10 anos de experiência, estou aqui para te ajudar a alcançar seus objetivos com segurança e eficiência.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-crossfit-primary mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-border focus:border-crossfit-accent focus:ring-crossfit-accent"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-crossfit-primary mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-border focus:border-crossfit-accent focus:ring-crossfit-accent"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-crossfit-primary mb-2">
                    Telefone (opcional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-border focus:border-crossfit-accent focus:ring-crossfit-accent"
                    placeholder="(85) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-crossfit-primary mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="border-border focus:border-crossfit-accent focus:ring-crossfit-accent min-h-[120px]"
                    placeholder="Conte-me sobre seus objetivos, experiência com CrossFit ou qualquer dúvida que tenha..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-crossfit-accent hover:bg-crossfit-accent/90 text-white py-3 text-lg font-semibold shadow-lg"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;