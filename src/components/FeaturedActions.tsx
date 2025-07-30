
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const FeaturedActions = () => {
  const actions = [
    {
      id: 1,
      title: "Confecção de Cartas para o Dia Mundial da Saúde Mental",
      description: "Arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade social na região de Pompéia.",
      image: "public/img/menina-pintando-com-pincel 1.jpg",
      date: "10 de Setembro de 2025",
      location: "Centro de Distribuição - Pompéia",
      volunteers: 25,
      duration: "4 horas",
      status: "Inscrições abertas",
      category: "Alimentação"
    },
    {
      id: 2,
      title: "Mutirão de Limpeza do Rio Novo",
      description: "Ação de preservação ambiental com limpeza das margens do Rio Novo e plantio de mudas nativas.",
      image: "p/menina-pintando-com-pincel.jpg",
      date: "22 Dezembro 2024",
      location: "Parque Ecológico - Rio Novo",
      volunteers: 40,
      duration: "6 horas",
      status: "Inscrições abertas",
      category: "Meio Ambiente"
    },
    {
      id: 3,
      title: "Oficina de Educação Digital",
      description: "Ensino básico de informática e inclusão digital para jovens e adultos da comunidade local.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      date: "10 Janeiro 2025",
      location: "Centro Comunitário São José",
      volunteers: 15,
      duration: "3 horas",
      status: "Em breve",
      category: "Educação"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Inscrições abertas":
        return "bg-jacto-green-100 text-jacto-green-800";
      case "Em breve":
        return "bg-yellow-100 text-yellow-800";
      case "Concluída":
        return "bg-jacto-gray-100 text-jacto-gray-800";
      default:
        return "bg-jacto-gray-100 text-jacto-gray-800";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-jacto-gray-900 mb-4">
            Ações em Destaque
          </h2>
          <p className="text-xl text-jacto-gray-600 max-w-2xl mx-auto">
            Conheça as próximas oportunidades de voluntariado e faça parte da transformação social
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {actions.map((action, index) => (
            <Card 
              key={action.id} 
              className="overflow-hidden hover-lift group animate-fade-in border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={action.image}
                  alt={action.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getStatusColor(action.status)}>
                    {action.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">
                    {action.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {action.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-jacto-gray-600 text-sm leading-relaxed">
                  {action.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-jacto-gray-500">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {action.date}
                  </div>
                  <div className="flex items-center text-sm text-jacto-gray-500">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {action.location}
                  </div>
                  <div className="flex items-center justify-between text-sm text-jacto-gray-500">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      {action.volunteers} voluntários
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      {action.duration}
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full group" 
                  disabled={action.status === "Concluída"}
                >
                  {action.status === "Inscrições abertas" ? "Inscrever-se" : "Saiba mais"}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ver mais ações */}
        <div className="text-center">
          <Link to="/acoes">
            <Button variant="outline" size="lg" className="group">
              Ver todas as ações
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedActions;
