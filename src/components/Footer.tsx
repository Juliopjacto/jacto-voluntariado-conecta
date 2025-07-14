
import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-jacto-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Portal do Voluntariado</span>
                <div className="text-sm text-jacto-green-400 font-medium">JACTO</div>
              </div>
            </div>
            <p className="text-jacto-gray-300 mb-4 max-w-md">
              Conectando colaboradores da Jacto com ações sociais que transformam vidas e constroem um futuro melhor para nossa comunidade.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://jacto.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-jacto-gray-400 hover:text-jacto-green-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-jacto-gray-300 hover:text-jacto-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/acoes" className="text-jacto-gray-300 hover:text-jacto-green-400 transition-colors">
                  Ações Sociais
                </Link>
              </li>
              <li>
                <Link to="/agenda" className="text-jacto-gray-300 hover:text-jacto-green-400 transition-colors">
                  Agenda
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-jacto-gray-300 hover:text-jacto-green-400 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <a
                  href="https://jacto.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jacto-gray-300 hover:text-jacto-green-400 transition-colors"
                >
                  Site Oficial Jacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-jacto-green-400" />
                <span className="text-jacto-gray-300 text-sm">voluntariado@jacto.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-jacto-green-400" />
                <span className="text-jacto-gray-300 text-sm">(14) 3404-7000</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-jacto-green-400 mt-0.5" />
                <span className="text-jacto-gray-300 text-sm">
                  Rua Condessa Anita Lopes, 85<br />
                  Pompéia, SP - 17580-000
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-jacto-gray-800 mt-8 pt-8 text-center">
          <p className="text-jacto-gray-400 text-sm">
            © 2024 Jacto - Sociedade e Ações. Todos os direitos reservados.
          </p>
          <p className="text-jacto-gray-500 text-xs mt-2">
            Transformando vidas através do voluntariado corporativo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
