import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Stethoscope } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  currentPage?: string;
}

const Header = ({ currentPage = "" }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update current page based on location if not provided
  const activePage = currentPage || location.pathname.substring(1) || "inicio";

  const navItems = [
    { href: "/", label: "Inicio", id: "inicio" },
    { href: "/podcast", label: "Podcast", id: "podcast" },
    { href: "/recursos", label: "Recursos", id: "recursos" },
    { href: "/contacto", label: "Contacto", id: "contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/logo_small.png"
              alt="MedDocente Logo"
              className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
            />
            <span className={`text-xl font-bold font-inter tracking-tight ${isScrolled ? 'text-slate-800' : 'text-slate-900'}`}>
              MedDocente<span className="text-cyan-600">.cl</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-cyan-600 ${activePage === item.id
                    ? "text-cyan-600 font-semibold"
                    : "text-slate-600"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link to="/apoyanos">
              <Button
                variant={isScrolled ? "default" : "secondary"}
                className={`rounded-full px-6 transition-all ${!isScrolled ? "bg-blue-50 text-blue-700 hover:bg-blue-100" : "bg-blue-600 hover:bg-blue-700"
                  }`}
              >
                Apóyanos
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top-5">
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`px-4 py-3 rounded-md text-base font-medium ${activePage === item.id
                    ? "bg-cyan-50 text-cyan-700"
                    : "text-slate-600 hover:bg-slate-50"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-2"></div>
              <Link to="/apoyanos" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Apóyanos
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
