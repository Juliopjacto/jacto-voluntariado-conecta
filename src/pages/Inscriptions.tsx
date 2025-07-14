
import { useState } from "react";
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const Inscriptions = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    areas: [] as string[],
    availability: "",
    experience: "",
    motivation: "",
    terms: false
  });

  const departments = [
    "Recursos Humanos",
    "Engenharia",
    "Produção",
    "Vendas",
    "Marketing",
    "Administrativo",
    "TI",
    "Qualidade",
    "Logística",
    "Financeiro"
  ];

  const volunteerAreas = [
    "Alimentação e Nutrição",
    "Educação e Capacitação",
    "Meio Ambiente",
    "Assistência Social",
    "Saúde e Bem-estar",
    "Esporte e Recreação",
    "Arte e Cultura",
    "Direitos Humanos"
  ];

  const availabilityOptions = [
    "Manhã (08:00 - 12:00)",
    "Tarde (13:00 - 17:00)",
    "Noite (18:00 - 22:00)",
    "Fins de semana",
    "Qualquer horário"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAreaChange = (area: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      areas: checked 
        ? [...prev.areas, area]
        : prev.areas.filter(a => a !== area)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.phone || !formData.department) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    if (formData.areas.length === 0) {
      toast({
        title: "Áreas de interesse",
        description: "Selecione pelo menos uma área de interesse.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.terms) {
      toast({
        title: "Termos e condições",
        description: "É necessário aceitar os termos e condições.",
        variant: "destructive"
      });
      return;
    }

    // Simular envio do formulário
    console.log('Dados do formulário:', formData);
    
    toast({
      title: "Inscrição realizada com sucesso!",
      description: "Em breve entraremos em contato com você.",
    });

    // Reset do formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      areas: [],
      availability: "",
      experience: "",
      motivation: "",
      terms: false
    });
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
                Inscrições para Voluntariado
              </h1>
              <p className="text-xl text-jacto-gray-600 max-w-2xl mx-auto">
                Faça parte da nossa equipe de voluntários e ajude a transformar vidas na sua comunidade
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-jacto-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Formulário de Inscrição</CardTitle>
                    <p className="text-jacto-gray-600">
                      Preencha suas informações para se tornar um voluntário Jacto
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Dados Pessoais */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-jacto-gray-900 flex items-center">
                          <User className="w-5 h-5 mr-2 text-primary" />
                          Dados Pessoais
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-jacto-gray-700 mb-2">
                              Nome completo *
                            </label>
                            <Input
                              type="text"
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              placeholder="Seu nome completo"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-jacto-gray-700 mb-2">
                              Email *
                            </label>
                            <Input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="seu.email@jacto.com.br"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-jacto-gray-700 mb-2">
                              Telefone *
                            </label>
                            <Input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              placeholder="(14) 99999-9999"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-jacto-gray-700 mb-2">
                              Departamento *
                            </label>
                            <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione seu departamento" />
                              </SelectTrigger>
                              <SelectContent>
                                {departments.map(dept => (
                                  <SelectItem key={dept} value={dept}>
                                    {dept}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Áreas de Interesse */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-jacto-gray-900">
                          Áreas de Interesse *
                        </h3>
                        <p className="text-sm text-jacto-gray-600">
                          Selecione as áreas em que você gostaria de atuar como voluntário
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {volunteerAreas.map(area => (
                            <div key={area} className="flex items-center space-x-2">
                              <Checkbox
                                id={area}
                                checked={formData.areas.includes(area)}
                                onCheckedChange={(checked) => handleAreaChange(area, checked as boolean)}
                              />
                              <label
                                htmlFor={area}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {area}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Disponibilidade */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-jacto-gray-900">
                          Disponibilidade
                        </h3>
                        
                        <div>
                          <label className="block text-sm font-medium text-jacto-gray-700 mb-2">
                            Melhor horário para participar das ações
                          </label>
                          <Select value={formData.availability} onValueChange={(value) => handleInputChange('availability', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione seu horário de preferência" />
                            </SelectTrigger>
                            <SelectContent>
                              {availabilityOptions.map(option => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Experiência e Motivação */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-jacto-gray-700 mb-2">
                            Experiência anterior com voluntariado
                          </label>
                          <Textarea
                            value={formData.experience}
                            onChange={(e) => handleInputChange('experience', e.target.value)}
                            placeholder="Conte-nos sobre sua experiência anterior com trabalho voluntário (opcional)"
                            rows={3}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-jacto-gray-700 mb-2">
                            Motivação para ser voluntário
                          </label>
                          <Textarea
                            value={formData.motivation}
                            onChange={(e) => handleInputChange('motivation', e.target.value)}
                            placeholder="O que te motiva a participar das ações sociais da Jacto? (opcional)"
                            rows={3}
                          />
                        </div>
                      </div>

                      {/* Termos */}
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.terms}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, terms: checked as boolean }))}
                          required
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm text-jacto-gray-600 leading-relaxed"
                        >
                          Aceito os termos e condições do programa de voluntariado da Jacto e autorizo o uso de minha imagem 
                          nas ações sociais para fins de divulgação institucional.
                        </label>
                      </div>

                      {/* Submit Button */}
                      <Button type="submit" size="lg" className="w-full group">
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Enviar Inscrição
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Info Sidebar */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                      Próximos Passos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-jacto-gray-900">Envie sua inscrição</p>
                        <p className="text-sm text-jacto-gray-600">Preencha o formulário com suas informações</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-jacto-gray-900">Análise da inscrição</p>
                        <p className="text-sm text-jacto-gray-600">Nossa equipe analisará seu perfil</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-jacto-gray-900">Orientação inicial</p>
                        <p className="text-sm text-jacto-gray-600">Participação em sessão de boas-vindas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        4
                      </div>
                      <div>
                        <p className="font-medium text-jacto-gray-900">Primeira ação</p>
                        <p className="text-sm text-jacto-gray-600">Convite para participar de ações</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
                      Informações Importantes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-jacto-gray-600">
                    <p>
                      • As ações são realizadas fora do horário de trabalho
                    </p>
                    <p>
                      • Participação é voluntária e flexível
                    </p>
                    <p>
                      • Fornecemos todo o material necessário
                    </p>
                    <p>
                      • Certificado de participação ao final do ano
                    </p>
                    <p>
                      • Seguro de acidentes pessoais durante as ações
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Building className="w-5 h-5 mr-2 text-primary" />
                      Contato
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-sm">voluntariado@jacto.com.br</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-sm">(14) 3404-7000</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Inscriptions;
