
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const FeaturedActions = () => {
  const actions = [
    {
      id: 1,
      title: "Oficina de Cerâmica artesanal",
      description: "Oficinas de cerâmica para desenvolvimento de habilidades manuais e criatividade. Participe e aprenda uma nova arte.",
      image: "/ceramica.jpg",
      date: "Ano todo",
      location: "Centro de Convivência",
      volunteers: 15,
      duration: "Semanal",
      status: "Em andamento",
      category: "Arte e Cultura"
    },
    {
      id: 2,
      title: "Arrecadação de Tampinhas e Lacres",
      description: "Junte-se a nós nesta campanha de arrecadação de tampinhas plásticas e lacres de alumínio. O material arrecadado será revertido em cadeiras de rodas para quem precisa.",
      image: "/tampinha.jpg",
      date: "Março de 2026",
      location: "Todas as unidades",
      volunteers: 0,
      duration: "30 dias",
      status: "Em breve",
      category: "Meio Ambiente"
    },
    {
      id: 3,
      title: "Natal em família",
      description: "Celebração especial de Natal com as famílias da comunidade, promovendo união, solidariedade e momentos de alegria.",
      image: "/Natal_2026.jpg",
      date: "14 de Dezembro de 2025",
      location: "Centro Comunitário",
      volunteers: 45,
      duration: "6 horas",
      status: "Concluída",
      category: "Eventos"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Inscrições abertas":
        return "bg-jacto-green-100 text-jacto-green-800";
      case "Em breve":
        return "bg-yellow-100 text-yellow-800";
      case "Em andamento":
        return "bg-jacto-green-50 text-jacto-green-700 border border-jacto-green-200";
      case "Concluída":
        return "bg-red-50 text-red-400 border border-red-100";
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
              className="overflow-hidden hover-lift group animate-fade-in border-0 shadow-lg flex flex-col h-full"
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

              <CardContent className="flex flex-col flex-grow space-y-4">
                <p className="text-jacto-gray-600 text-sm leading-relaxed">
                  {action.description}
                </p>

                <div className="space-y-2 flex-grow">
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
                  className="w-full group mt-auto"
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
