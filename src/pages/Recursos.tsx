import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Lock, ArrowRight, BookOpen, Clock, Download, Search, Brain, PenTool, Database, BookMarked, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const categorias = [
  {
    titulo: "IA Generativa (LLMs)",
    descripcion: "Los principales modelos de lenguaje para análisis, consultas clínicas y apoyo en investigación médica.",
    icono: Brain,
    href: "/investigacion/ia-generativa",
    cantidad: 4,
    tipo: "IA",
    bgIcon: "bg-violet-100 text-violet-600",
  },
  {
    titulo: "Escritura Académica con IA",
    descripcion: "Herramientas de IA para redacción científica, citaciones automáticas y análisis de papers.",
    icono: PenTool,
    href: "/investigacion/escritura-academica",
    cantidad: 2,
    tipo: "IA",
    bgIcon: "bg-blue-100 text-blue-600",
  },
  {
    titulo: "Búsqueda y Análisis de Literatura",
    descripcion: "Plataformas con IA para descubrir, resumir y conectar evidencia científica.",
    icono: Search,
    href: "/investigacion/busqueda-literatura",
    cantidad: 4,
    tipo: "IA",
    bgIcon: "bg-emerald-100 text-emerald-600",
  },
  {
    titulo: "Bases de Datos Médicas",
    descripcion: "Repositorios fundamentales de literatura biomédica y evidencia clínica de acceso libre.",
    icono: Database,
    href: "/investigacion/bases-de-datos",
    cantidad: 3,
    tipo: "Clásico",
    bgIcon: "bg-amber-100 text-amber-600",
  },
  {
    titulo: "Gestión de Referencias",
    descripcion: "Gestores bibliográficos para organizar, anotar y citar referencias en tus publicaciones.",
    icono: BookMarked,
    href: "/investigacion/gestion-referencias",
    cantidad: 3,
    tipo: "Clásico",
    bgIcon: "bg-rose-100 text-rose-600",
  },
  {
    titulo: "Revisiones Sistemáticas",
    descripcion: "Herramientas y guías para revisiones sistemáticas y meta-análisis.",
    icono: ClipboardList,
    href: "/investigacion/revisiones-sistematicas",
    cantidad: 3,
    tipo: "Clásico",
    bgIcon: "bg-sky-100 text-sky-600",
  },
];

