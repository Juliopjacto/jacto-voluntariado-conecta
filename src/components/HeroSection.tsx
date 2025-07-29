
import { ArrowRight, Users, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="gradient-hero py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-jacto-green-100 text-jacto-green-800 text-sm font-medium rounded-full mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Juntos fazemos a diferença
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-jacto-gray-900 mb-6 leading-tight">
              Portal do
              <span className="text-primary block">Voluntariado</span>
              <span className="text-2xl lg:text-3xl font-semibold text-jacto-gray-600">GRUPO JACTO</span>
            </h1>
            
            <p className="text-xl text-jacto-gray-600 mb-8 leading-relaxed">
              Conectamos colaboradores da Jacto com ações sociais que transformam vidas. 
              Seja parte dessa corrente do bem e faça a diferença na sua comunidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/inscricoes">
                <Button size="lg" className="w-full sm:w-auto group">
                  Quero ser voluntário
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/acoes">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Ver ações disponíveis
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-jacto-gray-900">250+</div>
                <div className="text-sm text-jacto-gray-600">Voluntários ativos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-jacto-gray-900">50+</div>
                <div className="text-sm text-jacto-gray-600">Ações realizadas</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-jacto-gray-900">5K+</div>
                <div className="text-sm text-jacto-gray-600">Vidas impactadas</div>
              </div>
            </div>
          </div>

          {/* Imagem Principal */}
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
                alt="Voluntários da Jacto em ação"
                className="rounded-2xl shadow-2xl w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Badge flutuante */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-jacto-gray-900">Próxima ação</p>
                    <p className="text-sm text-jacto-gray-600">Doação de alimentos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
