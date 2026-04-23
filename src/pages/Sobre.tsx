import { ExternalLink, Sprout } from "lucide-react";
import Header from "@/Header";
import Footer from "@/components/Footer";

const Sobre = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">

                {/* Hero */}
                <section className="gradient-hero py-16 border-b border-jacto-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-jacto-green-600 mb-4">
                                Programa Institucional
                            </span>
                            <Sprout className="w-12 h-12 text-jacto-green-500 mb-4" />
                            <h1 className="text-4xl lg:text-5xl font-bold text-jacto-gray-900 leading-tight mb-5 animate-fade-in">
                                Ecossistema 
                            </h1>
                            <p className="text-lg text-jacto-gray-600 leading-relaxed animate-slide-up">
                                Uma iniciativa do Grupo Jacto que apoia projetos sociais de colaboradores
                                e da comunidade, promovendo voluntariado sustentável desde 2008.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main content */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                            {/* Text */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-xl font-bold text-jacto-gray-900 mb-4">
                                        Sobre o Programa
                                    </h2>
                                    <div className="space-y-4 text-jacto-gray-600 leading-relaxed text-[15px]">
                                        <p>
                                            O Programa surgiu internamente, em <strong className="text-jacto-gray-800">2008</strong>,
                                            agregando e apoiando iniciativas sociais de colaboradores e familiares voltadas à comunidade.
                                            Hoje ganhou abrangência e os voluntários não se restringem a pessoas ligadas ao Grupo.
                                        </p>
                                        <p>
                                            Ao apresentar sua iniciativa, o voluntário é cadastrado e assina um
                                            <strong className="text-jacto-gray-800"> termo de adesão ao voluntariado</strong>.
                                            O Programa então auxilia na transcrição da iniciativa à linguagem de projetos,
                                            para que seja desenvolvida de forma sustentável e gere resultados reais para a comunidade.
                                        </p>
                                    </div>
                                </div>

                                {/* Founder block */}
                                <div className="border-l-4 border-jacto-green-500 pl-5 py-1">
                                    <p className="text-[15px] text-jacto-gray-600 leading-relaxed">
                                        Criado pelo <strong className="text-jacto-gray-800">Sr. Shunji Nishimura</strong>,
                                        aos 98 anos, o projeto nasceu do desejo de proporcionar à terceira idade atividades
                                        produtivas como horta orgânica e floricultura. Também originou a
                                        <strong className="text-jacto-gray-800"> Oficina de Cerâmica Chieko Nishimura</strong>,
                                        em homenagem à sua esposa.
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="flex gap-6 pt-2">
                                    <div>
                                        <p className="text-3xl font-bold text-jacto-green-600">2008</p>
                                        <p className="text-xs text-jacto-gray-500 mt-0.5">Ano de fundação</p>
                                    </div>
                                    <div className="w-px bg-jacto-gray-200" />
                                    <div>
                                        <p className="text-3xl font-bold text-jacto-green-600">+15</p>
                                        <p className="text-xs text-jacto-gray-500 mt-0.5">Anos de impacto</p>
                                    </div>
                                </div>

                                {/* External link */}
                                <a
                                    href="https://www.arvoredacidadania.org.br"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-jacto-green-600 hover:text-jacto-green-700 transition-colors group"
                                >
                                    Consultar projetos ativos
                                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>

                            {/* Images */}
                            <div className="space-y-4">
                                <div className="rounded-2xl overflow-hidden shadow-md">
                                    <img
                                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
                                        alt="Voluntários plantando árvores"
                                        className="w-full h-72 object-cover"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden shadow-md">
                                    <img
                                        src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80"
                                        alt="Oficina de Cerâmica Chieko Nishimura"
                                        className="w-full h-44 object-cover object-center"
                                    />
                                </div>
                                <p className="text-xs text-jacto-gray-400 text-right pr-1">
                                    Oficina de Cerâmica Chieko Nishimura
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Sobre;
