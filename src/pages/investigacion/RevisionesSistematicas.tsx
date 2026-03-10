import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardList, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const herramientas = [
  {
    nombre: "Covidence",
    descripcion: "Plataforma online diseñada específicamente para revisiones sistemáticas y meta-análisis. Permite screening de abstracts, revisión de texto completo, extracción de datos y generación automática de diagramas PRISMA.",
    url: "https://www.covidence.org",
    badges: ["Freemium"],
    favicon: "https://www.google.com/s2/favicons?domain=covidence.org&sz=128",
  },
  {
    nombre: "PRISMA",
    descripcion: "Guía de reporte con checklist de 27 ítems para revisiones sistemáticas y meta-análisis. La versión 2020 actualizada refleja avances en identificación, selección, evaluación y síntesis de literatura.",
    url: "https://www.prisma-statement.org",
    badges: ["Gratuito"],
    favicon: "https://www.google.com/s2/favicons?domain=prisma-statement.org&sz=128",
  },
  {
    nombre: "RevMan",
    descripcion: "Herramienta web de Cochrane para desarrollar y mantener revisiones sistemáticas. Facilita el pooling estadístico de datos de múltiples estudios con modelos de efectos fijos y aleatorios.",
    url: "https://revman.cochrane.org",
    badges: ["Gratuito"],
    favicon: "https://www.google.com/s2/favicons?domain=revman.cochrane.org&sz=128",
  },
];

const RevisionesSistematicas = () => {
  return (
    <Layout currentPage="investigacion">
      <section className="bg-brand-light pt-32 pb-16 min-h-[85vh]">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-brand-accent mb-8">
            <Link to="/investigacion" className="hover:text-brand-primary transition-colors">Investigación</Link>
            <span>/</span>
            <span className="text-brand-dark font-medium">Revisiones Sistemáticas</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600">
              <ClipboardList size={28} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-inter text-brand-dark">
                Revisiones Sistemáticas
              </h1>
            </div>
          </div>
          <p className="text-lg text-brand-accent font-noto mb-12 max-w-2xl leading-relaxed">
            Herramientas y guías para el desarrollo metodológico de revisiones sistemáticas y meta-análisis.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {herramientas.map((tool) => (
              <Card key={tool.nombre} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={tool.favicon} alt={tool.nombre} className="w-10 h-10 rounded-lg object-contain shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-brand-dark">{tool.nombre}</h3>
                    </div>
                    <div className="flex gap-1.5 shrink-0">
                      {tool.badges.map((badge) => (
                        <span key={badge} className={`px-2 py-0.5 rounded-full text-xs font-bold ${badge === "IA" ? "bg-violet-100 text-violet-700" : badge === "Gratuito" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-brand-accent text-sm leading-relaxed mb-6">
                    {tool.descripcion}
                  </p>
                  <a href={tool.url} target="_blank" rel="noreferrer">
                    <Button variant="outline" className="w-full rounded-xl hover:bg-brand-primary/5 hover:border-brand-primary/30 hover:text-brand-secondary transition-all">
                      <ExternalLink size={16} className="mr-2" />
                      Visitar {tool.nombre}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/investigacion">
              <Button variant="ghost" className="text-brand-secondary hover:text-brand-secondary hover:bg-brand-primary/10 font-semibold">
                <ArrowLeft size={16} className="mr-2" />
                Volver a categorías
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RevisionesSistematicas;
