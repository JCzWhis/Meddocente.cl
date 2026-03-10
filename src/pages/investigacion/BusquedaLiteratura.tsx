import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const herramientas = [
  {
    nombre: "Elicit",
    descripcion: "Asistente de investigación con IA que encuentra, resume y extrae datos de papers académicos con 94-99% de precisión. Cubre 138 millones de papers y es utilizado por más de 2 millones de investigadores.",
    url: "https://elicit.com",
    badges: ["IA", "Freemium"],
    favicon: "https://www.google.com/s2/favicons?domain=elicit.com&sz=128",
  },
  {
    nombre: "Consensus",
    descripcion: "Buscador académico con IA que analiza más de 200 millones de papers revisados por pares. Genera resúmenes instantáneos con citaciones y ofrece un modo Deep Search para revisiones de literatura completas.",
    url: "https://consensus.app",
    badges: ["IA", "Freemium"],
    favicon: "https://www.google.com/s2/favicons?domain=consensus.app&sz=128",
  },
  {
    nombre: "Semantic Scholar",
    descripcion: "Buscador académico gratuito del Allen Institute for AI con más de 200 millones de papers indexados. Usa machine learning para resúmenes TLDR y recomendaciones personalizadas de investigación.",
    url: "https://www.semanticscholar.org",
    badges: ["IA", "Gratuito"],
    favicon: "https://www.google.com/s2/favicons?domain=semanticscholar.org&sz=128",
  },
  {
    nombre: "ResearchRabbit",
    descripcion: "Herramienta de mapeo de citaciones que usa IA para descubrir y visualizar conexiones entre papers. Crea mapas interactivos, rastrea autores y exporta a Zotero/Mendeley.",
    url: "https://www.researchrabbit.ai",
    badges: ["IA", "Gratuito"],
    favicon: "https://www.google.com/s2/favicons?domain=researchrabbit.ai&sz=128",
  },
];

const BusquedaLiteratura = () => {
  return (
    <Layout currentPage="investigacion">
      <section className="bg-brand-light pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-brand-accent mb-8">
            <Link to="/investigacion" className="hover:text-brand-primary transition-colors">Investigación</Link>
            <span>/</span>
            <span className="text-brand-dark font-medium">Búsqueda de Literatura</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Search size={28} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-inter text-brand-dark">
                Búsqueda y Análisis de Literatura
              </h1>
            </div>
          </div>
          <p className="text-lg text-brand-accent font-noto mb-12 max-w-2xl leading-relaxed">
            Plataformas con inteligencia artificial para descubrir, resumir y conectar evidencia científica de manera eficiente.
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

export default BusquedaLiteratura;
