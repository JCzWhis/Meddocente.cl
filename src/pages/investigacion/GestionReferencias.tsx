import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookMarked, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const herramientas = [
  {
    nombre: "Zotero",
    descripcion: "Gestor de referencias gratuito con soporte para más de 9,000 estilos de citación. Incluye lector de PDF con anotaciones, sincronización en la nube y bibliotecas colaborativas grupales.",
    url: "https://www.zotero.org",
    badges: ["Gratuito"],
    favicon: "https://www.google.com/s2/favicons?domain=zotero.org&sz=128",
  },
  {
    nombre: "Mendeley",
    descripcion: "Gestor de referencias de Elsevier para almacenar, organizar, anotar y citar. Incluye Mendeley Notebook para consolidar anotaciones y funciones colaborativas entre equipos.",
    url: "https://www.mendeley.com",
    badges: ["Freemium"],
    favicon: "https://www.google.com/s2/favicons?domain=mendeley.com&sz=128",
  },
  {
    nombre: "EndNote",
    descripcion: "Gestor de referencias premium con más de 2,000 estilos de citación. Se integra directamente con Microsoft Word (Cite While You Write) y Apple Pages para citar mientras escribes.",
    url: "https://endnote.com",
    badges: ["Premium"],
    favicon: "https://www.google.com/s2/favicons?domain=endnote.com&sz=128",
  },
];

const GestionReferencias = () => {
  return (
    <Layout currentPage="investigacion">
      <section className="bg-brand-light pt-32 pb-16 min-h-[85vh]">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-brand-accent mb-8">
            <Link to="/investigacion" className="hover:text-brand-primary transition-colors">Investigación</Link>
            <span>/</span>
            <span className="text-brand-dark font-medium">Gestión de Referencias</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600">
              <BookMarked size={28} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-inter text-brand-dark">
                Gestión de Referencias
              </h1>
            </div>
          </div>
          <p className="text-lg text-brand-accent font-noto mb-12 max-w-2xl leading-relaxed">
            Gestores bibliográficos para organizar, anotar y citar referencias en tus publicaciones científicas.
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
                        <span key={badge} className={`px-2 py-0.5 rounded-full text-xs font-bold ${badge === "IA" ? "bg-violet-100 text-violet-700" : badge === "Gratuito" ? "bg-emerald-100 text-emerald-700" : badge === "Premium" ? "bg-slate-700 text-white" : "bg-amber-100 text-amber-700"}`}>
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

export default GestionReferencias;
