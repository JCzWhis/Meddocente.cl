import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, PenTool, Search, Database, BookMarked, ClipboardList } from "lucide-react";
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
    gradiente: "from-violet-500 to-purple-600",
    bgIcon: "bg-violet-100 text-violet-600",
  },
  {
    titulo: "Escritura Académica con IA",
    descripcion: "Herramientas de inteligencia artificial para redacción científica, citaciones automáticas y análisis de papers.",
    icono: PenTool,
    href: "/investigacion/escritura-academica",
    cantidad: 2,
    tipo: "IA",
    gradiente: "from-blue-500 to-cyan-500",
    bgIcon: "bg-blue-100 text-blue-600",
  },
  {
    titulo: "Búsqueda y Análisis de Literatura",
    descripcion: "Plataformas con IA para descubrir, resumir y conectar evidencia científica de manera eficiente.",
    icono: Search,
    href: "/investigacion/busqueda-literatura",
    cantidad: 4,
    tipo: "IA",
    gradiente: "from-emerald-500 to-teal-500",
    bgIcon: "bg-emerald-100 text-emerald-600",
  },
  {
    titulo: "Bases de Datos Médicas",
    descripcion: "Repositorios fundamentales de literatura biomédica y evidencia clínica de acceso libre.",
    icono: Database,
    href: "/investigacion/bases-de-datos",
    cantidad: 3,
    tipo: "Clásico",
    gradiente: "from-amber-500 to-orange-500",
    bgIcon: "bg-amber-100 text-amber-600",
  },
  {
    titulo: "Gestión de Referencias",
    descripcion: "Gestores bibliográficos para organizar, anotar y citar referencias en tus publicaciones.",
    icono: BookMarked,
    href: "/investigacion/gestion-referencias",
    cantidad: 3,
    tipo: "Clásico",
    gradiente: "from-rose-500 to-pink-500",
    bgIcon: "bg-rose-100 text-rose-600",
  },
  {
    titulo: "Revisiones Sistemáticas",
    descripcion: "Herramientas y guías para el desarrollo metodológico de revisiones sistemáticas y meta-análisis.",
    icono: ClipboardList,
    href: "/investigacion/revisiones-sistematicas",
    cantidad: 3,
    tipo: "Clásico",
    gradiente: "from-sky-500 to-indigo-500",
    bgIcon: "bg-sky-100 text-sky-600",
  },
];

const Investigacion = () => {
  return (
    <Layout currentPage="recursos">
      {/* Hero Section */}
      <section className="bg-brand-light pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-0 w-1/3 h-2/3 bg-brand-tertiary/10 rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -z-0 w-1/4 h-1/2 bg-brand-primary/10 rounded-tr-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-primary">
            <Search size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-inter text-brand-dark mb-4">
            Recursos para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">
              Investigación Médica
            </span>
          </h1>
          <p className="text-lg text-brand-accent font-noto max-w-2xl mx-auto leading-relaxed">
            Herramientas de IA y recursos clásicos para potenciar tu investigación clínica. Desde LLMs hasta gestores de referencias y plataformas de revisión sistemática.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias.map((cat) => (
              <Link key={cat.href} to={cat.href} className="group">
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full bg-brand-light">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${cat.bgIcon}`}>
                        <cat.icono size={28} />
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${cat.tipo === "IA" ? "bg-violet-100 text-violet-700" : "bg-slate-100 text-slate-600"}`}>
                          {cat.tipo}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-secondary">
                          {cat.cantidad} tools
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                      {cat.titulo}
                    </h3>
                    <p className="text-brand-accent text-sm leading-relaxed flex-1">
                      {cat.descripcion}
                    </p>

                    <div className="mt-6 flex items-center text-sm font-semibold text-brand-secondary">
                      Ver herramientas
                      <div className="w-7 h-7 rounded-full bg-brand-light flex items-center justify-center ml-2 group-hover:bg-brand-primary/10 transition-colors">
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investigacion;
