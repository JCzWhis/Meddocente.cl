import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const herramientas = [
  {
    nombre: "ChatGPT",
    descripcion: "Asistente de inteligencia artificial de OpenAI. Útil para análisis de datos, generación de hipótesis, revisión de literatura y apoyo en la redacción de manuscritos médicos.",
    url: "https://chat.openai.com",
    badges: ["IA", "Freemium"],
    favicon: "https://cdn.oaistatic.com/assets/apple-touch-icon-mz9nytnj.webp",
  },
  {
    nombre: "Claude",
    descripcion: "IA de Anthropic con capacidad extendida para documentos largos. Excelente para análisis de investigación, revisión de papers extensos y razonamiento clínico complejo.",
    url: "https://claude.ai",
    badges: ["IA", "Freemium"],
    favicon: "https://claude.ai/images/claude_app_icon.png",
  },
  {
    nombre: "Google Gemini",
    descripcion: "Modelo multimodal de Google que permite analizar texto, imágenes y datos simultáneamente. Integrado con el ecosistema Google para búsqueda de literatura.",
    url: "https://gemini.google.com",
    badges: ["IA", "Freemium"],
    favicon: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690b6.svg",
  },
  {
    nombre: "Perplexity",
    descripcion: "Motor de búsqueda potenciado por IA con sistema de citaciones integrado. Su modo Deep Research genera informes completos con fuentes verificables.",
    url: "https://www.perplexity.ai",
    badges: ["IA", "Freemium"],
    favicon: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128",
  },
];

const IAGenerativa = () => {
  return (
    <Layout currentPage="investigacion">
      <section className="bg-brand-light pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-brand-accent mb-8">
            <Link to="/investigacion" className="hover:text-brand-primary transition-colors">Investigación</Link>
            <span>/</span>
            <span className="text-brand-dark font-medium">IA Generativa</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600">
              <Brain size={28} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-inter text-brand-dark">
                IA Generativa (LLMs)
              </h1>
            </div>
          </div>
          <p className="text-lg text-brand-accent font-noto mb-12 max-w-2xl leading-relaxed">
            Los principales modelos de lenguaje para análisis clínico, generación de hipótesis y apoyo en investigación médica.
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

export default IAGenerativa;