const Recursos = () => {
  return (
    <Layout currentPage="recursos">
      {/* Hero Section */}
      <section className="bg-brand-light pt-32 pb-8">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-primary">
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-inter text-brand-dark mb-6">
            Recursos Clínicos
          </h1>
        </div>
      </section>

      {/* Investigación Médica Grid */}
      <section className="bg-brand-light pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-100 w-10 h-10 rounded-xl flex items-center justify-center text-emerald-600">
              <Search size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-inter text-brand-dark">
              Investigación Médica
            </h2>
          </div>
          <p className="text-brand-accent font-noto mb-8 max-w-2xl leading-relaxed">
            Herramientas de IA y recursos clásicos para potenciar tu investigación clínica.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categorias.map((cat) => (
              <Link key={cat.href} to={cat.href} className="group">
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full bg-white">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${cat.bgIcon}`}>
                        <cat.icono size={24} />
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${cat.tipo === "IA" ? "bg-violet-100 text-violet-700" : "bg-slate-100 text-slate-600"}`}>
                          {cat.tipo}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-secondary">
                          {cat.cantidad} tools
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                      {cat.titulo}
                    </h3>
                    <p className="text-brand-accent text-sm leading-relaxed flex-1">
                      {cat.descripcion}
                    </p>

                    <div className="mt-4 flex items-center text-sm font-semibold text-brand-secondary">
                      Ver herramientas
                      <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center ml-2 group-hover:bg-brand-primary/10 transition-colors">
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Software y Herramientas Clínicas */}
      <section className="bg-brand-light py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-brand-primary/10 w-10 h-10 rounded-xl flex items-center justify-center text-brand-primary">
              <BookOpen size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-inter text-brand-dark">
              Software Médico
            </h2>
          </div>

          <div className="text-left">
            {/* ReumaIndex Full Width Card */}
            <Card className="border-none shadow-2xl bg-white overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                {/* Visual Side */}
                <div className="lg:w-1/2 bg-gradient-to-br from-brand-secondary to-brand-tertiary relative overflow-hidden min-h-[300px] flex items-center justify-center p-8 md:p-10">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                  <div className="text-center relative z-10 text-white animate-in zoom-in duration-700 w-full px-2">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-2 drop-shadow-lg leading-tight">Reuma<span className="font-light">Index</span></div>
                    <p className="text-brand-light text-lg font-medium tracking-wide bg-black/20 px-4 py-1 rounded-full inline-block backdrop-blur-sm">
                      Herramientas Clínicas
                    </p>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-6 left-6 bg-white text-brand-secondary text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Clock size={12} className="text-orange-500 animate-pulse" />
                    PRÓXIMAMENTE
                  </div>
                </div>

                {/* Content Side */}
                <CardContent className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                    ReumaIndex App
                  </h3>
                  <p className="text-brand-accent text-lg mb-8 leading-relaxed">
                    La aplicación móvil definitiva para el reumatólogo moderno. Accede rápidamente a calculadoras validadas de
                    <span className="font-semibold text-brand-secondary"> DAS28, SDAI, CDAI</span> y criterios de clasificación <span className="font-semibold text-brand-secondary">ACR/EULAR</span> directamente desde tu bolsillo.
                    <br /><span className="text-sm text-brand-accent/70 mt-2 block">Más información en <span className="font-medium text-brand-primary">Reumaindex.com</span></span>
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark text-sm">Criterios Completos</h4>
                        <p className="text-xs text-brand-accent/70 mt-1">Lupus, Artritis, Vasculitis y más.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary shrink-0">
                        <Lock size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark text-sm">100% Offline</h4>
                        <p className="text-xs text-brand-accent/70 mt-1">Tu práctica no se detiene.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row items-center gap-4 mt-auto border-t border-brand-accent/10 pt-8">
                    <span className="text-brand-accent/60 text-sm font-semibold uppercase tracking-wider mr-auto xl:mr-4">Disponible pronto en:</span>
                    <div className="flex flex-wrap gap-4 opacity-50 grayscale cursor-not-allowed">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* CapiChile Card */}
          <div className="text-left mt-8">
            <Link to="/capichile" className="group block">
              <Card className="border-none shadow-2xl bg-white overflow-hidden group">
                <div className="flex flex-col lg:flex-row">
                  {/* Visual Side */}
                  <div className="lg:w-1/2 bg-gradient-to-br from-red-700 to-red-500 relative overflow-hidden min-h-[300px] flex items-center justify-center p-8 md:p-10">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <img
                      src="/Logo.png"
                      alt="CapiChile"
                      className="relative z-10 w-48 h-48 object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Side */}
                  <CardContent className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-bold rounded-full">SOCHIRE</span>
                      <span className="text-brand-accent/70 text-sm font-medium">Grupo de Trabajo</span>
                    </div>
                    <h3 className="text-3xl font-bold text-brand-dark mb-4 group-hover:text-red-600 transition-colors">
                      CapiChile
                    </h3>
                    <p className="text-brand-accent text-lg mb-8 leading-relaxed">
                      Herramienta de escritorio del Grupo de Trabajo de Capilaroscopía de la Sociedad Chilena de Reumatología. Disponible para
                      <span className="font-semibold text-brand-secondary"> Windows</span> y <span className="font-semibold text-brand-secondary">macOS</span>.
                    </p>
                    <div className="mt-auto flex items-center text-base font-semibold text-red-600">
                      <Download size={16} className="mr-2" />
                      Descargar software <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center ml-3"><ArrowRight size={16} /></div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Recursos;
