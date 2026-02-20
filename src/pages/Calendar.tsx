
import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Users, Clock } from "lucide-react";
import Header from "@/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const events = [
    {
      id: 1,
      title: "Doação de cestas e alimentos arrecadados no natal",
      date: new Date(2026, 0, 28), // 28 de Janeiro de 2026
      time: "08:00",
      location: "Centro de Distribuição",
      volunteers: 35,
      duration: "4 horas",
      status: "completed",
      description: "Distribuição de cestas básicas e alimentos arrecadados durante a campanha de Natal"
    },
    {
      id: 2,
      title: "Arrecadação de tampinhas",
      date: new Date(2026, 2, 9), // 9 de Março de 2026
      time: "08:00",
      location: "Todas as unidades",
      volunteers: 0,
      duration: "30 dias",
      status: "confirmed",
      description: "Campanha de arrecadação de tampinhas plásticas para conversão em cadeiras de rodas"
    },
    {
      id: 3,
      title: "Arrecadação de agasalho",
      date: new Date(2026, 4, 13), // 13 de Maio de 2026
      time: "08:00",
      location: "Todas as unidades",
      volunteers: 0,
      duration: "15 dias",
      status: "upcoming",
      description: "Campanha de arrecadação de agasalhos para doação às comunidades carentes"
    },
    {
      id: 4,
      title: "Doação de mudas",
      date: new Date(2026, 5, 2), // 2 de Junho de 2026
      time: "09:00",
      location: "Parque Municipal",
      volunteers: 25,
      duration: "3 horas",
      status: "upcoming",
      description: "Distribuição de mudas de árvores nativas para reflorestamento"
    },
    {
      id: 5,
      title: "Visita ao asilo",
      date: new Date(2026, 6, 19), // 19 de Julho de 2026
      time: "14:00",
      location: "Asilo São Vicente",
      volunteers: 20,
      duration: "3 horas",
      status: "upcoming",
      description: "Visita recreativa e de convivência com os idosos do asilo"
    },
    {
      id: 6,
      title: "Plantio de árvores",
      date: new Date(2026, 8, 15), // 15 de Setembro de 2026
      time: "07:00",
      location: "Área de Reflorestamento",
      volunteers: 40,
      duration: "5 horas",
      status: "upcoming",
      description: "Mutirão de plantio de árvores nativas para recuperação ambiental"
    },
    {
      id: 7,
      title: "Cartas de esperança",
      date: new Date(2026, 8, 25), // 25 de Setembro de 2026
      time: "13:30",
      location: "Auditório da Jacto",
      volunteers: 30,
      duration: "2 horas",
      status: "upcoming",
      description: "Confecção de cartas motivacionais para pacientes em tratamento"
    },
    {
      id: 8,
      title: "Doação de brinquedos",
      date: new Date(2026, 9, 5), // 5 de Outubro de 2026
      time: "09:00",
      location: "Centro Comunitário",
      volunteers: 35,
      duration: "4 horas",
      status: "upcoming",
      description: "Arrecadação e distribuição de brinquedos para crianças carentes"
    },
    {
      id: 9,
      title: "Doação de mechas",
      date: new Date(2026, 9, 12), // 12 de Outubro de 2026
      time: "09:00",
      location: "Centro de Distribuição",
      volunteers: 20,
      duration: "3 horas",
      status: "upcoming",
      description: "Campanha de doação de mechas de cabelo para confecção de perucas"
    },
    {
      id: 10,
      title: "Natal em família",
      date: new Date(2026, 11, 13), // 13 de Dezembro de 2026
      time: "14:00",
      location: "Centro Comunitário",
      volunteers: 50,
      duration: "6 horas",
      status: "upcoming",
      description: "Celebração especial de Natal com as famílias da comunidade, promovendo união, solidariedade e momentos de alegria"
    }
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (day: number) => {
    return events.filter(event => {
      const eventDate = event.date;
      return eventDate.getDate() === day &&
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear();
    });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const today = new Date();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-jacto-green-500";
      case "upcoming":
        return "bg-yellow-500";
      case "completed":
        return "bg-red-400";
      default:
        return "bg-jacto-gray-500";
    }
  };

  const isToday = (day: number) => {
    return today.getDate() === day &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear();
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
                Agenda de Ações
              </h1>
              <p className="text-xl text-jacto-gray-600 max-w-2xl mx-auto">
                Acompanhe o calendário de ações sociais e não perca nenhuma oportunidade de fazer a diferença
              </p>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Calendar */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-2xl font-bold">
                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </CardTitle>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigateMonth('prev')}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigateMonth('next')}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* Day headers */}
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {dayNames.map(day => (
                        <div key={day} className="p-2 text-center text-sm font-medium text-jacto-gray-500">
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {/* Empty cells for days before the first day of the month */}
                      {Array.from({ length: firstDay }, (_, i) => (
                        <div key={i} className="p-2 h-24"></div>
                      ))}

                      {/* Days of the month */}
                      {Array.from({ length: daysInMonth }, (_, i) => {
                        const day = i + 1;
                        const eventsForDay = getEventsForDate(day);

                        return (
                          <div
                            key={day}
                            className={`p-2 h-24 border rounded-lg hover:bg-jacto-gray-50 transition-colors ${isToday(day) ? 'bg-primary/10 border-primary' : 'border-jacto-gray-200'
                              }`}
                          >
                            <div className={`text-sm font-medium mb-1 ${isToday(day) ? 'text-primary' : 'text-jacto-gray-900'
                              }`}>
                              {day}
                            </div>
                            <div className="space-y-1">
                              {eventsForDay.slice(0, 2).map(event => (
                                <div
                                  key={event.id}
                                  className={`w-full h-2 rounded-full ${getStatusColor(event.status)}`}
                                  title={event.title}
                                ></div>
                              ))}
                              {eventsForDay.length > 2 && (
                                <div className="text-xs text-jacto-gray-500">
                                  +{eventsForDay.length - 2} mais
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Events List */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-2 text-primary" />
                      Ações 2026
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {events
                      .sort((a, b) => a.date.getTime() - b.date.getTime())
                      .slice(0, 3)
                      .map(event => (
                        <div key={event.id} className="border-l-4 border-primary pl-4 py-2">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-jacto-gray-900">{event.title}</h4>
                            <Badge
                              className={`${getStatusColor(event.status)} text-white text-xs`}
                            >
                              {event.status === 'confirmed' ? 'Confirmado' : event.status === 'completed' ? 'Concluída' : 'Em breve'}
                            </Badge>
                          </div>

                          <div className="space-y-1 text-sm text-jacto-gray-600">
                            <div className="flex items-center">
                              <CalendarIcon className="w-3 h-3 mr-2" />
                              {event.date.toLocaleDateString('pt-BR')} às {event.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 mr-2" />
                              {event.location}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Users className="w-3 h-3 mr-2" />
                                {event.volunteers} voluntários
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-3 h-3 mr-2" />
                                {event.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>

                {/* Legend */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Legenda</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-jacto-green-500 rounded-full"></div>
                      <span className="text-sm text-jacto-gray-600">Ação confirmada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-jacto-gray-600">Ação em breve</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                      <span className="text-sm text-jacto-gray-600">Concluída</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 border-2 border-primary rounded-full"></div>
                      <span className="text-sm text-jacto-gray-600">Hoje</span>
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

export default Calendar;
