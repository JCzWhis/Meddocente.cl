import { Link } from "react-router-dom";

interface HeaderProps {
  currentPage?: string;
}

const Header = ({ currentPage = "" }: HeaderProps) => {
  return (
    <header className="bg-brand-dark/95 backdrop-blur-sm shadow-lg border-b border-brand-secondary/30 sticky top-0 z-50 relative">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/38854455-7244-4c3d-bd26-1121232241ef.png" alt="MedDocente Logo" className="h-8 w-8" />
            <span className="text-2xl font-inter font-bold text-cyan-400">MedDocente-IA</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`font-noto transition-colors ${
                currentPage === "inicio"
                  ? "text-brand-secondary font-semibold"
                  : "text-gray-300 hover:text-brand-secondary"
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/podcast"
              className={`font-noto transition-colors ${
                currentPage === "podcast"
                  ? "text-brand-secondary font-semibold"
                  : "text-gray-300 hover:text-brand-secondary"
              }`}
            >
              Podcast
            </Link>
            <Link
              to="/recursos"
              className={`font-noto transition-colors ${
                currentPage === "recursos"
                  ? "text-brand-secondary font-semibold"
                  : "text-gray-300 hover:text-brand-secondary"
              }`}
            >
              Recursos
            </Link>
            <Link
              to="/apoyanos"
              className={`font-noto transition-colors ${
                currentPage === "apoyanos"
                  ? "text-brand-secondary font-semibold"
                  : "text-gray-300 hover:text-brand-secondary"
              }`}
            >
              Apóyanos
            </Link>
            <Link
              to="/contacto"
              className={`font-noto transition-colors ${
                currentPage === "contacto"
                  ? "text-brand-secondary font-semibold"
                  : "text-gray-300 hover:text-brand-secondary"
              }`}
            >
              Contacto
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
