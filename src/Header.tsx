
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Trees, House, CalendarDays, ClipboardList, Users } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const navigation = [
    {
      name: "Home",
      href: "/",
      label: (
        <span className="flex items-center gap-1.5">
          <House className="w-4 h-4 text-jacto-gray-400 shrink-0" />
          Home
        </span>
      ),
    },
    {
      name: "Árvore da Cidadania",
      href: "/sobre",
      label: (
        <span className="flex items-center gap-1.5">
          <Trees className="w-4 h-4 text-jacto-green-600 shrink-0" />
          da Cidadania
        </span>
      ),
    },
    // { name: "Ações", href: "/acoes" },
    {
      name: "Agenda",
      href: "/agenda",
      label: (
        <span className="flex items-center gap-1.5">
          <CalendarDays className="w-4 h-4 text-jacto-gray-400 shrink-0" />
          Agenda
        </span>
      ),
    },
    // { name: "Galeria", href: "/galeria" },
    {
      name: "Inscrições",
      href: "/inscricoes",
      label: (
        <span className="flex items-center gap-1.5">
          <ClipboardList className="w-4 h-4 text-jacto-gray-400 shrink-0" />
          Inscrições
        </span>
      ),
    },
    {
      name: "Comunidade",
      href: "https://jacto.csod.com/phnx/driver.aspx?routename=Social/Communities/CommunityWithFeed&Root=71",
      external: true,
      label: (
        <span className="flex items-center gap-1.5">
          <Users className="w-4 h-4 text-jacto-gray-400 shrink-0" />
          Comunidade
        </span>
      ),
    },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Fecha ao mudar de página
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
                <span className="text-3xl font-bold text-jacto-gray-500 font-outfit tracking-wide">
                  Voluntário
                </span>
              </div>
            </Link>
            <div className="h-10 w-px bg-gray-300 mx-6 hidden sm:block" />
            <img
              src="/logo_grupo.png"
              alt="Grupo Jacto"
              className="h-12 object-contain hidden sm:block"
            />
          </div>

          {/* Hamburger button — sempre visível */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Abrir menu"
              aria-expanded={isMenuOpen}
              className="flex flex-col justify-center items-center w-10 h-10 rounded-md text-jacto-gray-600 hover:text-primary hover:bg-jacto-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Dropdown menu */}
            {isMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-jacto-gray-200 overflow-hidden
                           animate-fade-in origin-top-right"
              >
                {navigation.map((item) =>
                  item.external ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-sm font-medium text-jacto-gray-700 hover:text-primary hover:bg-jacto-gray-50 transition-colors"
                    >
                      {item.label ?? item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive(item.href)
                        ? "bg-primary text-white"
                        : "text-jacto-gray-700 hover:text-primary hover:bg-jacto-gray-50"
                        }`}
                    >
                      {item.label ?? item.name}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
