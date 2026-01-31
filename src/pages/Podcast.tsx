import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Headphones, ExternalLink, Play, Clock, Share2, Info } from "lucide-react";
import Layout from "@/components/Layout";

const Podcast = () => {
  return (
    <Layout currentPage="podcast">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-900/50 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-cyan-900/40 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-6 shadow-lg">
            <Headphones className="h-8 w-8 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-inter mb-6 leading-tight">
            Podcasts Médicos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">con IA</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-noto leading-relaxed max-w-2xl mx-auto">
            Contenido especializado generado con inteligencia artificial de vanguardia y validado rigurosamente por médicos expertos.
          </p>
        </div>
      </section>

      {/* Podcasts Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Reum-AI Podcast */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-10 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
                <img
                  src="/reumai_logo.jpg"
                  alt="Reum-AI Logo"
                  className="h-48 w-48 object-contain drop-shadow-2xl shadow-black/50 rounded-xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none px-3 py-1">Reumatología</Badge>
                  <Badge variant="outline" className="text-slate-500 border-slate-200">Evidencia</Badge>
                  <Badge variant="outline" className="text-slate-500 border-slate-200">IA Generativa</Badge>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-2">Reum-AI</h2>
                <p className="text-slate-500 font-medium mb-6">La nueva era de la reumatología clínica</p>

                <p className="text-slate-600 mb-8 leading-relaxed">
                  Combina la evidencia científica más reciente con casos clínicos prácticos.
                  Ideal para mantenerte al día con las guías de manejo de artritis, lupus y más.
                </p>

                <div className="mt-auto space-y-4">
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">Escuchar en</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a
                      href="https://open.spotify.com/show/2Oj1c5WZ28vn276XgBEjJQ"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-white font-semibold transition-colors shadow-lg shadow-green-500/20"
                    >
                      Spotify <ExternalLink size={16} />
                    </a>
                    <a
                      href="https://podcasts.apple.com/us/channel/reum-ai/id6746176249"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors shadow-lg shadow-slate-500/20"
                    >
                      Apple <ExternalLink size={16} />
                    </a>
                    <a
                      href="https://www.audible.com/es_US/podcast/Reum-AI/B0F9D3GCBK"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F8991C] hover:bg-[#ffad3d] text-white font-semibold transition-colors shadow-lg shadow-orange-500/20"
                    >
                      Audible <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Te gusta lo que escuchas?</h2>
          <p className="text-slate-600 mb-8 text-lg">
            Ayúdanos a mantener estos podcasts gratuitos para toda la comunidad médica.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-blue-500/30 transition-all">
              Apoyar Proyecto
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Podcast;
