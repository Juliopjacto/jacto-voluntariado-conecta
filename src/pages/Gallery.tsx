
import { useState } from "react";
import { Search, Filter, Eye, Users, Calendar } from "lucide-react";
import Header from "@/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "Doação de Alimentos - Outubro 2024",
      category: "Alimentação",
      date: "15 Outubro 2024",
      volunteers: 25,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      description: "Distribuição de cestas básicas para 150 famílias em situação de vulnerabilidade social."
    },
    {
      id: 2,
      title: "Mutirão de Limpeza - Rio Novo",
      category: "Meio Ambiente",
      date: "22 Setembro 2024",
      volunteers: 40,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      description: "Limpeza das margens do Rio Novo e plantio de 100 mudas nativas."
    },
    {
      id: 3,
      title: "Oficina de Educação Digital",
      category: "Educação",
      date: "10 Agosto 2024",
      volunteers: 15,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "Capacitação em informática básica para 50 jovens da comunidade."
    },
    {
      id: 4,
      title: "Reforma da Escola Municipal",
      category: "Educação",
      date: "05 Julho 2024",
      volunteers: 30,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      description: "Pintura e pequenos reparos na Escola Municipal Dom Pedro II."
    },
    {
      id: 5,
      title: "Campanha de Agasalho",
      category: "Assistência Social",
      date: "20 Junho 2024",
      volunteers: 20,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      description: "Arrecadação e distribuição de 500 peças de roupas de inverno."
    },
    {
      id: 6,
      title: "Horta Comunitária",
      category: "Meio Ambiente",
      date: "15 Maio 2024",
      volunteers: 18,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      description: "Criação de horta comunitária no Centro Social Cristo Rei."
    },
    {
      id: 7,
      title: "Natal Solidário 2023",
      category: "Assistência Social",
      date: "20 Dezembro 2023",
      volunteers: 45,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      description: "Distribuição de presentes para 200 crianças carentes da região."
    },
    {
      id: 8,
      title: "Mutirão de Saúde",
      category: "Saúde",
      date: "10 Novembro 2023",
      volunteers: 35,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "Atendimento médico e odontológico gratuito para a comunidade."
    },
    {
      id: 9,
      title: "Plantio de Árvores",
      category: "Meio Ambiente",
      date: "22 Setembro 2023",
      volunteers: 28,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      description: "Plantio de 150 mudas no Parque Municipal de Pompéia."
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || item.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Alimentação":
        return "bg-orange-100 text-orange-800";
      case "Educação":
        return "bg-blue-100 text-blue-800";
      case "Meio Ambiente":
        return "bg-jacto-green-100 text-jacto-green-800";
      case "Assistência Social":
        return "bg-purple-100 text-purple-800";
      case "Saúde":
        return "bg-red-100 text-red-800";
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
                Galeria de Ações
              </h1>
              <p className="text-xl text-jacto-gray-600 max-w-2xl mx-auto">
                Reviva os momentos especiais das nossas ações sociais e veja o impacto transformador do voluntariado
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
                  placeholder="Buscar na galeria..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as categorias</SelectItem>
                  <SelectItem value="Alimentação">Alimentação</SelectItem>
                  <SelectItem value="Educação">Educação</SelectItem>
                  <SelectItem value="Meio Ambiente">Meio Ambiente</SelectItem>
                  <SelectItem value="Assistência Social">Assistência Social</SelectItem>
                  <SelectItem value="Saúde">Saúde</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-jacto-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-jacto-gray-500 text-lg">
                  Nenhuma imagem encontrada com os filtros aplicados.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <Card 
                        className="overflow-hidden hover-lift group cursor-pointer animate-fade-in border-0 shadow-lg"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                          <div className="absolute top-4 left-4">
                            <Badge className={getCategoryColor(item.category)}>
                              {item.category}
                            </Badge>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/90 rounded-full p-3">
                              <Eye className="w-6 h-6 text-jacto-gray-900" />
                            </div>
                          </div>
                        </div>
                        
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-jacto-gray-900 mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          
                          <div className="flex items-center justify-between text-sm text-jacto-gray-500">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {item.date}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {item.volunteers} voluntários
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle className="text-xl">{item.title}</DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-96 object-cover rounded-lg"
                        />
                        
                        <div className="flex items-center gap-4 text-sm text-jacto-gray-600">
                          <Badge className={getCategoryColor(item.category)}>
                            {item.category}
                          </Badge>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.date}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {item.volunteers} voluntários participaram
                          </div>
                        </div>
                        
                        <p className="text-jacto-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
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

export default Gallery;
