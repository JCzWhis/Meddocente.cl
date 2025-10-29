import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  currentPage?: string;
}

const Header = ({ currentPage = "" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Inicio", id: "inicio" },
    { href: "/podcast", label: "Podcast", id: "podcast" },
    { href: "/recursos", label: "Recursos", id: "recursos" },
    { href: "/apoyanos", label: "Apóyanos", id: "apoyanos" },
    { href: "/contacto", label: "Contacto", id: "contacto" },
  ];

  const linkClasses = (id: string) =>
    `font-noto transition-colors ${
      currentPage === id
        ? "text-brand-secondary font-semibold"
        : "text-gray-300 hover:text-brand-secondary"
    }`;

  return (
    <header className="bg-brand-dark/95 backdrop-blur-sm shadow-lg border-b border-brand-secondary/30 sticky top-0 z-50 relative">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <img src="/lovable-uploads/38854455-7244-4c3d-bd26-1121232241ef.png" alt="MedDocente Logo" className="h-8 w-8" />
            <span className="text-2xl font-inter font-bold text-cyan-400">MedDocente-IA</span>
          </Link>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-brand-secondary/40 p-2 text-gray-300 transition hover:text-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary"
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.id} to={item.href} className={linkClasses(item.id)}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 border-t border-brand-secondary/30 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`${linkClasses(item.id)} block rounded-md bg-brand-dark/80 px-4 py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
