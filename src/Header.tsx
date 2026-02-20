
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    // { name: "Ações", href: "/acoes" },
    { name: "Agenda", href: "/agenda" },
    // { name: "Galeria", href: "/galeria" },
    { name: "Inscrições", href: "/inscricoes" },
    { name: "Comunidade", href: "https://jacto.csod.com/phnx/driver.aspx?routename=Social/Communities/CommunityWithFeed&Root=71", external: true },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Logo Espaço do Voluntariado"
                className="w-16 h-16 rounded-lg object-contain"
              />
              <div className="hidden sm:block">
                <span className="text-3xl font-bold text-jacto-gray-900 font-outfit tracking-wide">Voluntário</span>
              </div>
            </Link>
            <div className="h-10 w-px bg-gray-300 mx-6 hidden sm:block"></div>
            <img
              src="/logo_grupo.png"
              alt="Grupo Jacto"
              className="h-12 object-contain hidden sm:block"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-jacto-gray-700 hover:text-primary hover:bg-jacto-gray-50"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.href)
                      ? "bg-primary text-white"
                      : "text-jacto-gray-700 hover:text-primary hover:bg-jacto-gray-50"
                      }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-jacto-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 rounded-md text-base font-medium transition-colors text-jacto-gray-700 hover:text-primary hover:bg-jacto-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.href)
                      ? "bg-primary text-white"
                      : "text-jacto-gray-700 hover:text-primary hover:bg-jacto-gray-50"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
