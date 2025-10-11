import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark/90 text-white py-12 border-t border-brand-secondary relative z-10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/lovable-uploads/38854455-7244-4c3d-bd26-1121232241ef.png" alt="MedDocente Logo" className="h-6 w-6" />
              <span className="text-xl font-inter font-bold">meddocente.cl</span>
            </div>
            <p className="text-gray-400 font-noto mb-4">Educación médica potenciada por inteligencia artificial, validada por médicos.</p>
            <a
              href="https://www.instagram.com/meddocenteia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-secondary transition-colors font-noto"
            >
              <Instagram className="h-5 w-5" />
              <span>@meddocenteia</span>
            </a>
          </div>
          <div>
            <h3 className="text-lg font-inter font-bold mb-4">Enlaces</h3>
            <div className="space-y-2">
              <Link to="/podcast" className="block text-gray-400 hover:text-brand-secondary transition-colors font-noto">Podcasts</Link>
              <Link to="/recursos" className="block text-gray-400 hover:text-brand-secondary transition-colors font-noto">Recursos</Link>
              <Link to="/contacto" className="block text-gray-400 hover:text-brand-secondary transition-colors font-noto">Contacto</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-inter font-bold mb-4">Tecnología</h3>
            <p className="text-gray-400 text-sm mb-2 font-noto">IA generativa con Vertex AI de Google Cloud.</p>
            <p className="text-gray-400 text-sm font-noto">Desarrollado con Claude Code y Lovable.</p>
          </div>
        </div>
        <div className="border-t border-brand-secondary mt-8 pt-8 text-center text-gray-400">
          <p className="font-noto">© 2025 meddocente.cl - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
