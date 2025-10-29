import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Headphones, ExternalLink, Play, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Podcast = () => {
  return (
    <div className="page-background min-h-screen relative overflow-hidden">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Header */}
      <Header currentPage="podcast" />

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-14">
        <div className="container mx-auto text-center max-w-4xl">
          <Headphones className="mx-auto mb-6 h-12 w-12 text-brand-secondary sm:h-16 sm:w-16" />
          <h1 className="mb-6 text-3xl font-inter font-bold text-white sm:text-4xl">
            Podcasts Médicos con IA
          </h1>
          <p className="mb-8 text-base text-gray-300 font-noto sm:text-lg md:text-xl">
            Contenido especializado generado con inteligencia artificial y validado por médicos expertos. 
            Aprende mientras conduces, haces ejercicio o en tu tiempo libre.
          </p>
        </div>
      </section>

      {/* Podcasts Grid */}
      <section className="relative z-10 px-4 py-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Reum-AI Podcast */}
              <Card className="bg-brand-dark/80 border-brand-secondary/30 shadow-xl backdrop-blur-sm hover:bg-brand-dark/90 transition-all">
                <CardHeader>
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-8 rounded-lg mb-6 relative overflow-hidden">
                    <div className="flex items-center justify-center mb-6">
                      <img src="/lovable-uploads/3cd49f6c-d886-470b-a86f-acc3a4926fef.png" alt="Reum-AI Logo" className="h-32 w-32 object-contain drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-3xl text-white font-inter font-bold text-center">Reum-AI</CardTitle>
                    <CardDescription className="text-blue-100 text-lg font-noto text-center">
                      Reumatología, evidencia y clínica
                    </CardDescription>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary" className="bg-brand-secondary/20 text-brand-secondary font-noto">Reumatología</Badge>
                    <Badge variant="secondary" className="bg-brand-secondary/20 text-brand-secondary font-noto">Evidencia</Badge>
                    <Badge variant="secondary" className="bg-brand-secondary/20 text-brand-secondary font-noto">IA</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 font-noto mb-6">
                    Podcast especializado en reumatología que combina la evidencia científica más reciente
                    con casos clínicos prácticos. Generado con IA y revisado por reumatólogos expertos.
                  </p>

                  <div className="space-y-3">
                    <h3 className="font-inter font-bold text-white text-center mb-4">Escucha en:</h3>

                    <a
                      href="https://open.spotify.com/show/2Oj1c5WZ28vn276XgBEjJQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-all hover:scale-105 shadow-lg"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <ExternalLink className="h-5 w-5" />
                        <span className="font-inter font-bold text-lg">Spotify</span>
                      </div>
                    </a>

                    <a
                      href="https://podcasts.apple.com/us/channel/reum-ai/id6746176249"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg transition-all hover:scale-105 shadow-lg"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <ExternalLink className="h-5 w-5" />
                        <span className="font-inter font-bold text-lg">Apple Podcasts</span>
                      </div>
                    </a>

                    <a
                      href="https://www.audible.com/es_US/podcast/Reum-AI/B0F9D3GCBK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg transition-all hover:scale-105 shadow-lg"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <ExternalLink className="h-5 w-5" />
                        <span className="font-inter font-bold text-lg">Audible</span>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

            {/* InternistA Podcast */}
              <Card className="bg-brand-dark/80 border-brand-primary/30 shadow-xl backdrop-blur-sm hover:bg-brand-dark/90 transition-all">
                <CardHeader>
                  <div className="bg-gradient-to-r from-brand-secondary to-brand-primary text-white p-8 rounded-lg mb-6">
                    <div className="flex flex-col items-center gap-4 mb-4">
                      <img src="/lovable-uploads/92e4789d-520b-43ec-9e90-07c3559516e3.png" alt="InternistA Logo" className="h-28 w-auto object-contain drop-shadow-lg" />
                      <div className="text-center">
                        <CardTitle className="text-3xl text-white font-inter font-bold">InternistA</CardTitle>
                        <CardDescription className="text-brand-light text-lg font-noto">
                          Medicina interna práctica
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary" className="bg-brand-primary/20 text-brand-primary font-noto">Medicina Interna</Badge>
                    <Badge variant="secondary" className="bg-brand-primary/20 text-brand-primary font-noto">Casos Clínicos</Badge>
                    <Badge variant="secondary" className="bg-brand-primary/20 text-brand-primary font-noto">Práctica</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 font-noto mb-6">
                    Enfoque práctico de medicina interna para médicos generales y especialistas.
                    Casos reales, guías de manejo actualizadas y protocolos hospitalarios.
                  </p>

                  <div className="space-y-3">
                    <div className="bg-yellow-600/20 border border-yellow-600/40 p-3 rounded-lg mb-4">
                      <p className="text-yellow-200 font-noto text-sm text-center">
                        🚧 Podcast en construcción - Nuevos episodios próximamente
                      </p>
                    </div>

                    <h3 className="font-inter font-bold text-white text-center mb-4">Escucha en:</h3>

                    <a
                      href="https://open.spotify.com/show/5J0SZhTLisK6NFV2X8tpLI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-all hover:scale-105 shadow-lg"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <ExternalLink className="h-5 w-5" />
                        <span className="font-inter font-bold text-lg">Spotify</span>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 bg-brand-dark/70 py-14 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-2xl font-inter font-bold text-white sm:text-3xl">
            ¿Quieres más contenido como este?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-base font-noto text-gray-300 sm:text-lg md:text-xl">
            Suscríbete a nuestros podcasts y mantente actualizado con los últimos avances 
            en medicina basada en evidencia.
          </p>
          <div className="flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
            <Link to="/apoyanos">
              <Button size="lg" className="w-full bg-brand-secondary hover:bg-brand-primary font-noto sm:w-auto">
                Apoyar Proyecto
              </Button>
            </Link>
            <Link to="/recursos">
              <Button variant="outline" size="lg" className="w-full border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10 font-noto sm:w-auto">
                Ver Recursos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Podcast;
