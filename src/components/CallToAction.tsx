
import { ArrowRight, Heart, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-primary text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para fazer a diferença?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Junte-se a centenas de colaboradores da Jacto que já estão transformando vidas 
            através do voluntariado. Sua participação faz toda a diferença!
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Conecte-se</h3>
            <p className="text-white/80 text-sm">
              Conheça outros colaboradores engajados em causas sociais
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Impacte</h3>
            <p className="text-white/80 text-sm">
              Faça a diferença real na vida de pessoas e comunidades
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cresça</h3>
            <p className="text-white/80 text-sm">
              Desenvolva novas habilidades e amplie sua perspectiva
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/inscricoes">
            <Button 
              size="lg" 
              variant="secondary" 
              className="w-full sm:w-auto group bg-white text-primary hover:bg-white/90"
            >
              Quero me inscrever agora
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link to="/acoes">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
            >
              Conhecer as ações
            </Button>
          </Link>
        </div>

        {/* Testimonial */}
        <div className="mt-12 text-center">
          <blockquote className="text-lg italic text-white/90 max-w-3xl mx-auto">
            "Participar das ações de voluntariado da Jacto transformou minha perspectiva sobre o trabalho e a vida. 
            É incrível ver como pequenas ações podem gerar grandes mudanças."
          </blockquote>
          <cite className="block mt-4 text-white/70 font-medium">
            — Maria Silva, Engenheira de Produção
          </cite>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
