import { Link } from "react-router-dom";
import { Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo_small.png" alt="MedDocente Logo" className="h-8 w-8 object-contain" />
              <span className="text-xl font-bold text-slate-900">
                MedDocente<span className="text-cyan-600">.cl</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Educación médica de vanguardia potenciada por inteligencia artificial y validada por especialistas clínicos.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/meddocenteia"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-gradient-to-tr hover:from-purple-500 hover:to-orange-500 hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contacto@drcruz.cl"
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Explorar</h4>
            <ul className="space-y-3">
              <li><Link to="/podcast" className="text-slate-500 hover:text-cyan-600 transition-colors text-sm">Podcasts</Link></li>
              <li><Link to="/recursos" className="text-slate-500 hover:text-cyan-600 transition-colors text-sm">Recursos Médicos</Link></li>
              <li><Link to="/apoyanos" className="text-slate-500 hover:text-cyan-600 transition-colors text-sm">Apoyar el Proyecto</Link></li>
            </ul>
          </div>

          {/* Legal/Info Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Información</h4>
            <ul className="space-y-3">
              <li><Link to="/contacto" className="text-slate-500 hover:text-cyan-600 transition-colors text-sm">Contacto</Link></li>
              <li><Link to="/aviso-legal" className="text-slate-500 hover:text-cyan-600 transition-colors text-sm">Aviso Legal</Link></li>
              <li><Link to="/aviso-legal" className="text-slate-500 hover:text-cyan-600 transition-colors text-sm">Privacidad</Link></li>
            </ul>
          </div>

          {/* Badge Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Tecnología</h4>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500 mb-2">Powered by</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-semibold text-slate-600">Google Vertex AI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} MedDocente.cl. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <span>Hecho en Chile 🇨🇱</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
