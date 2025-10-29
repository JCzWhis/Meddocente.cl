import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="page-background min-h-screen relative overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Header */}
      <Header />

      {/* 404 Content */}
      <div className="flex items-center justify-center relative z-10 py-20 px-4">
        <div className="text-center max-w-2xl">
          <h1 className="mb-4 text-6xl font-inter font-bold text-brand-secondary sm:text-7xl md:text-8xl">404</h1>
          <h2 className="mb-6 text-2xl font-inter font-bold text-white sm:text-3xl">Página No Encontrada</h2>
          <p className="mb-8 text-base font-noto text-gray-300 sm:text-lg">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <Link to="/">
            <Button size="lg" className="w-full bg-brand-secondary text-white hover:bg-brand-primary font-noto sm:w-auto">
              <Home className="mr-2 h-5 w-5" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFound;
