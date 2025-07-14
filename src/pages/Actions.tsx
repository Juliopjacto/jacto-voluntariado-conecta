import { useState } from "react";
import { Search, Filter, Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Actions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const actions = [
    {
      id: 1,
      title: "Doação de Alimentos - Natal Solidário",
      description: "Arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade social na região de Pompéia.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      date: "15 Dezembro 2024",
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
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
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
    },
    {
      id: 4,
      title: "Reforma de Escola Municipal",
      description: "Mutirão para pintura e pequenos reparos na Escola Municipal Dom Pedro II.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
      date: "05 Novembro 2024",
      location: "Escola Municipal Dom Pedro II",
      volunteers: 30,
      duration: "8 horas",
      status: "Concluída",
      category: "Educação"
    },
    {
      id: 5,
      title: "Campanha de Agasalho",
      description: "Arrecadação e distribuição de roupas de inverno para pessoas em situação de rua.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
      date: "20 Junho 2024",
      location: "Centro Social Cristo Rei",
      volunteers: 20,
      duration: "3 horas",
      status: "Concluída",
      category: "Assistência Social"
    },
    {
      id: 6,
      title: "Plantio de Árvores no Parque Municipal",
      description: "Ação de reflorestamento urbano no Parque Municipal com mudas nativas da região.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      date: "28 Janeiro 2025",
      location: "Parque Municipal de Pompéia",
      volunteers: 35,
      duration: "5 horas",
      status: "Em breve",
      category: "Meio Ambiente"
    }
  ];

  const filteredActions = actions.filter(action => {
    const matchesSearch = action.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         action.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || action.category === filterCategory;
    const matchesStatus = filterStatus === "all" || action.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-jacto-gray-900 mb-6">
                Ações Sociais
              </h1>
              <p className="text-xl text-jacto-gray-600 max-w-2xl mx-auto">
                Descubra oportunidades de voluntariado e faça parte da transformação social na sua comunidade
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-jacto-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar ações..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-4">
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-40">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="Alimentação">Alimentação</SelectItem>
                    <SelectItem value="Educação">Educação</SelectItem>
                    <SelectItem value="Meio Ambiente">Meio Ambiente</SelectItem>
                    <SelectItem value="Assistência Social">Assistência Social</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="Inscrições abertas">Abertas</SelectItem>
                    <SelectItem value="Em breve">Em breve</SelectItem>
                    <SelectItem value="Concluída">Concluídas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Actions Grid */}
        <section className="py-16 bg-jacto-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredActions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-jacto-gray-500 text-lg">
                  Nenhuma ação encontrada com os filtros aplicados.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredActions.map((action, index) => (
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
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Actions;
