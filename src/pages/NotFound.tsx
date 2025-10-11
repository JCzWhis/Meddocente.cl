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
    <div className="min-h-screen relative overflow-hidden" style={{
      backgroundImage: `url('/lovable-uploads/10d04f23-d0a0-46cb-a28d-c386a6598d02.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Header */}
      <Header />

      {/* 404 Content */}
      <div className="flex items-center justify-center relative z-10 py-20 px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-9xl font-inter font-bold text-brand-secondary mb-4">404</h1>
          <h2 className="text-3xl font-inter font-bold text-white mb-6">Página No Encontrada</h2>
          <p className="text-xl font-noto text-gray-300 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-brand-secondary hover:bg-brand-primary text-white font-noto">
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
